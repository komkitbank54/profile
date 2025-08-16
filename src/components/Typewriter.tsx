"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  children: string;       // รับข้อความจาก children
  typingSpeed?: number;   // ความเร็วการพิมพ์ (ms)
  className?: string;     // กำหนด style เพิ่มเอง
};

export default function Typewriter({
  children,
  typingSpeed = 100,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // ทำให้ cursor กระพริบ
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // effect สำหรับพิมพ์ทีละตัว
  useEffect(() => {
    if (index < children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + children.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, children, typingSpeed]);

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      <span className="text-cyan-300">{blink ? "|" : " "}</span>
    </span>
  );
}
