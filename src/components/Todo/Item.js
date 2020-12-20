import React from 'react';

const Item = (props) => {


    return (
        <div className="item">
            <p>{props.userId}</p>
            <p>{props.title}</p>
            <div>{props.completed}</div>
        </div>
    );
}

export default Item;