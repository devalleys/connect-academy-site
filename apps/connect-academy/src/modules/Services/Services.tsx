import { ChooseUsGrid, ChooseUsGridProps } from './components';

export const Services: React.FC = () => {
  const images: ChooseUsGridProps[] = [
    {
      src: '/why-choose-us/choose-1.jpg',
      alt: 'Professional team collaboration',
      imageCut: '1/2',
    },
    {
      src: '/why-choose-us/choose-2.jpg',
      alt: 'Medical excellence and care',
      imageCut: 'square',
    },

    {
      src: '/why-choose-us/choose-4.jpg',
      alt: 'Culinary excellence',
      imageCut: 'square',
    },

    {
      src: '/why-choose-us/choose-6.jpg',
      alt: 'Comfort and relaxation',
      imageCut: '2/1',
    },
    {
      src: '/why-choose-us/choose-3.jpg',
      alt: 'Adventure and exploration',
      imageCut: '1/2',
    },
    {
      src: '/why-choose-us/choose-7.jpg',
      alt: 'Fresh culinary delights',
      imageCut: 'square',
    },
    {
      src: '/why-choose-us/choose-8.jpg',
      alt: 'Team achievements and success',
      imageCut: '2/1',
    },
    {
      src: '/why-choose-us/choose-9.jpg',
      alt: 'Digital innovation',
      imageCut: 'square',
    },
    {
      src: '/why-choose-us/choose-10.jpg',
      alt: 'Modern workspace',
      imageCut: 'square',
    },
    {
      src: '/why-choose-us/choose-11.jpg',
      alt: 'Professional presentation',
      imageCut: '2/1',
    },
  ];

  return (
    <div className="bg-blue-950 py-12 sm:py-16 md:py-24 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-4 sm:mb-6 md:mb-8">
            {`Why Choose Us?`}
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <ChooseUsGrid key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
};
