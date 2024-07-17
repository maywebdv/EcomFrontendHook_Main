import React, { useEffect } from 'react'
import { fetcharticlesPagination } from '../../../services/articleservice';
const Listarticles = () => {
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
const [articles, setArticles] = useState([]);
const [limit, setLimit]=useState(5)

const fetchProducts=async(page,limit)=>{
    try{
    const res= await fetcharticlesPagination (page,limit)
    setArticles(res.data.products)
    setTotalPages(res.data.totalPages)
    console.log(res.data.totalPages)
    console.log(res.data.products)
}
catch(error){
alert("erreur de connexion au serveur ")
}}

useEffect(()=>{
    fetchProducts(currentPage,limit)
},[currentPage,limit])
return (
<div>

</div>
)
}
export default Listarticles