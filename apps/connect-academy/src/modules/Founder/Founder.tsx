import Image from 'next/image';

export const Founders: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 py-24 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light mb-4">
                {`Hi, I'm `}
                <span className="text-orange-400 font-bold">{`Renzo Lopez`}</span>
                {`,`}
              </h1>
              <h2 className="text-4xl lg:text-5xl font-light mb-8">
                {`Founder of Connect-Academy.`}
              </h2>
            </div>

            <div className="space-y-6 text-2xl leading-relaxed">
              <p>
                {`We're committed and passionate about transforming the
                digital landscape by empowering Filipino talent and businesses
                through innovative web solutions and AI- powered digital
                marketing.`}
              </p>

              <p>
                {` We've redefined online growth with our all-in-one
                platform—combining creative strategy, smart automation, and
                comprehensive training to accelerate business success and career
                opportunities like never before.`}
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/founders/founder.jpg"
                alt="Renzo Lopez - Founder of Connect Academy"
                fill
                className="object-cover object-top scale-[1.38]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
