import React from 'react';

const Book = ({name, url})=>{
  console.log(name,url);
  return(
    <div>
      <a href={url}>{name}</a>
    </div>
  )
}

export default Book;
