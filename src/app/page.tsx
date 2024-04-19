
import Userinfo from '@/components/Userinfo'
import { trpcClient } from '@/trpc/clients/client'
import { trpcServer } from '@/trpc/clients/server'
import { UserButton } from '@clerk/nextjs'

export default async function Home() {

  return (
    <main className='bg-primary-400 text-center'>
      Hello User! <UserButton />
      <div className='text-3xl text-white'>
        This is a work in Progress!
      </div>
    </main>
  )
}
