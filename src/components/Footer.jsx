export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#611D2C] bg-[#7B2638] dark:border-[#403135] dark:bg-[#1B1517]">
      <div className="relative mx-auto flex max-w-[1400px] items-center px-4 py-3 sm:px-16 lg:justify-center lg:px-10">
        <p className="whitespace-nowrap !text-white text-left text-[11px] font-medium leading-5 tracking-tight sm:text-xs lg:text-center">
          © {year} <span className="ml-1">Anisha Shigvan</span>
          <span className="mx-1.5 !text-white">·</span>
          Frontend Developer
          <span className="mx-1.5 !text-white">·</span>
          All rights reserved
        </p>

        <a
          href="#home"
          aria-label="Back to top"
          className="absolute right-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border !border-white !text-white text-sm font-semibold transition-all duration-300 hover:!bg-white hover:!text-[#7B2638] sm:right-5 lg:right-6"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}
