import React from 'react'

function PostCard(props) {
  return (
    <div className='post-card'>
      <h1>{props.id}</h1>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default PostCard