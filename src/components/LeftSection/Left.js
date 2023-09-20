import React from 'react'
import "./left.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Left() {
  return (
    <div className='leftSection'>
      <div className="leftSectionContainer">
        <div className="leftMenu">
          <li className="leftMenuItem">
            <MarkUnreadChatAltIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Messages</span>
          </li>
          <li className="leftMenuItem">
            <GroupIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Groups</span>
          </li>
          <li className="leftMenuItem">
            <RssFeedIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Feed</span>
          </li>
          <li className="leftMenuItem">
            <FlagIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Pages</span>
          </li>
          <li className="leftMenuItem">
            <CalendarMonthIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Events</span>
          </li>
          <li className="leftMenuItem">
            <BuildIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Settings</span>
          </li>
          <li className="leftMenuItem">
            <SportsEsportsIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Games</span>
          </li>
          <li className="leftMenuItem">
            <NewspaperIcon className='leftMenuIcon'/>
            <span className="leftMenuText">News</span>
          </li>
          <li className="leftMenuItem">
            <WorkOutlineIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Jobs</span>
          </li>
          <li className="leftMenuItem">
            <AddShoppingCartIcon className='leftMenuIcon'/>
            <span className="leftMenuText">Market</span>
          </li>
          <hr />
          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
          <div className="pageListItems">
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          <li className="pageListItem">
            <img src="/images/1.jpeg" alt="" className="pageProfile" />
            <span className="pageName">Lasni</span>
          </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Left