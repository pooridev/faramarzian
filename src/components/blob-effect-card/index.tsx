import {
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import useMouseMove from "./hooks/use-mouse-move";

interface BlobEffectCardProps {
  className?: string;
}

const BlobEffectCard = ({
  children,
  className = "",
}: PropsWithChildren<BlobEffectCardProps>) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className={`relative overflow-hidden ${className}`}>
      <BlobEffect cardRef={cardRef} />
      {children}
    </div>
  );
};

interface BlobEffectProps {
  cardRef: RefObject<HTMLDivElement>;
}

const BlobEffect: FC<BlobEffectProps> = ({ cardRef }) => {
  const mousePosition = useMouseMove();
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = mousePosition.x - rect.left;
    const y = mousePosition.y - rect.top;

    setLocalMousePosition({ x, y });
  }, [mousePosition, cardRef]);

  return (
    <div
      className="blob absolute -z-10 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-full blur-3xl"
      style={{
        width: "300px",
        height: "300px",
        // Offset blob to center it on mouse pointer
        transform: `translate(calc(${localMousePosition.x}px - 200px), calc(${localMousePosition.y}px - 200px))`,
        transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
      }}
    />
  );
};

export default BlobEffectCard;
