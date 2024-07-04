import React from 'react'
import List from '../components/List'
// import List from '../components/List'

const HomePage = () => {
  return (
    <div>
      <List dataMovie={'now_playing'}/>
      <List dataMovie={'popular'}/>
      <List dataMovie={'top_rated'}/>
      <List dataMovie={'upcoming'}/>
    </div>
    
  )
}

export default HomePage
