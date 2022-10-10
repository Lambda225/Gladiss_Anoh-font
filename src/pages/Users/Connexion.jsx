import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";

import axios from "../../api/axios";
const LOGIN_URL = "/login";

function Connexion() {
  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttribs] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, {
        email: user,
        password: pwd,
      });
      const access_token = response?.data?.access_token;
      const userInfo = response?.data.user;
      console.log("access_token:", access_token);
      const roles = response?.data?.user?.roles;
      console.log(roles);
      setAuth({ userInfo, roles, access_token });
      resetUser();
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("le serveur est fermé");
      } else if (err.response?.status === 400) {
        console.log(err);
        setErrMsg("email ou mot de passe absent");
      } else if (err.response?.status === 401) {
        setErrMsg("non autorisé");
      } else {
        setErrMsg("la connexion a échoué");
        console.log(err);
      }
      errRef.current.focus();
    }
  };

  if (!!auth?.user) {
    navigate("/", { replace: true });
  }

  return (
    <div className="bg-rose-50 min-h-screen flex flex-col items-center py-20 sm:flex-row sm:gap-x-5 lg:gap-x-14 sm:justify-center ">
      <p className="w-4/5 sm:w-[45%] lg:w-[30%] mb-14 2xl:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        repudiandae labore totam corporis ut, dolore a pariatur animi enim
        laborum sunt doloribus eaque placeat mollitia neque necessitatibus
        obcaecati provident distinctio?
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-4/5 sm:w-[45%] lg:w-[30%] 2xl:w-[20%] items-center bg-white px-[8%] py-9 lg:py-7 sm:p-[6%] 2xl:p-[3%] lg:px-[4%] rounded-lg shadow-3xl"
      >
        <h1 className="text-2xl 2xl:text-3xl font-semibold mb-12 relative pb-3 after:absolute after:left-[50%] after:bottom-0 after:translate-x-[-50%] after:h-[2px] after:w-3/5 after:bg-marron-200">
          Connexion
        </h1>
        <p ref={errRef} className={errMsg ? "errmsg" : ""}>
          {errMsg}
        </p>
        <input
          type="email"
          id="email"
          ref={userRef}
          {...userAttribs}
          required
          placeholder="Mail"
          className="w-full 2xl:text-xl bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
        />
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          placeholder="Mots de passe"
          className="w-full 2xl:text-xl bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
        />
        <div className="flex justify-start items-center mb-6 w-full">
          <input
            type="checkbox"
            onChange={toggleCheck}
            checked={check}
            id="souvenir"
            className=" h-5 w-5 mr-4"
          />
          <label htmlFor="souvenir" className="2xl:text-xl">
            Se souvenir de moi
          </label>
        </div>
        <button className="w-full py-4 text-white bg-blue-200 rounded-lg mb-4 2xl:text-xl">
          Se connecter
        </button>
        <NavLink to="/inscription">
          <p className="font-semibold text-marron-200 2xl:text-xl">
            {" "}
            S'inscrire
          </p>
        </NavLink>
      </form>
    </div>
  );
}

export default Connexion;
