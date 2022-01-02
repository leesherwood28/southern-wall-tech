import { useSpring, animated } from '@react-spring/web';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function ScrollReveal({ children }) {
  const { inView, entry, ref } = useInView();
  const styles = useSpring({
    from: { opacity: 0, translateY: '100%' },
    to: { opacity: inView ? 1 : 0, translateY: inView ? '0%' : '100%' },
    delay: 100,
  });
  return (
    <div ref={ref}>
      <animated.div style={styles}>{children}</animated.div>
    </div>
  );
}
