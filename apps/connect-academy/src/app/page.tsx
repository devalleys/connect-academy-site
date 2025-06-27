import { Founders, Home, Partners } from '@/modules';

export default function Index() {
  return (
    <div className="pt-28 flex flex-col items-start justify-start min-h-screen">
      <Home />
      <Partners />
      <Founders />
    </div>
  );
}
