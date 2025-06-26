import React from 'react';

export const Partners: React.FC = () => {
  return (
    <div className="w-full h-[800px] bg-gradient-to-b from-slate-900 via-blue-950 to-black relative overflow-hidden">
      {/* Radial gradient overlay for the elliptical effect */}
      <div className="absolute inset-0 bg-gradient-ellipse from-transparent via-slate-800/50 to-black/80 w-full text-center p-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
          <p className="text-3xl font-semibold text-white">Trusted By:</p>
          <p className="text-3xl font-semibold text-white">
            The Platform That Drives Digital Success:
          </p>
          <p className="text-3xl font-semibold text-yellow-600">
            Marketing Intelligence
          </p>
          <p className="text-3xl font-semibold text-white">
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
