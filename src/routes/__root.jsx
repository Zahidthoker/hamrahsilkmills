// src/routes/__root.jsx
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFoundPage';

// Define and export Route
export const Route = createRootRouteWithContext()({
  component: function RootLayout() {
    return (
      <>
        <Navbar />
        <div className='pt-20'>
          <Outlet /> {/* The active page will render here */}
        </div>
        <Footer />
      </>
    );
  },
  notFoundComponent: () => <NotFound />,
});
