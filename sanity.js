import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: '4y3pcvv7',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25',
});
const imageBuilder = ImageUrlBuilder(client);
export const urlFor = (source) => imageBuilder.image(source);
export default client;
