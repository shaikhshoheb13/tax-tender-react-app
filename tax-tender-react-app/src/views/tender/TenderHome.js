import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";

export default function TenderHome() {
    return (
        <>
          <Navbar transparent />
          <main>
             <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                
              >
                <span
                  id="blackOverlay"
                  className="w-full h-350-px absolute bg-blue-600"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className="text-white font-semibold text-4xl">
                        Latest Tender information
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative flex w-10/12 items-stretch mt-12 ml-16">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                  <button
                    href=""
                    className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 -ml-4 ease-linear transition-all duration-150 z-10"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="relative pt-8 flex content-center items-center justify-center">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                
              >
                <span
                  id="blackOverlay"
                  className="w-full h-500-px absolute bg-gray-300"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center -mt-5 mb-5">
                    <div className="pr-12">
                      <h1 className="text-black font-semibold text-4xl">
                        Latest Tenders
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-800">
                          Page visits
                        </h3>
                      </div>
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          See all
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Page name
                          </th>
                          <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Visitors
                          </th>
                          <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Unique users
                          </th>
                          <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            Bounce rate
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            /argon/
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            4,569
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            340
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            <i className="fas fa-arrow-up text-green-500 mr-4"></i>
                            46,53%
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            /argon/index.html
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            3,985
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            319
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            46,53%
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            /argon/charts.html
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            3,513
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            294
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            36,49%
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            /argon/tables.html
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            2,050
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            147
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            <i className="fas fa-arrow-up text-green-500 mr-4"></i>
                            50,87%
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            /argon/profile.html
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            1,795
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            190
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                            <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                            46,53%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    
            {/*<section className="pb-20 bg-gray-300 -mt-64">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                          <i className="fas fa-award"></i>
                        </div>
                        <Link target="_" to="/admin/dashboard" className="">
                          <h6 className="text-2xl font-semibold">Government Tenders</h6>
                          <p className="mt-2 mb-4 text-gray-600">
                            Divide details about your product or agency work into
                            parts. A paragraph describing a feature will be enough.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
    
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                          <i className="fas fa-retweet"></i>
                        </div>
                        <h6 className="text-2xl font-semibold">Tax Filing & Accounting</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Keep you user engaged by providing meaningful information.
                          Remember that by this time, the user is curious.
                        </p>
                      </div>
                    </div>
                  </div>
    
                  <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-2xl font-semibold">GST Registration/Filing</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Write a few lines about each one. A paragraph describing a
                          feature will be enough. Keep you user engaged!
                        </p>
                      </div>
                    </div>
                  </div>
    
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                          <i className="fas fa-award"></i>
                        </div>
                        <h6 className="text-2xl font-semibold">Digital Certificate(DSC)</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Divide details about your product or agency work into
                          parts. A paragraph describing a feature will be enough.
                        </p>
                      </div>
                    </div>
                  </div>
    
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                          <i className="fas fa-retweet"></i>
                        </div>
                        <h6 className="text-2xl font-semibold">Company Services</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Keep you user engaged by providing meaningful information.
                          Remember that by this time, the user is curious.
                        </p>
                      </div>
                    </div>
                  </div>
    
                  <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-2xl font-semibold">Registration Services</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Write a few lines about each one. A paragraph describing a
                          feature will be enough. Keep you user engaged!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="flex flex-wrap items-center mt-32">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                      <i className="fas fa-user-friends text-xl"></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      Working with us is a pleasure
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                      Don't let your uses guess by attaching tooltips and popoves to
                      any element. Just make sure you enable them first via
                      JavaScript.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and you're
                      good to go. Just make sure you enable them first via
                      JavaScript.
                    </p>
                    <Link to="/" className="font-bold text-gray-800 mt-8">
                      Check Notus React!
                    </Link>
                  </div>
    
                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-blue-600 fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          Top Notch Services
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever happens.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="pb-20 relative block bg-gray-900">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-gray-900 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
    
              <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <h1 className="text-4xl font-semibold text-white">
                      Why MyTenderTax.com?
                    </h1>
                  </div>
                </div>
                <div className="flex flex-wrap mt-12 justify-center">
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-medal text-xl"></i>
                    </div>
                    <h6 className="text-xl mt-5 font-semibold text-white">
                      Excelent Services
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-poll text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Grow your market
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-lightbulb text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Transparancy
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 text-center">
                    <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                      <i className="fas fa-lightbulb text-xl"></i>
                    </div>
                    <h5 className="text-xl mt-5 font-semibold text-white">
                      Confidentiality
                    </h5>
                    <p className="mt-2 mb-4 text-gray-500">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="relative block py-24 lg:pt-0 bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">
                          Want to work with us?
                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                          Complete this form and we will get back to you in 24
                          hours.
                        </p>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            placeholder="Full Name"
                          />
                        </div>
    
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                          />
                        </div>
    
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Type a message..."
                          />
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-12 pb-32 bg-gray-300">
              <div className="w-full px-4">
                  <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-3/12 px-4 ml-auto">
                      <span className="block uppercase text-gray-600 text-2xl font-semibold mb-2">
                        Company Services
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/presentation?ref=nr-footer"
                          >
                            Private Limited Registration
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://blog.creative-tim.com?ref=nr-footer"
                          >
                            Limited Liability Partnership (LLP)
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.github.com/creativetimofficial?ref=nr-footer"
                          >
                            One Person Company
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                          >
                            MSME Registration
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                          >
                            EPF Registration
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 ml-auto">
                      <span className="block uppercase text-gray-600 text-2xl font-semibold mb-2">
                        Registration Services
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/presentation?ref=nr-footer"
                          >
                            FSSAI License
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://blog.creative-tim.com?ref=nr-footer"
                          >
                            import Export Code
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.github.com/creativetimofficial?ref=nr-footer"
                          >
                            Trademark Registration
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                          >
                            Copyright Registration
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                          >
                            ESI Registration
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 ml-auto">
                      <span className="block uppercase text-gray-600 text-2xl font-semibold mb-2">
                        Taxation
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/presentation?ref=nr-footer"
                          >
                            Income Tax Return
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://blog.creative-tim.com?ref=nr-footer"
                          >
                            TDS Return
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.github.com/creativetimofficial?ref=nr-footer"
                          >
                            GST Registration
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                          >
                            GST Return
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-3/12 px-4">
                      <span className="block uppercase text-gray-600 text-2xl font-semibold mb-2">
                        LegalFidelity
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://github.com/creativetimofficial/notus-react/blob/master/LICENSE.md?ref=nr-footer"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://creative-tim.com/terms?ref=nr-footer"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://creative-tim.com/privacy?ref=nr-footer"
                          >
                            Terms & Conditions
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://creative-tim.com/contact-us?ref=nr-footer"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-lg"
                            href="https://creative-tim.com/contact-us?ref=nr-footer"
                          >
                            Payment Page
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </section> */}
          </main>
        </>
      );
}