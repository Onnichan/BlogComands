import React from 'react';
import FormBlog from '../components/FormBlog';
import Board from '../components/Board';

export default function Home(){

  return (
    <div className="container">
      <Board/>
      <FormBlog />
    </div>
  )
} 