import Prismic from 'prismic-javascript'
import { DefaultClient } from 'prismic-javascript/types/client'

const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT!
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

export function getPrismicClient(req?: unknown): DefaultClient {
  console.log(apiEndpoint)
  console.log(accessToken)

  const prismic = Prismic.client(apiEndpoint, {
    req,
    accessToken,
  })

  return prismic
}
