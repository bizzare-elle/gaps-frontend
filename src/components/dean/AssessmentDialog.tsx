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

interface Props {
  title: string;
  description: string;
}

const AssessmentDialog = ({ description, title }: Props) => {
  return (
    <Dialog>
      {/* <DialogTrigger asChild>
        <Button>View More</Button>
      </DialogTrigger> */}
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sequi possimus eius
          natus nihil debitis dolore eveniet illo maxime aliquid obcaecati itaque nam, mollitia
          sapiente delectus, quod nostrum vero error.
        </p>
      </DialogContent>
      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </Dialog>
  );
};

export default AssessmentDialog;
