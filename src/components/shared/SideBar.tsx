import gaps from "../../assets/gaps.png";
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
  useSidebar,
} from "../ui/sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { VscKebabVertical } from "react-icons/vsc";
import { IoBook } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
// import { FaUsers } from "react-icons/fa";
// import { FaBuildingColumns } from "react-icons/fa6";

const SideBar = () => {
  const { open } = useSidebar();
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
    <Sidebar
      defaultChecked={true}
      collapsible="icon"
      className={`border-none bg-white p-2 &{open ? 'p-2' : 'w-40 p-4'}`}
    >
      <SidebarHeader className="bg-white">
        <div className="flex items-center gap-x-2">
          <div>
            <img src={gaps} alt="gaps-logo" className="w-[60px]" />
          </div>
          {open && (
            <div className="flex flex-col leading-tight">
              <span className="text-primary font-semibold text-[25px]">GAPS</span>
              <span className="text-xs">Lorem ipsum, dolor </span>
            </div>
          )}
        </div>
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
            <Avatar className={`flex items-center justify-center $(open ? '' : 'w-10')`}>
              <AvatarImage src="nfgernger" alt="avatar icon" />
              <FaUser className="text-primary absolute" size={open ? 20 : 15} />
            </Avatar>
            {open && <span className="font-semibold">Dean</span>}
          </div>
          {open && (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center">
                <VscKebabVertical />

                <DropdownMenuContent side="right" className="w-48">
                  <DropdownMenuItem>
                    <Link to="dean/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuTrigger>
            </DropdownMenu>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
