// config/keys.js

module.exports = {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID || 'your_google_client_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret',
    },
    facebook: {
      appID: process.env.FACEBOOK_APP_ID || 'your_facebook_app_id',
      appSecret: process.env.FACEBOOK_APP_SECRET || 'your_facebook_app_secret',
    },
    session: {
      cookieKey: process.env.SESSION_COOKIE_KEY || 'your_session_cookie_key',
    },
  };
  