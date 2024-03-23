"use client";
import axios from "axios";
import styles from "./TelegramBot.module.scss";
import { useState } from "react";

export default function TelegramBot() {
  const [nameUser, setNameUser] = useState("");
  const [numbereUser, setNumberUser] = useState();

  const Text = `${nameUser} ;   ${numbereUser}`;
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = "5125689786";
  const sendMessage = (text) => {
    axios.get(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${Text}`
    );
    setNameUser('');
    setNumberUser('');
    alert('сообщение отправлено');
    
  };
  return (
    <div className={styles.telegramBot}>
      <button
        className={styles.inputButton}
        type="button"
        onClick={sendMessage}
      >
        ЗАКАЗАТЬ ЗВОНОК
      </button>

      <input
        className={styles.inputButton}
        value={nameUser}
        placeholder={"Ваше имя"}
        type="text"
        onInput={(e) => setNameUser(e.target.value)}
      />
      <input
        className={styles.inputButton}
        value={numbereUser}
        placeholder={"Ваш номер телефона"}
        required
        type="tel."
        onInput={(e) => setNumberUser(e.target.value)}
      />
    </div>
  );
}
