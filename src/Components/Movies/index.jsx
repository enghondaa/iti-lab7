import React from 'react'
import Axios from 'axios'
import { useEffect , useState } from 'react'
import MovieCards from '../MovieCards';
import Loading from '../Loading/Loading';

export default function Movies() {
let [trendingMovies , setTrendingMovies] = useState([]);
let [isLoading ,setIsLoading] = useState(true);
let apikey = 'f1aca93e54807386df3f6972a5c33b50';

   async function apiReceive()
   {  let {data} = await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`)
       data = data.results
       setTrendingMovies(data)
       setIsLoading(false)
    }
    
    useEffect(()=>{
        apiReceive()
    },[])
  return (
    <>
        <section className='bg-green mt-5 py-5'>
        <div className="container">
        <div className="row gy-3">
        {isLoading==false? trendingMovies.map((trendingMovie,index)=><MovieCards title={trendingMovie.title} imgSrc={trendingMovie.poster_path} key={index}/>):<Loading/>}
        </div>
        </div>
        </section>



    </>
  )
}
