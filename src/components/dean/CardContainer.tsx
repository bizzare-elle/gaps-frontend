import AssessmentCard from "./AssessmentCard";

const CardContainer = () => {
  const assessments = [
    {
      title: "Prelim - Programming 1",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Midterm - Programming 1",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Finals - Programming 1",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Prelim - Web development",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Midterm - Web development",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Finals - Web development",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Prelim - Database management",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Midterm - Database management",
      description: "This is a description",
      objective: "This is an objective",
    },
    {
      title: "Finals - Database management",
      description: "This is a description",
      objective: "This is an objective",
    },
  ];

  return (
    <div className="flex-1 text-black">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {assessments.map((assessment) => (
          <AssessmentCard
            key={assessment.title}
            title={assessment.title}
            description={assessment.description}
            objective={assessment.objective}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
