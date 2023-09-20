import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import Left from '../../components/LeftSection/Left'
import Center from '../../components/CenterSection/Center'
import Right from '../../components/RightSection/Right'
import './home.css'


function Home() {
  return (
    <div>
        <NavBar />
        <div className="bottomContainer">
            <Left />
            <Center />
            <Right />
        </div>

    </div>
  )
}

export default Home