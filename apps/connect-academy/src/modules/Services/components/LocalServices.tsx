import Image from 'next/image';

export const LocalServices: React.FC = () => {
  const digitalMarketingServices = [
    'SOCIAL MEDIA MANAGEMENT',
    'SEO',
    'VIDEO + PHOTO PRODUCTION',
    'BRAND CULTURE VIDEOS',
    'COMPANY SHORT DOCUMENTARY',
    'COMMERCIALS & ADS',
    'CASE STUDIES & TESTIMONIALS',
    'LIVE EVENT RECORDING',
    'EVENT RECAPS LIVE',
    'EVENT PHOTOGRAPHY BRAND',
    'PHOTOSHOOTS PRODUCT',
    'PHOTOGRAPHY',
    'EVENTS MANAGEMENT',
    'WEBSITE DEVELOPMENT',
  ];

  const comprehensiveTrainingCourses = [
    'Virtual Assistant 101',
    'GRAPHIC & DESIGN',
    'SOCIAL MEDIA MANAGEMENT',
    'CUSTOMER SERVICE & SALES',
    'PROJECT MANAGEMENT',
    'PERSONALITY DEVELOPMENT',
    'COMMUNICATION',
    'TEAM MANAGEMENT LEADERSHIP',
    'SKILL TRAINING TEAM',
    'BUILDING/SYNERGY DEVELOPMENT',
  ];

  return (
    <div className="w-full">
      {/* Main Heading */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-yellow-400 mb-8 tracking-wider">
        LOCAL-SERVICES
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-5xl text-white">
        Here, we offer an unparalleled blend of industry expertise, cutting-edge
        training programs, and a commitment to individual growth. Our reputation
        stands testament to our dedication in equipping our members with the
        tools and knowledge to excel. By joining us, you&apos;re not just
        becoming a part of a company; you&apos;re investing in a future where
        you are guided by the best, surrounded by opportunities, and poised for
        success.
      </p>

      {/* Digital Marketing Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Services Grid */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
              DIGITAL MARKETING:
            </h2>
            <div className="grid grid-cols-1 gap-y-3">
              {digitalMarketingServices.map((service, index) => (
                <div key={index} className="text-left">
                  <span className="text-white font-medium text-lg tracking-wide">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Images */}
          <div className="relative">
            {/* Phone mockup with images */}
            <div className="relative max-w-sm mx-auto">
              {/* Main phone frame */}
              <div className="bg-gray-800 rounded-3xl p-2 shadow-2xl">
                <div className="bg-black rounded-2xl overflow-hidden aspect-[9/19]">
                  <div className="relative h-full">
                    {/* Top image - Resort/Hotel */}
                    <div className="absolute top-0 left-0 right-0 h-1/2">
                      <Image
                        src="/api/placeholder/300/300"
                        alt="Luxury resort view"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Bottom image - Dining */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2">
                      <Image
                        src="/api/placeholder/300/300"
                        alt="Dining experience"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet/Secondary device positioned behind */}
              <div className="absolute -top-8 -right-8 bg-gray-700 rounded-2xl p-2 shadow-xl transform rotate-12 z-10">
                <div className="bg-white rounded-xl overflow-hidden w-32 h-24">
                  <Image
                    src="/api/placeholder/200/150"
                    alt="Business presentation"
                    width={200}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Training Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative">
              <Image
                src="/api/placeholder/300/225"
                alt="Training session 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[4/3] relative">
              <Image
                src="/api/placeholder/300/225"
                alt="Training session 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden aspect-[3/4] relative">
            <Image
              src="/api/placeholder/300/400"
              alt="Training presentation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Training Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
            COMPREHENSIVE TRAINING:
          </h2>

          <div className="space-y-4">
            {comprehensiveTrainingCourses.map((course, index) => (
              <div key={index} className="text-left">
                <span className="text-white font-medium text-lg tracking-wide block">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
