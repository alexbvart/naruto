import React from 'react';
/* import HeroAllPages from '../../components/HeroAllPages';
import CarrouselVertical from '../../components/CarrouselVertical' */
import Head from 'next/head'
import useColorBase from '../../hooks/useColorBase';


const Playlist = ({ datalist }) => {

    

    const [colorBase,baseGradient] = useColorBase(datalist.md5_image,datalist.type)

console.log(datalist);


    return (
        <>
            <Head>
                <title>{datalist.title} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content={colorBase} />
            </Head>
            
            <main>
{/*                 <HeroAllPages data={datalist}></HeroAllPages>
                <CarrouselVertical list={datalist.tracks.data} /> */}
            </main>

                <style global jsx>{`
                :root{
                    --base-home-gradient: ${baseGradient}
                    ;
                }
            `}</style>
            

            <style global jsx>{`
                @media screen and (max-width: 560px) {
                        main{
                            z-index:99999;
                        }
                }
            `}</style>

        </>
    );
}
export default Playlist;


export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
    const type = "playlist"

    return fetch(`https://api.deezer.com/${type}/${id}`)
        .then(res => res.json())
        .then(response => {
            const datalist = response;
            return { props: {datalist} }
        })
}