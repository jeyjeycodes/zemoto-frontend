type Config = {
  dvlaApiKey: string;
};

export const config: Config = {
  dvlaApiKey: process.env.DVLA_API_KEY ?? ''
};
