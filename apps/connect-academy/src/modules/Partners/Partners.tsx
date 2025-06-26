import React from 'react';
import Image from 'next/image';

export const Partners: React.FC = () => {
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
    <div className="w-full h-[800px] bg-gradient-to-b from-slate-900 via-blue-950 to-black relative overflow-hidden">
      {/* Radial gradient overlay for the elliptical effect */}
      <div className="absolute inset-0 bg-gradient-ellipse from-transparent via-slate-800/50 to-black/80 w-full text-center p-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
          <p className="text-4xl font-semibold text-white">Trusted By:</p>

          {/* Partner logos sliding animation */}
          <div className="w-full overflow-hidden">
            <div className="flex animate-slide gap-8 items-center w-max">
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

          <div>
            <p className="text-4xl font-bold text-white text-left">
              The Platform That Drives Digital Success:
            </p>
            <p className="text-4xl font-bold text-yellow-600">
              Marketing Intelligence
            </p>
          </div>
          <p className="text-4xl font-semibold text-white">
            An AI-powered platform built to streamline strategy, track
            performance, and accelerate brand growth—empowering businesses to
            unlock their full potential, scale smarter, and achieve measurable
            digital results.
          </p>
        </div>
      </div>
    </div>
  );
};
