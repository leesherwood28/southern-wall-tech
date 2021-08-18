import Head from 'next/head'
import ImageCarousel from '../components/carousel'
import FeatureDisplay from '../components/feature-display'

export default function Home() {

  const features = [
    {
      image: "/qa.svg",
      alt: "Image of quality assurance manager",
      text: "High Quality Plastering And Rendering"
    },
    {
      image: "/contract.svg",
      alt: "Image of contract",
      text: "Proffesional Conduct"
    },
    {
      image: "/houses.svg",
      alt: "Image of multiple buildings",
      text: "Over 20 Years Of Experience"
    },
  ]

  const images = [
    {
      href: "/qa.svg",
      alt: "Image of quality assurance manager",
    },
    {
      href: "/contract.svg",
      alt: "Image of contract",
    },
    {
      href: "/houses.svg",
      alt: "Image of multiple buildings",
    },
  ]

  return (
    <>
      <Head>
        <title>Southern Wall Tech</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex flex-col items-center py-10">
        <div className="lg:w-4/5 xl:w-3/5 flex flex-col items-center">
          <section>
            <ImageCarousel className="w-96 h-80" images={images}></ImageCarousel>
          </section>

          <section>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center">Southern Wall Tech</h1>
          </section>
          <section className="self-stretch">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {features.map(f => (
                <FeatureDisplay 
                  key={f.image} 
                  image={f.image}
                  text={f.text}>
                </FeatureDisplay>))}
              <div></div>
            </div>
          </section>
        </div>
      </div>

    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
