import "../../styles/LoginModals.css";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLogPrinter } from "../../event/event.util";
import * as chatAtom from "../../components/atom/ChatAtom";
import { useAtom } from "jotai";

export default function InitialSettingModal() {
  const [profileImage, setProfileImage] = useState("/smile.png");
  const [adminConsole] = useAtom(chatAtom.adminConsoleAtom);
  const profileRef = useRef<HTMLInputElement>(null);

  const saveImageFile = () => {
    if (profileRef.current?.files?.[0]) {
      const newImg = URL.createObjectURL(profileRef.current?.files[0]);
      setProfileImage(newImg);
    }
  };

  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  const setDefaultInfo = async () => {
    if (newName.length < 2 || newName.trim().length < 2) {
      alert("Имя от 3 символов!");
      setNewName("");
      return;
    }

    const formData = new FormData();
    if (profileRef.current?.files?.[0]) {
      formData.append("profileImage", profileRef.current?.files?.[0]!);
      AdminLogPrinter(adminConsole, profileRef.current?.files?.[0]!.name);
    }

    const nickNameFormat = JSON.stringify({ nickname: newName });

    try {
      if (profileRef.current?.files?.[0]) {
        const profileChange = await fetch(
          `${process.env.REACT_APP_API_URL}/user/profile-img-change`,
          {
            credentials: "include",
            method: "POST",
            body: formData,
          }
        );

        if (!profileChange.ok) {
          alert("Ошибка изменения профиля [1]");
          //return;
        }
      }

      const nickNameChange = await fetch(`${process.env.REACT_APP_API_URL}/user/nickname`, {
        credentials: "include",
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: nickNameFormat,
      });

      if (!nickNameChange.ok) {
        alert("Ошибка изменения профиля [2]");
        //return;
      }
    } catch (error) {
      alert(error);
    }
    AdminLogPrinter(adminConsole, newName);
    //navigate("/chat");
    window.location.href = `${process.env.REACT_APP_API_URL}/chat`;
  };

  return (
    <div className="LoginModalsBG">
      <div
        className="DefaultProfileImg"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: "200px",
          width: "200px",
          height: "200px",
        }}
      />
      <div className="ChangeProfileImageBtn" onClick={() => {}}>
        <label htmlFor="ChangeImage" />
        <input
          id="ChangeImage"
          type="file"
          accept="image/*"
          multiple={false}
          onChange={saveImageFile}
          ref={profileRef}
        />
      </div>
      <div className="NickNameInitialForm">
        <label htmlFor="InitialSaveName">Введи свой никнейм</label>
        <input
          id="InitialSaveName"
          type="text"
          placeholder="Никнейм"
          maxLength={8}
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      </div>
      <button className="InitialSettingSaveBtn" onClick={setDefaultInfo}>
        Сохранить
      </button>
    </div>
  );
}
