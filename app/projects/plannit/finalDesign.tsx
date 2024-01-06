import Image from "next/image";

export default function FinalDesign() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pb-24 pt-14">
      <h1 className="mb-10">Final Designs</h1>
      <div className="flex w-full max-w-4xl flex-col">
        <h3 className="mb-4">Sign-up</h3>
        <div id="signup-screens" className="mb-10 flex h-fit flex-wrap">
          <Image
            src="/plannit/login/Splash screen.png"
            width={185}
            height={100}
            alt="registration"
            className="mb-4 mr-8 shadow-lg"
          />
          <Image
            src="/plannit/login/Sign Up.png"
            width={185}
            height={100}
            alt="choose profile type"
            className="mb-4 mr-8 shadow-lg"
          />
          <Image
            src="/plannit/login/Sign Up - Planner.png"
            width={185}
            height={100}
            alt="profile selected"
            className="mb-4 mr-8 shadow-lg"
          />
          <Image
            src="/plannit/login/Create profile.png"
            width={185}
            height={100}
            alt="create a proifle"
            className="mb-4 mr-8 shadow-lg"
          />
          <Image
            src="/plannit/login/Today View.png"
            width={185}
            height={100}
            alt="welcome screen"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <h3 className="mb-4">Create new event</h3>
        <div id="new-event-screens" className="mb-10 flex h-fit flex-wrap">
          <Image
            src="/plannit/create-new-event/New Event.png"
            width={185}
            height={100}
            alt="new event form"
            className="mb-4 mr-8 shadow-lg"
          />
          <Image
            src="/plannit/create-new-event/Vendors (filtered).png"
            width={185}
            height={100}
            alt="list of vendors (filtered)"
            className="mb-4 mr-8 shadow-lg"
          />
          <Image
            src="/plannit/create-new-event/Venue.png"
            width={185}
            height={100}
            alt="venue page"
            className="mb-4 mr-8 shadow-lg"
          />
          <Image
            src="/plannit/create-new-event/New Event with vendor.png"
            width={185}
            height={100}
            alt="new event form with vendor selected"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
