"use client";

import { LogoutAction } from "@/actions/auth";

export default function ButtonLogout() {
  const handleLogout = () => {
    LogoutAction();
  };
  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-[10px] p-[12px_16px] h-12 rounded-full border border-taskia-background-grey"
    >
      <div className="w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </div>
      <p className="font-semibold">Logout</p>
    </button>
  );
}
