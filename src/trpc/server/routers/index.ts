import { createTRPCRouter, publicProcedure } from "..";

export const appRouter = createTRPCRouter({
    hello: publicProcedure.query(() => {
        return {title: "News", content: "Lorem Ipsum" }
    }),
})

export type AppRouter = typeof appRouter