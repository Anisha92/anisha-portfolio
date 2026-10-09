import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        mt-20
        overflow-hidden
        bg-[#f8f5f2]
        text-[#241b1c]
        transition-colors
        duration-300
        dark:bg-[#1b1517]
        dark:text-[#f7eeee]
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-[1400px]
          flex-col
          px-6
          pb-5
          pt-6
          sm:px-8
          lg:px-10
        "
      >
        {/* Small Intro Label */}
        <div className="flex items-center">
          <span
            className="
              mr-3
              h-2
              w-2
              rounded-full
              bg-[#7b2638]
              dark:bg-[#c47a7b]
            "
          />

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#7b2638]
              dark:text-[#c47a7b]
              sm:text-xs
            "
          >
            Frontend Developer
          </p>
        </div>

        {/* Main Hero Content */}
        <div
          className="
            grid
            flex-1
            items-center
            gap-10
            py-6
            sm:gap-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-14
            lg:py-4
          "
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p
              className="
                mb-4
                text-sm
                font-medium
                text-[#706467]
                dark:text-[#b9aaad]
              "
            >
              Hello, I'm Anisha.
            </p>

            <h1
              className="
                text-[46px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-[58px]
                lg:text-[68px]
                xl:text-[76px]
              "
            >
              I create
              <br />
              <span
                className="
                  text-[#7b2638]
                  dark:text-[#c47a8b]
                "
              >
                digital experiences
              </span>
              <br />
              that feel <span className="font-normal italic">intentional.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-[#706467]
                dark:text-[#b9aaad]
                sm:text-lg
                sm:leading-8
              "
            >
              I build clean, responsive, and thoughtful interfaces that turn
              ideas into experiences people enjoy using.
            </p>

            {/* Main Technologies */}
            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
              "
            >
              <span
                className="
                  text-sm
                  font-semibold
                  text-[#55494c]
                  dark:text-[#c5b6b9]
                "
              >
                React
              </span>

              <span className="text-[#c7b7b9] dark:text-[#604b51]">/</span>

              <span
                className="
                  text-sm
                  font-semibold
                  text-[#55494c]
                  dark:text-[#c5b6b9]
                "
              >
                JavaScript
              </span>

              <span className="text-[#c7b7b9] dark:text-[#604b51]">/</span>

              <span
                className="
                  text-sm
                  font-semibold
                  text-[#55494c]
                  dark:text-[#c5b6b9]
                "
              >
                Tailwind CSS
              </span>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={scrollToProjects}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-md
                  bg-[#7b2638]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#611d2c]
                "
              >
                Explore My Work
                <FiArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

              <a
                href="/Anisha_Shigvan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[#241b1c]
                  transition
                  hover:text-[#7b2638]
                  dark:text-[#f7eeee]
                  dark:hover:text-[#c47a8b]
                "
              >
                View Resume
                <FiArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://github.com/Anisha92"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e4d9d5]
                  text-[#706467]
                  transition
                  hover:border-[#7b2638]
                  hover:text-[#7b2638]
                  dark:border-[#403135]
                  dark:text-[#b9aaad]
                  dark:hover:border-[#c47a8b]
                  dark:hover:text-[#c47a8b]
                "
              >
                <FiGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e4d9d5]
                  text-[#706467]
                  transition
                  hover:border-[#7b2638]
                  hover:text-[#7b2638]
                  dark:border-[#403135]
                  dark:text-[#b9aaad]
                  dark:hover:border-[#c47a8b]
                  dark:hover:text-[#c47a8b]
                "
              >
                <FiLinkedin size={17} />
              </a>

              <a
                href="mailto:anishaa0921@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e4d9d5]
                  text-[#706467]
                  transition
                  hover:border-[#7b2638]
                  hover:text-[#7b2638]
                  dark:border-[#403135]
                  dark:text-[#b9aaad]
                  dark:hover:border-[#c47a8b]
                  dark:hover:text-[#c47a8b]
                "
              >
                <FiMail size={17} />
              </a>
            </div>
          </motion.div>

          {/* Right Profile Area */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                relative
                w-[265px]
                sm:w-[300px]
                lg:w-[320px]
                xl:w-[335px]
              "
            >
              {/* Burgundy Frame */}
              <div
                className="
                  absolute
                  -right-5
                  -top-5
                  h-full
                  w-full
                  border
                  border-[#7b2638]
                  dark:border-[#c47a8b]
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  z-10
                  border
                  border-[#e4d9d5]
                  bg-[#fffdfb]
                  p-2
                  dark:border-[#403135]
                  dark:bg-[#292022]
                "
              >
                <img
                  src="/image/user-profile.png"
                  alt="Anisha"
                  className="
                    h-[350px]
                    w-full
                    object-cover
                    sm:h-[390px]
                    lg:h-[405px]
                    xl:h-[420px]
                  "
                />
              </div>

              {/* Name Card */}
              <div
                className="
                  absolute
                  bottom-5
                  left-0
                  z-20
                  -translate-x-4
                  border
                  border-[#e4d9d5]
                  bg-[#f8f5f2]
                  px-5
                  py-3
                  dark:border-[#403135]
                  dark:bg-[#1b1517]
                  sm:-translate-x-6
                "
              >
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#7b2638]
                    dark:text-[#c47a8b]
                  "
                >
                  Anisha
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-medium
                    text-[#7b2638]
                    dark:text-[#b9aaad]
                  "
                >
                  Frontend Developer
                </p>
              </div>

              {/* Technology Detail */}
              <div
                className="
                  absolute
                  -right-4
                  top-10
                  z-20
                  hidden
                  bg-[#7b2638]
                  px-3
                  py-5
                  text-white
                  sm:block
                  dark:bg-[#c47a8b]
                  dark:text-[#1b1517]
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    [writing-mode:vertical-rl]
                  "
                >
                  React · UI · Frontend
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-[#e4d9d5]
            pt-4
            dark:border-[#403135]
          "
        >
          <p
            className="
              text-xs
              font-medium
              tracking-wide
              text-[#8b7c7f]
              dark:text-[#96868a]
            "
          >
            Available for frontend opportunities
          </p>

          <button
            type="button"
            onClick={scrollToProjects}
            className="
              hidden
              items-center
              gap-2
              text-xs
              font-semibold
              tracking-wide
              text-[#7b2638]
              transition-all
              hover:gap-3
              dark:text-[#c47a8b]
              sm:flex
            "
          >
            Explore the work
            <FiArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
