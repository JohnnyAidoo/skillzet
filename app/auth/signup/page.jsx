"use client";
import {
  Alert,
  Button,
  Input,
  signUp,
} from "../../../public/components/clientComp";
import styles from "../../../public/static/theme";
import Link from "next/link";
import Image from "next/image";
import loginSvg from "../../../public/static/loginSvg.svg";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState(<></>);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  onsubmit = (e) => {
    e.preventDefault;
    handleSignUp();
  };

  const handleSignUp = (e) => {
    setAlert(<></>);
    signUp(formData.email, formData.password)
      .then((userCredentials) => {
        localStorage.setItem("user_id", userCredentials.user.uid);
        updateProfile(userCredentials.user, {
          displayName: formData.firstName + " " + formData.lastName,
        }).then(router.push("/dashboard"));
      })
      .catch((err) => {
        console.log(err.message);
        setAlert(<Alert color="red">{err.message}</Alert>);
      });
  };

  return (
    <>
      {alert}
      <section className="w-full h-screen flex justify-around  to-blue-800 ">
        <div className="w-1/2 flex flex-col justify-center rounded-lg bg-gradient-to-r to-white from-indigo-500">
          <Image src={loginSvg} alt="svg" className="w-full" />
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
              <Input
                label="First Name"
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={handleInputChange}
              />
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
            />
            <Input
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
            />
            <Button title="SIGN UP" className="w-2/3" onClick={handleSignUp} />
            <Link href={""} style={{ color: styles.light.cta }}>
              forgot password
            </Link>
          </form>
          <p>
            Already have an Account ?
            <Link
              style={{ color: styles.light.cta }}
              className="font-semibold"
              href="/auth/login"
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
