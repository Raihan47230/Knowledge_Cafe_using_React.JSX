import { useState } from "react"
import Blogs from "./compnents/Blogs"
import Bookmark from "./compnents/Bookmark"
import Header from "./Header/Header"


function App() {
  const[btn,setBtn]=useState([])
  const hendleBtn=(blog)=>{
    const newBtn=[...btn,blog]
    setBtn(newBtn)
  }

  return (
    <>    
    
      <Header></Header>
      <main className="w-10/12 mx-auto">
      <div className="lg:flex gap-20">
      <div className="lg:w-2/3 bg-gray-100"><Blogs hendleBtn={hendleBtn}></Blogs></div>
      <div className="lg:w-1/3 bg-slate-200"><Bookmark btn={btn} ></Bookmark></div>
      </div>
      </main>
    </>
  )
}

export default App


