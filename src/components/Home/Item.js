import React from 'react';
//simport './Post.css';


const Item = (props) => {
//<Item key={e.id} userId={e.userId} title={e.title} completed={e.completed}/>
if (props.id%5===0)
    return ( <><img src={props.thumbnailUrl}></img> <br/></>
    
    );
    if (props.id%5!=0)
    return <img src={props.thumbnailUrl}></img>

}

export default Item;