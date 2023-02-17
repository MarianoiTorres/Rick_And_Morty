import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { NavLink, useLocation, useParams} from 'react-router-dom'
import Logo from '../../img/AA.png'


export default function NavBar(props){
    const location = useLocation()

    return(
        <nav className={style.navbar}>
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
    )
}