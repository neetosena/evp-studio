import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT,
});

export default client;
