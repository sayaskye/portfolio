import {useContext} from 'react'
import {configContext} from '../context/configContext' 
import Navbar from './Navbar'
const Layout = ({children}) => {
    const {theme} = useContext(configContext)
    return ( 
        <div className={`${theme} flex` }>
            <Navbar></Navbar>
            {children}
        </div>
     );
}
 
export default Layout;