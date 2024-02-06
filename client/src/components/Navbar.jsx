import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar" className="flex justify-center flex-col items-center w-screen">
            <h1 className="text-4xl p-4">CRUD To Do List</h1>
            <nav>
                <ul className="flex p-2 gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/new" className="bg-red-300 p-2 rounded-xl">Create Task</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}