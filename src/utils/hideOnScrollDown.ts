"use client"

import React from 'react'
import { useState } from "react";

const [hide, setHide] = useState(false);
let lastScrollY = 0;

export const hideOnScrollDown = () => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY) {
        setHide(true);
        console.log('스크롤다운');
    } else {
        setHide(false);
        console.log('스크롤업');
        
    }
    lastScrollY = scrollY;    
    return hide;    
}

export default hideOnScrollDown