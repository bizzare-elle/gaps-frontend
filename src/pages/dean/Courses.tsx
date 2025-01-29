import CourseCardContainer from "@/components/dean/CourseCardContainer";
import Headings from "@/components/dean/Headings";
import SearchBar from "@/components/shared/SearchBar";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div>
      <Headings
        title="Courses"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <div className="pt-10 py-5 flex flex-col space-y-4">
        <div className="flex right-0 justify-end">
          <SearchBar placeholder="Search Course" />
        </div>
        <CourseCardContainer />
      </div>
      <div className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Courses;
