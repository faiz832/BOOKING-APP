// import { signIn } from "@/auth";
import { Metadata } from "next";
import { FaG } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-white w-96 mx-auto rounded shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-1">Log In</h1>
        <p className="font-medium mb-5 text-gray-500">Masuk ke akun Anda</p>
        <div className="py-4 text-center">
          {/* <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          > */}
          <button className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-medium py-3 px-6 rounded hover:bg-blue-600 cursor-pointer">
            <FaG className="size-6" />
            Masuk dengan Google
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
