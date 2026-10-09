const skillGroups = [
  {
    title: "Frontend",
    label: "Primary",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Development",
    label: "Supporting",
    skills: [
      "API Integration",
      "PHP",
      "MySQL",
    ],
  },
  {
    title: "Programming",
    label: "Foundation",
    skills: [
      "Java",
      "Python",
      "C",
      "C++",
      "DSA",
    ],
  },
  {
    title: "Tools",
    label: "Workflow",
    skills: [
      "Git",
      "GitHub",
      "WordPress",
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="
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
                Skills
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-2xl
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.035em]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              Tools I use to
              <br />
              <span
                className="
                  text-[#7b2638]
                  dark:text-[#c47a8b]
                "
              >
                build for the web.
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
            A practical toolkit built around
            frontend development, responsive
            interfaces, and modern web technologies.
          </p>
        </div>

        {/* Skill Groups */}
        <div
          className="
            flex-1
            border-t
            border-[#d9cdca]
            dark:border-[#403135]
          "
        >
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="
                grid
                gap-5
                border-b
                border-[#d9cdca]
                py-6
                dark:border-[#403135]
                lg:grid-cols-[220px_1fr]
                lg:items-center
                lg:gap-12
              "
            >
              {/* Group Name */}
              <div className="flex items-center justify-between lg:block">
                <div>
                  <h3
                    className={`
                      text-xl
                      font-semibold
                      tracking-tight
                      ${
                        index === 0
                          ? "text-[#7b2638] dark:text-[#c47a8b]"
                          : "text-[#241b1c] dark:text-[#f7eeee]"
                      }
                    `}
                  >
                    {group.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-[#8b7c7f]
                      dark:text-[#96868a]
                    "
                  >
                    {group.label}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      transition-colors
                      duration-200
                      ${
                        index === 0
                          ? `
                            border-[#cdaab2]
                            bg-[#fffdfb]
                            text-[#7b2638]
                            dark:border-[#68404a]
                            dark:bg-[#292022]
                            dark:text-[#c47a8b]
                          `
                          : `
                            border-[#d9cdca]
                            bg-transparent
                            text-[#55494c]
                            dark:border-[#403135]
                            dark:text-[#c5b6b9]
                          `
                      }
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
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
            Focused on building clean and responsive
            frontend experiences.
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
            React · JavaScript · UI
          </p>
        </div>
      </div>
    </section>
  );
}