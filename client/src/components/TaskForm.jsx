import { Form, Formik } from 'formik';
import { useTasks } from './TaskContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TaskForm() {

    const { createTask, getTask, updateTask } = useTasks();
    const params = useParams();
    const [task, setTask] = useState({
        title: "",
        description: "",
    });
    const navigate = useNavigate();

useEffect(() => {
    console.log("hello");
    const loadTask = async () => {
        if(params.id) {
            const task = await getTask(params.id);
            setTask({title: task.title, "description"
            : task.description});
            console.log(task);
        }
    }
    loadTask();
}, []);

    return (
        <div className='flex flex-col border-slate-400 border-2 mt-5 p-4 rounded-xl m-auto w-11/12 sm:w-1/2'>
            <h3 className='text-2xl font-semibold py-4'>{params.id ? "Update Task" : "New task 📝"}</h3>
            <Formik initialValues={task} enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    if(params.id) {
                        await updateTask(params.id, values);
                        navigate("/tasks");
                        console.log("update")
                    } else {
                        console.log(values);
                        await createTask(values);
                        navigate("/tasks");
                    }
                    setTask({title: "", description: ""});
                }}>
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className='flex flex-col relative sm:min-w-64'>
                        <label className='text-xl font-semibold py-4'>Title</label>
                        <input type="text" name="title" placeholder='Write a title' onChange={handleChange} value={values.title} className='bg-slate-100 p-1 w-full'/>
                        <label className='text-xl font-semibold py-4'>Description</label>
                        <textarea name="description" placeholder='Write a description' onChange={handleChange} value={values.description} className='mb-4 bg-slate-100 p-1'></textarea>
                        <button className="bg-blue-500 text-white rounded-md px-2 py-1" type='submit' disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}