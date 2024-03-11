import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-black py-10">
        <div className={`${styles.container}`}>
          <div className="flex items-center">
            <div className="text-white py-10">
              <p>Часовый центр Timer </p>
              <h2 className="text-4xl font-bold w-96 py-4">
                Россия , Москва 01001, ул. Большая Васильковская, 5
              </h2>
            </div>
            <div className="text-white flex space-x-32 mx-20">
              <div className="flex flex-col">
                <Link to="/sotib">Продать</Link>
                <Link to="/onlain">Онлайн оценка</Link>
                <Link to="/katalog">Каталог</Link>
              </div>
              <div className="flex flex-col">
                <Link to="/kompaniya">О компании</Link>
                <Link to="/xizmatlar">Услуги</Link>
                <Link to="/kontact">Контакты</Link>
              </div>
            </div>
          </div>
          <div>
            <a
              className="text-white border pt-2 text-center mb-10 w-60 h-10 inline-block"
              href="https://www.google.com/maps/place/Whiterun/@56.4655447,37.5665969,15.72z/data=!4m15!1m8!3m7!1s0x46b4f05e4709b4b1:0x99a6c3ccce9e973c!2sRussia,+Moscow+Oblast,+Russia!3b1!8m2!3d56.4654352!4d37.5699891!16s%2Fg%2F1hhhm7q6c!3m5!1s0x46b4f1a60b02dfe9:0xe93fd47dc886f51f!8m2!3d56.4651575!4d37.5709866!16s%2Fg%2F11q8ty7bnk?entry=ttu"
              target="blank"
            >
              открыть в гугл картах
            </a>
            <div className="flex justify-between">
              <div className="space-x-7">
                <Link className="text-white">О центре</Link>
                <Link className="text-white">Гарантии</Link>
              </div>
              <div className="flex space-x-8">
                <a className="text-white" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </a>
                <a className="text-white" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-chat-left-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                </a>
                <a className="text-white" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 my-10">
          <div className="flex flex-col">
            <b className="text-green-400">WhatsApp, Telegram</b>
            <b className="text-white text-3xl font-medium">+7 567 345 567 </b>
          </div>
          <div className="flex flex-col">
            <b className="text-green-400">Городской телефон</b>
            <b className="text-white text-3xl font-medium">+7 567 345 567 </b>
          </div>
          <div className="flex flex-col">
            <b className="text-green-400">Почта</b>
            <b className="text-white text-3xl font-medium">+7 567 345 567 </b>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
