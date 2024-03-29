import AppLayout from '../components/AppLayout'
import ColorState from '../context/Color/ColorState'
import SearchBarState from '../context/SearchBar/SearchBarState'
import TrackState from '../context/Track/TrackState'
import 'styles/naruto.vercel.app_critical_min.css'
import '../styles/globals.css'
import { Loading } from '../components/Loading/Loading'

function MyApp({ Component, pageProps }) {
  return (

    <TrackState>
      <ColorState>
        <SearchBarState>
          <AppLayout>
            <Loading />
            <Component {...pageProps} />
          </AppLayout>
        </SearchBarState>
      </ColorState>
    </TrackState>
  )
}

export default MyApp
