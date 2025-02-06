import { useState } from "react";
import { CiSearch, CiCalendarDate } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const mentors = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Davis" },
];

export default function AssignMentorDialog() {
  const [search, setSearch] = useState("");
  const [filteredMentors, setFilteredMentors] = useState(mentors);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setPopoverOpen(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    setFilteredMentors(
      mentors.filter((mentor) => mentor.name.toLowerCase().includes(query.toLowerCase())),
    );
  };

  const handleSelect = (mentor: { id: number; name: string }) => {
    setSearch(mentor.name);
    setSelectedMentor(mentor);
    setFilteredMentors([]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="text-primary hover:text-primary"
        >
          Assign Mentor
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <form>
          <DialogHeader>
            <DialogTitle>Assign Mentor</DialogTitle>
            <DialogDescription>Select mentor and date.</DialogDescription>
          </DialogHeader>

          <div className="pt-5 flex flex-col gap-y-5">
            <div className="relative w-full">
              <Label htmlFor="mentor">Select Mentor</Label>
              <div className="flex h-9 w-full rounded-md px-3 border border-input bg-transparent text-base shadow-sm transition-colors justify-between items-center gap-x-2 focus-within:ring-1 focus-within:ring-ring">
                <Input
                  id="mentor"
                  placeholder="Select Mentor"
                  value={search}
                  onChange={handleSearch}
                  className="text-xs w-full h-9 pl-0 ring-0 border-none shadow-none focus-visible:ring-0"
                />
                <CiSearch size={20} />
              </div>
              {search && filteredMentors.length > 0 ? (
                <Card className="absolute w-full bg-white border mt-1 rounded-md shadow-md z-10">
                  {filteredMentors.map((mentor) => (
                    <div
                      key={mentor.id}
                      onClick={() => handleSelect(mentor)}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    >
                      <span className="text-xs">{mentor.name}</span>
                    </div>
                  ))}
                </Card>
              ) : (
                search &&
                filteredMentors.length === 0 &&
                !selectedMentor && (
                  <Card className="absolute w-full bg-white border mt-1 rounded-md shadow-md z-10">
                    <div className="p-2 text-xs">No mentors found</div>
                  </Card>
                )
              )}
            </div>

            <div className="flex flex-col gap-y-1 w-full">
              <Label htmlFor="date">Select Date</Label>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    onClick={() => setPopoverOpen((prev) => !prev)}
                    id="date"
                    variant="outline"
                    className={cn(
                      "w-full flex items-center justify-between text-left font-normal text-xs",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <span>{date ? format(date, "PPP") : "Select Date"}</span>
                    <CiCalendarDate size={20} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-full p-0"
                  align="start"
                  onInteractOutside={(e) => e.preventDefault()}
                >
                  <Calendar mode="single" selected={date} onSelect={handleDateSelect} />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <DialogFooter className="pt-5">
            <Button type="button" className="bg-primary text-white">
              Assign
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
