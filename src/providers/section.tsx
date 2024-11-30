'use client';

import * as React from 'react';
import Navbar from '@/components/nav';
const Section = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <main className=" mt-16 flex min-h-screen items-center justify-center md:mt-0">
      <Navbar />
      {children}
    </main>
  );
};

export { Section };
