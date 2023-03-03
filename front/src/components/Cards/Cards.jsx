import Card from './Card';
import style from './Cards.module.css'

export default function Cards({ characters, onClose } ) {
   return (
   <div className={style.contenedor}>  
         {
         characters.map((elemento, index) => {
            return (
               <div className={style.cards} key={elemento.id}>
                  <Card
                  id={elemento.id}
                  name={elemento.name}
                  species={elemento.species}
                  gender={elemento.gender}
                  image={elemento.image} 
                  onClose={onClose}         
                  />    
               </div>
            )
         })
         }     
   </div>
   )
}
