import React from "react";
import {HiClock, HiCurrencyDollar, HiOutlineScale} from "react-icons/hi";

interface PackageCardProps {
  title: string;
  description: string;
  deliveryTime: string;
  timeBeetwen: string;
  // priceRange?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  deliveryTime,
  timeBeetwen,
  // priceRange,
}) => {
  return (
    <div className="block w-full md:flex-1 max-w-xs mb-12 cursor-pointer">
      <div className="container mx-auto tablet:my-8 my-2">
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="p-4 bg-green-500 text-white">
            <h2 className="text-3xl font-semibold mb-4  text-center">
              {title}
            </h2>
            <p className="sm-text lg:text-lg min-h-[200px] justify-center items-center flex  text-center">
              {description}
            </p>
          </div>
          <div className="p-4 border-t border-gray-300">
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <HiClock className="w-6 h-6 mr-3 text-green-500" />
                <span className="xs-text lg:text-lg">
                  Teslim Süresi: {deliveryTime}
                </span>
              </li>
              <li className="flex items-center mb-2">
                <HiOutlineScale className="w-6 h-6 mr-3 text-green-500" />
                <span className="xs-text lg:text-lg">
                  Çalışma Saati: {timeBeetwen}
                </span>
              </li>
              {/* <li className="flex items-center">
                <HiCurrencyDollar className="w-6 h-6 mr-3 text-green-500" />
                <span className="sm-text lg:text-lg">Fiyat Aralığı: {priceRange}</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
