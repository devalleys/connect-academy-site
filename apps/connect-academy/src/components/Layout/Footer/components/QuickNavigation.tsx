import Link from 'next/link';

export const QuickNavigation: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Navigation</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="text-black-300 hover:text-sky-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="text-black-300 hover:text-sky-600">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="text-black-300 hover:text-sky-600">
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
          <Link href="/connect" className="text-black-300 hover:text-sky-600">
            Connect
          </Link>
        </li>
        <li>
          <Link href="/events" className="text-black-300 hover:text-sky-600">
            Events
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-black-300 hover:text-sky-600">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};
