import { useState, useEffect } from "preact/hooks";
import ArrowTopIcon from "../icons/ArrowTopIcon";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      class={`fixed bottom-6 right-6 p-3 rounded-xl shadow-lg bg-gray-600 text-white transition-opacity duration-300 hover:bg-yellow-400 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Volver arriba"
    >
      <span><ArrowTopIcon /></span>
    </button>
  );
}