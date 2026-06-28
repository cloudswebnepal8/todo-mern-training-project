import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import PublicRoute from "./ProtectedRoutes/PublicRoute";
import "./App.css"
import { ToastContainer } from "react-toastify";


export default function App() {
  return (

    <>
      <Routes>

        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />

    </>


  );
}