export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['CT4C+OR25TIgkPcwRy04iMheg9r0u8YN74ASuhIYBKg=', 'Zt5BEDTQjVrfmyXffyrXudItlid16GANt4Nf3kajQnI=']), // Add this line
  },
});
