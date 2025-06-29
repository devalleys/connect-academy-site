import Link from 'next/link';

export const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex flex-row flex-nowrap items-center justify-center space-x-4 bg-transparent rounded-3xl px-3 py-1 transition-all duration-500  backdrop-blur-3xl shadow-lg">
        <Link
          href="/"
          className="px-3 py-2 rounded-md text-sm font-semibold text-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 [text-shadow:_1px_1px_0px_rgba(255,255,255,0.6),_-1px_-1px_0px_rgba(255,255,255,0.6),_1px_-1px_0px_rgba(255,255,255,0.6),_-1px_1px_0px_rgba(255,255,255,0.6)]"
        >
          HOME
        </Link>

        <Link
          href="/about-us"
          className="px-3 py-2 rounded-md text-sm text-center font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 [text-shadow:_1px_1px_0px_rgba(255,255,255,0.6),_-1px_-1px_0px_rgba(255,255,255,0.6),_1px_-1px_0px_rgba(255,255,255,0.6),_-1px_1px_0px_rgba(255,255,255,0.6)]"
        >
          ABOUT US
        </Link>
        <Link
          href="/services"
          className="px-3 py-2 rounded-md text-sm text-center font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 [text-shadow:_1px_1px_0px_rgba(255,255,255,0.6),_-1px_-1px_0px_rgba(255,255,255,0.6),_1px_-1px_0px_rgba(255,255,255,0.6),_-1px_1px_0px_rgba(255,255,255,0.6)]"
        >
          SERVICES
        </Link>
        <Link
          href="/training-courses"
          className="px-3 py-2 rounded-md text-sm text-center font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 [text-shadow:_1px_1px_0px_rgba(255,255,255,0.6),_-1px_-1px_0px_rgba(255,255,255,0.6),_1px_-1px_0px_rgba(255,255,255,0.6),_-1px_1px_0px_rgba(255,255,255,0.6)]"
        >
          TRAINING & COURSES
        </Link>
        <Link
          href="/connect"
          className="px-3 py-2 rounded-md text-sm text-center font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 [text-shadow:_1px_1px_0px_rgba(255,255,255,0.6),_-1px_-1px_0px_rgba(255,255,255,0.6),_1px_-1px_0px_rgba(255,255,255,0.6),_-1px_1px_0px_rgba(255,255,255,0.6)]"
        >
          CONNECT
        </Link>
      </div>
    </div>
  );
};
