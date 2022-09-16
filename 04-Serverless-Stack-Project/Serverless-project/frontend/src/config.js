const config = {
  SENTRY_DSN:
    "https://121f8c8586e44c309e6bf044455e3715@o1412306.ingest.sentry.io/6751189",
  STRIPE_KEY:
    "pk_test_51LgsCiJgGfJLPEvRZqG2Hy5wna4P17qpB5ymlsIbVBZ20fKIQme32J99yrfs2NgfCDsJ4nrQiDFWaH8D1IvIRHV700LgPEN2KI",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
