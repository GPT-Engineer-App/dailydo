import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";

const TaskList = () => {
  const tasks = [
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
  ];

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-2">
            <Checkbox />
            <span>{task.name}</span>
          </div>
          <Trash className="cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default TaskList;