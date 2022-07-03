import { QuotationFormData } from '@components/GetQuoteForm';
import { VehicleDetails } from '@src/models/vehicleDetails';
import { EmailRecipient, TemplateType, Variable } from '@src/libs/mailerSender/models';
import { CustomerTemplateEmail, InternalUser, QuoteFormTemplateEmail } from '@src/libs/mailerSender/config';

const EmailParams = require('mailersend').EmailParams;
const Recipient = require('mailersend').Recipient;

export const mapToRecipient = (email: string, fullName: string): EmailRecipient => {
  return new Recipient(email, fullName);
};

export const mapToCustomerTemplate = (customerEmail: string, customerName: string, regNumber: string): Variable[] => {
  return [
    {
      email: customerEmail,
      substitutions: [
        {
          var: 'customer_name',
          value: customerName
        },
        {
          var: 'vehicle_registration',
          value: regNumber
        }
      ]
    }
  ];
};

export const mapToInternalUserTemplate = (form: QuotationFormData, vehicleDetails: VehicleDetails): Variable[] => {
  return [
    {
      email: InternalUser.email,
      substitutions: [
        {
          var: 'make',
          value: `${vehicleDetails.make}`
        },
        {
          var: 'colour',
          value: `${vehicleDetails.colour}`
        },
        {
          var: 'condition',
          value: `${form.condition}`
        },
        {
          var: 'fuel_type',
          value: `${vehicleDetails.fuelType}`
        },
        {
          var: 'has_issues',
          value: `${form.hasIssues}`
        },
        {
          var: 'mot_status',
          value: `${vehicleDetails.motStatus}`
        },
        {
          var: 'tax_status',
          value: `${vehicleDetails.taxStatus}`
        },
        {
          var: 'wheel_plan',
          value: `${vehicleDetails.wheelplan}`
        },
        {
          var: 'euro_status',
          value: `${vehicleDetails.euroStatus}`
        },
        {
          var: 'tax_due_date',
          value: `${vehicleDetails.taxDueDate}`
        },
        {
          var: 'co2_Emissions',
          value: `${vehicleDetails.co2Emissions}`
        },
        {
          var: 'customer_name',
          value: `${form.customerName}`
        },
        {
          var: 'no_of_keepers',
          value: `${form.noOfKeepers}`
        },
        {
          var: 'type_approval',
          value: `${vehicleDetails.typeApproval}`
        },
        {
          var: 'customer_email',
          value: `${form.customerEmail}`
        },
        {
          var: 'engineCapacity',
          value: `${vehicleDetails.engineCapacity}`
        },
        {
          var: 'issues_details',
          value: `${form.issues}`
        },
        {
          var: 'current_mileage',
          value: `${form.mileage}`
        },
        {
          var: 'requires_red_key',
          value: `${form.requiresRedKey}`
        },
        {
          var: 'marked_for_export',
          value: `${vehicleDetails.markedForExport ? 'Yes' : 'No'}`
        },
        {
          var: 'most_recent_logbook',
          value: `${form.hasMostRecentLogBook}`
        },
        {
          var: 'year_of_manufacture',
          value: `${vehicleDetails.yearOfManufacture}`
        },
        {
          var: 'vehicle_registration',
          value: `${form.registrationNumber}`
        },
        {
          var: 'date_of_last_v5c_Issued',
          value: `${vehicleDetails.dateOfLastV5CIssued}`
        },
        {
          var: 'outstanding_finance_amount',
          value: `${form.outstandingFinanceAmount}`
        },
        {
          var: 'outstanding_finance_option',
          value: `${form.hasOutstandingFinance}`
        },
        {
          var: 'month_of_first_registration',
          value: `${vehicleDetails.monthOfFirstRegistration}`
        }
      ]
    }
  ];
};

export const mapToEmailParams = (recipients: EmailRecipient[], variables: Variable[], templateType: TemplateType) => {
  const { id } = templateType === TemplateType.Customer ? CustomerTemplateEmail : QuoteFormTemplateEmail;
  return new EmailParams().setRecipients(recipients).setTemplateId(id).setVariables(variables);
};
