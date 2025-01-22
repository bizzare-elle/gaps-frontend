import Headings from "@/components/dean/Headings";
import CardContainer from "@/components/dean/CardContainer";
import { Button } from "@/components/ui/button";

const Assessments = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Headings
        title="Assessments"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <div className="pt-10 py-5">
        <CardContainer />
      </div>
      <div className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Assessments;
