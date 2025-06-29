'use client';

import Link from 'next/link';
import { useState } from 'react';

export const DesktopNavigation: React.FC = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);

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
    <div className="hidden md:block">
      <div className="ml-10 flex flex-row flex-nowrap items-center justify-center space-x-4 bg-gray-200/40 rounded-3xl px-3 py-1 transition-all duration-500  backdrop-blur-3xl shadow-lg">
        <Link
          href="/"
          className="px-3 py-2 rounded-md text-sm font-semibold text-center text-black hover:text-gray-900 hover:bg-gray-50"
        >
          HOME
        </Link>

        <Link
          href="/about-us"
          className="px-3 py-2 rounded-md text-sm text-center font-semibold text-black hover:text-gray-900 hover:bg-gray-50"
        >
          ABOUT US
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <Link
            href="/services"
            className="px-3 py-2 rounded-md text-sm text-center font-semibold text-black hover:text-gray-900 hover:bg-gray-50"
          >
            SERVICES
          </Link>

          {isServicesDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-[400px] bg-white/90 backdrop-blur-md shadow-xl rounded-lg border border-gray-200 z-50">
              <div className="p-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase">
                    Digital Marketing Services
                  </h3>
                  <ul className="space-y-2">
                    {digitalMarketingServices.map((service, index) => (
                      <li key={index}>
                        <Link
                          href="/services"
                          className="block text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsTrainingDropdownOpen(true)}
          onMouseLeave={() => setIsTrainingDropdownOpen(false)}
        >
          <Link
            href="/training-courses"
            className="px-3 py-2 rounded-md text-sm text-center font-semibold text-black hover:text-gray-900 hover:bg-gray-50"
          >
            TRAINING & COURSES
          </Link>

          {isTrainingDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-[400px] bg-white/90 backdrop-blur-md shadow-xl rounded-lg border border-gray-200 z-50">
              <div className="p-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase">
                    Comprehensive Training Courses
                  </h3>
                  <ul className="space-y-2">
                    {comprehensiveTrainingCourses.map((course, index) => (
                      <li key={index}>
                        <Link
                          href="/training-courses"
                          className="block text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                        >
                          {course}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          href="/connect"
          className="px-3 py-2 rounded-md text-sm text-center font-semibold text-black hover:text-gray-900 hover:bg-gray-50"
        >
          CONNECT
        </Link>
      </div>
    </div>
  );
};
