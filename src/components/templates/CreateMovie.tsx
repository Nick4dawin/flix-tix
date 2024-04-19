'use client'
import { useFormCreateMovie } from "@/forms/createmovie"
import { Label } from '@/components/atoms/label'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Toast } from "../ui/toast"
export interface ICreateMovieProps {}
import { HtmlSelect } from "../atoms/htmlselect"
import { Genre } from "@prisma/client"
import { trpcClient } from "@/trpc/clients/client"
import { useToast } from "../ui/use-toast"
import { useRouter } from "next/navigation"
import { revalidatePath} from '@/utils/actions/revalidatepath'
export const CreateMovie =({}: ICreateMovieProps) => {
    const {toast}  = useToast()
    const router = useRouter()
    const {register,handleSubmit,reset,formState:{errors,}} =useFormCreateMovie()
    const {mutateAsync} = trpcClient.movies.CreateMovie.useMutation()
     return <form onSubmit={handleSubmit(async (data)=>{console.log(data)
        const movie =  await mutateAsync(data)
        if(movie) {
            reset();
            toast({title:"Movie created successfully"})
            revalidatePath('/admin/movies')
            router.replace('/admin/movies')
        }
     })} className="space-y-4">
        
        <Label htmlFor="title">
            Title
            <Input placeholder="Enter Movie Title" {...register(
                "title",
            )}/>
        </Label>
        <Label htmlFor="director name" error={errors.director?.message}>
            Director Name
              <Input placeholder="Director name" {...register('director')} />
            </Label>
            <Label title="Duration" error={errors.duration?.message}>
              <Input
                placeholder="Duration"
                {...register('duration', { valueAsNumber: true })}
              />
            </Label>
            <Label title="Release date" error={errors.releaseDate?.message}>
              <Input
                placeholder="Release date"
                type="date"
                {...register('releaseDate', {
                  setValueAs: (value) => {
                    const date = new Date(value)
                    return isNaN(date.getTime()) ? '' : date.toISOString()
                  },
                })}
              />
            </Label>
            <Label title="Genre" error={errors.genre?.message}>
              <HtmlSelect placeholder="projection type" {...register(`genre`)}>
                {Object.values(Genre).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </HtmlSelect>
            </Label>
        <Button>Submit</Button>
        </form>
} 