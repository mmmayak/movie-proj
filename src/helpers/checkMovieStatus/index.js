import React from 'react'

export default function CheckMovieStatus({status}) {
  let statusClassName;
  if(status.toLowerCase() === 'released'){
    statusClassName = 'text-primary';
  }
  return (
    <p className={statusClassName}>{status}</p>
  )
}
