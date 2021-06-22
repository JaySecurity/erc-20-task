import React from 'react';
import './Card.css';

export const Card = ({post}) => {
  return (
    <div className='Card'>
      <div className="header"></div>
      <div className="content">
        <span><button>Follow</button></span>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <div className="avatar"></div>
    </div>
  )
}

export default Card;