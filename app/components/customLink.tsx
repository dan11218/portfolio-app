import Link from "next/link";

export default function CustomLink(props: any) {
  return (
    <Link
      href={props.url}
      className={`focus:shadow-outline flex h-16 w-fit items-center justify-center px-6 text-lg font-medium ${props.textColor} ${props.bgColor}`}
      target="_blank"
    >
      {props.text}
      {props.showIcon ? (
        <svg
          className={`mx-3 h-5 w-5 ${props.textColor}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h3.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      ) : (
        ""
      )}
    </Link>
  );
}
