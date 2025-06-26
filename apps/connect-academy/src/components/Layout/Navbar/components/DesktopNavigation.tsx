import Link from 'next/link';

export const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4 bg-gray-200 rounded-3xl px-3 py-1">
        <Link
          href="/"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          Home
        </Link>

        <Link
          href="/about-us"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          About Us
        </Link>
        <Link
          href="/services"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          Services
        </Link>
        <Link
          href="/training-courses"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          Training & Courses
        </Link>
        <Link
          href="/connect"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          Connect
        </Link>
      </div>
    </div>
  );
};
