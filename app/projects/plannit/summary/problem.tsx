export default function Problem() {
  return (
    <div className="flex h-full w-full max-w-7xl flex-row items-end justify-center py-8">
      <div className="flex w-full max-w-xl flex-col px-16">
        <h4 className="mb-3 font-bold text-rose-400">Problem</h4>
        <p>
          {`It can be difficult to keep track of all the details, such as which vendors are assigned to which events, contacting venues for availability, or remembering to complete specific tasks for each event, among other duties.`}
        </p>
      </div>
      {/* <div className="flex h-fit w-[200px]">
          <Image
            src={`/static/graphics/question mark.png`}
            width={20}
            height={20}
            layout="responsive"
            alt="question mark"
          />
        </div> */}
    </div>
  );
}
