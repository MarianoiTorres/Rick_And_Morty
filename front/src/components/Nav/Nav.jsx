import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { NavLink, useLocation, useParams} from 'react-router-dom'
import Logo from '../../img/AA.png'
import Menu from '../../img/menu.png'
import { useState } from 'react'

export default function NavBar(props){
    const location = useLocation()

    const [menu, setMenu] = useState(style.navbarhidden)

    const openMenu = () => {
        if(menu === style.navbarhidden){
            setMenu(style.navbarvisible)}
        else{
            setMenu(style.navbarhidden)
        }
    }

    const nav = ({})

    return(
        <div className={style.container}>
 
        <nav  className={`${style.navbar} ${menu}`}>

            <img className={style.imagen} src={Logo} alt="" />
            
            <ul className={style.buttons}>
                {  
                    location.pathname !== '/about' && location.pathname !== '/favorites' && !location.pathname.includes('/detail') &&<SearchBar onSearch={props.onSearch} />                    
                }
                {
                   location.pathname !== '/favorites' && <NavLink to='/favorites'><button className={style.botones}>Favorites</button></NavLink>  
                }
                              
                <NavLink  to='/home'><button className={style.botones}>Home</button></NavLink>
                <NavLink  to='/about'><button className={style.botones}>About</button> </NavLink>                 
                <NavLink to='/'><button onClick={props.exit} className={style.botones}>Exit</button></NavLink>
            </ul>

        </nav>
            <div className={style.containerMenu}>
                <img className={style.imageResponsive} src={Logo} alt="" />  
               <button className={style.buttonMenu} onClick={openMenu}><img src={Menu}></img></button> 
                
            </div>  
        </div>

    )
}