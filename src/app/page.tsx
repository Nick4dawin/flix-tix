
import Userinfo from '@/components/Userinfo'
import { trpcClient } from '@/trpc/clients/client'
import { trpcServer } from '@/trpc/clients/server'
import { UserButton } from '@clerk/nextjs'

export default async function Home() {
const movies = await trpcServer.movies.movies.query();
  return (
    <main className='bg-primary-400'>
      Hello World <UserButton />
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className=''>{movie.id}</div>
            <div>{movie.title}</div>
            <div>{movie.director}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
