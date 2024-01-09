import Introduction from "./introduction";

export default function aboutMe() {
  return (
    <main className="h-screen w-screen flex-col items-start justify-start">
      <div
        id="sticky-banner"
        tabIndex={-1}
        className="mt-[70px] flex w-full justify-between border-b border-gray-200 bg-amber-100 p-4 dark:border-gray-600 dark:bg-gray-700"
      >
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="me-3 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-300 p-1 dark:bg-gray-600">
              <svg
                className="h-3 w-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
              </svg>
              <span className="sr-only">Light bulb</span>
            </span>
            <span>
              This page is currently under construction, more content coming
              soon!
            </span>
          </p>
        </div>
      </div>
      <Introduction />
    </main>
  );
}
