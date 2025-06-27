import Link from 'next/link';
import Image from 'next/image';
import { FacebookLink } from './components/FacebookLink';
import { InstagramLink } from './components';

export const SocialMediaNavigation: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-12">
      <Link href="/" className="relative h-[60px] w-[200px]">
        <Image
          src={'/connect_academy_logo.png'}
          alt="connect-academy-logo"
          width={150}
          height={200}
        />
      </Link>

      <div className="flex flex-row gap-4 items-center w-full">
        <FacebookLink />
        <InstagramLink />
      </div>
    </div>
  );
};
