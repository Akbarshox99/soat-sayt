import React from "react";
import labaratorya1 from "../assets/img/labaratorya1.png";
import hira from "../assets/img/hira.png";
import { styles } from "../styles";
import yashil from "../assets/img/yashil.png";
import yashil1 from "../assets/img/yashil1.png";
import { Link } from "react-router-dom";
import yonbosh from "../assets/img/yonbosh.png";
import oq from "../assets/img/oq.png";
import qora from "../assets/img/qora.png";
import sariq from "../assets/img/sariq.png";
import image from "../assets/img/image.png";

const Onlain = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="flex">
        <img className="-ml-20" src={labaratorya1} alt="" />
        <div className="bg-gray-100 w-full -mr-[70px] px-10 py-20">
          <h1 className="text-5xl font-medium mb-8">
            Онлайн оценка <br /> Швейцарских часов
          </h1>
          <p>
            Что бы узнать предварительную стоимость наручных <br /> швейцарских
            часов, вы можете заполнив форму на данной <br /> странице. <br />{" "}
            Наличие качественных фотографий, делает определение <br /> стоимости
            более точным — до 95%.
          </p>
        </div>
      </div>
      <div className="my-10">
        <p className="text-center text-xl font-semibold">
          Чтобы узнать реальную стоимость ваших хрогонрафов не обязательно по
          всему <br /> городу искать опытного оценщика или листать форумы.
          Специалисты Таймер в <br /> Москве достаточно квалифицированы и
          обладают богатым многолетним <br /> опытом, чтобы дать оценку
          швейцарских часов любого производителя и модели. <br /> Кроме того, мы
          предоставляем эту услугу удалённо, посредством заполнения <br />{" "}
          специальной формы и отправки фото. Клиенты, предпочитающие личный{" "}
          <br /> контакт при экспертизе часов, могут доставить изделие в офис
          Таймер на <br /> Кутузовском проспекте. Мы с радостью предоставим
          информативные <br /> консультации по любому возникшему вопросу
        </p>
      </div>
      <div className="relative my-8 -ml-20 -mr-[70px]">
        <img src={hira} alt="" />
        <div className="absolute top-0 left-0 flex py-20 px-6">
          <div className="mx-28">
            <div className="text-5xl font-bold text-center mb-10">
              <p className="text-white">15</p>
              <p className="text-white">минут</p>
            </div>
            <p className="text-white">
              В форме необходимо указать некоторые данные о <br /> часах (марка
              и модель, год покупки, состояние, <br /> наличие документов) и
              приложить несколько их <br /> фото с разных ракурсов. Также
              необходимо <br /> указать контактные данные. Наши специалисты{" "}
              <br />
              выполнят оценку и при необходимости перезвонят <br /> для
              уточнения деталей. <br />
              <br /> Так клиент сможет узнать примерную сумму, <br /> которую
              можно выручить.
            </p>
          </div>
          <div className="bg-white w-[500px] h-[550px] py-10">
            <h3 className="text-center text-4xl font-bold mb-10">
              Заполните форму
            </h3>
            <div className="space-y-10 mb-10">
              <input
                className="w-[470px] py-4 px-7 mx-3 h-10 bg-gray-100"
                type="text"
                placeholder="Пожелания по цене"
              />
              <input
                className="w-[470px] py-4 px-7 mx-3 h-10 bg-gray-100"
                type="text"
                placeholder="Ваше имя"
              />
              <input
                className="w-[470px] py-4 px-7 mx-3 h-10 bg-gray-100"
                type="number"
                placeholder="Телефон"
              />
            </div>
            <button className="w-[470px] mb-3 py-4 px-7 bg-green-700 text-white mx-3">
              Оценить изделие{" "}
            </button>
            <p className="opacity-70 text-center">
              Нажимая на кнопку, вы даете согласие на обработку своих
              персональных данных и соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-bold my-10">Преимущества</h2>
      <div className="grid grid-cols-3">
        <div>
          <img className="w-[450px]" src={yashil} alt="" />
        </div>
        <div className="text-center my-20">
          <div className="text-green-500 mx-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-watch"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z" />
              <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A6 6 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a6 6 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A6 6 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0" />
            </svg>
          </div>
          <p className="text-3xl font-bold">
            Вы получаете до 98% <br /> от стоимости новых <br /> часов
          </p>
        </div>
        <div>
          <img className="w-[450px]" src={yashil1} alt="" />
        </div>
        <div className="text-center my-20">
          <div className="text-green-500 mx-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-cash-coin"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
              />
              <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
              <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
              <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
            </svg>
          </div>
          <p className="text-3xl font-bold">
            Вы сразу получаете <br /> деньги наличными{" "}
          </p>
        </div>
        <div className="text-center bg-black text-white h-96 py-20">
          <div className="mx-44 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-car-front-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
            </svg>
          </div>
          <p className="text-3xl font-bold">
            Бесплатные выезд <br /> оценщика в любую <br /> точку Москвы
          </p>
        </div>
        <div className="text-center my-20">
          <div className="text-green-500 mx-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-stopwatch"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
            </svg>{" "}
          </div>
          <p className="text-3xl font-bold">
            Всего за 30 минут вы <br /> сможете продать <br /> дорогие
            швейцарские <br /> часы
          </p>
        </div>
      </div>
      <div>
        <img src={yonbosh} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Примеры выкупленных часов</h2>
        <Link className="border border-black py-2 px-4">Смотреть все</Link>
      </div>
      <div className="grid grid-cols-4 gap-5 my-10">
        <div className="border py-3 px-3 shadow-xl rounded-lg">
          <Link>
            <img src={oq} alt="" />
            <b className="mb-3 inline-block">Versace</b>
            <p className="mb-2 opacity-70">2023 unworn Datejust 41mm</p>
            <b>$17,215</b>
          </Link>
        </div>
        <div className="border py-3 px-3 shadow-xl rounded-lg">
          <Link>
            <img src={sariq} alt="" />
            <b className="mb-3 inline-block">Versace</b>
            <p className="mb-2 opacity-70">V-Code 42mm</p>
            <b>$933</b>
          </Link>
        </div>
        <div className="border py-3 px-3 shadow-xl rounded-lg">
          <Link>
            <img src={qora} alt="" />
            <b className="mb-3 inline-block">Omega</b>
            <p className="mb-2 opacity-70">unworn Seamaster Co-Axial 42mm</p>
            <b>$4,703</b>
          </Link>
        </div>
        <div className="border py-3 px-3 shadow-xl rounded-lg">
          <Link>
            <img src={image} alt="" />
            <b className="mb-3 inline-block">Maurice Lacroix</b>
            <p className="opacity-70 mb-2">Rétrograde watch</p>
            <b>$7,246</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onlain;
