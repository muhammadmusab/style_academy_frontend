
import { toast } from 'sonner'

export const useToast = () => {
  const successToast = (message: string) => {
    return toast.success('Success', {
      description: message,
      descriptionClassName: 'text-success',
    })
  }
  const errorToast = (message: string) => {
    console.log('error called')
    return toast.error('Error', {
      description: message,
      descriptionClassName: 'text-destructive',
    })
  }

  return {
    successToast,
    errorToast,
  }
}
