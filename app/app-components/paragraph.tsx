export default function Paragraph(props: any) {
  // Available props: title, body, showTitle, underlined

  return (
    <div className="mb-16 flex flex-col">
      <p
        className={`mb-3 ${props.textAlign} ${props.headerSize} ${
          props.showTitle ? "visible" : "invisible"
        }`}
      >
        {props.title}
      </p>
      {props.underlined ? (
        <hr
          className={`m-auto my-1 mb-8 h-1 w-[150px] rounded bg-gradient-to-r from-rose-400 to-orange-400`}
        />
      ) : (
        ""
      )}
      <p>{props.body}</p>
    </div>
  );
}
