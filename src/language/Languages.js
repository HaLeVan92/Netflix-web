import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import apiService from '../app/apiService';
// import { API_KEY } from '../app/config';



function Languages() {
  // const {languages} = useParams();
  // console.log(id)
  // const [language, setLanguage] = useState();
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await apiService.get(`/configuration/${languages}?api_key=${API_KEY}`);
  //     console.log(data);
  //     // setLanguage(data.data);
  //   }
  //   fetchData();
  // },[languages])


  return (
    <div>
       https://api.themoviedb.org/3/configuration/languages
    </div>
  )
}

export default Languages
