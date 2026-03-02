import { useState, useEffect } from 'react';
import Component1920WLight from './imports/1920WLight';
import Component1440WLight from './imports/1440WLight';
import Component1024WLight from './imports/1024WLight';
import Component768WLight from './imports/768WLight';
import Component390WLight from './imports/390WLight';
import { ResponsiveWrapper } from './components/ResponsiveWrapper';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle a `.mobile` class on the root for stronger CSS scoping
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const isMobile = windowWidth < 579;
    document.documentElement.classList.toggle('mobile', isMobile);
    document.body.classList.toggle('mobile', isMobile);
  }, [windowWidth]);

  // Render the appropriate component based on breakpoints
  // Use 1920px design for screens larger than 1680px
  // Use 1440px design for screens between 1232px and 1680px
  // Use 1024px design for screens between 896px and 1232px
  // Use 768px design for screens between 579px and 896px (tablets)
  // Use 390px design for screens 579px and below (small mobile)
  
  let ComponentToRender = Component1920WLight;
  
  if (windowWidth < 579) {
    ComponentToRender = Component390WLight;
  } else if (windowWidth < 896) {
    ComponentToRender = Component768WLight;
  } else if (windowWidth < 1232) {
    ComponentToRender = Component1024WLight;
  } else if (windowWidth < 1680) {
    ComponentToRender = Component1440WLight;
  }

  return (
    <ResponsiveWrapper>
      <ComponentToRender />
    </ResponsiveWrapper>
  );
}
