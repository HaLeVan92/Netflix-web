import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../app/apiService';
import { API_KEY } from '../app/config';


function DetailPage() {
  const {id} = useParams();
  // console.log(id)
  const [details, setDetails] = useState();
 
  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.get(`/movie/${id}?api_key=${API_KEY}`);
      // console.log(data);
      setDetails(data.data);
    }
    fetchData();
  },[id])
  console.log(details)
  return (
    <div className="background" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500/${details?.backdrop_path}")`,
    //  width:'100%',
    //  height:'100%',
     
      }}>
      <div className='detail'>
        <h1 className='original'>{details?.original_title}</h1>
        <h3 className='date'>Release Date: {details?.release_date}</h3>
        <h3 className='vote'>Vote: {details?.vote_average}</h3>
        <h3 className='overView'>Overview: {details?.overview}</h3>
        
      </div>
    </div>
  )
}
// style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${details?.poster_path}")` , width:'100%', height:'100%'}}
export default DetailPage
// res.cloudinary.com/dadolad8q/video/upload/v1720084663/ATLAS_-_Official_Trailer_-_Netflix_kqojyr.mp4