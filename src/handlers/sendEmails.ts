import { VehicleDetails } from '@src/models/vehicleDetails';
import { QuotationFormData } from '@components/GetQuoteForm';

const Recipient = require('mailersend').Recipient;
const EmailParams = require('mailersend').EmailParams;
const MailerSend = require('mailersend');

export const sendEmailToCustomer = async (customerEmail: string, customerName: string, regNumber: string) => {
  const mailersend = new MailerSend({
    api_key:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzAxZTYwM2UwZDk0YjU3ZjIwMDIyOGZjM2JiYjI1NDBhNDQ4OGM3Mjg4MmQ3YjhkZTAwMmNhNjBjYjgxY2Q0MzQwMGVhOTg2MGY5Yjk1MTkiLCJpYXQiOjE2NTY0NTI0MTYuODQ4NTE5LCJuYmYiOjE2NTY0NTI0MTYuODQ4NTIyLCJleHAiOjQ4MTIxMjYwMTYuODQzNzYxLCJzdWIiOiIzMDgyMSIsInNjb3BlcyI6WyJlbWFpbF9mdWxsIiwiZG9tYWluc19mdWxsIiwiYWN0aXZpdHlfZnVsbCIsImFuYWx5dGljc19mdWxsIiwidG9rZW5zX2Z1bGwiLCJ3ZWJob29rc19mdWxsIiwidGVtcGxhdGVzX2Z1bGwiLCJzdXBwcmVzc2lvbnNfZnVsbCIsInNtc19mdWxsIl19.RgHnh8k6oXTMFY64xdNJwLTeq3EcbTv-4o9ucyX8o1Wh4-RkjXzAy4U_xx1GFJ8H5IVQLsKcwlthGcOK8Oy9fEL-CCTbOtDYAg0XHWVyFxZJYaJ_fnWT1eFJiwo0p9iBo8GTpMFNXVo06d2WAlqlkCE9ki4jF3G3KeN3EAXwD0e3EvRMWcqbUqMBsNasxodNKZT7L1OTuKlfZG4Cj7S38hD501H9LPmN_nFUYX-coaY0DOBRwBlTiVrWa2PBreZrQyZgGBWRwNsUOAy3okxZXBf1edMcqBHVc1QK5XzXeDKt2c2IB-DOrFrFv8X6K0FL9CKOvV83MWTDihPV2Or0MGHc0r5uOVc0BLWLo6k7nLsQU3wwlopL84oRXUgkQboRU9l17Xv-PYrd4E0p3BrEklBnG_jTD6_obDBPATPPJnMKzzgHO1ytn3DBAHHs9Vx0WCd0QjKp2Eb0aGxN8aSxhjq84_UhXaMgZV5Ei5sBhf_hPECu4RAdPrWUswrJU-7ommzUSRgsuQN3yMNolZl_GefE7WnpQREib414lNLdtK5LTjGaXADXyRkyhn0PRnwHNnXMZURn6TJcIKrI8bdcF734xv15R3K0O0Ljlda41aoO-2X9DB19hp-Bl7zxQuvZBER7hzlehWPVtH2P_rubjht64BczSB81lYQVye2Kmmw'
  });

  const recipients = [new Recipient(customerEmail, customerName)];

  const variables = [
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

  const emailParams = new EmailParams()
    .setFrom('customerservice@zemoto.co.uk')
    .setFromName('Zemoto')
    .setRecipients(recipients)
    .setSubject('Request confirmation')
    .setTemplateId('jpzkmgq703ml059v')
    .setVariables(variables);

  await mailersend.send(emailParams);
};

export const sendQuoteFormEmail = async (form: QuotationFormData, vehicleDetails: VehicleDetails) => {
  const mailersend = new MailerSend({
    api_key:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzAxZTYwM2UwZDk0YjU3ZjIwMDIyOGZjM2JiYjI1NDBhNDQ4OGM3Mjg4MmQ3YjhkZTAwMmNhNjBjYjgxY2Q0MzQwMGVhOTg2MGY5Yjk1MTkiLCJpYXQiOjE2NTY0NTI0MTYuODQ4NTE5LCJuYmYiOjE2NTY0NTI0MTYuODQ4NTIyLCJleHAiOjQ4MTIxMjYwMTYuODQzNzYxLCJzdWIiOiIzMDgyMSIsInNjb3BlcyI6WyJlbWFpbF9mdWxsIiwiZG9tYWluc19mdWxsIiwiYWN0aXZpdHlfZnVsbCIsImFuYWx5dGljc19mdWxsIiwidG9rZW5zX2Z1bGwiLCJ3ZWJob29rc19mdWxsIiwidGVtcGxhdGVzX2Z1bGwiLCJzdXBwcmVzc2lvbnNfZnVsbCIsInNtc19mdWxsIl19.RgHnh8k6oXTMFY64xdNJwLTeq3EcbTv-4o9ucyX8o1Wh4-RkjXzAy4U_xx1GFJ8H5IVQLsKcwlthGcOK8Oy9fEL-CCTbOtDYAg0XHWVyFxZJYaJ_fnWT1eFJiwo0p9iBo8GTpMFNXVo06d2WAlqlkCE9ki4jF3G3KeN3EAXwD0e3EvRMWcqbUqMBsNasxodNKZT7L1OTuKlfZG4Cj7S38hD501H9LPmN_nFUYX-coaY0DOBRwBlTiVrWa2PBreZrQyZgGBWRwNsUOAy3okxZXBf1edMcqBHVc1QK5XzXeDKt2c2IB-DOrFrFv8X6K0FL9CKOvV83MWTDihPV2Or0MGHc0r5uOVc0BLWLo6k7nLsQU3wwlopL84oRXUgkQboRU9l17Xv-PYrd4E0p3BrEklBnG_jTD6_obDBPATPPJnMKzzgHO1ytn3DBAHHs9Vx0WCd0QjKp2Eb0aGxN8aSxhjq84_UhXaMgZV5Ei5sBhf_hPECu4RAdPrWUswrJU-7ommzUSRgsuQN3yMNolZl_GefE7WnpQREib414lNLdtK5LTjGaXADXyRkyhn0PRnwHNnXMZURn6TJcIKrI8bdcF734xv15R3K0O0Ljlda41aoO-2X9DB19hp-Bl7zxQuvZBER7hzlehWPVtH2P_rubjht64BczSB81lYQVye2Kmmw'
  });

  const recipient = 'customerservice@zemoto.co.uk';

  const recipients = [new Recipient(recipient, 'Zeomoto')];

  const variables = [
    {
      email: recipient,
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

  const emailParams = new EmailParams()
    .setFrom('customerservice@zemoto.co.uk')
    .setFromName('Zemoto')
    .setRecipients(recipients)
    .setSubject('Customer Request Form')
    .setTemplateId('pr9084zvx2xgw63d')
    .setVariables(variables);

  console.log(await mailersend.send(emailParams));
};
