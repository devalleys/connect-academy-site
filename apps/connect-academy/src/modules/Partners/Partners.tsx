import React from 'react';
import { RunningLogo } from './components';

export const Partners: React.FC = () => {
  return (
    <div className="w-full h-auto py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-slate-900 via-blue-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ellipse from-transparent via-slate-800/50 to-black/80"></div>
      <div className="relative z-10 w-full text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
          <p className="text-3xl font-medium text-white">Trusted By:</p>
          <RunningLogo />

          <div>
            <p className="text-4xl font-medium text-white">
              The Platform That Drives Digital Success:
            </p>
            <p className="text-4xl font-medium text-yellow-500">
              Marketing Intelligence
            </p>
          </div>
          <p className="text-3xl font-medium text-white">
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
