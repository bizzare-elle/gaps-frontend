import { SidebarProvider, SidebarInset } from "../ui/sidebar";
import SideBar from "../shared/SideBar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <SideBar />
      <SidebarInset>
        <main className="flex-1 bg-white inset-0">
          <div className="py-5 px-5 flex justify-end">
            <div className="flex items-center space-x-2">
              <div>
                <Avatar className="flex items-center justify-center bg-gray-200">
                  <AvatarImage src="nfgernger" alt="avatar icon" />
                  <FaUser className="text-primary" size={20} />
                </Avatar>
              </div>
              <div>
                <span className="font-semibold">Jane Doe</span>
              </div>
            </div>
          </div>
          <div className="h-[100%] w-full bg-secondary-foreground rounded-t-lg p-8">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default RootLayout;
