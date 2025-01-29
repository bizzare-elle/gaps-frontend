import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "../ui/card";
import { VscKebabVertical } from "react-icons/vsc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

interface Props {
  title: string;
  description: string;
  department: string;
  assessments: number;
}

const CourseCard = ({ assessments, department, description, title }: Props) => {
  return (
    <Card className="bg-white shadow-md border-none transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-[12px]">{description}</CardDescription>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <VscKebabVertical size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" className="text-[12px] flex flex-col gap-2">
                <DropdownMenuItem className="hover:bg-slate-100 p-1 rounded-md">
                  View More
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-100 p-1 rounded-md">
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-100 p-1 rounded-md">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between">
          <span className="text-[12px]">Department: {department}</span>
          <span className="text-[12px]">Assessments: {assessments}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
