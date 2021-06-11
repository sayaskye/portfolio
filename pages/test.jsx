import { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { configContext } from '../context/configContext'
import Config from '../components/layout'

function Home() {
  const {setLanguage, setDarkmode} = useContext(configContext)

  return (
    
    <Config>
      <h1> 
        <FormattedMessage id="app.test" defaultMessage="Hola"/>
      </h1>

      <div className="bg-white dark:bg-black w-40 h-40">
      </div>

      <div>
        <button onClick={() => setLanguage('es-MX')}>Español</button>
        <button onClick={() => setLanguage('en-US')}>Ingles</button>
      </div>

      <div>
        <button onClick={() => setDarkmode('dark')}>Oscuro</button>
        <button onClick={() => setDarkmode('')}>Luz</button>
      </div>
    </Config>
  )
}
export default Home;