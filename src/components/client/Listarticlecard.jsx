import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cardarticle from './Cardarticle';
const Listarticlescard = () => {
    const [articles, setArticle] = useState([]);
        
        
    const loadArticles = async () => {
        try{

       
     await axios.get("http://localhost:3001/api/articles")
      .then (res=>{

     setArticle(res.data)
   console.log(res.data)
      }
       )}
 catch (error){
    console.log(error)
}

}
useEffect(() => {
loadArticles();
}, []);

 
 
 
    return (
    <div>
        {
            articles.map((art,index)=>
       <Cardarticle article={art}/>
            )    
        }

    
    </div>
  )
}

export default Listarticlescard