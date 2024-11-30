'use client';
import React from 'react';
import { Toggle } from '@/components/common/theme-toggle';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-16  bg-opacity-50 backdrop-blur-md flex justify-end items-center p-4">
      <Toggle />
    </div>
  );
};

export default Navbar;
