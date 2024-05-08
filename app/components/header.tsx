export default function Header(props: any) {
  return (
    <div className={"mb-16 flex flex-col"}>
      {props.largeFont ? <h1>{props.title}</h1> : <h3>{props.title}</h3>}
      <hr
        className={`m-auto my-1 h-1 w-full max-w-32 rounded bg-gradient-to-r ${props.color} dark:bg-gray-300`}
      />
    </div>
  );
}
