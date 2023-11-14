import Header from "@/public/components/header";
import Input from "@/public/components/inputComp";
import Button from "@/public/components/buttonComp";
import styles from "@/public/static/theme";

function SignUpPage() {
  return (
    <>
      <Header />
      <section className="w-full h-screen flex justify-center">
        <div
          style={{ backgroundColor: styles.light.primaryDark }}
          className="w-1/2 h-full flex flex-col justify-center items-center px-16"
        >
          <h1 className="font-bold text-5xl text-indigo-500 mb-10">skillZet</h1>
          <form className="h-1/3 flex flex-col justify-around w-full items-center">
            <Input label="Username" type="text" />
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Input label="Re-type Password" type="password" />
            <Button title="SIGN IN" className="w-1/2" />
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
