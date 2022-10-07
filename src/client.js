import client from '@sanity/client'

export default client({
    projectId: "28p3m62e",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-05"
})