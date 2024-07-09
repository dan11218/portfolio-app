import Image from "next/image";

export default function NewEvent() {
  return (
    <div className="flex w-full max-w-7xl flex-col">
      <h3 className="mb-4">Create new event</h3>
      <div id="new-event-screens" className="flex h-full w-full flex-wrap">
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/create-new-event/New_Event.png"
            width={500}
            height={500}
            layout="responsive"
            alt="new event form"
            className="shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/create-new-event/vendors_venues_search.png"
            width={500}
            height={500}
            layout="responsive"
            alt="list of vendors (filtered)"
            className="shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/create-new-event/vendors_venues_keywords.png"
            width={500}
            height={500}
            layout="responsive"
            alt="venue page"
            className="shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/create-new-event/vendor_page_hotel.png"
            width={500}
            height={500}
            layout="responsive"
            alt="new event form with vendor selected"
            className="shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/create-new-event/New_Event_with_vendor.png"
            width={500}
            height={500}
            layout="responsive"
            alt="new event form with vendor selected"
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
