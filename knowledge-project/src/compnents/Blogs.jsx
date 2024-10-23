import { useEffect, useState } from "react";
import Blog from "./Blog";





const Blogs = ({hendleBtn}) => {
     const[count,setCount]=useState([])
     useEffect(()=>{
          fetch('Blogs.json')
          .then(res=>res.json())
          .then(data=>setCount(data))
     },[])
     return (
          <div >
              <h1 className="text-2xl font-bold ">Blogs</h1>
               {
                    count.map(p=><Blog key={p.id} alData={p} hendleBtn={hendleBtn}></Blog>)
               }
          </div>
     );
};

export default Blogs;



