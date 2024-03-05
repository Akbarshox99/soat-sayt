import React from "react";
import { styles } from "../styles";
import soat from "../assets/img/soat.png";
import { Link } from "react-router-dom";
import yotgan from "../assets/img/yotgan.png";
import somka from "../assets/img/somka.png";
import taqincoq from "../assets/img/taqincoq.png";
import logo from "../assets/img/logo.png";
import yashil from "../assets/img/yashil.png";
import yashil1 from "../assets/img/yashil1.png";
import oq from "../assets/img/oq.png";
import qora from "../assets/img/qora.png";
import sariq from "../assets/img/sariq.png";
import image from "../assets/img/image.png";
import yonbosh from "../assets/img/yonbosh.png";
import labaratorya from "../assets/img/labaratorya.png";
import hira from "../assets/img/hira.png";

const Sotish = () => {
  return (
    <div className="bg-gray-100">
      <div className={`${styles.container}`}>
        <div className="relative">
          <img className="h-[500px] ml-[680px]" src={soat} alt="" />
          <div className="absolute left-0 top-0 my-20">
            <h2 className="text-4xl font-bold w-96 my-7">
              Продайте Швейцарские часы за 90% стоимости
            </h2>
            <Link className="border border-black py-2 px-4 mb-32 inline-block">
              Получить оценку часов
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
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
                <p className="w-40 ml-3">
                  Деньги уже через 2 часа после заявки
                </p>
              </div>
              |
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>
                <p className="w-40 ml-3">
                  Деньги уже через 2 часа после заявки
                </p>
              </div>
              |
              <div className="flex items-center">
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
                <p className="w-40 ml-3">
                  Деньги уже через 2 часа после заявки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className={`${styles.container}`}>
          <div className="my-10">
            <h2 className="ml-[450px] text-4xl font-semibold py-10">
              Товары в наличии
            </h2>
            <div className="grid grid-cols-3 gap-10 mx-24">
              <Link>
                <div className="bg-gray-100 relative py-4 px-5 h-72">
                  <img className="mt-20" src={yotgan} alt="" />
                  <div className="absolute top-0 left-0">
                    <h1 className="text-3xl font-medium mx-28 my-7">Часы</h1>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="bg-gray-100 relative py-4 px-5 h-72">
                  <img className="mt-20" src={somka} alt="" />
                  <div className="absolute top-0 left-0">
                    <h1 className="text-3xl font-medium mx-20 my-7">
                      Аксессуары
                    </h1>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="bg-gray-100 relative h-72">
                  <img className="pt-[74px]" src={taqincoq} alt="" />
                  <div className="absolute top-0 left-0">
                    <h1 className="text-3xl font-medium mx-20 my-7">
                      Украшения
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <img className="mx-[500px] my-10" src={logo} alt="" />
            <p className="text-center mb-12">
              Место, где вы можете купить или продать качественные брендовые
              украшения, а также получить займ под <br /> залог часов или
              ювелирных украшений.
            </p>
          </div>
          <div className="py-4">
            <h2 className="text-4xl font-medium ml-[400px] py-4">
              SEO текст - Скупка часов
            </h2>
            <p className="text-center mb-14">
              Текст про скупку часов sum dolor sit amet, consectetur adipiscing
              elit. Aenean euismod bibendum laoreet. Proin <br /> gravida dolor
              sit amet lacus accumsan et viverra justo commodo. Proin sodales
              pulvinar sic tempor. Sociis natoque <br /> penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
              luctus pharetra <br /> vulputate, felis tellus mollis orci, sed
              rhoncus pronin sapien nunc accuan eget.
            </p>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <img className="w-[450px]" src={yashil} alt="" />
            </div>
            <div className="text-center my-10">
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
              <h3 className="text-2xl font-semibold my-5">
                Высокие цены выкупа
              </h3>
              <p>
                Вы получите до 90% от стоимости новых часов. <br /> Мы сразу
                выплачиваем деньги наличными
              </p>
            </div>
            <div>
              <img className="w-[450px]" src={yashil1} alt="" />
            </div>
            <div className="text-center my-10">
              <div className="text-green-500 mx-48">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold my-5">Конфидициальность</h3>
              <p className="">
                Вы можете быть уверены в том, что всесделки в <br /> Chronoland
                проходятанонимно. Мы гарантируем <br /> полнуюсохранность всех
                данных о сделках
              </p>
            </div>
            <div className="text-center bg-black text-white h-96">
              <h3 className="text-2xl font-semibold my-5 w-60 mx-20">
                Мы рабоатем с брендами
              </h3>
              <p>
                ROLEX, AUDEMARS PIGUET, PATEKPHILLIPE, <br /> A.LANGE &
                SOHNE,BLANCPAIN, BREGUET, <br /> CARTIER,CHOPARD, CORUM, FRANCK{" "}
                <br /> MULLER,GIRARD PERREGAUX, GRAHAM, <br />{" "}
                IWC,JAEGER-LECOULTRE, RICHARD <br /> MILLE,VACHERON CONSTANTIN,{" "}
                <br /> HUBLOT,GREUBEL FORSEY
              </p>
              <Link className="my-10 inline-block">
                Смотреть все
                <hr />
              </Link>
            </div>
            <div className="text-center my-10">
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
              <h3 className="text-2xl font-semibold my-5">
                Деньги уже через <br /> 2 часа после заявки
              </h3>
              <p>
                Уже через5 минут, мы проведем бесплатную оценкку <br /> и
                назовем цену, которую вы получите <br />
                <br />
                Мы не требуем оформления множества бумаг и <br /> предоставления
                подтверждающих документов.
              </p>
            </div>
          </div>
          <div className="my-10">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">
                Примеры выкупленных часов
              </h2>
              <Link className="border border-black py-2 px-4">
                Смотреть все
              </Link>
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
                  <p className="mb-2 opacity-70">
                    unworn Seamaster Co-Axial 42mm
                  </p>
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
            <div>
              <img src={yonbosh} alt="" />
            </div>
            <div className="flex justify-between">
              <div className="my-20">
                <h2 className="text-3xl font-semibold mb-4">Online - оценка</h2>
                <p className="text-lg font-medium">
                  Для получения информации о стоимости изделия, <br /> не
                  обязательно лично посещать офис Timer. На <br /> сайте можно
                  заполнить форму обратной связи для <br /> получения
                  экспресс-оценки
                </p>
              </div>
              <div>
                <img src={labaratorya} alt="" />
              </div>
            </div>
            <div className="relative my-8">
              <img src={hira} alt="" />
              <div className="absolute top-0 left-0 flex py-20 px-6">
                <div className="mx-28">
                <div className="text-5xl font-bold text-center mb-10">
                  <p className="text-white">15</p>
                  <p className="text-white">минут</p>
                </div>
                <p className="text-white">
                  В форме необходимо указать некоторые данные о <br /> часах
                  (марка и модель, год покупки, состояние, <br /> наличие документов) и
                  приложить несколько их <br /> фото с разных ракурсов. Также
                  необходимо <br /> указать контактные данные. Наши специалисты <br />
                  выполнят оценку и при необходимости перезвонят <br /> для уточнения
                  деталей. <br /><br /> Так клиент сможет узнать примерную сумму, <br /> которую
                  можно выручить.
                </p>
                </div>
                <div className="bg-white py-3 w-[500px] h-[550px]">
                  <h2 className="text-3xl font-semibold text-center mb-8">Заполните форму</h2>
                 <input className="w-[470px] py-4 px-7 mx-3 h-40 bg-gray-100" type="text" placeholder="Любая информация: Модель, состояние" />
                 <input className="w-[470px] py-4 px-7 mx-3 h-10 my-10 bg-gray-100" type="number" placeholder="Телефон" />
                 <button className="w-[470px] mb-3 py-4 px-7 bg-green-700 text-white mx-3">Оценить изделие </button>
                 <p className="opacity-70 text-center">Нажимая на кнопку, вы даете согласие на обработку своих персональных данных и соглашаетесь с политикой конфиденциальности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sotish;
