import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex h-10 w-screen flex-col items-center justify-center border-t-[1px] border-solid bg-slate-200 px-[20px] dark:bg-slate-950">
      <div className="flex w-full max-w-6xl flex-row items-center justify-between md:max-w-3xl">
        <Link
          className="w-fit"
          href="https://github.com/dan11218/portfolio-app"
        >
          <p className="text-center text-sm hover:text-sky-600 dark:text-slate-50">
            This site was handcoded with Next.js and Tailwind CSS by Danny
            Graugnard ©2023
          </p>
        </Link>
        <div className="flex w-full max-w-[100px] flex-row justify-between">
          <Link href="https://github.com/dan11218">
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/danielgraugnard/">
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 15 15"
            >
              <path
                fillRule="evenodd"
                d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                clipRule="evenodd"
              />
              <path d="M3 5.012H0V15h3V5.012Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
