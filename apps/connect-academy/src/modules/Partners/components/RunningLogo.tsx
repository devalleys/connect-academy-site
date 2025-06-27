import React from 'react';
import Image from 'next/image';

export const RunningLogo: React.FC = () => {
  const partnerLogos = [
    'aftercall_logo.png',
    'claro_vista.png',
    'gtcd_logo.png',
    'jlp_logo.png',
    'limatech_logo.png',
    'makina_cart_logo.png',
    'mountain_logo.png',
    'moythworks_logo.png',
    'reci_logo.png',
  ];

  return (
    <div className="running-logo-with-mask-container">
      <div className="flex flex-row animate-slide gap-8 items-center justify-center w-max h-[200px]">
        {/* First set of logos */}
        {partnerLogos.map((logo, index) => (
          <div key={`first-${index}`} className="flex-shrink-0">
            <Image
              src={`/partners/${logo}`}
              alt={`Partner ${index + 1}`}
              width={300}
              height={300}
              className="h-32 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
        {/* Second set for seamless loop */}
        {partnerLogos.map((logo, index) => (
          <div key={`second-${index}`} className="flex-shrink-0">
            <Image
              src={`/partners/${logo}`}
              alt={`Partner ${index + 1}`}
              width={300}
              height={300}
              className="h-32 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
