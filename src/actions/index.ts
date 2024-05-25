import { defineAction, z } from "astro:actions";
import { buildClient, schema } from "../data/drizzle";
import { eq } from "drizzle-orm";

export const server = {
  createTodo: defineAction({
    accept: "form",
    input: z.object({
      content: z.string(),
    }),
    handler: async ({ content }, ctx) => {
      let drizzle = buildClient(ctx.locals.runtime.env.DB);

      await drizzle.insert(schema.todos).values({ content });

      return { success: true };
    },
  }),

  deleteOneTodo: defineAction({
    accept: "form",
    input: z.object({ id: z.number() }),
    handler: async ({ id }, ctx) => {
      let drizzle = buildClient(ctx.locals.runtime.env.DB);

      await drizzle.delete(schema.todos).where(eq(schema.todos.id, id));

      return { success: true };
    },
  }),

  deleteAllTodos: defineAction({
    accept: "form",
    input: z.object({}),
    handler: async ({}, ctx) => {
      let drizzle = buildClient(ctx.locals.runtime.env.DB);

      await drizzle.delete(schema.todos);

      return { success: true };
    },
  }),
};
