import React from 'react'

export const pagination = () => {
    let pages = [];

    for (let i = 0; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i);        
    }

  return (
    <div>pagination</div>
  )
}
