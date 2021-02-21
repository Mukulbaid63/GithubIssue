import React from 'react';
import '../App.css'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{margin:'25px'}}>
      
        {pageNumbers.map(number => (
         
            <a onClick={() => paginate(number)} className='page-link'>
              <span style={{padding:'12px',textDecorationLine:'none'}}>{number}</span>
            </a>
         
        ))}
     
    </nav>
  );
};

export default Pagination;
