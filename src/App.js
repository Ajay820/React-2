import { useState } from "react"

 const App =()=>{

    const [title,setTitle] = useState('')
    const [body,setBody]=useState("")
    const [author,setAuthor] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        const  blog = {title,body,author}

        console.log(blog)

    }

    return(
        <div>
            <h1>Blog title</h1>
            <form onSubmit={handleSubmit}>
            <h3>Add a new Blog</h3>
            <input type="text" required value={title} 
            onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <h3>Blog Ttitle</h3>
            <textarea required
            value={body}
            onChange={(e)=>{setBody(e.target.value)}}></textarea>
            <h3>Blog Author</h3>
            <input type="text"
             required
             onChange={(e)=>{setAuthor(e.target.value)}}/>
              <div>
                <button>Add Blog</button>
              </div>
            </form>
               
            <h1>Title: {title}</h1>
            <h1>Body :{body}</h1>
            <h1>Author: {author}</h1>
       
        </div>
    )
 }


 export default App