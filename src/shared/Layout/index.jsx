import { SideBar } from "../SideBar";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="bg-[#60a5fa] h-[60px] flex items-center px-4">
        <h2 className="font-bold text-stone-50 text-xl">Header</h2>
      </header>
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};
