import { motion, useMotionValue, useTransform } from 'framer-motion';

interface DraggableSliderProps {
  items: React.ReactNode[];
  className?: string;
}

export default function DraggableSlider({ items, className = '' }: DraggableSliderProps) {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [0.95, 1, 0.95]);
  const rotate = useTransform(x, [-100, 0, 100], [-10, 0, 10]);


  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.2}
        className="flex gap-6 cursor-grab active:cursor-grabbing"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            style={{
              x,
              scale: scale,
              rotate: rotate,
            }}
            className="flex-shrink-0"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}