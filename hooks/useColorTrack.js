import {useContext, useEffect} from 'react';
import { usePalette } from 'react-palette';
import TrackContext from '../context/Track/TrackContext';
const useColorTrack = (images) => {

    const { data, loading, error } = usePalette(images)
    const { darkMuted , setDarkMuted,
            lightVibrant, setLightVibrant,} = useContext(TrackContext)

    useEffect(() => {
        if (!loading && error === undefined) {;
            setLightVibrant(data.lightVibrant)
            setDarkMuted(data.darkMuted)

            console.log("color d: ", data);
            console.log("color l: ", loading)
            console.log("color e: ", error);
        }
        return () => {

        }
    }, [loading])



    return [darkMuted, lightVibrant];
}
export default useColorTrack;