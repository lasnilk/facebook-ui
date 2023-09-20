import React from 'react'
import "./center.css"
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'

function Center() {
  return (
    <div className='centerSection'>
      <AddPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Center