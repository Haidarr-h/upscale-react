import React from "react";

const LoginPage = ({ onClose }) => {
  return (
    <>
      <div
        className="fixed right-0 left-0 top-0 h-screen flex items-center justify-center bg-black bg-opacity-50 text-black"
        onClick={onClose}
      >
        <div
          className="bg-white mt-[-20%] p-6 rounded shadow-lg xl:w-[450px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-row justify-between">
            <h2 className="font-jost font-medium text-xl py-2">
              Login Dashboard
            </h2>
            <button onClick={onClose}>X</button>
          </div>

          <hr />
          <form className="login-form">
            <div>
              <p>Email</p>
              <input type="email" placeholder="Type Your Name" />
            </div>

            <div>
              <p>Password</p>
              <input type="password" placeholder="Type Your Password" />
            </div>
            <a className="text-xs hover:underline text-blue-400 cursor-pointer">Forgot password</a>
          </form>

          <hr />
          <div className="flex flex-col text-center gap-3 lg:text-left lg:flex-row justify-between mt-3">
            <p className="text-xs">
              Belum punya Akun ?{" "}
              <a className="text-blue-400 hover:underline cursor-pointer">
                Click
              </a>
            </p>
            <div className="space-x-4">
              <button className="border bg-green-600 p-1 text-white rounded-md">
                Reset Password
              </button>
              <button className="border bg-blue-300 p-1 text-white rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
