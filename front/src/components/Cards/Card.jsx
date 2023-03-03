import style from './Cards.module.css'
import { NavLink, useLocation } from 'react-router-dom';
import {addFavorite, deleteFavorite} from '../../redux/actions'
import { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
function Card({ name, species, gender, image, onClose, id }) {

   const [isFav, setIsFav] = useState(false)

   const location = useLocation()

   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();
 

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false)
        dispatch(deleteFavorite(id))
      }
      if(isFav === false){
         setIsFav(true)
         dispatch(addFavorite({ name, species, gender, image, id }))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div>
         
         <div className={style.botones}>
            {     
               isFav ? (
                  <button className={style.buttonFavorite} onClick={handleFavorite}>💚</button>
               ) : (
                  <button className={style.buttonFavorite} onClick={handleFavorite}>🤍</button>
               )         
            }                            
            {
             location.pathname === '/home' && <button className={style.button} onClick={() => onClose(id)}>Delete</button>               
            }   
         </div>
         <NavLink className={({isActive}) => isActive ? style.active : style.disable} to={`/detail/${id}`} >
            <div className={style.name}>
               <h2 className={style.name}>{name}</h2> 
            </div>
            <img className={style.image} src={image} alt={name} />  
            <div className={style.font}> 
               <h2 className={style.inf}>Specie: {species}</h2>
               <h2 className={style.inf}>Gender: {gender}</h2>
            </div>
         </NavLink>
      </div>
   );

  
}



export default Card

