'use client';

import React from 'react';
import { useMobileNavStore } from '@/stores/useMobileNavStore';

export const MobileNavigation: React.FC = () => {
  const { isDrawerOpen, toggleDrawer } = useMobileNavStore();

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleDrawer}
          className="inline-flex items-center justify-center p-2 rounded-md text-black  bg-gray-200/40  backdrop-blur-3xl shadow-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger icon */}
          <svg
            className={`${isDrawerOpen ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* Close icon */}
          <svg
            className={`${isDrawerOpen ? 'block' : 'hidden'} h-6 w-6 `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
