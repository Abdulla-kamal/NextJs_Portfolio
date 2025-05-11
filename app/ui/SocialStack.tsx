export default function SocialStack() {
    return(
        <div className="flex w-1/2 justify-end content-center mt-10">
        {/* Linkedin  */}
        <a
          className="inline-block text-blue-300 no-underline hover:text-blue-500 hover:underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-110 duration-300 ease-in-out"
          href="https://www.linkedin.com/in/abdulla-kamal-134604221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="fill-current h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.2.79 24 1.77 24H22.2c.98 0 1.8-.8 1.8-1.72V1.72C24 .77 23.21 0 22.23 0zm-13.54 20.56H5.34V9h3.34v11.56zm-1.66-13A1.93 1.93 0 016.05 5.6c0-1.07.86-1.93 1.92-1.93a1.93 1.93 0 011.92 1.92c0 1.06-.86 1.92-1.92 1.92zm13.54 13H17.2v-5.6c0-1.34-.48-2.25-1.67-2.25-.91 0-1.45.61-1.68 1.2-.09.22-.11.53-.11.84v5.8h-3.34V9h3.34v1.6c.48-.74 1.33-1.8 3.25-1.8 2.38 0 4.16 1.56 4.16 4.88v6.88z" />
          </svg>
        </a>
        {/* GitHub  */}
        <a
          className="inline-block text-blue-300 no-underline hover:text-blue-900 hover:underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-110 duration-300 ease-in-out"
          href="https://github.com/Abdulla-kamal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="fill-current h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.73.5.5 5.72.5 12c0 5.08 3.3 9.38 7.88 10.9.58.1.79-.25.79-.55 0-.27-.01-1-.01-1.97-3.21.7-3.89-1.55-3.89-1.55-.52-1.33-1.27-1.68-1.27-1.68-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.18 1.75 1.18 1.03 1.77 2.69 1.26 3.34.97.1-.75.4-1.26.72-1.55-2.57-.29-5.28-1.28-5.28-5.68 0-1.26.45-2.3 1.17-3.11-.12-.28-.51-1.42.11-2.96 0 0 .97-.31 3.19 1.18a11.1 11.1 0 012.91-.39c.99.01 1.99.13 2.91.39 2.22-1.49 3.19-1.18 3.19-1.18.62 1.54.23 2.68.11 2.96.73.81 1.17 1.85 1.17 3.11 0 4.41-2.71 5.38-5.29 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.13 0 .31.21.66.8.55C20.7 21.38 24 17.08 24 12c0-6.28-5.22-11.5-12-11.5z" />
          </svg>
        </a>
      </div>
    )
}