import {
  Sidebar,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarContent,
  SidebarFooter,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { VscKebabVertical } from "react-icons/vsc";
import logo from "../../assets/icon.png";

const SideBar = () => {
  return (
    <Sidebar className="border-none bg-white p-2">
      <SidebarHeader className="bg-white p-5">
        <img src={logo} alt="gaps-logo" className="w-[60%]" />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <Avatar className="flex items-center justify-center bg-gray-200">
                <AvatarImage src="nfgernger" alt="avatar icon" />
                <FaUser className="text-primary" size={20} />
              </Avatar>
            </div>
            <div>
              <span className="font-semibold">Dean</span>
            </div>
          </div>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center">
                <VscKebabVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" className="w-48">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
