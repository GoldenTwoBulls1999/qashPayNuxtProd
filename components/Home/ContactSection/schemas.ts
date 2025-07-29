import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().nonempty('Please enter a first name.').default(''),
  lastName: z.string().nonempty('Please enter a last name.').default(''),
  email: z
    .string()
    .nonempty('Please enter a email.')
    .email('Please enter a valid email.')
    .default(''),
})
