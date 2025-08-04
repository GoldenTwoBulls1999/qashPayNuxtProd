import { z } from 'zod'

export const becomePartnerFormSchema = z.object({
  name: z.string().nonempty('Please enter a first name.').default(''),
  email: z
    .string()
    .nonempty('Please enter a email.')
    .email('Please enter a valid email.')
    .default(''),
  areaCode: z.string().default('1'),
  phoneNumber: z
    .string()
    .min(1, 'Please enter a valid phone number.')
    .regex(/^\d+$/, 'Phone number must contain only digits.')
    .transform((val) => Number(val)),
  individualCheck: z.boolean().default(false),
})
