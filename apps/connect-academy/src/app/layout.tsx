import './global.css';
import { Footer, Navbar } from '@/components';

export const metadata = {
  title: 'Connect Academy',
  description:
    'An interactive learning platform connecting students with educational resources and expert instructors',
  keywords: ['education', 'learning', 'courses', 'academy'],
  authors: [{ name: 'Renzo' }],
  openGraph: {
    title: 'Connect Academy',
    description: 'Learn, connect, grow with Connect Academy',
    images: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-blue-900">
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center text-white max-w-2xl">
            <div className="mb-6">
              <h2 className="text-lg font-light mb-2 opacity-90">
                We're almost there
              </h2>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Coming
                <br />
                Soon
              </h1>
            </div>
          </div>
        </main>
      </body>
      {/* <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        
        <Footer />
      </body> */}
    </html>
  );
}
