import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listarticles from "./components/admin/artices/Listarticles";
import Insertarticle from "./components/admin/artices/Insertarticle";
import Editarticle from "./components/admin/artices/Editarticle";
import Viewarticle from "./components/admin/artices/Viewarticle";
import Insertcategorie from "./components/admin/categories/Insertcategorie";
import Editcategorie from "./components/admin/categories/Editcategorie";
import Listcategories from "./components/admin/categories/Listcategories";
import Insertscategorie from "./components/admin/scategories/Insertscategorie";
import Editscategorie from "./components/admin/scategories/Editscategorie";
import Listscategories from "./components/admin/scategories/Listscategories";
import Viewscategorie from "./components/admin/scategories/Viewscategorie";
import Viewcategorie from "./components/admin/categories/Viewcategorie";




const App=() =>{
  return (
    <>
     <Router>
      <Menu/>
      <Routes>
        <Route path="/articles/list" exact element={<Listarticles/>}/>
        <Route path="/articles/insert/add" exact element={<Insertarticle/>}/>
        <Route path="/articles/edit/:id" exact element={<Editarticle/>}/>
        <Route path="/articles/View/:id" exact element={<Viewarticle/>}/>
        <Route path="/categories/insert/add" exact element={<Insertcategorie/>}/>
        <Route path="/categories/Edit/:id" exact element={<Editcategorie/>}/>
        <Route path="/categories/List" exact element={<Listcategories/>}/>
        <Route path="/scategories/insert/add" exact element={<Insertscategorie/>}/>
        <Route path="/scategories/Edit/:id" exact element={<Editscategorie/>}/>
        <Route path="/scategories/List" exact element={<Listscategories/>}/>
        <Route path="/categories/View/:id" exact element={<Viewcategorie/>}/>
        <Route path="/scategories/View/:id" exact element={<Viewscategorie/>}/>
      </Routes>
     </Router>
    </>
  )
}
export default App
