export default function About() {
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
            items-center
            border-b
            border-[#d9cdca]
            pb-5
            dark:border-[#403135]
          "
        >
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
              About Me
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="
            grid
            flex-1
            items-start
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* Left Side */}
          <div>
            <h2
              className="
                max-w-lg
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.035em]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              Building interfaces
              <span
                className="
                  text-[#7b2638]
                  dark:text-[#c47a8b]
                "
              >
                {" "}
                with purpose.
              </span>
            </h2>

            <div
              className="
                mt-6
                h-px
                w-16
                bg-[#7b2638]
                dark:bg-[#c47a8b]
              "
            />
          </div>

          {/* Right Side */}
          <div className="max-w-3xl">
            <p
              className="
                text-lg
                font-medium
                leading-7
                text-[#403538]
                dark:text-[#ded0d3]
                sm:text-xl
                sm:leading-8
              "
            >
              I'm Anisha, a frontend developer focused on
              building clean, responsive, and user-friendly
              web interfaces.
            </p>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-[#706467]
                dark:text-[#b9aaad]
              "
            >
              I enjoy turning ideas and designs into
              functional web experiences using modern
              frontend technologies. My main focus is
              React, JavaScript, responsive layouts, and
              thoughtful UI development.
            </p>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-[#706467]
                dark:text-[#b9aaad]
              "
            >
              Alongside my personal projects, I have gained
              practical experience through frontend
              development internships, where I worked on
              responsive interfaces and interactive web
              applications.
            </p>

            {/* Focus Areas */}
            <div
              className="
                mt-7
                border-t
                border-[#d9cdca]
                pt-5
                dark:border-[#403135]
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#7b2638]
                  dark:text-[#c47a8b]
                "
              >
                Currently focused on
              </p>

              <div
                className="
                  mt-4
                  grid
                  gap-x-8
                  gap-y-3
                  sm:grid-cols-2
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7b2638]
                      dark:bg-[#c47a8b]
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#55494c]
                      dark:text-[#c5b6b9]
                    "
                  >
                    React Development
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7b2638]
                      dark:bg-[#c47a8b]
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#55494c]
                      dark:text-[#c5b6b9]
                    "
                  >
                    Responsive UI
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7b2638]
                      dark:bg-[#c47a8b]
                    "
                  />

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
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#7b2638]
                      dark:bg-[#c47a8b]
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#55494c]
                      dark:text-[#c5b6b9]
                    "
                  >
                    Modern Frontend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Snapshot */}
        <div
          className="
            mt-10
            grid
            border-y
            border-[#d9cdca]
            dark:border-[#403135]
            sm:grid-cols-3
          "
        >
          {/* Education */}
          <div
            className="
              border-b
              border-[#d9cdca]
              py-5
              sm:border-b-0
              sm:border-r
              sm:px-8
              dark:border-[#403135]
            "
          >
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
              Education
            </p>

            <p
              className="
                mt-2
                text-base
                font-semibold
                text-[#241b1c]
                dark:text-[#f7eeee]
              "
            >
              B.Com
            </p>

            <p
              className="
                mt-1
                text-sm
                text-[#706467]
                dark:text-[#b9aaad]
              "
            >
              Diploma in Programming
            </p>
          </div>

          {/* Experience */}
          <div
            className="
              border-b
              border-[#d9cdca]
              py-5
              sm:border-b-0
              sm:border-r
              sm:px-8
              dark:border-[#403135]
            "
          >
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
              Experience
            </p>

            <p
              className="
                mt-2
                text-base
                font-semibold
                text-[#241b1c]
                dark:text-[#f7eeee]
              "
            >
              Frontend Internships
            </p>

            <p
              className="
                mt-1
                text-sm
                text-[#706467]
                dark:text-[#b9aaad]
              "
            >
              Practical project experience
            </p>
          </div>

          {/* Primary Stack */}
          <div className="py-5 sm:px-8">
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
              Primary Stack
            </p>

            <p
              className="
                mt-2
                text-base
                font-semibold
                text-[#241b1c]
                dark:text-[#f7eeee]
              "
            >
              React + JavaScript
            </p>

            <p
              className="
                mt-1
                text-sm
                text-[#706467]
                dark:text-[#b9aaad]
              "
            >
              Tailwind CSS · HTML · CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}