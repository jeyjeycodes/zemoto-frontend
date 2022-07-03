type Config = {
  dvlaApiKey: string;
  mailerSendApiKey: string;
};

export const config: Config = {
  dvlaApiKey: process.env.DVLA_API_KEY ?? '',
  mailerSendApiKey: process.env.MAILER_SEND_API_KEY ?? ''
};
