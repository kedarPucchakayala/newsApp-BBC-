import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const Home = (props) => {

    const [news,setNews] = useState([]);


    const getNews = async ()=>{
        await fetch(`https://newsapi.org/v2/everything?q=${props.menu ? props.menu:"All"}&from=2023-12-07&sortBy=popularity&apiKey=128c89e0282e4d3595e4be9336ac0f8a`)
        .then(res => res.json())
        .then(json => setNews(json.articles))
    }

    useEffect(()=>{
        getNews()
    },[news])

   
  return (
    <div className='grid grid-cols-4 p-5 mt-17 gap-3'>
      {news?.filter(data => data.title.includes(props.search)).map((data) => {
        return <>
          <Link to='/details' state={{data:data}}><div class="max-w-sm rounded overflow-hidden shadow-lg">
           <img class="w-full" src={data.urlToImage} alt="Sunset in the mountains"/>
           <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{data.title}</div>
             <p class="text-gray-700 text-base">
                  {data.content}
             </p>
            </div>
  
           </div>
           </Link>
        </>
      })}
    </div>
  )
}

export default Home
