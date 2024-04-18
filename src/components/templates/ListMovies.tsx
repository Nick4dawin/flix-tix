import { trpcServer } from '@/trpc/clients/server'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MovieInfo } from '../organisms/MovieInfo'
export interface IListMoviesProps {}
const ListMovies = async ({}: IListMoviesProps) => {
    const movies = await trpcServer.movies.movies.query();
    return (
        <div>
          <div className="flex justify-end">
            <Link
              href={'/admin/movies/new'}
              className="flex items-center gap-2 my-2"
            >
              <Plus /> Create movie
            </Link>
          </div>
    
          <div className="grid grid-cols-3 gap-3">
            {movies.map((movie) => (
              <MovieInfo key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )
    }
    

export default ListMovies
