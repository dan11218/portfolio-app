export default function Header(props: any) {
  return (
    <div className={"mb-8 flex w-fit flex-col items-center"}>
      {props.largeFont ? <h1>{props.title}</h1> : <h3>{props.title}</h3>}
      <hr
        className={`m-auto my-1 h-1 w-full rounded bg-gradient-to-r ${props.color}`}
      />
    </div>
  );
}
