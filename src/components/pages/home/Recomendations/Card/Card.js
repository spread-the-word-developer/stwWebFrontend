import React ,{useState} from 'react';

import style from './Card.module.css'
import { Link } from 'react-router-dom';






const Card = (props) => {
   
    const[hover, setHover] = useState(false)
   
    const hoverChange = () => {
        setHover(true);
    }
    const hoverChangeBack = () => {
        setHover(false);
    }


    return (
        <div className={style.card} onMouseOver = {hoverChange} onMouseLeave = {hoverChangeBack}>
            <Link to = {"/publication/"+props.publicationID}  >
            <div className= {style.card_inner}>
                <div className= {style.image_container}>
                    <img className = {style.image_item} src={`${process.env.REACT_APP_BACKEND_URL}`+props.imageLink} alt="book cover"/> 
                </div>
                <div className = {style.info_container} style = {hover ? {height:'100px',
    transition: 'ease-in-out 0.25s'}:{}}>
                    
                    <div className = {style.author_container}>
                        {props.authorname}
                    </div>
                    <div className= {style.bookname_container}>
                        {props.bookname}
                    </div>
    
                </div>
            </div>
            </Link>
        </div>   
    );
}

export default Card;