import Head from 'next/head'

export default function Home() {
  return (
  
      <Head>
        <title>Southern Wall Tech</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      

  )
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
