const experiences = [
  {
    company: "SaiKet Systems",
    role: "Front-End Development Intern",
    period: "Jun 2026 — Jul 2026",
    type: "Frontend Internship",

    description:
      "Worked on practical frontend development tasks focused on responsive layouts, interactive interfaces, and JavaScript-based web functionality.",

    work: [
      "Created responsive web pages using HTML and CSS.",
      "Built interactive applications using JavaScript.",
      "Developed a quiz application and To-Do application.",
      "Created a responsive iPhone landing page.",
    ],

    technologies: ["HTML", "CSS", "JavaScript"],

    projects: [
      {
        name: "Blog Post",
        live: "https://anisha92.github.io/saiket-task-1-blog-post/",
        github: "https://github.com/Anisha92/saiket-task-1-blog-post",
      },
      {
        name: "Product Card",
        live: "https://anisha92.github.io/saiket-task-2-product-card/",
        github: "https://github.com/Anisha92/saiket-task-2-product-card",
      },
      {
        name: "Responsive Layout",
        live: "https://anisha92.github.io/saiket-task-3-responsive-layout/",
        github: "https://github.com/Anisha92/saiket-task-3-responsive-layout",
      },
      {
        name: "Quiz App",
        live: "https://anisha92.github.io/saiket-task-4-quiz-app/",
        github: "https://github.com/Anisha92/saiket-task-4-quiz-app",
      },
      {
        name: "To-Do App",
        live: "https://anisha92.github.io/saiket-task-5-todo-app/",
        github: "https://github.com/Anisha92/saiket-task-5-todo-app",
      },
      {
        name: "iPhone Landing Page",
        live: "https://anisha92.github.io/saiket-task-6-iphone-landing-page/",
        github:
          "https://github.com/Anisha92/saiket-task-6-iphone-landing-page",
      },
    ],
  },

  {
    company: "Sysslan IT Solutions",
    role: "Front-End Development Intern",
    period: "May 2026 — Jun 2026",
    type: "Frontend Internship",

    description:
      "Worked on a responsive Event Ticket Booking System as part of my frontend development internship, focusing on layout, user interaction, and responsive design.",

    work: [
      "Built a responsive event ticket booking interface.",
      "Implemented interactive booking functionality.",
      "Focused on clean layouts and user-friendly interactions.",
      "Designed the interface to work across different screen sizes.",
    ],

    technologies: ["HTML", "CSS", "JavaScript"],

    projects: [
      {
        name: "Event Ticket Booking System",
        live: "https://anisha92.github.io/sysslan-event-ticket-booking-system/",
        github:
          "https://github.com/Anisha92/sysslan-event-ticket-booking-system",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="
        bg-[#f0e9e5]
        text-[#241b1c]
        transition-colors
        duration-300
        dark:bg-[#241b1e]
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
          py-10
          sm:px-8
          sm:py-12
          lg:px-10
          lg:py-10
        "
      >
        {/* Section Header */}
        <div
          className="
            mb-10
            flex
            items-end
            justify-between
            gap-8
            border-b
            border-[#d9cdca]
            pb-5
            dark:border-[#403135]
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#7b2638]
                  dark:bg-[#c47a8b]
                "
              />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#7b2638]
                  dark:text-[#c47a8b]
                "
              >
                Experience
              </p>
            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.035em]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              Learning by
              <br />

              <span
                className="
                  text-[#7b2638]
                  dark:text-[#c47a8b]
                "
              >
                building.
              </span>
            </h2>
          </div>

          <p
            className="
              hidden
              max-w-sm
              text-right
              text-sm
              leading-6
              text-[#706467]
              sm:block
              dark:text-[#b9aaad]
            "
          >
            Practical frontend experience gained through
            internships and real project-based development.
          </p>
        </div>

        {/* Experience List */}
        <div
          className="
            flex-1
            divide-y
            divide-[#d9cdca]
            dark:divide-[#403135]
          "
        >
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="
                grid
                gap-6
                py-7
                lg:grid-cols-[190px_1fr_300px]
                lg:gap-12
                lg:py-8
              "
            >
              {/* Date / Type */}
              <div className="flex items-start justify-between lg:block">
                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#8b7c7f]
                      dark:text-[#96868a]
                    "
                  >
                    {experience.period}
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      font-medium
                      text-[#7b2638]
                      dark:text-[#c47a8b]
                    "
                  >
                    {experience.type}
                  </p>
                </div>

                <span
                  className="
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-[#d9cdca]
                    dark:text-[#403135]
                    lg:mt-10
                    lg:block
                  "
                >
                  0{index + 1}
                </span>
              </div>

              {/* Main Experience */}
              <div>
                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-[-0.025em]
                    sm:text-3xl
                  "
                >
                  {experience.company}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-[#7b2638]
                    dark:text-[#c47a8b]
                  "
                >
                  {experience.role}
                </p>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[#706467]
                    dark:text-[#b9aaad]
                  "
                >
                  {experience.description}
                </p>

                {/* Work */}
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {experience.work.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        leading-6
                        text-[#55494c]
                        dark:text-[#c5b6b9]
                      "
                    >
                      <span
                        className="
                          mt-2
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#7b2638]
                          dark:bg-[#c47a8b]
                        "
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div
                className="
                  border-t
                  border-[#d9cdca]
                  pt-5
                  dark:border-[#403135]
                  lg:border-l
                  lg:border-t-0
                  lg:pl-8
                  lg:pt-0
                "
              >
                <div className="flex items-center justify-between">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#8b7c7f]
                      dark:text-[#96868a]
                    "
                  >
                    Projects
                  </p>

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-[#7b2638]
                      dark:text-[#c47a8b]
                    "
                  >
                    {experience.projects.length}{" "}
                    {experience.projects.length === 1
                      ? "Project"
                      : "Tasks"}
                  </span>
                </div>

                {/* Project List */}
                <div className="mt-4 space-y-3">
                  {experience.projects.map((project, projectIndex) => (
                    <div
                      key={project.name}
                      className="
                        border-b
                        border-[#e2d8d4]
                        pb-3
                        last:border-b-0
                        last:pb-0
                        dark:border-[#403135]
                      "
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="
                            mt-1
                            text-[11px]
                            font-semibold
                            text-[#8b7c7f]
                            dark:text-[#96868a]
                          "
                        >
                          {String(projectIndex + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p
                            className="
                              text-sm
                              font-semibold
                              text-[#241b1c]
                              dark:text-[#f7eeee]
                            "
                          >
                            {project.name}
                          </p>

                          <div className="mt-2 flex items-center gap-4">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                text-xs
                                font-semibold
                                text-[#7b2638]
                                transition-colors
                                hover:text-[#611d2c]
                                dark:text-[#c47a8b]
                                dark:hover:text-[#d58d9c]
                              "
                            >
                              Live Demo ↗
                            </a>

                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                text-xs
                                font-semibold
                                text-[#706467]
                                transition-colors
                                hover:text-[#7b2638]
                                dark:text-[#b9aaad]
                                dark:hover:text-[#c47a8b]
                              "
                            >
                              GitHub ↗
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-[#d9cdca]
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-[#55494c]
                        dark:border-[#403135]
                        dark:text-[#c5b6b9]
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            border-t
            border-[#d9cdca]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
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
            Building experience through practical frontend work.
          </p>

          <p
            className="
              text-xs
              font-semibold
              tracking-wide
              text-[#7b2638]
              dark:text-[#c47a8b]
            "
          >
            Frontend Development · Internships
          </p>
        </div>
      </div>
    </section>
  );
}