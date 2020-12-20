import React from 'react';
//import Item from './Iteam.js'

const User = (props) => {
    const data=props.dataU[0];
    return (
        <div>
            <p>Name : {data.name}</p>
            <p>Username : {data.username}</p>
            <p>Email : {data.email}</p>
            <p>City : {data.address.city}</p>
            <p>Website : {data.website}</p>
            {
                console.log(props.dataU[0].name)
              /*  props.dataU.map((e) =>
                    <Item key={e.id} userId={e.userId} title={e.title} body={e.body}/>
                )*/
            }
        </div>
    );
}

export default User;