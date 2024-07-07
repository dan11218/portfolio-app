import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex w-full max-w-7xl flex-col">
      <h3 className="mb-4">Sign-up</h3>
      <div id="sign-up-screens" className="flex h-full w-full flex-wrap">
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
    </div>
  );
}
