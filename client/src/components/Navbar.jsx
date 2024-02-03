import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar">
            <h1>CRUD To Do List</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/new">CreateTaskLink</Link>
                    </li>
                    <li>
                        <Link to="/tasks">ObteniendoTareas</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}