import { inter } from "@/app/fonts";

export default function Prototype() {
  return (
    <section className={`mb-24 flex w-full flex-col `}>
      <div className="mb-16 flex w-fit flex-col justify-center border-b-8 border-[#639B40] pb-2 pl-16">
        <h2 className={`font-bold ${inter.className}`}>{`Prototype`}</h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-16">
        <iframe
          className="h-[1050px] w-full max-w-[1200px]"
          src="https://embed.figma.com/proto/j0XMibQL5dkfqnznWWMbWG/FreshDirect-Redesign?page-id=1%3A2&node-id=1-1524&node-type=canvas&viewport=755%2C656%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1560&show-proto-sidebar=1&embed-host=share"
        ></iframe>
      </div>
    </section>
  );
}
