'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useReducer, useRef, useState } from 'react'
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
// import { storage } from '../config/firebase'
// import { catchError, debounceTime, EMPTY, Subject, tap } from 'rxjs'
import { trpcClient } from '@/trpc/clients/client'
import { RouterOutputs } from '@/trpc/clients/types'

export const useDialogState = (defaultState = false) => {
  const [open, setOpen] = useState(defaultState)
  const pathname = usePathname()
  const initialPathname = useRef(pathname)

  useEffect(() => {
    if (pathname !== initialPathname.current) {
      setOpen(false)
      initialPathname.current = pathname
    }
  }, [pathname, open])

  return [open, setOpen] as const
}

