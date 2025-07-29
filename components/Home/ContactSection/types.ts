import { z } from 'zod'
import type { contactFormSchema } from '~/components/Home/ContactSection/schemas'

export type ContactFormValues = z.infer<typeof contactFormSchema>
export type ContactFormFieldName = keyof ContactFormValues
