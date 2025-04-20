import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NAVBAR } from "../utils/Data";

function Navbar() {
  const { items } = NAVBAR;
  const { logout, isAuthenticated, user } = useAuth0();

  const avatarUrl =
    user?.picture && user.picture.trim() !== ""
      ? user.picture
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
          user?.name || "U"
        )}&background=22c55e&color=ffffff`;

  return (
    <header className="bg-black shadow-md backdrop-blur-sm w-full">
      <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-20 py-3 sm:py-4 text-white">
        {/* Avatar + Name */}
        {isAuthenticated && (
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
            <div className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full overflow-hidden border-2 border-white">
              <img
                src={avatarUrl}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-medium">
              Hello, {user?.name?.split(" ")[0]}
            </span>
          </div>
        )}

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center items-center text-xs sm:text-sm lg:text-lg gap-3 sm:gap-5 lg:gap-10">
          {items.map((list) => (
            <li key={list.id}>
              <NavLink
                to={list.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-white hover:text-slate-300"
                  }`
                }
              >
                {list.listName}
              </NavLink>
            </li>
          ))}

          {isAuthenticated && (
            <li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-500 hover:bg-red-600 text-xs sm:text-sm lg:text-base px-3 py-1 rounded-md transition-all"
              >
                Log Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
