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
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </>
  );
};

export default SignIn;
