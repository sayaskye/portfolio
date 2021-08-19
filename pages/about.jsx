import { FormattedMessage } from 'react-intl'
import Layout from '../components/layout'
import Info from '../components/about/Info'

const About = () => {
  return (
    <Layout>
      <div className="w-screen h-full py-[54px] bg-gray-200 duration-500  ease-in dark:bg-gray-800">
        {/* <p>Hola mundo about</p> */}
        <Info/>
      </div> 
    </Layout>
  )
}
export default About;
