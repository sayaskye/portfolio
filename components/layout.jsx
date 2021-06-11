import {useContext} from 'react'
import {configContext} from '../context/configContext' 
import Navbar from './Navbar'
const Config = ({children}) => {
    const {theme} = useContext(configContext)
    return ( 
        <div className={theme}>
            <Navbar></Navbar>
            {children}
        </div>
     );
}
 
export default Config;