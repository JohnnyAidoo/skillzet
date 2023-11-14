import Header from "@/public/components/header";
import Input from "@/public/components/inputComp";
import Button from "@/public/components/buttonComp";
import styles from "@/public/static/theme";
import Link from "next/link";

function LoginPage() {
  return (
    <>
      <section className="w-full h-screen flex justify-around  to-blue-800 ">
        <div
          style={{ backgroundColor: styles.light.primaryDark }}
          className="w-2/3 h-full flex flex-col justify-center items-center px-16"
        >
          <h1 className="font-bold text-5xl mb-10">Log in to skillZet</h1>
          <form className="h-1/4 w-1/2 flex flex-col justify-around items-center">
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Button title="LOG IN" className="w-1/2" />
          </form>
        </div>
        <div className="w-1/3 p-5 bg-gradient-to-b from-light-blue-500 to-indigo-800 w-1/2 flex flex-col justify-center items-center">
          <div className="h-2/3 flex flex-col justify-around items-center text-center">
            <h2 className="text-white text-7xl font-bold">Welcome Back</h2>
            <h3 className="text-white text-xl ">
              To keep connected with us please login with your personal info
            </h3>
            <div className="flex flex-col justify-center items-center w-full">
              <p className="text-white">Are you new here ? </p>
              <Link href="/auth/signup">
                <Button
                  className="full"
                  color="white"
                  title="Sign Up"
                  variant="outlined"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
