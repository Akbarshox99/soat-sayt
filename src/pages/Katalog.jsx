import React from "react";
import { styles } from "../styles";
import oq from "../assets/img/oq.png";
import qora from "../assets/img/qora.png";
import sariq from "../assets/img/sariq.png";
import image from "../assets/img/image.png";
import uchkamera from "../assets/img/uchkamera.png";
import toqsariq from "../assets/img/toqsariq.png";
import toqkok from "../assets/img/toqkok.png";
import rimraqam from "../assets/img/rimraqam.png";
import pushti from "../assets/img/pushti.png";
import ochyashil from "../assets/img/ochyashil.png";
import mehanika from "../assets/img/mehanika.png";
import kulrang from "../assets/img/kulrang.png";
import kok from "../assets/img/kok.png";
import jigarrang from "../assets/img/jigarrang.png";
import tortburchag from '../assets/img/tortburchag.png'
import { Link } from "react-router-dom";
import strelka from '../assets/img/strelka.png'

const Katalog = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="my-10">
        <h1 className="text-5xl font-semibold">
          Оригинальные швейцарские часы
        </h1>
        <div className="grid grid-cols-4 gap-5 my-8">
          {/* 1 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img src={oq} alt="" />
              <b className="mb-3 inline-block">Versace</b>
              <p className="mb-2 opacity-70">2023 unworn Datejust 41mm</p>
              <b>$17,215</b>
            </Link>
          </div>
          {/* 2 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mb-10 mx-10" src={mehanika} alt="" />
              <b className="mb-3 inline-block">AUDEMARS PIGUET</b>
              <p className="mb-2 opacity-70">Royal Oak</p>
              <b>$ 18,390</b>
            </Link>
          </div>
          {/* 3 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
          <Link>
            <img src={sariq} alt="" />
            <b className="mb-3 inline-block">Versace</b>
            <p className="mb-2 opacity-70">V-Code 42mm</p>
            <b>$933</b>
          </Link>
          </div>
          {/* 4 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
          <Link>
            <img src={qora} alt="" />
            <b className="mb-3 inline-block">Omega</b>
            <p className="mb-2 opacity-70">unworn Seamaster Co-Axial 42mm</p>
            <b>$4,703</b>
          </Link>
          </div>
          {/* 5 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img src={uchkamera} alt="" />
              <b className="mb-3 inline-block">Frederique Constant</b>
              <p className="mb-2 opacity-70">Highlife Chronograph Automatic 39mm</p>
              <b>$4,446</b>
            </Link>
          </div>
          {/* 6 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mx-14 mb-10 mt-10" src={pushti} alt="" />
              <b className="mb-3 inline-block">Rolex</b>
              <p className="mb-2 opacity-70">2023 unworn Datejust 31mm</p>
              <b>$19,159</b>
            </Link>
          </div>
          {/* 7 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mx-10 mb-10" src={rimraqam} alt="" />
              <b className="mb-3 inline-block">Rolex</b>
              <p className="mb-2 opacity-70">2023 unworn Sea-Dweller Deepsea 44mm</p>
              <b>$20,273</b>
            </Link>
          </div>
          {/* 8 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img src={toqkok} alt="" />
              <b className="mb-3 inline-block">Hublot</b>
              <p className="mb-2 opacity-70">Big Bang Unico 44mm</p>
              <b>$17,429</b>
            </Link>
          </div>
          {/* 9 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img src={toqsariq} alt="" />
              <b className="mb-3 inline-block">Omega</b>
              <p className="mb-2 opacity-70">2023 unworn Seamaster Planet Ocean 600M 45.5mm</p>
              <b>$7,657</b>
            </Link>
          </div>
          {/* 10 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mx-14 mb-10 mt-16" src={tortburchag} alt="" />
              <b className="mb-3 inline-block">Cartier</b>
              <p className="mb-2 opacity-70">2023 unworn Santos 35mm</p>
              <b>$7,002</b>
            </Link>
          </div>
          {/* 11 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
          <Link>
            <img className="mb-8" src={image} alt="" />
            <b className="mb-3 inline-block">Maurice Lacroix</b>
            <p className="opacity-70 mb-2">Rétrograde watch</p>
            <b>$7,246</b>
          </Link>
          </div>
          {/* 12 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mb-8" src={strelka} alt="" />
              <b className="mb-3 inline-block">Locman Italy</b>
              <p className="mb-2 opacity-70">Montecristo 43mm</p>
              <b>$5,541</b>
            </Link>
          </div>
          {/* 13 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mx-16 mt-20 mb-10 w-32 h-40" src={kok} alt="" />
              <b className="mb-3 inline-block">Rolex</b>
              <p className="mb-2 opacity-70">Datejust II</p>
              <b>До 700 000 руб.</b>
            </Link>
          </div>
          {/* 14 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mx-10 mt mb-10 w-52 h-60" src={kulrang} alt="" />
              <b className="mb-3 inline-block">Rolex</b>
              <p className="mb-2 opacity-70">Oyster Perpetual</p>
              <b>До 400 000 руб.</b>
            </Link>
          </div>
          {/* 15 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mx-10 mt mb-10 w-44 h-60" src={jigarrang} alt="" />
              <b className="mb-3 inline-block">Rolex</b>
              <p className="mb-2 opacity-70">Datejust II</p>
              <b>До 700 000 руб.</b>
            </Link>
          </div>
          {/* 16 */}
          <div className="border py-3 px-3 shadow-xl rounded-lg">
            <Link>
              <img className="mx-10 mt mb-10 w-44 h-60" src={ochyashil} alt="" />
              <b className="mb-3 inline-block">Versace</b>
              <p className="mb-2 opacity-70">2023 unworn Datejust 41mm</p>
              <b>$17,215</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
