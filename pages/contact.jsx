
import Layout from '../components/layout'
import Info from '../components/contact/Info'
import Form from '../components/contact/Form'

const Contact = () => {
  return (
    <Layout>
      <div className="w-screen h-auto bg-gray-200 duration-500 ease-in dark:bg-gray-800">
        <Info></Info>
        <Form></Form>
      </div> 
    </Layout>
  )
}
export default Contact;
