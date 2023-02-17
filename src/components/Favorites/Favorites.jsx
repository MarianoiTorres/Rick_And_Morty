import { useDispatch, useSelector } from "react-redux"
import style from '../Cards/Cards.module.css'
import Card from "../Cards/Card"
import { orderCards, filterCards } from "../../redux/actions"
const Favorites = (props) => {

    const myFavorites = useSelector((state) => state.myFavorites)

    const dispatch = useDispatch()

    const order = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const filter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div className={style.contenedor}>
            <div>
                <select onChange={order}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>               
                </select>
                <select onChange={filter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            {
                myFavorites.map((element) => {
                    return (                       
                    <div className={style.cards} key={element.id}>
                        <Card
                        id={element.id}
                        name={element.name}
                        species={element.species}
                        gender={element.gender}
                        image={element.image}            
                        />    
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites