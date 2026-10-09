import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
  FiArrowUpRight,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {  
  const { theme, toggleTheme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  const menuLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 140;

      menuLinks.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 80;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        transition-all
        duration-300
        ${
          hasScrolled
            ? "bg-[#fffdfb]/95 shadow-sm dark:bg-[#1b1517]/95"
            : "bg-[#f8f5f2] dark:bg-[#1b1517]"
        }
        border-[#e4d9d5]
        dark:border-[#403135]
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-6xl
          items-center
          justify-between
          px-6
        "
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Go to homepage"
          className="flex items-center"
        >
          <img
            src="/portfolio-icon.png"
            alt="Anisha logo"
            className="
              h-10
              w-10
              rounded-full
              object-cover
              transition-transform
              duration-300
              hover:scale-105
              sm:h-11
              sm:w-11
            "
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {menuLinks.map((link) => {
            const isActive = activeSection === link;
            const isContact = link === "contact";

            return (
              <button
                key={link}
                type="button"
                onClick={() => scrollToSection(link)}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-1
                  capitalize
                  text-[14px]
                  font-semibold
                  tracking-wide
                  transition-colors
                  duration-200
                  ${
                    isContact
                      ? `
                        rounded-full
                        border
                        px-4
                        py-2
                        ${
                          isActive
                            ? "border-[#7b2638] text-[#7b2638] dark:border-[#c47a8b] dark:text-[#c47a8b]"
                            : "border-[#d9cdca] text-[#55494c] hover:border-[#7b2638] hover:text-[#7b2638] dark:border-[#4a393d] dark:text-[#c5b6b9] dark:hover:border-[#c47a8b] dark:hover:text-[#c47a8b]"
                        }
                      `
                      : `
                        pb-2
                        ${
                          isActive
                            ? "text-[#7b2638] dark:text-[#c47a8b]"
                            : "text-[#55494c] dark:text-[#c5b6b9]"
                        }
                        hover:text-[#7b2638]
                        dark:hover:text-[#d58d9c]
                      `
                  }
                `}
              >
                {link}

                {isContact && (
                  <FiArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                )}

                {!isContact && (
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      rounded-full
                      bg-[#7b2638]
                      transition-all
                      duration-300
                      dark:bg-[#c47a8b]
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                )}
              </button>
            );
          })}

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="
              ml-1
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#e4d9d5]
              bg-[#f0e9e5]
              text-[#7b2638]
              transition-all
              duration-200
              hover:scale-105
              hover:border-[#7b2638]
              dark:border-[#403135]
              dark:bg-[#292022]
              dark:text-[#c47a8b]
              dark:hover:border-[#c47a8b]
            "
          >
            {theme === "light" ? (
              <FiMoon size={17} />
            ) : (
              <FiSun size={17} />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#e4d9d5]
              bg-[#fffdfb]
              text-[#7b2638]
              transition-all
              duration-200
              dark:border-[#403135]
              dark:bg-[#292022]
              dark:text-[#c47a8b]
            "
          >
            {theme === "light" ? (
              <FiMoon size={17} />
            ) : (
              <FiSun size={17} />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              text-[#241b1c]
              dark:text-[#f7eeee]
            "
          >
            {mobileOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
            border-t
            border-[#e4d9d5]
            bg-[#fffdfb]
            dark:border-[#403135]
            dark:bg-[#241b1e]
            lg:hidden
          "
        >
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="flex flex-col gap-1">
              {menuLinks.map((link) => {
                const isActive = activeSection === link;

                return (
                  <button
                    key={link}
                    type="button"
                    onClick={() => scrollToSection(link)}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      px-4
                      py-3
                      text-left
                      capitalize
                      text-[15px]
                      font-semibold
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "bg-[#f0e9e5] text-[#7b2638] dark:bg-[#292022] dark:text-[#c47a8b]"
                          : "text-[#55494c] hover:bg-[#f0e9e5] dark:text-[#c5b6b9] dark:hover:bg-[#292022]"
                      }
                    `}
                  >
                    <span>{link}</span>

                    {link === "contact" && (
                      <FiArrowUpRight size={16} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}