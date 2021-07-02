
import { FormattedMessage } from 'react-intl';
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <div className="w-screen h-screen bg-gray-200 duration-500 ease-in dark:bg-gray-800 text-white dark:text-main-blue ">
        {/* <p>Hola mundo Index</p> */}
        <div className="h-full w-full bg-home-background bg-cover bg-top flex flex-col items-center justify-center">
          <div className="absolute flex flex-col">
            <h1 className="text-4xl md:text-[3.45rem] lg:text-7xl xl:text-[7rem] font-black bg-black bg-opacity-[.02] rounded-full">
              Andrés Cazares
            </h1>
            <h2 className="mt-5 text-xl md:text-3xl font-black items-center self-center bg-black bg-opacity-[.08] rounded-full">
              <FormattedMessage
                  id="home.subtitle"
                  defaultMessage="Web Developer"
              />
            </h2>
          </div>
        </div>
      </div> 
    </Layout>
  )
}
export default Home;
