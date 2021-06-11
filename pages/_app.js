/* import 'tailwindcss/tailwind.css' */
import '../styles/globals.css'
import { ConfigProvider } from '../context/configContext'


function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
        <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
