import React from 'react'

export default async function page({searchParams}: any) {

  const params = await searchParams
  
  const page=params.pageNo

  return (
    <div>
        {page.toString()}
    </div>
  )
}