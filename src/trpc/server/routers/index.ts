import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { moviesRouter } from './movies'

export const appRouter = createTRPCRouter({
  movies: moviesRouter,
})

export type AppRouter = typeof appRouter
