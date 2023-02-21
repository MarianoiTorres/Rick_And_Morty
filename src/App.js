import './App.css'
import Cards from './components/Cards/Cards'
import NavBar from './components/Nav/Nav'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorite } from './redux/actions'


//---------------------------------------------------------------------
function App () {


  const [characters, setCharacters] = useState([])
  const location = useLocation()
  const navigate = useNavigate()
  const [access, setAccess]=useState(false)
  const username = 'user@gmail.com'
  const password = 'password1'

  const login = (userData) => {
    if(username === userData.username && password === userData.password)
    {
      setAccess(true)
      navigate('/home')
    }
    
  }

  useEffect(() => {
      !access && navigate('/');
 }, [access]);

 const cardsRepeated = function (dataId){
  const repetido = []
  characters.map((elemento) => {
    if(elemento.id === dataId){
      repetido.push('personaje repetido')
    } 
 })
  return repetido
 }
 

  const onSearch = (character) => { //character es el valor que manda el boton add al clickearlo 
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {       
         if (data.name) {
          const repetidas = cardsRepeated(data.id)
          repetidas.length === 0 ? setCharacters((oldChars) => [...oldChars, data]) : alert("No se pueden agregar personajes repetidos")
         } else {
            alert('No hay personajes con ese ID');
         }
      }
      );
  }

  const dispatch = useDispatch()
  const myFavorites = useSelector(state => state.myFavorites)

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
    dispatch(deleteFavorite(id))  
  }

  return ( 
    <div className='App' >
      {
        location.pathname !== '/' && <NavBar onSearch={onSearch}/>          
      }
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>   
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
