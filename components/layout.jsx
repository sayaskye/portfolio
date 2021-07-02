import {useContext} from 'react'
import {configContext} from '../context/configContext' 
import Navbar from './Navbar'
import FakeNavbar from './FakeNav'
const Layout = ({children}) => {
    const {theme} = useContext(configContext)
    return ( 
        <div className={`${theme}` }>
            <div className="flex">
                <div className="fixed z-50">
                    <Navbar></Navbar>
                </div>
                <FakeNavbar></FakeNavbar>
                {children}
            </div>
        </div>
     );
}
 
export default Layout;