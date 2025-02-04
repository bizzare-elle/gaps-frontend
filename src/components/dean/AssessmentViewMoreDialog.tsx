import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "../ui/dialog";
import { DropdownMenuItem } from "../ui/dropdown-menu";

interface Props {
  title: string;
  description: string;
}

const AssessmentViewMoreDialog = ({ title, description }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>View More</DropdownMenuItem>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sequi possimus eius
          natus nihil debitis dolore eveniet illo maxime aliquid obcaecati itaque nam, mollitia
          sapiente delectus, quod nostrum vero error.
        </p>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssessmentViewMoreDialog;
