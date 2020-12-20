import React from 'react';
//import s from './Navbar.module.css';
//import {Link} from "react-router-dom";
import Item from './Item';
const Profaile = (props) => {
    return (

        <div>
            {props.photo.map((e) =>
                <Item key={e.id} url={e.url} id={e.id} thumbnailUrl={e.thumbnailUrl} />
            )

            }
        </div>

    )
}

export default Profaile;