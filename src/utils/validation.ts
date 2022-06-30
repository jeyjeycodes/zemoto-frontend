import * as yup from 'yup';

export const quotationSchema = yup
  .object({
    customerEmail: yup.string().required().email(),
    customerName: yup.string().required(),
    registrationNumber: yup.string().required(),
    mileage: yup.number().required().moreThan(0),
    noOfKeepers: yup.string().required(),
    condition: yup.string().required(),
    hasMostRecentLogBook: yup.string().required(),
    requiresRedKey: yup.string().required(),
    hasOutstandingFinance: yup.string().required(),
    outstandingFinanceAmount: yup.number().when('hasOutstandingFinance', {
      is: 'yes',
      then: yup.number().required().moreThan(0)
    }),
    hasIssues: yup.string().required(),
    issues: yup.string().when('hasIssues', {
      is: 'yes',
      then: yup.string().required()
    })
  })
  .required();
