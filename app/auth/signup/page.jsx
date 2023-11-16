import { Button, Input } from "../../../public/components/clientComp";
import styles from "../../../public/static/theme";
import Link from "next/link";
import Image from "next/image";
import loginSvg from "../../../public/static/loginSvg.svg";

function SignUpPage() {
  return (
    <>
      <section className="w-full h-screen flex justify-around  to-blue-800 ">
        <div className="w-1/2 flex flex-col justify-center rounded-lg bg-gradient-to-r to-white from-indigo-500">
          <Image src={loginSvg} className="w-full" />
        </div>
        <div
          style={{ backgroundColor: styles.light.primaryLight }}
          className="w-1/2 h-full flex flex-col justify-center items-center px-16"
        >
          <h1 className="font-bold text-5xl mb-5">
            skill<span>Z</span>et
          </h1>
          <h1 className="font-bold text-5xl mb-5">
            Create An Account For Free
          </h1>
          <p></p>
          <form className="h-1/3  flex flex-col justify-around items-center">
            <div className="flex justify-between">
              <Input label="First Name" type="text" />
              <Input label="Last Name" type="text" />
            </div>
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Button title="SIGN UP" className="w-2/3" />
            <Link href={""} style={{ color: styles.light.cta }}>
              forgot password
            </Link>
          </form>
          <p>
            Already have an Account ?{" "}
            <Link
              style={{ color: styles.light.cta }}
              className="font-semibold"
              href="/auth/login
              "
            >
              LOG IN
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
