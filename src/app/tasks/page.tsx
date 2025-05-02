"use client"

const TasksPage = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const tasks = await response.json();

  return <div>TasksPage</div>;
};

export default TasksPage;
