'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './zigzag-reverse.module.css';
import { withBasePath } from './lib/asset';

import Main from './components/Main';
import Spacer from './components/Spacer';
import Overview from './components/Overview';
import Spacer2 from './components/Spacer2';
import Spacer3 from './components/Spacer3';
import Swot from './components/Swot';
import Persona from './components/Persona';
import Problem from './components/Problem';
import JourneyMap from './components/JourneyMap';
import UserFlowChart from './components/UserFlowChart';
import DesignGuide from './components/DesignGuide';
import Spacer4 from './components/Spacer4';
import OnboardingPage from './components/OnboardingPage';
import Home from './components/Home';
import Store from './components/Store';
import Discover from './components/Discover';
import Closet from './components/Closet';

const Deskresearch = dynamic(() => import('./components/Deskresearch'), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading research section...</div>,
});

/**
 * Native-feeling wrapper for the old CRA experience.
 *
 * Notes for migration:
 * 1) Keep this route as /portfolio/zigzag-reverse.
 * 2) Move all Reverse-Planning assets to /public/portfolio/zigzag-reverse/assets.
 * 3) Keep imported CSS as modules only.
 */
export default function ZigzagReverseExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const sections = sectionRef.current;
      const container = triggerRef.current;

      if (!sections || !container) return;

      const totalWidth = sections.offsetWidth;

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(sections, {
            x: () => -progress * (totalWidth - window.innerWidth),
            ease: 'none',
            duration: 0.1,
          });
        },
      });
    };

    initGSAP();
    window.addEventListener('resize', initGSAP);

    return () => {
      mounted = false;
      window.removeEventListener('resize', initGSAP);
    };
  }, []);

  return (
    <article className={styles.pageScope} data-project="zigzag-reverse">
      <Main />
      <Spacer />
      <Overview />
      <Spacer2 />

      <section ref={triggerRef} className={styles.horizontalTrigger}>
        <div ref={sectionRef} className={styles.horizontalContent}>
          <Deskresearch vector22={withBasePath('/portfolio/zigzag-reverse/assets/image/Vector 22.svg')} />
        </div>
      </section>

      <Spacer3 />
      <Swot />
      <Persona />
      <JourneyMap />
      <Problem />
      <UserFlowChart />
      <DesignGuide />
      <Spacer4 />
      <OnboardingPage />
      <Home />
      <Store />
      <Discover />
      <Closet />
    </article>
  );
}
