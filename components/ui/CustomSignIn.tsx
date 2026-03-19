import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="text-black/80 font-medium cursor-pointer">
          Sign In 
          </button>
        </SignInButton>
        {/* <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton> */}
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </>
  );
};

export default SignIn;
