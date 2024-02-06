import { Form, Formik } from 'formik';
import { useTasks } from '../components/TaskContext.jsx';
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
        <>
            <h3>{params.id ? "Update Task" : "Create task"}</h3>
            <Formik initialValues={task} enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    if(params.id) {
                        await updateTask(params.id, values);
                        navigate("/tasks");
                        console.log("update")
                    } else {
                        console.log(values);
                        await createTask(values);
                    }
                    setTask({title: "", description: ""});
                }}>
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text" name="title" placeholder='Write a title' onChange={handleChange} value={values.title} />
                        <label>Description</label>
                        <textarea name="description" placeholder='Write a description' onChange={handleChange} value={values.description}></textarea>
                        <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}