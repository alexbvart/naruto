import AppLayout from '../components/AppLayout'
import ColorState from '../context/Color/ColorState'
import SearchBarState from '../context/SearchBar/SearchBarState'
import TrackState from '../context/Track/TrackState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <TrackState>
      <ColorState>
        <SearchBarState>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </SearchBarState>
      </ColorState>
    </TrackState>
  )
}

export default MyApp
