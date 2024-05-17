import DialogButton from "@/components/common/buttons/DialogButton";
import { getTaskByStatus } from "@/data/task";
import { TaskStatus } from "@prisma/client";
import TodoList from "./_components/TaskBoard";
import AddTaskForm from "./_components/forms/AddTaskForm";

export default async function TaskPage() {
  const todo = (await getTaskByStatus(TaskStatus.TODO)) || [];
  console.log(todo);
  const inProgres = (await getTaskByStatus(TaskStatus.IN_PROGRESS)) || [];
  const done = (await getTaskByStatus(TaskStatus.FINISHED)) || [];
  return (
    <main className="flex flex-1 flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
        <DialogButton title="Add Task">
          <AddTaskForm />
        </DialogButton>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TodoList title="To Do" tasks={todo} />
        <TodoList title="In Progress" tasks={inProgres} />
        <TodoList title="Done" tasks={done} />
      </div>
    </main>
  );
}
