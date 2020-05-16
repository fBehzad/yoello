import React from 'react';
 const DeleteIcon = ({ size = 24, color = '#000', className, ...rest }) => {
  return<svg className={className} xmlns="http://www.w3.org/2000/svg"
             width={size} height={size}
             viewBox="0 0 32 32"
             {...rest}
  >
    <title/><g data-name="Layer 51" id="Layer_51"><path d="M3,9H5V24.46C5,27.58,8.52,30,11.54,30h8.92c3,0,6.54-2.42,6.54-5.54V9h2a1,1,0,0,0,0-2H23.93C23.59,4.53,21.82,2,16,2S8.41,4.53,8.07,7H3A1,1,0,0,0,3,9ZM16,4c4.38,0,5.6,1.51,5.91,3H10.09C10.4,5.51,11.62,4,16,4Zm9,5V24.46C25,26.33,22.46,28,20.46,28H11.54C9.54,28,7,26.33,7,24.46V9Z"/><path d="M16,26a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0V25A1,1,0,0,0,16,26Z"/><path d="M11,26a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0V25A1,1,0,0,0,11,26Z"/><path d="M21,26a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0V25A1,1,0,0,0,21,26Z"/></g>
  </svg>;
};

export  default DeleteIcon
