import React from 'react';
import "./addPost.css"
import PhotoIcon from '@mui/icons-material/Photo';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="./images/1.jpeg" alt="" className="addPostPic" />
                <input type="text" className="addPostInput" placeholder='Whats in your mind'/>
            </div>
            <hr className='postHr' />
            <div className="addPostBottom">
                <div className="addPostOptions">
                  <div className="addPostOption">
                        <PhotoIcon htmlColor='yellow' className='addPhoto' />
                        <span className="addPostOptionText">Add Photo / Video</span>
                  </div>
                  <div className="addPostOption">
                        <AddLocationAltIcon htmlColor='red' className='addPhoto' />
                        <span className="addPostOptionText">Add Location</span>
                  </div>
                  <div className="addPostOption">
                        <LocalOfferIcon htmlColor='blue' className='addPhoto' />
                        <span className="addPostOptionText">Tag friends</span>
                  </div>
                  <div className="addPostOption">
                        <AddReactionIcon htmlColor='tomato' className='addPhoto' />
                        <span className="addPostOptionText">Feeling</span>
                  </div>
                  <button className="postButton">Post</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AddPost