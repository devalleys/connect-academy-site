'use client';

import React from 'react';
import Image from 'next/image';

export interface ChooseUsGridProps {
  src: string;
  alt: string;
  imageCut: '1/2' | '2/1' | 'square';
}

export const ChooseUsGrid: React.FC<ChooseUsGridProps> = (props) => {
  const { src, alt, imageCut } = props;

  return (
    <div
      className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
        imageCut === '1/2' ? 'col-span-1 row-span-2 aspect-[1/2]' : ''
      } ${imageCut === '2/1' ? 'col-span-2 row-span-1 aspect-[2/1]' : ''} ${
        imageCut === 'square' ? 'col-span-1 row-span-1 aspect-square' : ''
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 35vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
      />

      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-100"></div>
    </div>
  );
};
