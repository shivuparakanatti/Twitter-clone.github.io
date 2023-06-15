import React,{useState,useEffect} from "react";
import axios from "axios";


const Home=()=>{
    const [posts,setPosts] = useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res=>{
        setPosts(res.data)
 
    })
    .catch(err=>{
        console.log(err)
    })

})

    return (
        <div className="flex flex-row  justify-between bg-slate-200 ">
          <div className="flex flex-col gap-5 w-2/3 p-2 m-3">
           
                {
                    posts.map(ele=>{
                        {
                            for (let i=0;i<=5;i++){
                                return (
                                    <div className="bg-white p-3 m-1">
                                        
                                        <h1>{ele.name}</h1>
                                        <p>{ele.body}</p>
                                       
                                    
                                        </div>
                                      
                                )
                                

                            }
                        }
                      
                    })
                

                }
               

          </div>
          <div className="flex flex-col  h-1/2 bg-white w-60 m-7">
            <div className="flex flex-col ">
                <h1 className="flex items-center justify-center">Users</h1>
                <div className="flex flex-row items-center justify-between mx-4  bg-white ">
                <h1 className="overflow-hidden">daiwfnkjnjswjkfboubwfjfbiburfbwi</h1>
                
                <button className="p-1 m-1">details</button>
                </div>
                
            </div>

          </div>
        </div>
    )
}

export default Home