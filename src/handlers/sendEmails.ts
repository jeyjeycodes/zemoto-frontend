import { VehicleDetails } from '@src/models/vehicleDetails';
import { QuotationFormData } from '@components/GetQuoteForm';
import {
  mapToCustomerTemplate,
  mapToEmailParams,
  mapToInternalUserTemplate,
  mapToRecipient
} from '@src/libs/mailerSender';
import { TemplateType } from '@src/libs/mailerSender/models';
import { InternalUser, mailerSenderClient } from '@src/libs/mailerSender/config';

export const sendEmailToCustomer = async (customerEmail: string, customerName: string, regNumber: string) => {
  const recipients = [mapToRecipient(customerEmail, customerName)];

  const variables = mapToCustomerTemplate(customerEmail, customerName, regNumber);

  const emailParams = mapToEmailParams(recipients, variables, TemplateType.Customer);

  await mailerSenderClient.send(emailParams);
};

export const sendQuoteFormEmail = async (form: QuotationFormData, vehicleDetails: VehicleDetails) => {
  const recipients = [mapToRecipient(InternalUser.email, InternalUser.name)];

  const variables = mapToInternalUserTemplate(form, vehicleDetails);

  const emailParams = mapToEmailParams(recipients, variables, TemplateType.QuoteForm);

  await mailerSenderClient.send(emailParams);
};
