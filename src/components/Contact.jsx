import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const inputClass = `
  w-full
  rounded-lg
  border
  border-[#E4D9D5]
  bg-[#F8F5F2]
  px-4
  py-3
  text-sm
  text-[#241B1C]
  outline-none
  transition-colors
  placeholder:text-[#9A8F91]
  focus:border-[#7B2638]
  dark:border-[#403135]
  dark:bg-[#241B1E]
  dark:text-[#F7EEEE]
  dark:placeholder:text-[#8F8084]
  dark:focus:border-[#C47A8B]
`;

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus(
          "Message sent successfully! Thank you for contacting me.",
        );
        form.reset();

        setTimeout(() => {
          setFormStatus("");
        }, 5000);
      } else {
        setFormStatus("Unable to send your message. Please try again.");
      }
    } catch {
      setFormStatus(
        "Something went wrong. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        min-h-[calc(100vh-120px)]
        bg-[#F0E9E5]
        dark:bg-[#241B1E]
        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-120px)]
          max-w-[1410px]
          flex-col
          justify-center
          px-6
          py-10
          sm:px-8
          sm:py-12
          lg:px-10
          lg:py-10
        "
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mb-8
            border-b
            border-[#E4D9D5]
            pb-5
            dark:border-[#403135]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-2
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#7B2638]
                  dark:text-[#C47A8B]
                "
              >
                Contact
              </p>

              <h2
                className="
                  font-serif
                  text-3xl
                  font-medium
                  leading-tight
                  text-[#241B1C]
                  dark:text-[#F7EEEE]
                  sm:text-4xl
                  lg:text-[42px]
                "
              >
                Let&apos;s work together.
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-sm
                leading-6
                text-[#706467]
                dark:text-[#B9AAAD]
                lg:text-right
              "
            >
              I&apos;m open to frontend development opportunities, freelance
              projects, and creative collaborations.
            </p>
          </div>
        </motion.div>

        {/* Main Contact Content */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-14
          "
        >
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="
                max-w-xl
                text-sm
                leading-6
                text-[#706467]
                dark:text-[#B9AAAD]
                sm:text-[15px]
                sm:leading-7
              "
            >
              I enjoy building responsive interfaces, modern web experiences,
              and clean, maintainable frontend code. If you have an opportunity
              or would like to collaborate, feel free to get in touch.
            </p>

            {/* Contact Details */}
            <div className="mt-7 flex flex-col gap-5">
              <ContactItem
                icon={<FaEnvelope />}
                label="Email"
                value="anishaa0921@gmail.com"
                link="mailto:anishaa0921@gmail.com"
              />

              <ContactItem
                icon={<FaPhoneAlt />}
                label="Phone"
                value="+91 9137805859"
                link="tel:+919137805859"
              />

              <ContactItem
                icon={<FaMapMarkerAlt />}
                label="Location"
                value="Mumbai, India"
              />
            </div>

            {/* Social Links */}
            <div className="mt-7">
              <p
                className="
                  mb-3
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#706467]
                  dark:text-[#B9AAAD]
                "
              >
                Connect with me
              </p>

              <div className="flex items-center gap-3">
                <SocialLink
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  link="https://www.linkedin.com/in/anisha-shigvan-75916138b/"
                />

                <SocialLink
                  icon={<FaGithub />}
                  label="GitHub"
                  link="https://github.com/Anisha92"
                />

                <SocialLink
                  icon={<FaEnvelope />}
                  label="Email"
                  link="mailto:anishaa0921@gmail.com"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="
                rounded-2xl
                border
                border-[#E4D9D5]
                bg-[#FFFDFB]
                p-6
                shadow-[0_12px_35px_rgba(36,27,28,0.05)]
                dark:border-[#403135]
                dark:bg-[#292022]
                dark:shadow-none
                sm:p-7
              "
            >
              <input
                type="hidden"
                name="access_key"
                value="2e31f566-bab3-4937-9ab3-8014a1056f6e"
              />

              <h3
                className="
                  text-xl
                  font-semibold
                  text-[#241B1C]
                  dark:text-[#F7EEEE]
                "
              >
                Send me a message
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-[#706467]
                  dark:text-[#B9AAAD]
                "
              >
                I&apos;ll get back to you as soon as possible.
              </p>

              {/* Form Fields */}
              <div className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-[#706467]
                      dark:text-[#B9AAAD]
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-[#706467]
                      dark:text-[#B9AAAD]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-[#706467]
                      dark:text-[#B9AAAD]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a little about your project or opportunity..."
                    rows="4"
                    required
                    className={`${inputClass} resize-none leading-6`}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#7B2638]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#611D2C]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#7B2638]
                  focus:ring-offset-2
                  dark:bg-[#C47A8B]
                  dark:text-[#1B1517]
                  dark:hover:bg-[#D58D9C]
                  dark:focus:ring-[#C47A8B]
                  dark:focus:ring-offset-[#292022]
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <span aria-hidden="true">→</span>}
              </button>

              {formStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm ${
                    formStatus.startsWith("Message sent")
                      ? "text-green-700 dark:text-green-300"
                      : "text-red-600 dark:text-red-300"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </form>

            <p
              className="
                mt-3
                text-xs
                text-[#706467]
                dark:text-[#B9AAAD]
              "
            >
              I usually respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, link }) {
  const content = (
    <div className="flex items-center gap-4">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#FFFDFB]
          text-sm
          text-[#7B2638]
          shadow-sm
          dark:bg-[#292022]
          dark:text-[#C47A8B]
          dark:shadow-none
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-[11px]
            uppercase
            tracking-wide
            text-[#9A8F91]
            dark:text-[#8F8084]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-0.5
            text-sm
            font-medium
            text-[#241B1C]
            dark:text-[#F7EEEE]
          "
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (!link) {
    return content;
  }

  return (
    <a
      href={link}
      className="
        flex
        w-fit
        rounded-md
        focus:outline-none
        focus:ring-2
        focus:ring-[#7B2638]
        focus:ring-offset-2
        dark:focus:ring-[#C47A8B]
        dark:focus:ring-offset-[#241B1E]
      "
    >
      {content}
    </a>
  );
}

function SocialLink({ icon, label, link }) {
  const isEmail = link.startsWith("mailto:");

  return (
    <a
      href={link}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-[#7B2638]
        text-sm
        text-white
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:bg-[#611D2C]
        focus:outline-none
        focus:ring-2
        focus:ring-[#7B2638]
        focus:ring-offset-2
        dark:bg-[#C47A8B]
        dark:text-[#1B1517]
        dark:hover:bg-[#D58D9C]
        dark:focus:ring-[#C47A8B]
        dark:focus:ring-offset-[#241B1E]
      "
    >
      {icon}
    </a>
  );
}
