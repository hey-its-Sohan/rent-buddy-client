import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/Context/AuthContext';
import { Eye, Trash2, UserRoundPen } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyListings = () => {

  const [myList, setMyList] = useState([])
  const { user } = use(AuthContext)

  useEffect(() => {
    fetch(`https://rent-buddy-server-six.vercel.app/mypost/${user?.email}`)
      .then(res => res.json())
      .then((data) => {
        console.log('fetched data', data)
        setMyList(data)
      })
  }, [user?.email])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://rent-buddy-server-six.vercel.app/details/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              // remainig List
              const remainigLists = myList.filter(list => list._id !== id)
              setMyList(remainigLists)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });


            }
          })
      }
    });
  }

  return (
    <div className='max-w-screen-xl mx-auto mb-20 px-10 md:px-7 lg:px-0 md:my-30'>
      <h1 className='text-4xl font-bold text-purple-500 my-10'>My Post Lists</h1>
      <div className="overflow-x-auto rounded-box border border-purple-500 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='border-purple-500'>
              <th></th>
              <th className='text-xl text-cyan-500'>Name</th>
              <th className='text-xl text-cyan-500'>Location</th>
              <th className='text-xl text-cyan-500'>Title</th>
              <th className='text-xl text-cyan-500'>Room Type</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              myList.map((list, index) => <tr key={list._id}>
                <th className='text-lg text-slate-500'>{index + 1}</th>
                <td className='text-lg text-slate-500'>{list.name}</td>
                <td className='text-lg text-slate-500'>{list.location}</td>
                <td className='text-lg text-slate-500'>{list.title}</td>
                <td className='text-lg text-slate-500'>{list.roomType}</td>
                <th><Link to={`/post-details/${list._id}`}><button className='btn text-purple-500 hover:text-purple-700'><Eye /></button></Link></th>
                <th><Link to={`/updatepost/${list._id}`}><button className='btn text-cyan-500 hover:text-cyan-700'><UserRoundPen /></button></Link></th>
                <th><button onClick={() => handleDelete(list._id)} className='btn hover:text-red-500 text-purple-500'><Trash2></Trash2></button></th>
              </tr>)
            }


          </tbody>
        </table>
      </div>
      {/* {
        myList?.map(list => <MyPostLists key={list._id} list={list}></MyPostLists>)
      } */}
    </div>
  );
};

export default MyListings;