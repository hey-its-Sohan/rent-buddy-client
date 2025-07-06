import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Components/Context/AuthContext';

const AddPost = () => {

  const { user } = use(AuthContext)

  const handleAddPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addPost = Object.fromEntries(formData.entries());

    // send data to the database
    fetch('http://localhost:3000/roommates', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addPost)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          console.log('added post');
          Swal.fire({
            title: "Post Created Successfully!",
            icon: "success",
            draggable: true
          });
          form.reset()
        }
      })


  }

  return (
    <div className='max-w-screen-xl mx-auto px-10 md:px-7 lg:px-0'>

      <div className='text-4xl font-bold my-10 text-purple-500'>Add to Find Roommate</div>

      <form onSubmit={handleAddPost} className='mb-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <fieldset className="fieldset  bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Title </label>
            <input type="text" name='title' className="input w-full" placeholder="Enter Title " />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Location</label>
            <select name='location' className="select w-full">
              <option disabled={true}>Select Your Location</option>
              <option>Badda</option>
              <option>Banani</option>
              <option>Gulshan</option>
              <option>Mirpur</option>
              <option>Bashundhara</option>
              <option>Mohakhali</option>
              <option>Dhanmondi</option>
              <option>Uttara</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Rent Amount</label>
            <input type="text" name='rent' className="input w-full" placeholder="Enter Rent Amount" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Room Type</label>
            <select name='roomType' className="select w-full">
              <option disabled={true}>Select Your Room Type</option>
              <option>Single</option>
              <option>Double</option>
              <option>Shared</option>
              <option>Master Room</option>
              <option>Common Room</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Lifestyle Preferences</label>
            <select name='Lifestyle' className="select w-full">
              <option disabled={true}>Select Your Room Type</option>
              <option>Smoking</option>
              <option>Pets</option>
              <option>Night Owl</option>
              <option>No Smoking</option>
              <option>Student</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Description</label>
            <input type="text" name='description' className="input w-full" placeholder="Enter Description" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Contact Info </label>
            <input type="text" name='contact' className="input w-full" placeholder="Enter Contact Info " />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Availability</label>
            <select name='availability' className="select w-full">
              <option disabled={true}>Choose Availability</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
            {/* <input type="text" name='availability' className="input w-full" placeholder="Enter Availability" /> */}
          </fieldset>

          {
            user ? <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
              <label className="label text-cyan-500 text-lg ">User Email</label>
              <input readOnly type="text" name='email' className="input w-full cursor-not-allowed" defaultValue={user.email} />
            </fieldset> : <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
              <label className="label text-cyan-500 text-lg ">User Email</label>
              <input readOnly type="text" name='email' className="input w-full cursor-not-allowed" placeholder="User Email" />
            </fieldset>
          }
          {
            user ? <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
              <label className="label text-cyan-500 text-lg">User Name</label>
              <input readOnly type="text" name='name' className="input w-full cursor-not-allowed" defaultValue={user.displayName} />
            </fieldset> : <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
              <label className="label text-cyan-500 text-lg">User Name</label>
              <input readOnly type="text" name='name' className="input w-full cursor-not-allowed" placeholder="User Name" />
            </fieldset>
          }
        </div>

        {/* <div className='my-5'>
          <fieldset className="fieldset bg-base-200  border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Likes</label>
            <input readOnly type="text" name='likes' className="input w-full " placeholder="Likes" />
          </fieldset>
        </div> */}
        <div className='my-5'>
          <fieldset className="fieldset bg-base-200  border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Photo</label>
            <input type="text" name='photo' className="input w-full " placeholder="Enter Photo URL" />
          </fieldset>
        </div>

        <input type="submit" className='btn w-full text-lg text-white bg-cyan-500' value="Add Post" />
      </form>

    </div>
  );
};

export default AddPost;