import { Feedback, Founders, Home, Partners, Services } from '@/modules';

export default function Index() {
  return (
    <div className="pt-28 flex flex-col items-start justify-start min-h-screen">
      <Home />
      <Services />
      <Founders />
      <Partners />
      <Feedback />
    </div>
  );
}
