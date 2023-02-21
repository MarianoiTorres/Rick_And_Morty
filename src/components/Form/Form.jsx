import { useState } from "react"
import validation from "./validation"
import style from './Form.module.css'
import image from '../../img/AA.png'

export default function Form ({login}){

    const [userData, setUserData] = useState({
        username: 'user@gmail.com',
        password: 'password1'
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''        
    })

    const handleInputChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    setErrors( // --------------------???------------------------
        validation({
            ...userData,
            [event.target.name]: event.target.value
        })
    )
    }

    const handleSubmit = (event) => {
        login(userData)
    }

    return (
        <div className={style.container}>
            <div className={style.center}>       
                <form  onSubmit={handleSubmit} className={style.form}>
                    <img className={style.logo} src={image} alt="" />
                        <div className={style.labelAndInputs}>
                            <input placeholder="Username" autoComplete="off" className={errors.username ? style.box : style.inputLogin} type="text" name='username' onChange={handleInputChange} value={userData.username}/>
                            <br />
                            <input placeholder="Password" autoComplete="off" className={errors.password ? style.box : style.inputLogin} type="password" name='password' onChange={handleInputChange} value={userData.password}/>
                        </div>
                    <button className={style.buttonLogin}>LOGIN</button>
                </form>                            
            </div>
        </div>

    )
}