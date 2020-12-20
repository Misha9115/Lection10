import React from 'react';
import Item from './Item.js'

const List = (props) => {

    if (props.flag === 0) {

        return (

            <div>
                <button onClick={() => { props.all() }}>все</button>
                <button onClick={() => { props.tr() }}>сделано</button>
                <button onClick={() => { props.fl() }}>надо</button>
                {props.dataPost.map((e) =>
                    <Item key={e.id}
                        userId={e.userId}
                        title={e.title}
                        completed={e.completed} />)
                }
            </div>
        );
    }
    if (props.flag === 1) {
        return (
            <div>
                <button onClick={() => { props.all() }}>все</button>
                <button onClick={() => { props.tr() }}>сделано</button>
                <button onClick={() => { props.fl() }}>надо</button>
                {props.dataPost.filter(e => e.completed === true).map((filterWork) =>
                    <Item key={filterWork.id}
                        userId={filterWork.userId}
                        title={filterWork.title}
                        completed={filterWork.completed} />)
                }
            </div>
        );
    }
    if (props.flag === 2) {
        return (
            <div>
                <button onClick={() => { props.all() }}>все</button>
                <button onClick={() => { props.tr() }}>сделано</button>
                <button onClick={() => { props.fl() }}>надо</button>
                {props.dataPost.filter(e => e.completed === false).map((filterWork) =>
                    <Item key={filterWork.id}
                        userId={filterWork.userId}
                        title={filterWork.title}
                        completed={filterWork.completed} />)
                }
            </div>
        );
    }

}
export default List;

