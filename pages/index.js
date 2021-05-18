import Head from 'next/head'



export default function Home({ datalist }) {

  return (

    <>
      <Head>
        <title>Auxona Ø</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>


  
        <style global jsx>{`
              :root{
                  --z-nav: 100;
              }
        `}</style>
    </>

  )
}

export async function getServerSideProps(context) {
    return fetch(`https://api.deezer.com/chart/`)
    .then(res => res.json())
    .then(response => {
      const datalist = response;
      return { props: {datalist} }
    })
}

