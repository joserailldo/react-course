import '../../../styles.css'
import {Dribble, EmptyImage, Linkedin, X} from "../../assets/images"


export default function Content(props) {
    return (
        <div className='content-container'>
            <img src={props.image ? props.image: EmptyImage} alt="" className= "content-title" />
            <div className="content-title">
                <h1>{props.name}</h1>
                <h1>{props.role}</h1>
               
            </div>
            <p className='content-description'>
            {props.description}
            </p>

                      
            <div className="content-icons">
            <a href={props.Dribble}>
                <img src={Dribble}alt="_blank" />
            </a>
            
            <a href={props.Linkedin}>
                <img src={Linkedin}alt="_blank" />
            </a>
            
            <a href={props.X}>
                <img src={X}alt="_blank" />
            </a>

            </div>
        </div>
    )
}