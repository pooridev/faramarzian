import { FC, PropsWithChildren, RefObject, useMemo, useRef } from "react";
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

  const cardRect = useMemo(() => {
    if (!cardRef.current) return { left: 0, top: 0 };

    return cardRef.current?.getBoundingClientRect();
  }, [cardRef, mousePosition.x, mousePosition.y]);

  const x = mousePosition.x - cardRect.left;
  const y = mousePosition.y - cardRect.top;

  return (
    <div
      className="blob absolute -z-10 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-full blur-3xl"
      style={{
        width: "300px",
        height: "300px",
        // Offset blob to center it on mouse pointer
        transform: `translate(calc(${x}px - 200px), calc(${y}px - 200px))`,
        transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
      }}
    />
  );
};

export default BlobEffectCard;
