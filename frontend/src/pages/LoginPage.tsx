import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import BackGround from "../components/BackGround";
import SignInModal from "../components/LoginPage/SignIn";
import TFAModal from "../components/LoginPage/TwoFactorAuth";

import { refreshTokenAtom } from "../components/atom/LoginAtom";
import { cookieAtom } from "../components/atom/LoginAtom";
import { TFAEnabledAtom } from "../components/atom/LoginAtom";
import ChatPage from "./ChatPage";
import { useNavigate } from "react-router-dom";

import * as socket from "../socket/chat.socket";
import * as chatAtom from "../components/atom/ChatAtom";
import { hasLoginAtom } from "../components/atom/ChatAtom";
import InitialSettingModal from "../components/LoginPage/InitialSetting";

import { AdminLogPrinter } from "../event/event.util";

export default function LoginPage() {
  const [refreshToken, setRefreshToken] = useAtom(refreshTokenAtom);
  const [cookie, setCookie] = useAtom(cookieAtom);
  const [TFAEnabled, setTFAEnabled] = useAtom(TFAEnabledAtom);
  const [hasLogin, setHasLogin] = useAtom(hasLoginAtom);
  const [adminConsole] = useAtom(chatAtom.adminConsoleAtom);

  const cookieIMade = "refreshToken";
  const [cookies, setCookies, removeCookie] = useCookies([cookieIMade]);
  const navigate = useNavigate();

  //useEffect(() => {
  //  const storedRefreshToken = localStorage.getItem("refreshToken");
  //  if (storedRefreshToken !== null) {
  //    setRefreshToken(true);
  //  }
  //  if (cookies[cookieIMade] !== undefined) {
  //    setCookie(true);
  //    localStorage.setItem("refreshToken", cookies[cookieIMade]);
  //    removeCookie(cookieIMade);
  //    setCookie(false);
  //  }
  //}, [setRefreshToken, setCookie]); // data change

  //useEffect(() => {
  //  const value = localStorage.getItem("refreshToken");
  //  if (value) {
  //    const decoded: any = jwt_decode(JSON.stringify(value));
  //    if (decoded.twoFactorEnabled) {
  //      setTFAEnabled(true);
  //    } else {
  //      if (hasLogin === false) {
  //        setHasLogin(true);
  //        navigate("/chat");
  //      } else {
  //        AdminLogPrinter(adminConsole, "already login -- ??");
  //        navigate("/chat");
  //      }
  //    }
  //  }
  //}, [setTFAEnabled]);
  useEffect(() => {
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (storedRefreshToken !== null) {
      setRefreshToken(true);
      setTFAEnabled(true);
      localStorage.setItem("refreshToken", "ftonitakekelelekfselkfkjshldj")
      cookies[cookieIMade] = "cookie token lalala"
    }
    setCookie(true);
    //removeCookie(cookieIMade);
    //setCookie(false);
  }, [setRefreshToken, setCookie]); // data change
  

  return (
    <BackGround>
      {/*{!refreshToken && <SignInModal />}*/}
      {/*{refreshToken && !cookie && TFAEnabled && <TFAModal />}*/}
      {/*{refreshToken ? <InitialSettingModal /> : null}*/}

      {/*<TFAModal/>*/}

      <InitialSettingModal/>
    </BackGround>
  );
}
