import React from 'react'


const Main = () => {
  return(
    <div className="homeBanner">
          {/* <iframe src="https://res.cloudinary.com/dadolad8q/video/upload/v1720084663/ATLAS_-_Official_Trailer_-_Netflix_kqojyr.mp4"
           type="video/mp4"
            allowfullscreen={true}
            height='100%'
            width='100%'
            title='Trailer'
            />  */}
      <video class="videoIntro" controls autoplay >
          <source src="https://res.cloudinary.com/dadolad8q/video/upload/v1720084663/ATLAS_-_Official_Trailer_-_Netflix_kqojyr.mp4"  type="video/mp4"/>        
      </video>
      <div className="infoIntro">
        <h1 className="headingIntro">
          <span className='colorText'>NETFLIX</span>  | ATLAS
        </h1>
        <p className='overViewIntro'>
        A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.
        </p>
      </div>
      
    </div>
  )
}

export default Main;