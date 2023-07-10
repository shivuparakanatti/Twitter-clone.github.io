import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
          setUsers(res.data)
          //console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        })

    },[])
   
  return (
    <div className="flex flex-row  justify-evenly  ">
           <div  className="flex flex-col   justify-center gap-5 w-1/3 p-2 mx-48 my-8">
      {currentItems &&
        currentItems.map((item) => (
        
         <div className="bg-slate-50 p-3 m-1 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200">

            <h1 className='font-bold text-lg '>{item.name}</h1>
            <h3>{item.body}</h3>
            </div>
            
            ))}
     </div>
     <div className="flex flex-col  h-3/2 bg-white w-3/2 mx-12 ">
            <div className="flex flex-col ">
                <h1 className="flex items-center justify-center font-bold text-2xl">USERS</h1>
                <div className="flex flex-col items-center justify-between   p-2 bg-white ">
                    {
                        users.map(user=>{
                            return(
                                <div className='flex flex-row p-2 bg-slate-100 gap-2 m-1'>
                                     <h1 className="overflow-hidden w-48 font-serif">{user.name}</h1>
                
                                      <button className="p-1 m-1 font-serif">details</button>

                                </div>
                            )
                        })
                    }
               
                </div>
                
            </div>

          </div>
            </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [posts,setPosts] = useState('')


  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);
 

  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res=>{
          setPosts(res.data)
          
   
      })
      .catch(err=>{
          console.log(err)
      })
  
  })

 


  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate className='flex flex-row gap-4  bottom-10 items-center justify-center p-2 m-2 '
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems