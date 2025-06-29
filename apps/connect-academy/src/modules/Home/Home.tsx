import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="h-fit flex-col items-start justify-start">
        <div className="relative h-[700px] w-full max-w-[639px] mx-auto">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/home/empower_your_brand.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-yellow-500 text-6xl md:text-8xl font-medium text-center px-4">
            Where your Success Journey Begins
          </h1>
        </div>

        <p className="text-3xl font-medium text-center p-16">
          We’re redefining digital growth for purpose-driven brands and
          professionals—combining human creativity with an AI-powered approach
          in web design, digital marketing, and comprehensive training.
        </p>
      </div>
    </div>
  );
};
