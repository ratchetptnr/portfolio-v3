"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const cards = [
  { src: "/Left_At_The_Airport.jpg", alt: "Left At The Airport", rotation: -2.5, yOffset: 16, zIndex: 3 },
  { src: "/Summer.jpg", alt: "Summer", rotation: 1.5, yOffset: -8, zIndex: 7 },
  { src: "/Salty_hair.jpg", alt: "Salty Hair", rotation: -1, yOffset: 24, zIndex: 2 },
  { src: "/Roll_the_Thing.jpg", alt: "Roll the Thing", rotation: 0, yOffset: 0, zIndex: 5 },
  { src: "/Dream_On.jpg", alt: "Dream On", rotation: 2, yOffset: -16, zIndex: 1 },
  { src: "/Day_of_the_dead.jpg", alt: "Day of the Dead", rotation: -2, yOffset: 12, zIndex: 6 },
  { src: "/I_ain't_color_blind.jpg", alt: "I Ain't Color Blind", rotation: 1.5, yOffset: -24, zIndex: 4 },
];

export function CardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const [visibleCards, setVisibleCards] = useState(7);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        // Mobile: show 3 cards
        setVisibleCards(3);
      } else if (window.innerWidth < 1024) {
        // Tablet: show 5 cards
        setVisibleCards(5);
      } else {
        // Desktop: show all 7 cards
        setVisibleCards(7);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-start justify-center gap-0 w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: "300px" }}
    >
      {cards.slice(0, visibleCards).map((card, index) => (
        <Card
          key={card.src}
          card={card}
          index={index}
          mouseX={mouseX}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}

function Card({
  card,
  index,
  mouseX,
  containerRef,
}: {
  card: { src: string; alt: string; rotation: number; yOffset: number; zIndex: number };
  index: number;
  mouseX: any;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    if (!cardRef.current || !containerRef.current || val === -1000) return 500;
    const rect = cardRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2 - containerRect.left;
    return Math.abs(val - cardCenter);
  });

  const scale = useTransform(distance, [0, 150, 300], [1.3, 1.1, 1]);
  const y = useTransform(distance, [0, 150, 300], [card.yOffset - 40, card.yOffset - 10, card.yOffset]);
  const rotate = useTransform(
    distance,
    [0, 150],
    [0, card.rotation]
  );

  const springConfig = { stiffness: 300, damping: 30 };
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);
  const rotateSpring = useSpring(rotate, springConfig);

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      style={{
        scale: scaleSpring,
        y: ySpring,
        rotate: rotateSpring,
        marginLeft: index === 0 ? 0 : "-120px",
        zIndex: card.zIndex,
      }}
    >
      <Image
        src={card.src}
        alt={card.alt}
        width={400}
        height={528}
        className="rounded-xl"
        draggable={false}
        style={{
          boxShadow: "var(--shadow-6)",
        }}
      />
    </motion.div>
  );
}
