import React from 'react';
import './Post.css';


const Item = (props) => {
    //console.log(props.dataPost)
    //  userId={e.userId} title={e.title} body={e.body}
  //  const data = props.dataPost
    //console.log(data)
    return (
        <div className="item">
            <p>{props.userId}</p>
            <p>{props.title}</p>
            <div>{props.body}</div>
        </div>
    );
}

export default Item;