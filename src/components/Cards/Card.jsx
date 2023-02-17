import style from './Cards.module.css'
import { NavLink, useLocation } from 'react-router-dom';
import {addFavorite, deleteFavorite} from '../../redux/actions'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
function Card(props) {

   const [isFav, setIsFav] = useState(false)

   const location = useLocation()

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }
      if(isFav === false){
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

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
             location.pathname === '/home' && <button className={style.button} onClick={() => props.onClose(props.id)}>Delete</button>               
            }   
         </div>
         <NavLink className={({isActive}) => isActive ? style.active : style.disable} to={`/detail/${props.id}`} >
            <div className={style.name}>
               <h2 className={style.name}>{props.name}</h2> 
            </div>
            <img className={style.image} src={props.image} alt={props.name} />  
            <div className={style.font}> 
               <h2 className={style.inf}>Specie: {props.species}</h2>
               <h2 className={style.inf}>Gender: {props.gender}</h2>
            </div>
         </NavLink>
      </div>
   );

  
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {dispatch(addFavorite(character))},
      deleteFavorite: (characterId) => {dispatch(deleteFavorite(characterId))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)

