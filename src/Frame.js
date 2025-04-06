import React, { useEffect, useRef } from 'react';
import Main from './component/Main';
import Spacer from './component/Spacer';
import Overview from './component/Overview';
import Spacer2 from './component/Spacer2';
import Spacer3 from './component/Spacer3';
import Deskresearch from './component/Deskresearch';
import Swot from './component/Swot';
import Persona from './component/Persona';
import Problem from './component/Problem';
import JourneyMap from './component/JourneyMap';
import UserFlowChart from './component/UserFlowChart';
import DesignGuide from './component/DesignGuide';

const Frame = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const initGSAP = async () => {
      // GSAP와 ScrollTrigger를 동적으로 임포트
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      // 플러그인 등록
      gsap.registerPlugin(ScrollTrigger);
      
      // 이전 ScrollTrigger 인스턴스 정리
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      const sections = sectionRef.current;
      const container = triggerRef.current;
      
      if (!sections || !container) return;
      
      // 필요한 너비 계산
      const totalWidth = sections.offsetWidth;
      
      // ScrollTrigger 설정
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
          // 여기서 progress 값을 사용해 translateX 적용
          const progress = self.progress;
          gsap.to(sections, {
            x: () => -progress * (totalWidth - window.innerWidth),
            ease: 'none',
            duration: 0.1
          });
        }
      });
      
      console.log('GSAP ScrollTrigger initialized', { totalWidth });
    };
    
    // 페이지 로드 후 초기화
    window.addEventListener('load', initGSAP);
    initGSAP();
    
    // 창 크기 변경 시 재초기화
    window.addEventListener('resize', initGSAP);
    
    return () => {
      window.removeEventListener('load', initGSAP);
      window.removeEventListener('resize', initGSAP);
    };
  }, []);

  return (
    <div>
      <Main />
      <Spacer />
      <Overview />
      <Spacer2 />
      
      {/* 가로 스크롤을 위한 컨테이너 */}
      <div 
        ref={triggerRef}
        style={{
          overflow: 'hidden',
          position: 'relative',
          height: '100vh', // 화면 높이
          width: '100%'
        }}
      >
        {/* 가로 스크롤 콘텐츠 */}
        <div
          ref={sectionRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'auto',
            height: '100%',
            display: 'flex'
          }}
        >
          <Deskresearch />
        </div>
      </div>
      
      <Spacer3 />
      <Swot />
      <Persona />
      <JourneyMap/>
      <Problem />
      <UserFlowChart/>
      <DesignGuide />
    </div>
  );
};

export default Frame;