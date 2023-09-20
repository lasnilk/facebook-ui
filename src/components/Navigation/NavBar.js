import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css"

function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo'>Facebook</span>
        </div>

        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search for your friends' className='searchInput' />
            </div>
        </div>

        <div className="navBarRight">
            <div className="navBarLinks">
                <span className='navBarLink'>HomePage</span>
                <span className='navBarLink'>Profile</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon"> 
                    <div className="iconTags"><span className="iconTag">3</span></div>
                    <PersonIcon />
                </div>

                <div className="navBarIcon">
                     <div className="iconTags"><span className="iconTag">5</span></div>
                     <MessageIcon />
                </div>

                <div className="navBarIcon"> 
                     <div className="iconTags"><span className="iconTag">1</span></div>
                     <SettingsIcon />
                </div>

            </div>
            <div className="pic">
                <img src="images/1.jpeg" alt="" className="profilePicture" />
            </div>
        </div>
    </div>
  )
}

export default NavBar