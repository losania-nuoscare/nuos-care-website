import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll wrapper using IntersectionObserver.
 * Fades + slides up on entry (400ms ease-out, defined in index.css).
 * `delay` is the stagger index — each step adds 100ms (delay-1 … delay-6).
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ['reveal', seen ? 'in' : '', delay ? `delay-${delay}` : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
