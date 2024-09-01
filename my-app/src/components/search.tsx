export default function Search() {
  return (
    <div className="dashboard-search flex items-center p-[12px_20px] rounded-full border border-taskia-background-grey w-[400px] h-12 focus-within:ring-2 focus-within:ring-taskia-purple">
      <input
        type="text"
        className="font-semibold placeholder:text-taskia-grey placeholder:font-normal focus:outline-none w-full"
        placeholder="Search by report name..."
        name="name"
      />
      <button className="ml-[10px] w-6 h-6 flex items-center justify-center">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
}
