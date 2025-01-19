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
import { IoBook } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
// import { FaUsers } from "react-icons/fa";
// import { FaBuildingColumns } from "react-icons/fa6";

const SideBar = () => {
  const sidebarItems = [
    {
      title: "Courses",
      icon: <IoBook />,
      url: "dean/courses",
    },
    {
      title: "Assessments",
      icon: <IoIosPaper />,
      url: "dean/assessments",
    },

    // {
    //   title: "Users",
    //   icon: <FaUsers />,
    // },
    // {
    //   title: "Departments",
    //   icon: <FaBuildingColumns />,
    // },
  ];

  return (
    <Sidebar className="border-none bg-white p-2">
      <SidebarHeader className="bg-white p-5">
        <img src={logo} alt="gaps-logo" className="w-[60%]" />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup className="pt-10">
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem className="py-1" key={item.title}>
                  <SidebarMenuButton className="hover:text-primary" asChild>
                    <NavLink
                      key={item.url}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 rounded-lg transition-all ${
                          isActive
                            ? "text-primary bg-secondary-foreground"
                            : "text-gray-600 hover:text-primary"
                        }`
                      }
                      to={item.url}
                    >
                      {item.icon}
                      <span className="ml-2 font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
                <DropdownMenuItem>
                  <Link to="dean/profile">Profile</Link>
                </DropdownMenuItem>
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
