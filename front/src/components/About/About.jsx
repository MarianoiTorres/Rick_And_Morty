import style from './About.module.css'
import imgIg from '../../img/ig.png'
import imgGit from '../../img/git.png'
import imgLink from '../../img/link.png'

export default function About(){
    return (
        <div className={style.contenedor}> 
            <div className={style.posicion}>
                <div className={style.info}>
                    <p className={style.about}>Tengo 19 años, soy un estudiante de la Tecnicatura Superior en Programación en la UTN y también de la carrera Full Stack Web Developer en el bootcamp <b className={style.henry}>SoyHenry</b>
                    </p>  
                    <br /><br />
                    <div className={style.containerRedes}>
                        <a href='https://www.instagram.com/mariano0o0/' target='__blank'><button className={style.boton}><img src={imgIg} className={style.img}></img></button></a>
                        <a href='https://github.com/MarianoiTorres' target='__blank'><button className={style.boton}><img src={imgGit} className={style.img}></img></button></a>                        
                        <a href='https://www.linkedin.com/in/mariano-torres-1b717b236/' target='__blank'><button className={style.boton}><img src={imgLink} className={style.img}></img></button></a>
                    </div>
                </div>                 
                <div className={style.title}>
                    <h1 className={style.name}>HOLA, SOY <b className={style.b}>MARIANO TORRES</b>!</h1>     
                </div>           
            </div>
        </div>
    )
}