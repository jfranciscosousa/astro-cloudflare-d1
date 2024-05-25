import { actions, getActionProps } from "astro:actions";

export default function CreateTodo() {
  return (
    <form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const formEl = e.target as HTMLFormElement;
        const formData = new FormData(formEl);
        await actions.createTodo(formData);
        location.reload();
      }}
    >
      <input {...getActionProps(actions.createTodo)} />

      <input
        autoFocus
        aria-label="Add a new todo"
        placeholder="Add a new todo"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        required
        name="content"
      />
    </form>
  );
}
