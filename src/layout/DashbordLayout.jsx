import Sidebar from "@/components/shared/Sidebar";
import { Outlet } from "react-router-dom";

const DashbordLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashbordLayout;
