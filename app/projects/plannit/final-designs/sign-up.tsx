import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex w-full max-w-7xl flex-col">
      <h3 className="mb-4">Sign-up</h3>
      <div id="sign-up-screens" className="flex h-full w-full flex-wrap">
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/welcome_screen.png"
            width={500}
            height={500}
            alt="registration"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/sign_up_deselected.png"
            width={500}
            height={500}
            alt="choose profile type"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/sign_up_planner.png"
            width={500}
            height={500}
            alt="profile selected"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/sign_up_vendor.png"
            width={500}
            height={500}
            alt="create a profile"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/create_profile.png"
            width={500}
            height={500}
            alt="create profile"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/create_profile_populated.png"
            width={500}
            height={500}
            alt="create profile populated"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/create_profile_errors.png"
            width={500}
            height={500}
            alt="errors in fields"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/today_view.png"
            width={500}
            height={100}
            alt="today view"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
        <div className={`mb-8 mr-8 flex w-full max-w-[200px] flex-col`}>
          <Image
            src="/static/plannit/login/calendar.png"
            width={500}
            height={100}
            alt="calendar"
            className="mb-4 mr-8 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
