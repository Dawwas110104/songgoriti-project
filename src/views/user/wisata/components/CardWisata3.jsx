import React from "react";
import { Link } from "react-router-dom";

const CardWisata = (data) => {
  //  key={index}
  //           title={item.nama}
  //           author={item.penjual}
  //           price={item.harga}
  //           nohp={item.telp}
  const wisata = "2";
  return (
    <div className="mt-2 mb-8 grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <img src={data.img} alt="" />
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
          {data.title}
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          {data.desc}
        </p>

        <Link
          className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          to={`/user/Profile-Wisata/${wisata}`}
        >
          Lihat lebih detaiil
        </Link>
      </div>
    </div>
  );
};

export default CardWisata;
