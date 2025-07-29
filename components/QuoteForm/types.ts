import { z } from 'zod'
import { stepOneSchema, stepTwoSchema } from '~/components/QuoteForm/schemas'

export type StepOneFormSchema = z.infer<typeof stepOneSchema>
export type StepTwoFormSchema = z.infer<typeof stepTwoSchema>
export type StepOneFieldName = keyof StepOneFormSchema
export type StepTwoFieldName = keyof StepTwoFormSchema
export type FormSchema = StepOneFormSchema & StepTwoFormSchema

export type QuoteFormData = {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    industry: string;
    country: string; // 2-letter ISO code like "GB"
    monthlyTransactionVolumeAmount: string;
    monthlyTransactionVolumeCurrency: string;
    monthlyCardTransactions: string;
    monthlyChargebacks: string;
    processRecurringPayments: boolean;
};
