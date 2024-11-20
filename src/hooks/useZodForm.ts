import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z, { ZodSchema } from 'zod'

const useZodForm = (
  schema: ZodSchema,
  submtFn?:any,
  defaultValues?: any
) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { ...defaultValues },
  })
  const onFormSubmit = handleSubmit(submtFn)

  return { register, watch, reset, onFormSubmit, errors }
}
export default useZodForm