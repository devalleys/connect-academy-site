import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-50 text-black-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="relative h-[60px] w-[200px]">
              <Image
                src={'/connect_academy_logo.png'}
                alt="connect-academy-logo"
                width={150}
                height={200}
              />
            </Link>
            <p className="text-black-300">
              Empowering students through interactive learning and expert
              guidance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black-300 hover:text-sky-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-black-300 hover:text-sky-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-black-300 hover:text-sky-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/training-courses"
                  className="text-black-300 hover:text-sky-600"
                >
                  Training & Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/connect"
                  className="text-black-300 hover:text-sky-600"
                >
                  Connect
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-black-300 hover:text-sky-600"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-black-300 hover:text-sky-600"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black-300 hover:text-sky-600">
                Twitter
              </a>
              <a href="#" className="text-black-300 hover:text-sky-600">
                LinkedIn
              </a>
              <a href="#" className="text-black-300 hover:text-sky-600">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-black-300">
          <p>
            © {new Date().getFullYear()} Connect Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
