import React from 'react';

const AddPost = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>

      <div className='text-4xl font-bold my-10 text-purple-500'>Add to Find Roommate</div>

      <form className='mb-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <fieldset className="fieldset  bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Title </label>
            <input type="text" name='title' className="input w-full" placeholder="Enter Title " />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Location</label>
            <input type="text" name='location' className="input w-full" placeholder="Enter Your Location" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Rent Amount</label>
            <input type="text" name='rent' className="input w-full" placeholder="Enter Rent Amount" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Room Type</label>
            <input type="text" name='roomType' className="input w-full" placeholder="Enter Room Type" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">Lifestyle Preferences</label>
            <input type="text" name='lifestyle' className="input w-full" placeholder="Enter Lifestyle Preferences" />
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
            <input type="text" name='availability' className="input w-full" placeholder="Enter Availability" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg ">User Email</label>
            <input type="text" name='email' className="input w-full" placeholder="User Email" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-purple-500 rounded-box border p-4">
            <label className="label text-cyan-500 text-lg">User Name</label>
            <input type="text" name='name' className="input w-full" placeholder="User Name" />
          </fieldset>
        </div>

        <div className='my-5'>
          <input type="submit" className='btn w-full text-lg text-white bg-cyan-500' value="Add Post" />
        </div>
      </form>

    </div>
  );
};

export default AddPost;