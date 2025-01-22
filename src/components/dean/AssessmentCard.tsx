import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../ui/card";

interface Props {
  title: string;
  description: string;
  objective: string;
}
const AssessmentCard = ({ title, description, objective }: Props) => {
  return (
    <Card className="bg-white shadow-md border-none transition-transform duration-300  transform hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-[12px]">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-[15px]">{objective}</span>
      </CardContent>
    </Card>
  );
};

export default AssessmentCard;
