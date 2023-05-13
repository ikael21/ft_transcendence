import { useEffect } from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import { hasLoginAtom } from '../components/atom/ChatAtom';
import { useAtom } from 'jotai';
import BackGround from "../components/BackGround";
import "../styles/404.css";

export default function NotFoundPage() {
  function handleLoginBtn() {
    window.location.href = `${process.env.REACT_APP_API_URL}/`;
  }
  //return(
  //  <div className="ErrorBox">404</div>
  //  <a href='/'></>
  //  );
  return (
    <BackGround>
      <div className="ErrorBox">404</div>
      <button className="ErrorBtn" onClick={handleLoginBtn}>Return Home</button>
    </BackGround>
    );
}
