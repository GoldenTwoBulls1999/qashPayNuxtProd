import { z } from 'zod'

export const stepOneSchema = z.object({
  firstName: z.string().nonempty('Please enter a first name.').default(''),
  lastName: z.string().nonempty('Please enter a last name.').default(''),
  email: z
    .string()
    .nonempty('Please enter a email.')
    .email('Please enter a valid email.')
    .default(''),
  companyName: z.string().nonempty('Please enter a company name.').default(''),
  industry: z
    .string()
    .nonempty('Please select your industry from this list.')
    .default(''),
  country: z
    .string()
    .nonempty('Please select your country from this list.')
    .default(''),
})

export const stepTwoSchema = z.object({
  monthlyTransactionVolumeAmount: z.coerce
    .number()
    .gt(0, 'Please enter a valid amount.')
    .nullable()
    .refine((value) => !!value, 'Please enter a valid amount.')
    .default(null),
  monthlyTransactionVolumeCurrency: z.string().default('GBP'),
  monthlyCardTransactions: z.coerce
    .number()
    .gt(0, 'Please enter a valid card transactions.')
    .nullable()
    .refine((value) => !!value, 'Please enter a valid card transactions.')
    .default(null),
  monthlyChargebacks: z.coerce
    .number()
    .nullable()
    .refine(
      (value) => !!value || value === 0,
      'Please enter a valid chargebacks.'
    )
    .default(null),
  processRecurringPayments: z.boolean().default(false),
  processCardPeriod: z.boolean().default(false),
})
