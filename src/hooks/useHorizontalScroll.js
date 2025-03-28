import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef(null);
  
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        
        // 기본 스크롤 동작 방지
        e.preventDefault();
        
        // 스크롤 감도 조정 (부드러운 스크롤을 위해)
        const scrollAmount = e.deltaY * 1.5;
        
        // 휠 이벤트를 가로 스크롤로 전환
        el.scrollLeft += scrollAmount;
        
        // 디버깅
        console.log(`Horizontal scroll: ${el.scrollLeft}px / ${el.scrollWidth - el.clientWidth}px`);
      };
      
      // 터치 이벤트 지원 (모바일용)
      let touchStart = 0;
      let touchX = 0;
      
      const onTouchStart = (e) => {
        touchStart = e.touches[0].clientX;
      };
      
      const onTouchMove = (e) => {
        if (!touchStart) return;
        
        touchX = e.touches[0].clientX;
        const diff = touchStart - touchX;
        
        // 터치 이동을 가로 스크롤로 변환
        el.scrollLeft += diff;
        
        // 다음 이동을 위해 터치 시작점 업데이트
        touchStart = touchX;
      };
      
      const onTouchEnd = () => {
        touchStart = 0;
      };
      
      // 스크롤 영역 디자인 (선택적)
      el.style.scrollbarWidth = 'none'; // Firefox
      el.style.msOverflowStyle = 'none'; // IE/Edge
      
      // 이벤트 리스너 등록
      el.addEventListener('wheel', onWheel, { passive: false });
      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchmove', onTouchMove, { passive: true });
      el.addEventListener('touchend', onTouchEnd, { passive: true });
      
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        el.removeEventListener('wheel', onWheel);
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchmove', onTouchMove);
        el.removeEventListener('touchend', onTouchEnd);
      };
    }
  }, []);
  
  return elRef;
}