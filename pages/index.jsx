
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <div className="w-screen h-screen bg-gray-200 duration-500 ease-in dark:bg-gray-800 dark:text-white text-[#0f0f0f] ">
        {/* <p>Hola mundo Index</p> */}
        <div className="h-full w-full bg-home-background bg-cover bg-top flex flex-col items-center justify-center">
          <div className="bg-white dark:opacity-5 opacity-[40%] filter blur-3xl rounded-xl p-5 duration-500 ">
          <h1 className="text-4xl md:text-[3.45rem] lg:text-7xl xl:text-[7rem] font-black">
              Andrés Cazares
            </h1>
            <h2 className="mt-5 text-xl md:text-3xl font-bold">
              Desarrollador de Software
            </h2>
          </div>
          <div className="absolute">
            <h1 className="text-4xl md:text-[3.45rem] lg:text-7xl xl:text-[7rem] font-black">
              Andrés Cazares
            </h1>
            <h2 className="mt-5 text-xl md:text-3xl font-bold">
              Desarrollador de Software
            </h2>
          </div>
        </div>
      </div> 
    </Layout>
  )
}
export default Home;
