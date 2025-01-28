import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { VscKebabVertical } from "react-icons/vsc";
import AssessmentDialog from "./AssessmentDialog";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

interface Props {
  title: string;
  description: string;
  objective: string;
}

const AssessmentCard = ({ title, description, objective }: Props) => {
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
        <span className="text-[15px]">{objective}</span>
      </CardContent>
    </Card>
  );
};

export default AssessmentCard;
