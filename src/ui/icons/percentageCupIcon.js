import React from 'react';
 const PercentageIcon = ({ size = 24, color = '#000', className, ...rest }) => {
  return<svg className={className} xmlns="http://www.w3.org/2000/svg"
             width={size} height={size}
             viewBox="-265 388.9 64 64"
             {...rest}
  >
    <g><path d="M-237.8,436.9h-10c-0.9,0-1.5-1.1-1.1-2.1l19.6-29.1c0.2-0.5,0.6-0.9,1.1-0.9h10c0.9,0,1.5,1.1,1.1,2.1l-19.6,29.1   C-236.9,436.6-237.3,436.9-237.8,436.9z"/><circle cx="-245.3" cy="411.1" r="6.2"/><circle cx="-220.7" cy="430.7" r="6.2"/></g>
  </svg>;
};

export  default PercentageIcon
