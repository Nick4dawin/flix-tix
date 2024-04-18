import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { adminsRouter } from './admins'
import { moviesRouter } from './movies'

export const appRouter = createTRPCRouter({
  movies: moviesRouter,
  admins: adminsRouter
})

export type AppRouter = typeof appRouter
