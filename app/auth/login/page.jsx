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
      <section className="w-full h-screen flex justify-around  to-blue-800 ">
        <div
          data-aos="zoom-in"
          style={{ backgroundColor: styles.light.primaryLight }}
          className="w-1/2 h-full flex flex-col justify-center items-center px-16"
        >
          <h1 className="font-bold text-5xl mb-5">
            skill<span>Z</span>et
          </h1>
          <h1 className="font-bold text-5xl mb-5">Welcome Back</h1>
          <p></p>
          <form className="h-1/4 w-3/4 flex flex-col justify-around items-center">
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
          <Image data-aos="fade-right" src={loginSvg} className="w-full" />
        </div>
      </section>
    </>
  );
}

export default LoginPage;
