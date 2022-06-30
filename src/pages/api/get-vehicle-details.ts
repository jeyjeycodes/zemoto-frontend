import vehicleApiClient from '@src/libs/axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { VehicleDetails } from '@src/models/vehicleDetails';

export default async function handler(req: NextApiRequest, res: NextApiResponse<VehicleDetails>) {
  const { registrationNumber } = req.body;
  const result = await vehicleApiClient.post(
    'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
    {
      registrationNumber
    }
  );

  res.status(200).json(result.data);
}
