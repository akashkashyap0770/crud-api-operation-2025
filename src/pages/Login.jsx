import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, user, logout, isLoading } = useAuth0();

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/dashboard");
    }    
  }, [ isAuthenticated, navigate ]);

  if (isLoading) {
    return (
      <section className="h-screen flex justify-center items-center">
        <p className="text-xl">Loading...</p>
      </section>
    );
  }

  return (
    <section className="h-screen flex justify-center items-center text-white bg-black">
      <div className="w-96 flex flex-col p-10 border-2 border-black rounded-md text-black bg-slate-200">
        <h1 className="flex justify-center text-4xl pb-8 underline">Auth0 Login</h1>

        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="w-full text-xl p-2 rounded-sm text-white bg-blue-600"
          >
            Log In with Auth0
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4">
            {/* <p className="text-xl">Welcome, {user.name}</p> */}
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="text-xl p-2 rounded-sm text-white bg-red-600"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
