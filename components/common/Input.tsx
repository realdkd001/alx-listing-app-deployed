import React from 'react'
import { InputProps } from '@/interfaces'

const Input: React.FC<InputProps> = ({ label, style, placeholder, type }) => {
  return (
    <div className={`${style} flex flex-col justify-center items-center`}>
      <h5 className="w-full px-2 text-colorSecondary text-sm font-medium">{label}</h5>
      <input
        type={type === "date" ? "text" : type}
        placeholder={placeholder}
        onFocus={(e) => {
          if (type === "date") e.target.type = "date";
        }}
        onBlur={(e) => {
          if (type === "date" && !e.target.value) e.target.type = "text";
        }}
        className="w-full hover:cursor-pointer  text-gray-500 focus:border-coloraccent 
                   focus:ring-coloraccent focus:outline-0 rounded-full 
                   placeholder-gray-300 placeholder:text-xs"
      />
    </div>
  );
};

export default Input