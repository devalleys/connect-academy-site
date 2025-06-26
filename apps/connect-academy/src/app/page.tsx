export default function Index() {
  return (
    <div className="pt-28 flex flex-col items-start justify-start min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="h-fit flex-col items-start justify-start">
          <div className="flex flex-col items-center justify-start md:flex-row">
            <video
              className="inset-0 w-full h-[700px] object-cover"
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

          <p className="text-2xl text-center my-12">
            We’re redefining digital growth for purpose-driven brands and
            professionals—combining human creativity with an AI-powered approach
            in web design, digital marketing, and comprehensive training.
          </p>
        </div>
      </div>
      <div className="h-[800px] bg-blue-950 flex flex-col items-center justify-center w-full">
        <h1 className="text-white text-4xl font-bold text-center mt-20">
          Welcome to Connect Academy
        </h1>
        <p className="text-white text-lg text-center mt-4">
          Your journey to mastering the art of connection starts here.
        </p>
      </div>
    </div>
  );
}
