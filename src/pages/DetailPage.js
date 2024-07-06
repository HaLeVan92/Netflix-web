import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../app/apiService';
import { API_KEY } from '../app/config';
import Chip from '@mui/material/Chip';

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
    <div className="background" style={{backgroundRepeat:"no-repeat", backgroundSize: 'cover' ,backgroundImage: `url("https://image.tmdb.org/t/p/original/${details?.backdrop_path}")`,
     width:'100vw',
     height:'100vh',
     
      }}>
      <div className='detail'>

        <div className='detailImage'>
          <img src={`https://image.tmdb.org/t/p/original/${details?.poster_path}`} alt='Movie 1' width='360' height='500'/>
        </div>

        <div className='detailInfo'>
          <h1 className='original'>{details?.original_title}</h1>
          <h3 className='date'>Release Date: 
          <Chip label={details?.release_date} color="primary" />
          </h3>
          <h3 className='vote'>Vote: 
          <Chip label={details?.vote_average} color="success" />
          </h3>
          <h3 className='overView'>Overview: {details?.overview}</h3>
        </div>
        
      </div>
    </div>
  )
}
// style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${details?.poster_path}")` , width:'100%', height:'100%'}}
export default DetailPage
// res.cloudinary.com/dadolad8q/video/upload/v1720084663/ATLAS_-_Official_Trailer_-_Netflix_kqojyr.mp4