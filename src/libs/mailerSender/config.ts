import { EmailRecipient, Template } from '@src/libs/mailerSender/models';
import { config } from '@src/config';

const MailerSend = require('mailersend');

const { mailerSendApiKey } = config;

export const mailerSenderClient = new MailerSend({
  api_key: mailerSendApiKey
});

export const CustomerTemplateEmail: Template = {
  id: 'jpzkmgq703ml059v',
  subject: 'Request confirmation'
};

export const QuoteFormTemplateEmail: Template = {
  id: 'pr9084zvx2xgw63d',
  subject: 'Customer Request Form'
};

export const InternalUser: EmailRecipient = {
  email: 'customerservice@zemoto.co.uk',
  name: 'Zemoto'
};
