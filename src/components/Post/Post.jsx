import React from 'react'
import './post.css'

function Post() {
  return (
   <div className="post">
    <div className="postContainer">
        <div className="postTop">
            <img src="/images/2.jpeg" alt="" className="postProfileImg" />
            <span className="postUserName">Lasni Rathnayaka</span>
            <span className="postTime">10min ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">Hello friends</div>
        <img src="/images/2.jpeg" alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img src="/images/reactions/like.png" alt="" className="reactionPic" />
          <img src="/images/reactions/heart.png" alt="" className="reactionPic" />
          <img src="/images/reactions/wow.png" alt="" className="reactionPic" />
          <img src="/images/reactions/sad.png" alt="" className="reactionPic" />
          <img src="/images/reactions/HaHa.png" alt="" className="reactionPic" />
          <span className="likeCount">Lasni and 320 others</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">36 comments</span>
          </div>
        </div>
    </div>
   </div>
  )
}

export default Post