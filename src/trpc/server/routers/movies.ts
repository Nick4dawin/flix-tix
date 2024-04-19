import { CreateMovie } from '@/components/templates/CreateMovie'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { schemaCreateMovie } from '@/forms/createmovie'
export const moviesRouter = createTRPCRouter({
  movies: publicProcedure.query(({ ctx }) => {
    return ctx.db.movie.findMany()
  }),
  CreateMovie: protectedProcedure('admin')
    .input(schemaCreateMovie)
    .mutation(({ ctx, input }) => {
      return ctx.db.movie.create({
        data: input,
      })
    }),
})
