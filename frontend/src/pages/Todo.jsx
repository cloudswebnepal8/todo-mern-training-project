import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Todo() {
    const navigate=useNavigate()

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [todos, setTodos] = useState([]);

    const [editId, setEditId] = useState("");

    const loadTodos = async () => {
        const res = await API.get("/todo");
        setTodos(res.data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const saveTodo = async () => {

        if (editId) {

            await API.put("/todo/" + editId, {
                title,
                description
            });

            setEditId("");

        } else {

            await API.post("/todo", {
                title,
                description
            });

        }

        setTitle("");
        setDescription("");

        loadTodos();
    };

    const deleteTodo = async (id) => {

        await API.delete("/todo/" + id);

        loadTodos();

    };

    const editTodo = (todo) => {

        setTitle(todo.title);

        setDescription(todo.description);

        setEditId(todo._id);

    };


    const logout = () => {

        localStorage.removeItem("token");
        toast.success("Logout successful")

        navigate("/");

    };

    return (

        <div className="max-w-5xl mx-auto p-8">

            <h1 className="text-3xl font-bold mb-5">
                Todo App
            </h1>
            <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 mb-2 rounded"
            >
                Logout
            </button>

            <input
                className="border p-2 w-full mb-3"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="border p-2 w-full mb-3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                onClick={saveTodo}
                className="bg-blue-600 text-white px-5 py-2 rounded"
            >
                {editId ? "Update" : "Add"}
            </button>

            <table className="w-full mt-8 border">

                <thead className="bg-gray-200">

                    <tr>

                        <th className="border p-2">S.N</th>

                        <th className="border p-2">Title</th>

                        <th className="border p-2">Description</th>

                        <th className="border p-2">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        todos.map((todo, index) => (

                            <tr key={todo._id}>

                                <td className="border p-2">
                                    {index + 1}
                                </td>

                                <td className="border p-2">
                                    {todo.title}
                                </td>

                                <td className="border p-2">
                                    {todo.description}
                                </td>

                                <td className="border p-2">

                                    <button
                                        onClick={() => editTodo(todo)}
                                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => deleteTodo(todo._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}