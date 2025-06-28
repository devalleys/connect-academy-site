import { QuickNavigation, SocialMediaNavigation } from './components';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-50 text-black-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-row flex-wrap items-start justify-start gap-12">
          <SocialMediaNavigation />
          <div className="flex-grow"></div>
          <QuickNavigation />
          <div>
            <h3 className="text-lg font-semibold mb-4">General Inquiries</h3>
            <p className="font-medium">hello@connect-academy.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="font-medium">Davao City, 8000, Philippines</p>
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
