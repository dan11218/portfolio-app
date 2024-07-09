import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex w-full max-w-7xl flex-col">
      <h3 className="mb-4">Sign-up</h3>
      <div id="sign-up-screens" className="flex h-full w-full flex-wrap">
        <Image
          src="/static/plannit/login/welcome_screen.png"
          width={185}
          height={100}
          alt="registration"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/sign_up_deselected.png"
          width={185}
          height={100}
          alt="choose profile type"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/sign_up_planner.png"
          width={185}
          height={100}
          alt="profile selected"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/sign_up_vendor.png"
          width={185}
          height={100}
          alt="create a profile"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/create_profile.png"
          width={185}
          height={100}
          alt="welcome screen"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/create_profile_populated.png"
          width={185}
          height={100}
          alt="welcome screen"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/create_profile_errors.png"
          width={185}
          height={100}
          alt="errors in fields"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/today_view.png"
          width={185}
          height={100}
          alt="today view"
          className="mb-4 mr-8 shadow-lg"
        />
        <Image
          src="/static/plannit/login/calendar.png"
          width={185}
          height={100}
          alt="calendar"
          className="mb-4 mr-8 shadow-lg"
        />
      </div>
    </div>
  );
}
