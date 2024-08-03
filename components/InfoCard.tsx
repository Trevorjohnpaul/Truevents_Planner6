'use client'
import Link from 'next/link'
import React from 'react'

interface InfoCardProps {
    icon: string; // Assuming icon is a string representing an image path
    heading: string;
    detail: string;
  }

const InfoCard = ({icon, heading, detail}: InfoCardProps) => {
  return (
    <div className='card'>
      <img src={icon} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link href={'/'}>
        <button className='button'>LEARN MORE</button>
      </Link>
    </div>
  )
}

export default InfoCard