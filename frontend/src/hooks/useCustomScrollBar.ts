import { useState } from "react";

export const useCustomScrollBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    const totalScroll = scrollHeight - clientHeight;
    const scrolled = scrollTop / totalScroll;
    setScrollProgress(scrolled); // Atualiza o progresso
  };

  return { handleScroll, scrollProgress };
}