/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

import { Download } from "lucide-react";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
  href?: string;
  download?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({ text, className, id, href, download, variant = "primary" }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!href) {
      e.preventDefault();
      const target = document.getElementById("counter");
      if (target && id) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const isSecondary = variant === "secondary";

  const content = (
    <div className={`cta-button group w-full h-full ${isSecondary ? "bg-black-50" : "bg-black-200"}`}>
      <div className={`bg-circle ${isSecondary ? "bg-black-300" : "bg-white-50"}`} />
      <p className={`text ${isSecondary ? "text-white" : "text-black"} ${isSecondary ? "group-hover:text-white-50" : "group-hover:text-white-50"}`}>
        {text}
      </p>
      <div className="arrow-wrapper">
        {download ? (
          <Download className={`w-5 h-5 transition-all duration-500 group-hover:scale-110 ${isSecondary ? "text-white" : "text-black"} group-hover:text-white-50`} />
        ) : (
          <img src="/images/ui/arrow-down.svg" alt="arrow" />
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={download ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={`${className ?? ""} cta-wrapper inline-block`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
      {content}
    </button>
  );
};

export default Button;
