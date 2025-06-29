'use client';
import { useMobileNavStore } from '@/stores/useMobileNavStore';
import Link from 'next/link';
import React, { useState } from 'react';

export const MobileNavigationDrawer: React.FC = () => {
  const { isDrawerOpen, closeDrawer } = useMobileNavStore();
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isTrainingExpanded, setIsTrainingExpanded] = useState(false);

  const digitalMarketingServices = [
    'SOCIAL MEDIA MANAGEMENT',
    'SEO',
    'VIDEO + PHOTO PRODUCTION',
    'BRAND CULTURE VIDEOS',
    'COMPANY SHORT DOCUMENTARY',
    'COMMERCIALS & ADS',
    'CASE STUDIES & TESTIMONIALS',
    'LIVE EVENT RECORDING',
    'EVENT RECAPS LIVE',
    'EVENT PHOTOGRAPHY BRAND',
    'PHOTOSHOOTS PRODUCT',
    'PHOTOGRAPHY',
    'EVENTS MANAGEMENT',
    'WEBSITE DEVELOPMENT',
  ];

  const comprehensiveTrainingCourses = [
    'Virtual Assistant 101',
    'GRAPHIC & DESIGN',
    'SOCIAL MEDIA MANAGEMENT',
    'CUSTOMER SERVICE & SALES',
    'PROJECT MANAGEMENT',
    'PERSONALITY DEVELOPMENT',
    'COMMUNICATION',
    'TEAM MANAGEMENT LEADERSHIP',
    'SKILL TRAINING TEAM',
    'BUILDING/SYNERGY DEVELOPMENT',
  ];

  return (
    <div className={`md:hidden ${isDrawerOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 z-[100] bg-black bg-opacity-50">
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-500 ease-in-out z-[101] ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={closeDrawer}
              className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <nav className="mt-4 px-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
            <Link
              href="/"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              About Us
            </Link>

            {/* Services Section */}
            <div className="space-y-1">
              <button
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
              >
                <span>Services</span>
                <svg
                  className={`h-5 w-5 transform transition-transform duration-200 ${
                    isServicesExpanded ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesExpanded && (
                <div className="ml-4 space-y-1">
                  <Link
                    href="/services"
                    onClick={closeDrawer}
                    className="block px-3 py-1 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    View All Services
                  </Link>
                  <div className="border-l-2 border-gray-200 ml-3 pl-3 space-y-1">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Digital Marketing Services
                    </p>
                    {digitalMarketingServices.map((service, index) => (
                      <Link
                        key={index}
                        href="/services"
                        onClick={closeDrawer}
                        className="block px-2 py-1 rounded text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Training & Courses Section */}
            <div className="space-y-1">
              <button
                onClick={() => setIsTrainingExpanded(!isTrainingExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
              >
                <span>Training & Courses</span>
                <svg
                  className={`h-5 w-5 transform transition-transform duration-200 ${
                    isTrainingExpanded ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isTrainingExpanded && (
                <div className="ml-4 space-y-1">
                  <Link
                    href="/training-courses"
                    onClick={closeDrawer}
                    className="block px-3 py-1 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    View All Courses
                  </Link>
                  <div className="border-l-2 border-gray-200 ml-3 pl-3 space-y-1">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Comprehensive Training Courses
                    </p>
                    {comprehensiveTrainingCourses.map((course, index) => (
                      <Link
                        key={index}
                        href="/training-courses"
                        onClick={closeDrawer}
                        className="block px-2 py-1 rounded text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      >
                        {course}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/connect"
              onClick={closeDrawer}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              Connect
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
