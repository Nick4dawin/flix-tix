
import { createTRPCRouter, protectedProcedure, publicProcedure } from "..";
export const adminsRouter = createTRPCRouter({
    movies: protectedProcedure('admin').query(({ ctx }) => {
        return ctx.db.admin.findMany()
    }),
    adminMe: protectedProcedure().query(({ ctx }) => {
        return ctx.db.admin.findUnique({ where: { id: ctx.userId } })
    })
})