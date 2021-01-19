import React, { Component } from 'react';
import { useForm } from "react-hook-form";

function FormBlog(){

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <div class="Form-container">
      <form className="Form-content" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        input
        <input name="example" defaultValue="test" ref={register} placeholder="Ingrese el comando"/>
        
        {/* include validation with required or other standard HTML validation rules */}
        {/* <input name="exampleRequired" ref={register({ required: true })} /> */}

        <textarea name="" id="" cols="30" rows="8">

        </textarea>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}  
        <input type="submit" />
      </form>
    </div>
  )
}

export default FormBlog;