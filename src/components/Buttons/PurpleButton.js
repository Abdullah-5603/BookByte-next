"use client"
import React from 'react';

const PurpleButton = ({children, className}) => {
    return (
        <button className={`${className} bg-purple-600 font-semibold text-white hover:bg-transparent px-3 py-2 rounded-lg`}>{children}</button>
    );
};

export default PurpleButton;