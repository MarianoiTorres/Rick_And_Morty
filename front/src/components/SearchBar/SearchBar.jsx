import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [character, setCharacter] = useState('')

   const Change = (event) => {
      setCharacter(event.target.value)
   }

   const FunctionsEvents = function (event){
      props.onSearch(character);
      setCharacter('')
   }



   return (
      <div className={style.container}>
         <input className={style.input} onChange={Change} value={character} type='search' placeholder='ID'/>
         <button className={style.button} onClick={FunctionsEvents}>Add</button>
         <button className={style.button} onClick={() => props.onSearch(Math.floor(Math.random()*(1-826))+826)}>Random</button>
      </div>  
   );
}
