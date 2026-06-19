import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <Reviews />
      {/* <Pricing /> */}
      {/* <Faqs /> */}
    </Layout>
  )
}
