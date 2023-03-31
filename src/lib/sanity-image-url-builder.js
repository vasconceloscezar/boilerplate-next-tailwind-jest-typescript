import imageUrlBuilder from "@sanity/image-url";
import { cmsClient } from "./sanityClient";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(cmsClient);

export function urlFor(source) {
  return builder.image(source);
}
