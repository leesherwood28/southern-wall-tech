import Head from 'next/head'
import FeatureDisplay from '../components/feature-display'

export default function Home() {
  return (
    <>
      <Head>
        <title>Southern Wall Tech</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="py-10 px-40 flex flex-col items-center">

        <section>
          <h1 className="text-5xl font-light">Southern Wall Tech</h1>
        </section>
        <section>
          <div>
            <FeatureDisplay
              image="/qa.svg"
              alt="Image of quality assurance manager"
              text="Quality Assured"
            ></FeatureDisplay>

          </div>
        </section>
      </div>
    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
