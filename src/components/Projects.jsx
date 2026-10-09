import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiGithub,
  FiExternalLink,
  FiShoppingCart,
  FiBarChart2,
  FiHeart,
  FiLayers,
} from "react-icons/fi";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const nextProject = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const previousProject = () => {
    setActiveIndex(
      (current) => (current - 1 + projects.length) % projects.length,
    );
  };

  return (
    <section
      id="projects"
      className="
        min-h-[calc(100vh-80px)]
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
          justify-center
          px-6
          py-10
          sm:px-8
          lg:px-10
        "
      >
        {/* Header */}
        <div
          className="
            mb-7
            flex
            flex-col
            gap-4
            border-b
            border-[#e4d9d5]
            pb-5
            dark:border-[#403135]
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                mb-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#7b2638]
                dark:text-[#c47a8b]
              "
            >
              Projects
            </p>

            <h2
              className="
                text-3xl
                font-semibold
                tracking-tight
                sm:text-4xl
                lg:text-[40px]
              "
            >
              Projects built with purpose.
            </h2>
          </div>

          <p
            className="
              max-w-xl
              text-sm
              leading-6
              text-[#706467]
              dark:text-[#b9aaad]
              lg:text-right
            "
          >
            A selection of frontend projects focused on clean interfaces, useful
            functionality, and responsive experiences.
          </p>
        </div>

        {/* Project Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.25 }}
            className="
              grid
              h-[650px]
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-[#e4d9d5]
              bg-[#fffdfb]
              dark:border-[#403135]
              dark:bg-[#292022]
              lg:h-[500px]
              lg:grid-cols-[1.08fr_0.92fr]
            "
          >
            {/* Project Image */}
            <div
              className="
                h-[270px]
                w-full
                shrink-0
                overflow-hidden
                border-b
                border-[#e4d9d5]
                bg-[#f0e9e5]
                dark:border-[#403135]
                dark:bg-[#241b1e]
                lg:h-full
                lg:border-b-0
                lg:border-r
              "
            >
              <ProjectImage project={activeProject} />
            </div>

            {/* Project Details */}
            <div
              className="
                flex
                h-[380px]
                min-h-0
                w-full
                min-w-0
                flex-col
                overflow-y-auto
                p-6
                sm:p-7
                lg:h-full
                lg:overflow-visible
                lg:p-9
              "
            >
              {/* Heading */}
              <div className="w-full min-w-0">
                <div
                  className="
                    flex
                    w-full
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                    sm:gap-3
                  "
                >
                  <div className="w-full min-w-0">
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#706467]
                        dark:text-[#b9aaad]
                      "
                    >
                      {activeProject.subtitle}
                    </p>

                    <h3
                      className="
                        mt-2
                        w-full
                        max-w-none
                        text-2xl
                        font-semibold
                        leading-[1.1]
                        tracking-tight
                        sm:text-3xl
                        lg:max-w-[520px]
                        lg:text-[32px]
                      "
                    >
                      {activeProject.title}
                    </h3>
                  </div>

                  <StatusBadge status={activeProject.status} />
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 shrink-0 sm:mt-5">
                <p
                  className="
                    w-full
                    max-w-[560px]
                    text-[13px]
                    leading-5
                    text-[#706467]
                    dark:text-[#b9aaad]
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {activeProject.desc}
                </p>
              </div>

              {/* Features */}
              {activeProject.features?.length > 0 && (
                <div
                  className="
                    mt-4
                    grid
                    shrink-0
                    grid-cols-3
                    gap-2
                    border-b
                    border-[#e4d9d5]
                    pb-4
                    dark:border-[#403135]
                    sm:mt-5
                    sm:gap-3
                    sm:pb-5
                  "
                >
                  {activeProject.features.map((feature, index) => (
                    <ProjectFeature
                      key={feature.title}
                      feature={feature}
                      index={index}
                    />
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div
                className="
                  mt-4
                  flex
                  min-h-[28px]
                  shrink-0
                  flex-wrap
                  gap-2
                  overflow-hidden
                  sm:mt-5
                "
              >
                {activeProject.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-md
                      border
                      border-[#ddd1cd]
                      px-2.5
                      py-1.5
                      text-[10px]
                      font-medium
                      text-[#706467]
                      dark:border-[#403135]
                      dark:text-[#b9aaad]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                className="
                  mt-4
                  flex
                  h-[46px]
                  shrink-0
                  items-center
                  gap-5
                  border-t
                  border-[#e4d9d5]
                  pt-3
                  dark:border-[#403135]
                  sm:mt-5
                "
              >
                {activeProject.link ? (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#7b2638]
                      px-5
                      py-2.5
                      text-xs
                      font-semibold
                      text-white
                      transition-colors
                      hover:bg-[#611d2c]
                      dark:bg-[#c47a8b]
                      dark:text-[#241b1c]
                      dark:hover:bg-[#d58d9c]
                    "
                  >
                    Live Demo
                    <FiExternalLink size={13} />
                  </a>
                ) : (
                  <span
                    className="
                      rounded-full
                      bg-[#eeeae8]
                      px-5
                      py-2.5
                      text-xs
                      font-medium
                      text-[#706467]
                      dark:bg-[#30292b]
                      dark:text-[#b9aaad]
                    "
                  >
                    Coming Soon
                  </span>
                )}

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[#706467]
                      transition-colors
                      hover:text-[#7b2638]
                      dark:text-[#b9aaad]
                      dark:hover:text-[#c47a8b]
                    "
                  >
                    GitHub
                    <FiGithub size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <button
            type="button"
            onClick={previousProject}
            aria-label="Previous project"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#d9ccc8]
              bg-[#fffdfb]
              text-[#7b2638]
              transition-colors
              hover:border-[#7b2638]
              hover:bg-[#f0e9e5]
              dark:border-[#403135]
              dark:bg-[#292022]
              dark:text-[#c47a7a]
              dark:hover:border-[#c47a8b]
            "
          >
            <FiArrowLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${project.title}`}
                className={`
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    index === activeIndex
                      ? "h-2.5 w-6 bg-[#7b2638] dark:bg-[#c47a8b]"
                      : "h-2 w-2 bg-[#d4c7c4] dark:bg-[#504044]"
                  }
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#7b2638]
              text-white
              transition-colors
              hover:bg-[#611d2c]
              dark:bg-[#c47a8b]
              dark:text-[#241b1c]
              dark:hover:bg-[#d58d9c]
            "
          >
            <FiArrowRight size={16} />
          </button>
        </div>

        {/* Bottom Note */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-4
            border-t
            border-[#e4d9d5]
            pt-4
            dark:border-[#403135]
          "
        >
          <span
            className="
              h-7
              w-[2px]
              bg-[#7b2638]
              dark:bg-[#c47a8b]
            "
          />

          <p
            className="
              text-sm
              italic
              text-[#706467]
              dark:text-[#b9aaad]
            "
          >
            Small projects, big learning.
          </p>

          <div
            className="
              hidden
              h-px
              flex-1
              bg-[#e4d9d5]
              dark:bg-[#403135]
              sm:block
            "
          />

          <p
            className="
              hidden
              text-[11px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-[#7b2638]
              dark:text-[#c47a8b]
              sm:block
            "
          >
            Ideas → Code → Real Impact
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectImage({ project }) {
  if (!project.image) {
    return (
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          bg-[#f0e9e5]
          dark:bg-[#241b1e]
        "
      >
        <div className="text-center">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#7b2638]
              dark:text-[#c47a8b]
            "
          >
            Project Preview
          </p>

          <p
            className="
              mt-2
              text-xs
              text-[#706467]
              dark:text-[#b9aaad]
            "
          >
            Screenshot coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={`${project.title} project preview`}
      className={`
    h-full
    w-full
    ${
      project.title.startsWith("TESSERA")
        ? "object-contain object-center"
        : "object-cover object-top"
    }
  `}
    />
  );
}

function ProjectFeature({ feature, index }) {
  const defaultIcons = [FiShoppingCart, FiBarChart2, FiLayers];

  let Icon = defaultIcons[index] || FiLayers;

  if (feature.icon === "heart") {
    Icon = FiHeart;
  }

  if (feature.icon === "chart") {
    Icon = FiBarChart2;
  }

  if (feature.icon === "layers") {
    Icon = FiLayers;
  }

  return (
    <div className="flex min-w-0 gap-2">
      <div
        className="
          mt-0.5
          shrink-0
          text-[#7b2638]
          dark:text-[#c47a8b]
        "
      >
        <Icon size={16} />
      </div>

      <div className="min-w-0">
        <p
          className="
            truncate
            text-[11px]
            font-semibold
            text-[#241b1c]
            dark:text-[#f7eeee]
            sm:text-xs
          "
        >
          {feature.title}
        </p>

        <p
          className="
            mt-0.5
            line-clamp-2
            text-[9px]
            leading-3.5
            text-[#706467]
            dark:text-[#b9aaad]
            sm:text-[10px]
            sm:leading-4
          "
        >
          {feature.text}
        </p>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Completed:
      "bg-[#f0e9e5] text-[#7b2638] dark:bg-[#241b1e] dark:text-[#c47a8b]",

    "In Progress":
      "bg-[#f4ede4] text-[#8a5c28] dark:bg-[#30251d] dark:text-[#d5a76e]",

    Planned:
      "bg-[#eeeae8] text-[#706467] dark:bg-[#30292b] dark:text-[#b9aaad]",
  };

  return (
    <span
      className={`
        shrink-0
        self-start
        rounded-full
        px-3
        py-1.5
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.08em]
        ${styles[status] || styles.Planned}
      `}
    >
      {status}
    </span>
  );
}
