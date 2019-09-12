import React from 'react'

export default function checkMovieStatus(status) {
  let statusClassName;
  if(status.toLowerCase() === 'released'){
    statusClassName = 'text-primary';
  }
  return (
    <p className={statusClassName}>{status}</p>
  )
}
