import Image from 'next/image'
import React from 'react'

const ImageCard = ({ title }) => {
  return (
    <div>
        <Image
            src={title}
            alt='image'
        />
    </div>
  )
}

export default ImageCard