import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="relative m-auto px-[8%]  h-[100vh] w-full flex-col">
      <div className="flex pt-[15%]">
        <div>
          <div>
            <div className="w-[1000px]">
              <h4 className="font-bold leading-[55px]">
                Mastery Meets Merit – Certifying{" "}
                <span className="text-primary"> Top-Tier Mentors</span> at Colegio de San Gabriel
                Arcangel
              </h4>
            </div>
            <div className="pt-5">
              <span className="text-primary tracking-wider">
                Push Boundaries. Prove Excellence. Earn Your Certification.
              </span>
            </div>
            <div>
              <div className="flex space-x-5 mt-10">
                <Button>Learn More</Button>
                <Button variant="outline">Meet The Team</Button>
              </div>
            </div>
          </div>
        </div>

        <div>{/* <div className="bg-primary w-[600px] h-[800px] blur-[350px]"></div> */}</div>
      </div>
      <h3 className="absolute left-1/2 transform -translate-x-1/2 bottom-5 bg-primary mb-5 text-white font-medium  w-[80%] rounded-md p-10 flex justify-center">
        Push Boundaries. Prove Excellence. Earn Your Certification.
      </h3>
    </div>
  );
};

export default Home;
