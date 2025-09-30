import React from "react";

const AppBar = () => {
  return (
    <div className="fixed hidden top-0 left-0 lg:flex  w-full bg-[#171923] shadow-md px-6 py-4 md:flex items-center  text-white text-sm lg:text-base grow-0 z-50">
      
     
      <div className="flex items-center gap-2">
        <h1 className="text-blue-800 text-2xl font-extrabold tracking-wide font-style-roboto">
       NFTSCAN
        </h1>
      </div>
<div className=" mx-4 text-gray-500 ">
<p>|</p>
</div>
      <div className="flex gap-6 grow-4">
        
        <a href="#" className="font-semibold hover:text-blue-400 ">NFT Explorer </a>
        <a href="#" className="hover:text-blue-400  font-semibold">Site</a>
        <a href="#" className="hover:text-blue-400 font-semibold">NFT API</a>
     
      </div>
            <div className="flex gap-6 ">
        <a href="#" className="hover:text-blue-400 font-semibold">NFT Marketplace</a>
        <a href="#" className="hover:text-blue-400 font-semibold">NFTFi</a>
        <a href="#" className="hover:text-blue-400 font-semibold ">Multichain</a>
            </div>
        <div className=" mx-4 text-gray-500  ">
         <p>|</p>
           </div>    
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-blue-400 font-semibold">NFT Portfolio</a>
   
      
      </div>
    </div>
  );
};

export default AppBar;
