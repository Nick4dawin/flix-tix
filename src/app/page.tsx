
import { trpcClient } from '@/trpc/clients/client'
import { trpcServer } from '@/trpc/clients/server'
import { UserButton } from '@clerk/nextjs'

export default async function Home() {
  const data = await trpcServer.hello.query()
  return (
    <main>
      Hello World <UserButton />
      <div>{data?.title}</div>
      <div>{data?.content}</div>
    </main>
  )
}
