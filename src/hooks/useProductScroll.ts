import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 产品分类页面滚动定位 hook
 * 当路由进入产品分类页面时，自动滚动到 #page-title 元素（考虑 navbar 高度偏移）
 */
export function useProductScroll() {
  const location = useLocation();
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // 每次路由变化时重置标志
    hasScrolledRef.current = false;

    const attemptScroll = (attempt: number = 0) => {
      if (hasScrolledRef.current) return;

      const titleEl = document.getElementById('page-title');
      if (!titleEl) {
        if (attempt < 15) {
          setTimeout(() => attemptScroll(attempt + 1), 100);
        }
        return;
      }

      hasScrolledRef.current = true;

      const navbar = document.querySelector('nav') as HTMLElement | null;
      const navbarH = navbar ? navbar.offsetHeight : 80;
      const offset = navbarH + 16;
      const elementPosition = titleEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    };

    // 延迟执行，等待页面渲染完成
    const timer = setTimeout(() => attemptScroll(), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);
}