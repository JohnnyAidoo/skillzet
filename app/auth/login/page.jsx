import { Button, Input } from "../../../public/components/clientComp";
import styles from "../../../public/static/theme";
import Link from "next/link";
import Image from "next/image";
import loginSvg from "../../../public/static/loginSvg.svg";

function LoginPage() {
  return (
    <>
      <section className="w-full h-screen flex justify-around  to-blue-800 ">
        <div
          style={{ backgroundColor: styles.light.primaryLight }}
          className="w-1/2 h-full flex flex-col justify-center items-center px-16"
        >
          <h1 className="font-bold text-5xl mb-5">
            skill<span>Z</span>et
          </h1>
          <h1 className="font-bold text-5xl mb-5">Welcome Back</h1>
          <p></p>
          <form className="h-1/4 w-3/4 flex flex-col justify-around items-center">
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Button title="LOG IN" className="w-full" />
            <Link href={""} style={{ color: styles.light.cta }}>
              forgot password
            </Link>
          </form>
          <p>
            Don't have an Account ?{" "}
            <Link
              style={{ color: styles.light.cta }}
              className="font-semibold"
              href="/auth/signup"
            >
              SIGN UP
            </Link>
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-center rounded-lg bg-gradient-to-r from-white to-indigo-500">
          <Image src={loginSvg} className="w-full" />
        </div>
      </section>
    </>
  );
}

export default LoginPage;
