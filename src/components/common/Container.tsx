import React from 'react';

export default function Container({
    className, 
    children,
    ...props
}:{
    className?: string;
    children: React.ReactNode;
}){

    return(
      <div className={`max-w-2xl mx-auto px-4 ${className}`}>
        {children}
      </div>
    )

}