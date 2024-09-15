import React, { lazy, memo, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Lazy-loaded components
const Home = lazy(() => import('../pages/Home'));
const NextHome = lazy(() => import('../pages/NextHome'));
const About = lazy(() => import('../pages/About'));
const Project = lazy(() => import('../pages/Project'));
const Contact = lazy(() => import('../pages/Contact'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
      <Suspense fallback={<div className='flex justify-center items-start mt-12 h-screen text-8xl'>Loading...</div>}>
    <AnimatePresence mode="wait">
      {/* Suspense wraps all lazy-loaded components */}
        <Routes location={location} key={location.pathname}>
          <Route  path="/" element={<Home />} />
          <Route path="/nexthome" element={<NextHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
      </Suspense>
  );
}

export default memo( AnimatedRoutes);
