import { createClient } from "@sanity/client";

export const cmsClient = createClient({
  projectId: "hlh9cgf9",
  dataset: "site-sections",
  apiVersion: "2021-08-31",
  token: process.env.SANITY_API_TOKEN, // or leave blank to be anonymous user
  useCdn: true, // Set to `false` if you want to disable the CDN for fetching data
});
