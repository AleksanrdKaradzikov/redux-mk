import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="flex flex-col items-start justify-center w-[20%] bg-[#2563eb]">
      <nav className="p-4 w-full flex flex-col gap-4">
        <Link
          to="/users"
          className="p-4 block bg-[#60a5fa] text-stone-50 rounded-md text-lg font-bold cursor-pointer"
        >
          Users
        </Link>
        <Link
          to="/answers"
          className="p-4 block bg-[#60a5fa] text-stone-50 rounded-md text-lg font-bold cursor-pointer"
        >
          Users
        </Link>
      </nav>
    </aside>
  );
};
