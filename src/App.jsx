import { useEffect, useState } from 'react'
import axios from "axios"

import "./app.css"

function App() {
  const [data, setdata] = useState();
  const [name, setname] = useState("apple");

  const api = `https://newsapi.org/v2/everything?q=${name}&from=2024-08-04&to=2024-08-04&sortBy=popularity&apiKey=697a84db0dd447a68af8b975de4ff367`;

  useEffect(() => {
    axios.get(api).then((res) => {
      setdata(res.data)
      console.log(res.data)
    }).catch((err) => {

      console.log(err, "server error")
    })
  }, [name])
  return (

    <div className='container'>
      <nav className='logo'>
        <h1 >NdTche</h1>
        <h1 className='p'> nati daily news</h1>
      </nav>
      <input type="text"
        placeholder='enter news name'
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <div className='news-content'>
        {data ? (data.articles.map((articl, index) => (
          <div className="article" key={index}>
            <h2 > author {articl.author}</h2>
            <h3> title {articl.title}</h3>
            <p> {articl.description}</p>
            <img className='articleimg' src={articl.urlToImage} /></div>
        ))) : <div>no aricle</div>}

      </div>
    </div>

  )
}

export default App
