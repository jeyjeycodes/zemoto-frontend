import { NextApiRequest, NextApiResponse } from 'next';
import { VehicleDetails } from '@src/models/vehicleDetails';
import { sendEmailToCustomer, sendQuoteFormEmail } from '@src/handlers/sendEmails';
import { QuotationFormData } from '@components/GetQuoteForm';

interface SendEmailsRequest {
  quotationFormData: QuotationFormData;
  vehicleDetails: VehicleDetails;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<SendEmailsRequest>) {
  const requestBody: SendEmailsRequest = request.body;
  const { quotationFormData, vehicleDetails } = requestBody;
  await sendEmailToCustomer(
    quotationFormData.customerEmail,
    quotationFormData.customerName,
    quotationFormData.registrationNumber
  );
  await sendQuoteFormEmail(quotationFormData, vehicleDetails);

  response.status(200);
}
