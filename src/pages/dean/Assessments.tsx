import Headings from "@/components/dean/Headings";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/shared/SearchBar";
import AssessmentCardContainer from "@/components/dean/AssessmentCardContainer";

const Assessments = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Headings
        title="Assessments"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <div className="pt-10 py-5 flex flex-col space-y-4">
        <div className="flex right-0 justify-end">
          <SearchBar placeholder="Search Assessment" />
        </div>
        <AssessmentCardContainer />
      </div>
      <div className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Assessments;
