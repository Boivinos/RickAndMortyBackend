import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Admin = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

const postCharacters = (data) => {
    console.log(data)
    axios.post(`http://localhost:5000/character`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
  
    return (
        <>       
            Crée ton personnage !
            <div className='formulaire'>
         <form onSubmit={handleSubmit((data) => postCharacters(data) )}>
            <div className="inputBloc">
        <p>Name:</p>
         <input {...register('name', { required: true })} />
         {errors.name && <p className='error'>Name is required.</p>}
         </div>
         <div className="inputBloc">
         <p>Status:</p>
         <input {...register('status', { required: true })} />
         {errors.status && <p className='error'>Status is required</p>}
         </div>
         <div className="inputBloc">
         <p>Origin:</p>
         <input {...register('origin', { required: true })} />
         {errors.origin && <p className='error'>Origin is required</p>}
         </div>
         <div className="inputBloc">
         <p>Created:</p>
         <input {...register('created', { required: true })} />
         {errors.created && <p className='error'>Creation Date is required</p>}
         </div>
         <div className="inputBloc">
         <p>Image URL:</p>
         <input {...register('image', { required: true })} />
         {errors.image && <p className='error'>Image url is required</p>}
         </div>
         <input type="submit" className='submit'/>
       </form>
       </div>
       </>
    );
};

export default Admin;