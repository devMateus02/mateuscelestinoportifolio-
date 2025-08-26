import { useEffect, useRef, useState } from "react";

function SkillBar({ technology, percent }) {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // só anima uma vez
        }
      },
      { threshold: 0.5 } // quando 50% do elemento aparecer
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // anima número
  useEffect(() => {
    if (visible) {
      let start = 0;
      const duration = 2000; // 2 segundos
      const step = duration / percent;

      const interval = setInterval(() => {
        start++;
        setCurrent(start);
        if (start >= percent) clearInterval(interval);
      }, step);
    }
  }, [visible, percent]);

  return (
    <div ref={barRef} className="w-full max-w-md my-6">
      <div className="flex justify-between mb-2 gap-8 font-semibold text-gray-800">
        <span>{technology}</span>
        <span>{current}%</span>
      </div>
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg rounded-full transition-all duration-2000`}
          style={{
            width: visible ? `${percent}%` : "0%",
            transition: "width 2s ease",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
