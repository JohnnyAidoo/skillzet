"use client";

import {
  Alert,
  Button,
  Input,
  signIn,
} from "../../../public/components/clientComp";
import styles from "../../../public/static/theme";
import Link from "next/link";
import Image from "next/image";
import loginSvg from "../../../public/static/loginSvg.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

function LoginPage() {
  useEffect(() => {
    AOS.init();
  });
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState(<></>);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    user_id != null ? router.replace("/dashboard") : null;
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = () => {
    setAlert(<></>);
    signIn(formData.email, formData.password)
      .then((userCredentials) => {
        localStorage.setItem("user_id", userCredentials.user.uid);
        router.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setAlert(<Alert color="red">{err.message}</Alert>);
      });
  };

  return (
    <>
      {alert}
      <section className="flex justify-around w-full h-screen lg:to-blue-800 from-white to-indigo-500">
        <div 
          data-aos="zoom-in"
          style={{ backgroundColor: styles.light.primaryLight }}
          className="flex flex-col items-center justify-center w-full h-full px-16 lg:w-1/2"
        >
          <h1 className="mb-5 text-5xl font-bold">
            skill<span>Z</span>et
          </h1>
          <h1 className="mb-5 text-5xl font-bold">Welcome Back</h1>
          <p></p>
          <form className="flex flex-col items-center justify-around w-3/4 h-1/4 from-white to-indigo-500">
            <Input
              onChange={handleInputChange}
              label="Email"
              type="email"
              name="email"
              value={formData.email}
            />
            <Input
              onChange={handleInputChange}
              label="Password"
              type="password"
              name="password"
              value={formData.password}
            />
            <Button title="LOG IN" className="w-full" onClick={handleSignIn} />
            {/* <Link href={""} style={{ color: styles.light.cta }}>
              forgot password
            </Link> */}
          </form>
          <p>
            Do not have an Account ?
            <Link
              style={{ color: styles.light.cta }}
              className="font-semibold"
              href="/auth/signup"
            >
              SIGN UP
            </Link>
          </p>
        </div>
        <div className="flex-col justify-center hidden w-1/2 rounded-lg lg:flex bg-gradient-to-r from-white to-indigo-500">
          <Image
            data-aos="fade-right"
            src={loginSvg}
            className="w-full"
            alt="logo image"
          />
        </div>
      </section>
    </>
  );
}

export default LoginPage;
