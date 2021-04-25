import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post;
    return (
        <div>
            <h3><strong>id: {id}</strong>{title}</h3>
            <p>{body}</p>
            <button>show Comments</button>
        </div>
    );
};

export default Post;