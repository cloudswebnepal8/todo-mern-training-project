import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Login() {

    const [form, setForm] = useState({});

    const nav = useNavigate();

    const login = async () => {

        const res = await API.post("/auth/login", form);

        localStorage.setItem("token", res.data.token);
        toast.success("Login Successful");

        nav("/todo");
    };

    return (

        // <div className="p-10">

        //     <input placeholder="Email"
        //         onChange={e => setForm({ ...form, email: e.target.value })} />

        //     <input type="password"
        //         placeholder="Password"
        //         onChange={e => setForm({ ...form, password: e.target.value })} />

        //     <button onClick={login}>Login</button>

        // </div>


        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />

                <button
                    onClick={login}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
                >
                    Login
                </button>

                <p className="p-2 text-center">Already have an account ?
                    <a className="pl-1 hover:underline" href="/signup">Signup</a>
                </p>

            </div>

        </div>

    );

}