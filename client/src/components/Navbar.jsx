import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar" className="flex justify-center flex-col items-center w-screen">
            <h1 className="text-4xl p-4 text-center">CRUD To Do List</h1>
            <nav>
                <ul className="flex p-2 gap-3">
                    <li>
                        <Link to="/" className="border-2 p-2 rounded-md">Home</Link>
                    </li>
                    <li>
                        <Link to="/new" className="border-2 p-2 rounded-md">Create Task</Link>
                    </li>
                    <li>
                        <Link to="/tasks" className="border-2 p-2 rounded-md">Tasks</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}