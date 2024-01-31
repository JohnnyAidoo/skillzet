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
import { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

function SignUpPage() {
  useEffect(() => {
    AOS.init();
  });

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
      <section className="flex justify-around w-full h-screen to-blue-800 ">
        <div className="flex flex-col justify-center w-1/2 rounded-lg bg-gradient-to-r to-white from-indigo-500">
          <Image
            data-aos="fade-left"
            src={loginSvg}
            alt="svg"
            className="w-full"
          />
        </div>
        <div
          data-aos="zoom-in"
          style={{ backgroundColor: styles.light.primaryLight }}
          className="flex flex-col items-center justify-center w-1/2 h-full px-16"
        >
          <h1 className="mb-5 text-5xl font-bold">
            skill<span>Z</span>et
          </h1>
          <h1 className="mb-5 text-5xl font-bold">
            Create An Account For Free
          </h1>
          <p></p>
          <form className="flex flex-col items-center justify-around h-1/3">
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
            {/* <Link href={""} style={{ color: styles.light.cta }}>
              forgot password
            </Link> */}
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
