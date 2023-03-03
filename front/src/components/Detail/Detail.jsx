import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'

export default function Detail(){

    const [character, setCharacter] = useState({})

    const { detailId } = useParams() // ????????????????


    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

      return (
        <div className={style.contenedor}>
            <div className={style.posicion}>
                <img className={style.img} src={character.image} alt={character.name} />
                <div className={style.info}>
                    <h2><b>Name:</b> {character.name}</h2>
                    <h2><b>Status:</b> {character.status}</h2>
                    <h2><b>Specie:</b> {character.species}</h2>
                    <h2><b>Gender:</b> {character.gender}</h2>
                    <h2><b>Origin:</b> {character?.origin?.name}</h2>
                </div>
            </div> 
        </div>
      )
}