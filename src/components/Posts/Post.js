import React from 'react';
import Item from './Iteam.js'

const Post = (props) => {
    //console.log(props.dataPost)
    const data = props.dataPost
    console.log(data)
    return (
        <div>
            {
                data.map((e) =>
                    <Item key={e.id} userId={e.userId} title={e.title} body={e.body}/>
                )
            }
        </div>
    );
}

export default Post;