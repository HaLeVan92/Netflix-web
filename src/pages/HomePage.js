import React from 'react'
import List from '../components/List'


const HomePage = () => {
  return (
    <div>
      <List dataMovie={'now_playing'} title={'Now-playing'}/>
      <List dataMovie={'popular'} title={'Popular'}/>
      <List dataMovie={'top_rated'} title={'Top-rated'}/>
      <List dataMovie={'upcoming'} title={'Upcoming'}/>

    </div>
    
  )
}

export default HomePage
