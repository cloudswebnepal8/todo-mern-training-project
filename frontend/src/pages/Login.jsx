// import { useState } from "react";
// import API from "../api";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// export default function Login() {
//     const [form, setForm] = useState({});
//     const nav = useNavigate();
//     const login = async () => {
//         const res = await API.post("/auth/login", form);
//         localStorage.setItem("token", res.data.token);
//         toast.success("Login Successful");

//         nav("/todo");
//     };
//     return (

//         <div className="min-h-screen flex items-center justify-center bg-gray-100">

//             <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
//                 <h1 className="text-3xl font-bold text-center mb-6">
//                     Login
//                 </h1>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     onChange={e => setForm({ ...form, email: e.target.value })}
//                 />

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     onChange={e => setForm({ ...form, password: e.target.value })}
//                 />

//                 <button
//                     onClick={login}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
//                 >
//                     Login
//                 </button>

//                 <p className="p-2 text-center">Already have an account ?
//                     <a className="pl-1 hover:underline" href="/signup">Signup</a>
//                 </p>

//             </div>

//         </div>

//     );

// }


import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {

    const nav = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [otp, setOtp] = useState("");

    const [showOtp, setShowOtp] = useState(false);

    // Step 1 - Send OTP
    const sendOtp = async () => {

        try {

            const res = await API.post("/auth/send-otp", form);

            toast.success(res.data.message);

            setShowOtp(true);

        } catch (err) {

            toast.error(err.response.data.message);

        }

    };

    // Step 2 - Verify OTP
    const verifyOtp = async () => {

        try {

            const res = await API.post("/auth/verify-otp", {

                email: form.email,
                otp

            });

            localStorage.setItem("token", res.data.token);

            toast.success("Login Successful");

            nav("/todo");

        } catch (err) {

            toast.error(err.response.data.message);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">

                <h1 className="text-3xl font-bold text-center mb-6">

                    Login

                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded mb-4"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded mb-4"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                {!showOtp ? (

                    <button
                        onClick={sendOtp}
                        className="w-full bg-blue-600 text-white p-3 rounded"
                    >
                        Send OTP
                    </button>

                ) : (

                    <>

                        <input
                            placeholder="Enter OTP"
                            className="w-full border p-3 rounded mt-4"
                            onChange={(e) => setOtp(e.target.value)}
                        />

                        <button
                            onClick={verifyOtp}
                            className="w-full bg-green-600 text-white p-3 rounded mt-4"
                        >
                            Verify OTP
                        </button>

                    </>

                )}

                <p className="text-center mt-5">

                    Don't have an account?

                    <a
                        href="/signup"
                        className="text-blue-600 ml-1 hover:underline"
                    >
                        Signup
                    </a>

                </p>

            </div>

        </div>

    );

}