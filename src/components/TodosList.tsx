import type { ComponentProps } from "preact";
import type { TodoType } from "../data/schema";
import { actions, getActionProps } from "astro:actions";

function Todo({ todo }: { todo: TodoType }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-medium">{todo.content}</h3>
        <p className="text-gray-500 text-sm">Created 2 days ago</p>
      </div>
      <form method="POST">
        <button className="text-gray-500 hover:text-gray-900 ">
          <input {...getActionProps(actions.deleteOneTodo)} />

          <input type="hidden" value={todo.id} name="id" />

          <TrashIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}

export default function TodosList({ todos }: { todos: TodoType[] }) {
  return (
    <div className="flex-1 overflow-auto p-6">
      {todos.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}

      {!todos.length && (
        <div class="flex flex-col items-center">
          <ClipboardListIcon className="h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">
            No todos yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Start adding tasks to your todo list.
          </p>
        </div>
      )}
    </div>
  );
}

function ClipboardListIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function TrashIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
