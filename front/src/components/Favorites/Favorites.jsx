import { useDispatch, useSelector } from "react-redux"
import style from '../Cards/Cards.module.css'
import Card from "../Cards/Card"
import { orderCards, filterCards, allCharacters } from "../../redux/actions"
const Favorites = (props) => {

    const myFavorites = useSelector((state) => state.myFavorites)

    const dispatch = useDispatch()

    const order = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const filter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const allCharacter = () => {
        dispatch(allCharacters())
    }

    return(
        <div className={style.contenedorFavorites}>
            
            <div className={style.order}>
                <select className={style.select} onChange={order} defaultValue='Order'>
                    <option selected disabled>Order</option>
                    <option className={style.options} value="Ascendente">Ascendant</option>
                    <option className={style.options} value="Descendente">Descendant</option>               
                </select>
                <select className={style.select} onChange={filter} defaultValue='Gender'>
                <option selected disabled>Gender</option>
                    <option className={style.options} value="Male">Male</option>
                    <option className={style.options} value="Female">Female</option>
                    <option className={style.options} value="Genderless">Genderless</option>
                    <option className={style.options} value="unknown">Unknown</option>
                </select>
                <button className={style.select} onClick={allCharacter}>All</button>


            </div>
            <div className={style.cardsFavorites}>
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

        </div>
    )
}

export default Favorites