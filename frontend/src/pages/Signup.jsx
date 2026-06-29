import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Signup() {
    const navigate=useNavigate()
    const [form, setForm] = useState({});
    const submit = async () => {
        try {
            const res = await API.post("/auth/signup", form);
            toast.success("Signup successful")
            navigate("/")
            // alert(res.data.message);
        } catch (err) {
            console.log(err.response.data);
        }
    };
    return (

        // <div className="p-10">

        //     <input placeholder="Name"
        //         onChange={e => setForm({ ...form, name: e.target.value })} />

        //     <input placeholder="Email"
        //         onChange={e => setForm({ ...form, email: e.target.value })} />

        //     <input type="password"
        //         placeholder="Password"
        //         onChange={e => setForm({ ...form, password: e.target.value })} />

        //     <button onClick={submit}>Signup</button>

        // </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Signup
                </h1>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />

                <button
                    onClick={submit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
                >
                    Signup
                </button>

                <p className="p-2 text-center">Already have an account ?
                    <a className="pl-1 hover:underline" href="/">Login</a>
                </p>
            </div>
        </div>
    );

}