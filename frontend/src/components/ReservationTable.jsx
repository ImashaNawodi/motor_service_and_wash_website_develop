import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdPreview } from "react-icons/md";

const ReservationTable = ({reservations}) => {

  return (

      
      
      <div className=" py-6 mt-4 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    width="18"
                    height="18"
                    className="w-4 lg:w-auto"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Vehicle Type
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Vehicle Number
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Services
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Service Station
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Comments
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Operations
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
          {reservations && reservations.map((reservation,index) => (

            <tr key={reservation._id} >
            
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              {index + 1} 
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {reservation.VehicleType}              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {reservation.VehicleNumber}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {reservation.Services}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {reservation.ServiceStation}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {reservation.Date}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {reservation.Time}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              {reservation.Comments}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
              <div className="icon-link flex justify-center gap-x-4">
                    <Link to={`/reservation/preview/${reservation._id}`}>
                      <MdPreview className="text-2xl text-green-600" />
                    </Link>
                    <Link to={`/reservation/update/${reservation._id}`}>
                      <AiOutlineEdit className="text-2xl text-blue-800 " />
                    </Link>
                    <Link to={`/reservation/delete/${reservation._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-500" />
                    </Link>
                  </div>
              </td>

            </tr>
            ))}
          </tbody>

        </table>
        
      </div>
    </div>
    
  );
};

export default ReservationTable;
