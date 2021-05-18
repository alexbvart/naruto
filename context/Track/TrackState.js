import React, {useState} from 'react';
import TrackContext from './TrackContext';

const TrackState = ({children}) => {

    const initialImage ="https://cdns-images.dzcdn.net/images/cover/8e75f7f8b923eb433153a26a02071dba/500x500-000000-80-0-0.jpg"
    const artistinit = [{
            "id": 169361,
            "name": "alexbvart",
            "link": "https://www.deezer.com/artist/169361",
            "tracklist": "https://api.deezer.com/artist/169361/top?limit=50",
            "type": "artist"
        }]


    const [expand, setExpand] = useState(false)

    const [images, setImages] = useState(initialImage)
    const [artist, setArtist] = useState(artistinit)
    const [name, setName] = useState("Auxona")
    const [duration, setDuration] = useState(null)
    const [id, setId] = useState("")

    const [darkMuted , setDarkMuted ] = useState("#2b343e")
    const [lightVibrant, setLightVibrant] = useState("#fff")


            /* console.log(id,name,duration,artist,images); */
    return ( 
        <TrackContext.Provider
            value={{
                expand, setExpand,
                images, setImages,
                artist, setArtist,
                name, setName,
                duration, setDuration,
                id, setId,

                darkMuted , setDarkMuted,
                lightVibrant, setLightVibrant,
            }}
        >
            {children}
            <style global jsx>{`
                :root{
                    --lightVibrant: ${lightVibrant};
                    --darkMuted: ${darkMuted};
                }
            `}</style>
        </TrackContext.Provider>
    );
}
export default TrackState;