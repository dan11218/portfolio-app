import Button from "@/app/components/button";
import Image from "next/image";

export default function FinalDesign() {
  return (
    <section className="flex h-fit w-screen flex-col items-center px-[40px] pb-24 pt-14">
      <div className="flex w-full max-w-4xl flex-col items-center">
        <div>
          <h3 className="mb-3 font-bold text-rose-400">Final Designs</h3>
        </div>
        <div className="flex w-full max-w-4xl flex-col">
          <h3 className="mb-4">Sign-up</h3>
          <div
            id="sign-up-screens"
            className="mb-12 flex h-fit flex-wrap justify-center md:justify-normal"
          >
            <Image
              src="/static/plannit/login/welcome screen.png"
              width={185}
              height={100}
              alt="registration"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/sign up - deselected.png"
              width={185}
              height={100}
              alt="choose profile type"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/sign up - planner.png"
              width={185}
              height={100}
              alt="profile selected"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/sign up - vendor.png"
              width={185}
              height={100}
              alt="create a proifle"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/create profile.png"
              width={185}
              height={100}
              alt="welcome screen"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/create profile - populated.png"
              width={185}
              height={100}
              alt="welcome screen"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/create profile - errors.png"
              width={185}
              height={100}
              alt="welcome screen"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/today view.png"
              width={185}
              height={100}
              alt="welcome screen"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/login/calendar.png"
              width={185}
              height={100}
              alt="welcome screen"
              className="mb-4 mr-8 shadow-lg"
            />
          </div>
          <h3 className="mb-4">Create new event</h3>
          <div
            id="new-event-screens"
            className="mb-12 flex h-fit flex-wrap justify-center md:justify-normal"
          >
            <Image
              src="/static/plannit/create-new-event/new event.png"
              width={185}
              height={100}
              alt="new event form"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/create-new-event/vendors - venues (search).png"
              width={185}
              height={100}
              alt="list of vendors (filtered)"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/create-new-event/vendors - venues (keywords).png"
              width={185}
              height={100}
              alt="venue page"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/create-new-event/vendor page - hotel.png"
              width={185}
              height={100}
              alt="new event form with vendor selected"
              className="mb-4 mr-8 shadow-lg"
            />
            <Image
              src="/static/plannit/create-new-event/new event with vendor.png"
              width={185}
              height={100}
              alt="new event form with vendor selected"
              className="mb-4 mr-8 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
