import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/UI/Button";
import { getUserAndAuthenticate } from "../utils/apiAuth";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  ("admintwo");

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUserAndAuthenticate(email, password, navigate);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <section className="h-[100dvh] ">
      <div className="h-full grid grid-rows-[10fr,70fr,20fr] justify-center text-[13px]">
        <div
          className="flex items-center
        justify-center"
        >
          <img
            src="/logo-dark.png"
            alt="Amazon Logo"
            className="w-[8rem] bg-white"
          />
        </div>
        <div className="flex flex-col border-[1px] max-w-[22rem] p-6 rounded-lg">
          <div>
            <h1 className="text-2xl font-semibold">Sign In</h1>
          </div>
          <div className="my-4 font-semibold">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
              <div>
                <label htmlFor="email">Email or mobile phone number</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  className="border-[1px] border-black w-full py-1 focus:ring-4 focus:outline-none ring-cyan-200 focus:rounded-sm mt-1"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label htmlFor="password">Password</label>
                  <button className="text-blue-500">Forgot Password</button>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  id="password"
                  className="border-[1px] border-black w-full py-1 focus:ring-4 focus:outline-none ring-cyan-200 rounded-sm mt-1"
                />
              </div>
              <Button
                customStyle={{
                  color: "bg-btnPrimary",
                  addStyle: "rounded-lg",
                }}
              >
                Sign in
              </Button>

              <div>
                <p>
                  By continuing , you agree to Amazon's
                  <span className="text-blue-500"> Conditions of Use</span> and
                  <span className="text-blue-500"> Privacy Notice.</span>
                </p>
              </div>
            </form>
          </div>
          <div className="flex flex-col relative mt-4">
            <div className="my-2 absolute top-[-28%] left-[30%] bg-white px-2">
              <h2>New to Amazon?</h2>
            </div>
            <p className="border-b-2 border-slate-200"></p>
            <Button
              customStyle={{
                color: "bg-white",
                hoverBg: "hover:bg-slate-100",
                margin: "mt-6",
                addStyle:
                  "border-[1px] border-slate-400 rounded-lg drop-shadow-lg",
              }}
            >
              Create your Amazon account
            </Button>
          </div>
        </div>
        <footer className=""></footer>
      </div>
    </section>
  );
}

export default Login;
