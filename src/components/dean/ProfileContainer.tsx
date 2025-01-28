import { Card } from "../ui/card";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const ProfileContainer = () => {
  return (
    <Card className="w-[90%] border-none p-5 flex flex-col space-y-4">
      <div>
        <Avatar className="w-32 h-32 items-center justify-center bg-slate-300">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs">Upload Picture</span>
      </div>
      <div>
        <div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs">Name</span>
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileContainer;
