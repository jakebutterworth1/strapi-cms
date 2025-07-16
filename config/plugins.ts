export default ({ env }) => ({
    auth: {
      secret: env('ADMIN_JWT_SECRET'), // You might already have this or something similar for admin panel auth
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'), // This is the new crucial line
    },
  });