import { createClient } from "@sanity/client"

export default createClient({
    projectId: "pnj4edkv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-08-26",
})