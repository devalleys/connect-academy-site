import Link from 'next/link';

export const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4 bg-gray-200 rounded-3xl px-3 py-1">
        <Link
          href="/"
          className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          HOME
        </Link>

        <Link
          href="/about-us"
          className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          ABOUT US
        </Link>
        <Link
          href="/services"
          className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          SERVICES
        </Link>
        <Link
          href="/training-courses"
          className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          TRAINING & COURSES
        </Link>
        <Link
          href="/connect"
          className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          CONNECT
        </Link>
      </div>
    </div>
  );
};
