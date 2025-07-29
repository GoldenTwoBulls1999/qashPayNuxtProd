import type { z } from 'zod'
import type { becomePartnerFormSchema } from '~/components/Partners/BecomePartnerForm/schemas'

export type BecomePartnerFormValues = z.infer<typeof becomePartnerFormSchema>
export type BecomePartnerFormFieldName = keyof BecomePartnerFormValues
