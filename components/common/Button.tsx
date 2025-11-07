import React from 'react'
import {ButtonProps} from '@/interfaces'

const Button: React.FC<ButtonProps> = ({label, onClick, style}) => {
  return (
    <div>
    <button className={`hover:cursor-pointer h-11.5 w-26 text-lg rounded-[70px]  ${style}`} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button