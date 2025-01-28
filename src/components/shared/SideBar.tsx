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
  ];

  return (
    <Sidebar
      collapsible="icon"
      className={` border-none bg-white p-2 &{open ? 'p-2' : 'w-[400px] p-4'} `}
    >
      <SidebarHeader className="bg-white p-2">
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
                <NavLink to={item.url} key={item.title}>
                  <SidebarMenuItem className="" key={item.title}>
                    <SidebarMenuButton className="hover:text-primary inset-0">
                      {item.icon}
                      <span className="ml-2 font-medium">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </NavLink>
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
