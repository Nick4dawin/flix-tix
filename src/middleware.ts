import { authMiddleware } from '@clerk/nextjs'
export default authMiddleware({
  publicRoutes: ['/', '/(api|trpc)(.*)', '/favicon.ico'],
  ignoredRoutes: [],
})
export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
