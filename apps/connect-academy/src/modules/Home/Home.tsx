import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="h-fit flex-col items-start justify-start">
        <div className="flex flex-col items-center justify-start md:flex-row">
          <video
            className="inset-0 w-full max-w-[639px] h-[700px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/home/empower_your_brand.mp4" type="video/mp4" />
          </video>
          <h1 className="text-yellow-600 text-7xl font-bold text-left pl-12 pt-12">
            Where your Success Journey Begins
          </h1>
        </div>

        <p className="text-3xl font-semibold text-center my-16">
          We’re redefining digital growth for purpose-driven brands and
          professionals—combining human creativity with an AI-powered approach
          in web design, digital marketing, and comprehensive training.
        </p>
      </div>
    </div>
  );
};
