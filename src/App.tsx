import { Suspense, lazy } from 'react';
import { ReactLenis } from 'lenis/react';
import { Navigation } from './components/Navigation';
import { ProgressBar } from './components/ProgressBar';
import { Hero } from './components/Hero';
import CustomCursor from "./components/CustomCursor";

// Lazy load below-the-fold components to improve initial load time (Lighthouse Score)
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const SecurityPractice = lazy(() => import('./components/SecurityPractice').then(module => ({ default: module.SecurityPractice })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const ScrollToTop = lazy(() => import('./components/ScrollToTop').then(module => ({ default: module.ScrollToTop })));

function App() {
  return (
    <ReactLenis root>
      <div className="bg-primary text-txt-primary overflow-x-hidden">
        <CustomCursor />
        <Navigation />
        <ProgressBar />

        <Hero />

        <Suspense fallback={<div className="min-h-screen bg-primary" />}>
          <About />
          <Skills />
          <Projects />
          <SecurityPractice />
          <Experience />
          <Contact />
          <Footer />
          <ScrollToTop />
        </Suspense>
      </div>
    </ReactLenis>
  );
}

export default App;
