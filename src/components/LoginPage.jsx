import React from "react";

const LoginPage = ({ onClose }) => {
  return (
    <>
      <div
        className="fixed right-0 left-0 top-0 h-screen flex items-center justify-center bg-black bg-opacity-50 text-black"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Login Dashboard</h2>
          <hr />
          <form>
            <div className="flex flex-row gap-3">
              <p>Email</p>
              <input
                type="email"
                placeholder="Type Your Name"
                className="border rounded-md"
              />
            </div>

            <div className="flex flex-row gap-3">
              <p>Password</p>
              <input
                type="password"
                placeholder="Type Your Password"
                className="border rounded-md"
              />
            </div>
          </form>

          <button onClick={onClose}> Save and Close</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
