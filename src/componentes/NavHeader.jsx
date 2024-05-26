import Item from "./second_componentes/Item"
import logo from '../assets/logo.jpg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faShoppingCart, faSign, faSignIn, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

function NavHeader(){
    return(
        <nav className="nav_bar">
            <div className="container_logo">
                <img src={logo} alt="" /></div>
            <div className="container_inf">
               <Item url={'r'} text={'About'}/>
               <Item url={'r'} text={'Services'}/>
               <Item url={'r'} text={'Product'}/>
               <Item url={'r'} text={'Contact'}/>
            </div>
            <div className="container_icon">
                <FontAwesomeIcon icon={faSignInAlt}/> 
                <FontAwesomeIcon icon={faShoppingCart}/>           
            </div>
        </nav>
    )
    
}
export default NavHeader