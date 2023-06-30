import React from "react";

const mainPage = () => {
  return (
    <>
      <div className="container mx-auto sm:px-4">
        <div className="flex items-center justify-center flex-col h-screen font-bold text-gray-200 font-mono">
          <p className="absolute top-10 left-10 ">Ram Babu Sharma</p>
          <h1 className="font-bold text-[5em]  underline">
            VIVEK MARKETING COOL
          </h1>
          <p className="mx-[20%] text-lg text-center mt-4">
            D-Fridge, Watercooler, Display, Visicooler, Fourdoor, Two door,
            Fridge, Under-Counter and all kinds of fridges
          </p>
          <h3>AMC & MAINTAINANCE</h3>
          <p>(Restaurants, Banquet Hall, Bar & Canteen)</p>

          <div className="border-t w-[75%] border-white flex flex-col text-center mt-5">
            <p className="my-2">ADDRESS: 160 First Floor, Sainik Enclave, Sec-5, Mohan Garden, Uttam Nagar, New Delhi - 110059</p>
            <h3 className="text-gray-300 my-2">
              CONTACT: <span className="text-white">+91-9650888455</span>,{" "}
              <span className="text-white">+91-9871968455</span>
            </h3>
            <h3 className="text-gray-300 my-2">
              EMAIL:{" "}
              <span className="text-white">
                ram.babu.sharma102938@gmail.com
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default mainPage;
