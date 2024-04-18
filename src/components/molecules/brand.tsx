import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { DeveloperInfo } from './developer-info'
import { cn } from '@/lib/utils'

export interface IBrandProps {}
const poppins = Poppins({ subsets: ['latin'] , weight:['800'] })
export const Brand = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn(
          'hover:underline font-semibold underline-offset-4 text-primary-500',
        poppins.className)}
      >
        FlixTix
      </Link>
      <DeveloperInfo />
    </div>
  )
}