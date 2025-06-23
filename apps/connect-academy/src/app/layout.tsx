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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
