import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import homeCopy from '@/content/home.json'

export default function Home() {
  return (
    <Layout>
      <Hero copy={homeCopy.hero} />
      <PrimaryFeatures copy={homeCopy.primaryFeatures} />
      <SecondaryFeatures copy={homeCopy.secondaryFeatures} />
      {/* <Reviews /> */}
      <CallToAction />
      {/* <Pricing /> */}
      <Faqs />
    </Layout>
  )
}
