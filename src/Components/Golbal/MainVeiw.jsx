import React from "react";
import icImage from "../../assets/image1.png";
import puggy from "../../assets/puggy.png";
import meet from "../../assets/meet.png";
import lil from "../../assets/lilpudg.png";
import eth from "../../assets/eth.png";
import bnb from "../../assets/bnb.png";
import sol from "../../assets/sol.jpg";
import mint from "../../assets/mint.png";
import poly from "../../assets/poly.jpg";
import base from "../../assets/ic-net-base.png";
import trading from "../../assets/pic-trading.png";
import bar from "../../assets/pic-bar.svg";
import pie from "../../assets/pic-pie.png";
import scatter from "../../assets/pic-scatter.svg";
import market from "../../assets/ic-market.svg";
import notify from "../../assets/ic-notify.svg";
import ant from "../../assets/logo-antalpha.png";
import binance from "../../assets/logo-binance-nft.png";
import coinmarket from "../../assets/logo-coinmarketcap.png";
import token from "../../assets/logo-imtoken.png";
import hash from "../../assets/logo-hashkey.png";
import portfolio from "../../assets/pic-portfolio.svg";
import naas from "../../assets/pic-naas.svg";
import sdk from "../../assets/ic-sdk.svg";
import api from "../../assets/ic-api.svg";

const MainVeiw = () => {
  return (
    <div className=" flex flex-col   pt-25 justify-center min-h-screen w-full bg-[#101114] px-4 gap-10">

      <h1 className=" mt-48 font-extrabold text-4xl md:text-6xl text-center tracking-tight text-white leading-snug">
        The Largest NFT OnChain Data
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text tracking-normal text-transparent">
          Infrastructure
        </span>
      </h1>


      <div className="self-center w-full max-w-3xl">
        <input
          className="w-full h-14  items-center rounded-full border border-gray-600 px-6 text-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Contract / Wallet / Collection Name / TxHash / Marketplace / NFTFi / Inscription"
        />
      </div>


      <div className="flex flex-wrap  justify-center gap-2 ">
        <button className="h-7 flex items-center gap-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full px-4 py-2 text-white ">
          <img className="rounded-full h-5 w-5" src={icImage} alt="MoonBirds" />
          <span>MoonBirds</span>
          <img className=" rounded-full h-3 w-3" src={eth} alt="Eth" />
          <span className="text-blue-400 font-medium">2.853</span>
        </button>

        <button className="h-7 size-auto flex items-center gap-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full px-4 py-2 text-white ">
          <img className="rounded-full h-5 w-5" src={puggy} alt="PudgyPe" />
          <span>PudgyPe...</span>
          <img className=" rounded-full h-3 w-3" src={eth} alt="Eth" />
          <span className="text-blue-400 font-medium">10.28</span>
        </button>
        <button className="h-7 flex items-center gap-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full px-4 py-2 text-white ">
          <img className='rounded-full h-5 w-5' src={meet} alt="Meebits" />
          <span>Meebits</span>
          <img className=" rounded-full h-3 w-3" src={eth} alt="Eth" />
          <span className="text-blue-400 font-medium">1.04</span>
        </button>
        <button className=" h-7  flex items-center gap-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full px-4 py-2 text-white ">
          <img className='rounded-full h-5 w-5' src={lil} alt="Meebits" />
          <span className="font-stretch-100%">Lil Pudgys</span>
          <img className=" rounded-full h-3 w-3" src={eth} alt="Eth" />
          <span className="text-blue-400 font-medium">1.187</span>
        </button>
      </div>


      <div className=" flex flex-col md:flex-row w-full  mt-20 gap-3 lg:gap-10">


        <div className="flex flex-col z-0 relative gap-5 w-full md:w-1/2">
          <div className="bg-purple-600/40 rounded-fullw-[100] lg:w-[200px] h-[250px] lg:h-[400px] blur-3xl absolute top-20 shadow-2xl shadow-purple-600 -z-10 left-1/2"></div>
          <div className="rounded-md flex flex-col bg-gray-800 gap-2.5 hover:bg-gray-700 border border-gray-700 p-3">
            <h1 className="text-gray-400">Chain</h1>
            <h1 className="font-extrabold text-white text-4xl">8</h1>


          </div>


          <div className="rounded-md flex flex-col bg-gray-800 gap-2.5 hover:bg-gray-700 border border-gray-700 p-3">
            <h1 className="text-gray-400">Marketplace</h1>
            <h1 className="font-extrabold text-white text-4xl">146</h1>

          </div>


          <div className="rounded-md gap-2.5 flex flex-col bg-gray-800 hover:bg-gray-700 border border-gray-700 p-3">
            <h1 className="text-gray-400">NFTFi</h1>
            <h1 className="font-extrabold text-white text-4xl">10</h1>

          </div>
        </div>


        <div className="flex flex-col rounded-md bg-gray-800 w-full md:w-1/2 p-3 lg:p-6">
          <h1 className="text-gray-400 mb-2">All NFTs</h1>
          <h1 className="font-extrabold text-white text-3xl lg:text-5xl mb-6">2,996,696,444</h1>

          <div className="flex justify-between text-white">
            <div className="flex flex-col text-sm lg:text-base gap-7 ">
              <div className="text-gray-400 flex gap-5">Market Cap
              </div>


              <div className="flex  text-gray-400 mt-2">NFTVolume

              </div>


              <div className=" flex text-gray-400">Transfers

              </div>


              <div className="text-gray-400">Contracts</div>



            </div>
            <div className="flex flex-col text-[10px] md:text-sm lg:text-base   gap-8">
              <div className="text-white ">
                $11,960,773,866</div>
              <div className="text-white">$103,960,223,034</div>
              <div className="text-white ">452,242,731</div>
              <div>6,354,196</div>
            </div>


            <div className="flex flex-col text-sm lg:text-base    gap-8">
              <div className="text-gray-400 flex ">24h NFTs</div>


              <div className="text-gray-400 flex">24h Vol</div>


              <div className="text-gray-400 flex">24hTransfers</div>


              <div className="text-gray-400 flex ">24hContracts</div>

            </div>


            <div className="flex flex-col text-sm lg:text-base   gap-8">
              <div>938,313</div>
              <div>$7,816,903</div>
              <div>3,263,251</div>
              <div>1,781</div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-white text-5xl font-bold p-2 self-center ">NFTScan Explorer</h1>
        <p className="text-white items-center px-4 font-bold">A multi-chain NFT explorer, offering streamlined and efficient NFT data
        </p>
        <p className="text-white font-bold">indexing for Web3 developers and users.</p>
        <div className="flex gap-6 mt-8 flex-wrap justify-center">
          <button className="transition-normal duration-300"><img className="w-8 h-8 rounded-md" src={eth} alt="ethereum" /></button>
          <button className="transition-normal duration-300"><img className="w-8 h-8 rounded-md" src={mint} alt="ethereum" /></button>
          <button className="transition-normal duration-300"><img className="w-8 h-8 rounded-md" src={base} alt="base" /></button>
          <button className="transition-normal duration-300"><img className="w-8 h-8 rounded-md" src={bnb} alt="ethereum" /></button>
          <button className="transition-normal duration-300"><img className="w-8 h-8 rounded-md" src={sol} alt="ethereum" /></button>
          <button className="transition-normal duration-300"><img className="w-8 h-8 rounded-md" src={poly} alt="ethereum" /></button>
        </div>
      </div>
      <div className=" lg:flex gap-24 w-full ">
        <div className="flex flex-col  gap-10 mt-20  ">
          <div className="flex items-start gap-3">

            <div className="w-1 h-24 bg-gradient-to-b from-green-400 via-blue-400 to-purple-500 rounded"></div>

            <div>
              <h1 className="text-3xl text-white font-bold">Marketplaces Data</h1>
              <p className="text-gray-300 mt-2">
                Navigating the NFT Marketplaces <br />
                Landscape, enable data-driven decision
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">

            <div className="w-1 h-24 bg-gradient-to-b from-green-400 via-blue-400 to-purple-500 rounded"></div>

            <div>
              <h1 className="text-3xl text-white font-bold">NFTFi Data</h1>
              <p className="text-gray-300 mt-2">
                Unlocking NFTFi market, data-driven NFT<br />
                financial decisions
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">

            <div className="w-1 h-30 bg-gradient-to-b from-green-400 via-blue-400 to-purple-500 rounded"></div>

            <div>
              <h1 className="text-3xl text-white font-bold">Ranking</h1>
              <p className="text-gray-300 mt-2">
                Unveiling NFT collections performance <br />
                through ranking by market cap, volume, <br />
                floor price and more diverse perspectives
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">

            <div className="w-1 h-30 bg-gradient-to-b from-green-400 via-blue-400 to-purple-500 rounded"></div>

            <div>
              <h1 className="text-3xl text-white font-bold">NFTFi Data</h1>
              <p className="text-gray-300 mt-2">
                Monitor trading to know first-hand about <br />
                market trends and high-profile NFT <br />
                collection
              </p>
            </div>
          </div>

        </div>
        <div className="  w-200 items-center lg:flex hidden   mt-0 ">
          <img src={trading} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center text-center text-white mt-25 mb-10 gap-6">
        <h1 className="font-bold text-5xl">NFTScan API</h1>
        <p className="font-bold text-2xl text-gray-400">A Web3 developer platform offering professional multi-chain NFT data services <br />
          to blockchain projects and the next generation of fintech companies.
        </p>
        <button className="bg-white text-black font-bold py-2 px-4 rounded-md mt-4">GET API Key</button>
      </div>

      <div className=" bg-[#0d0f1a] ">
        {/* Main Grid */}
        <div className="lg:grid grid-cols-3 flex-col gap-3  lg:gap-4">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">
            {/* 24H Lowest Price */}
            <div className="flex flex-col bg-gray-800 rounded-md w-full h-[140px] p-4">
              <h1 className="text-gray-400">24H Lowest Price</h1>
              <div className="flex items-center mt-4">
                <img className="w-5 h-5 rounded-full" src={eth} alt="Ethereum" />
                <span className="text-white font-bold ml-2">26.89</span>
              </div>
              <p className="text-red-500 text-sm mt-4">-5.76%</p>
         

            </div>

            {/* Bar Chart */}
            <div className="flex flex-col bg-gray-800 rounded-md w-full h-[150px]">
              <img className="w-full h-full object-contain p-3" src={bar} alt="Bar Chart" />
            </div>
          </div>

          {/* CENTER  */}
          <div className="flex items-center   justify-center bg-gray-800 rounded-md">
            <img className="h-[200px] w-[200px]" src={pie} alt="PieChart" />
          </div>

          {/* RIGHT SIDE  */}
          <div className="bg-gray-800 rounded-md   row-span-2 flex flex-col justify-between">

       <div className="flex bg-gray-600 p-2 h-8 w-auto gap-2  rounded-t-md">
  <div className="bg-orange-600 w-3 h-3  rounded-full"></div>
  <div className="bg-yellow-400 w-3 h-3   rounded-full"></div>
  <div className="bg-green-600 w-3 h-3  rounded-full"></div>
</div>
            <p className="text-green-400 text-xs overflow-x-auto">
              {`curl --request GET \\
          --url https://restapi.nftscan.com/api/v2/account/own/0xca12... \\
             --header 'X-API-KEY: sX8hq66rN2666muRH128TSMup'`}
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className=" text-white flex gap-2 p-2 rounded-md"><img src={sdk} alt="" />SDK</button>
              <button className=" text-white flex gap-2 p-2 rounded-md"><img src={api} alt="" />REST API</button>
              <button className=" text-white flex gap-2 p-2 rounded-md"><img src={market} alt="" />Marketplace API</button>
              <button className=" text-white flex gap-2 p-2 rounded-md"><img src={notify} alt="" />Notify API</button>
            </div>
          </div>

          {/*  Scatter Chart */}
          <div className="bg-gray-800 rounded-md col-span-2">
            <img className="w-full h-[150px] object-contain p-3" src={scatter} alt="Scatter Chart" />
          </div>
        </div>
      </div>


      <div>
        <h1 className="text-white text-2xl font-bold p-2 self-center text-center mt-20 ">
          Trusted by Industry-leading projects
        </h1>
        <div className="flex gap-10 mt-10 justify-center flex-wrap">
          <img className="h-10 w-auto" src={binance} alt="" />
          <img className="h-10 w-auto" src={coinmarket} alt="" />
          <img className="h-10 w-auto" src={token} alt="" />
          <img className="h-10 w-auto" src={ant} alt="" />
          <img className="h-10 w-[145px]" src={hash} alt="" />

        </div>

      </div>
      <div className="flex flex-col justify-center items-center mt-20 mb-10 gap-6">
        <h1 className="text-white text-5xl font-bold p-2 self-center text-center mt-20 ">
          NFTScan Portfolio
        </h1>
        <p className="text-gray-400 font-semibold">A platform for Web3 users to manage multi-chain NFT assets and access <br />
          data tracking services, enhancing NFT asset management capabilities.
        </p>
        <button className="bg-white font-semibold h-12 w-auto px-4 text-black rounded-md ">Open the Dashboard</button>
      </div>
      <div className="flex justify-end mb-20">
        <div className="  bg-gray-800 absolute rounded-md p-4 left-1/2 z-10 hidden h-40 w-50 gap-4 lg:flex flex-col">
          <h1 className="text-gray-400 ">Est Value</h1>
          <button className=" flex gap-1"><img className="h-6 w-6 rounded-full " src={eth} alt="" /><span className="text-white text-2xl font-bold">12.0244</span></button>
        </div>
        <img className='relative hidden lg:flex' src={portfolio} alt="Portfolio" />
      </div>
      <div className="flex">{/* main div */}

        <div className="flex flex-col gap-3 lg:gap-6">{/* left Div */}
          <div className="flex flex-col gap-2">{/* row1 */}
            <h1 className="text-white font-bold text-5xl">NFTScan as a Service </h1>
            <p className="text-gray-400 font-semibold mt-4">
              Infrastructure development service catering to blockchains <br />
              developers, delivering professional NFTScan infrastructure <br />
              services including explorers and NFT data services.
            </p>
            <button className="bg-white text-black h-10 w-40 mt-2 rounded-md font-semibold">Apply for NaaS</button>
          </div>{/* row1 end */}
        <div className="flex flex-col lg:flex-row gap-6">{/* row2 */}

            <div>{/* row2 first div */}
              <h1 className="text-white">NFT Explorer</h1>
              <p className="text-gray-400">
                A multi-chain NFT explorer <br />
                providing users with <br />
                multidimensional access to <br />
                complete NFT data
              </p>
            </div>{/* row2 first div end */}
            <div>{/* row2 second div */}
              <h1 className="text-white">NFT API</h1>
              <p className="text-gray-400">
                API Service shares all NFT on-<br />
                chain data for building your  <br />
                Dapps, protocols and blockchain <br />
                deployments
              </p>
            </div>{/* row2 second div end */}
            <div>{/* row2 third div */}
              <h1 className="text-white">NFT Analytics</h1>
              <p className="text-gray-400">
                Macro and micro NFT data with <br />
                collection view and individual <br />
                address view, helping users <br />
                comprehensively and intuitively <br />
                grasp NFT information
              </p>
            </div>{/* row2 third div end */}
          </div>{/* row2 end */}

          <div className="flex flex-col lg:flex-row gap-6">{/* row3 */}
            <div>{/* row2 first div */}
              <h1 className="text-white">NFT Collection Info</h1>
              <p className="text-gray-400">
                A multi-chain NFT explorer <br />
                providing users with <br />
                multidimensional access to <br />
                complete NFT data
              </p>
            </div>{/* row2 first div end */}
            <div>{/* row2 second div */}
              <h1 className="text-white">Address Profile</h1>
              <p className="text-gray-400">
                API Service shares all NFT on-<br />
                chain data for building your  <br />
                Dapps, protocols and blockchain <br />
                deployments
              </p>
            </div>{/* row2 second div end */}
            <div>{/* row2 third div */}
              <h1 className="text-white">Verify Contracts</h1>
              <p className="text-gray-400">
                Macro and micro NFT data with <br />
                collection view and individual <br />
                address view, helping users <br />
                comprehensively and intuitively <br />

              </p>
            </div>{/* row2 third div end */}
          </div> {/* row3 end */}
        </div>{/* left Div end */}
        <div>{/* right Div */}
          <img className="hidden lg:flex  mt-10 " src={naas} alt="NaaS" />
        </div>{/* right Div end */}

      </div>{/* main div end */}

      <div className="flex flex-col bg-[#1B1C23] px-3 mt-20 gap-2 ">{/* footer */}
        <div className=" flex flex-wrap gap-10 justify-between">{/* main div */}
          <div className='flex flex-col justify-start gap-3 p-2 items-start self-start'>{/* left div */}
            <h1 className='text-2xl text-white font-bold'>Join our newsletter, get valuable NFT data at the first time!</h1>
            <div className="flex gap-2 ">{/* input and button div */}
              <input className="w-full lg:w-[500px] h-14  items-center rounded-md border border-gray-600 px-6 text-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:border-blue-500" type="text" placeholder="Enter your email address" />
              <button className="text-white rounded-md w-25 font-semibold bg-blue-700">Subscribe</button>

            </div>
          </div>{/* left div end */}
          <div>{/* right div */}
            <h1 className="text-blue-700 font-extrabold text-2xl lg:text-5xl ">NFTSCAN </h1>
          </div>{/* right div end */}
          <hr className="text-gray-400 bg-gray-400" />
        </div>{/* main div end */}
        <div className="flex lg:flex-row flex-col p-4 gap-24 ">{/* main div 3 */}
        <div className="flex lg:flex-row flex-col gap-24">{/* main div 3.1 */}
          <hr className="bg-gray-400" />
          <div className="flex flex-col gap-2  ">{/* inner div1 */}
            <h1 className="text-white text-2xl font-bold">NFT Explorer</h1>
            <a className='text-white hover:text-blue-700 ' href="">
              Ethereum
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Mint
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Base
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              BNB Chain
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Solana
            </a>

            <a className='text-white hover:text-blue-700 ' href="">
              Fantom
            </a>
          </div>{/* inner div1 end */}
          <div className="flex flex-col gap-2  ">{/* inner div1 */}
            <h1 className="text-white text-2xl font-bold">Product & Service</h1>
            <a className='text-white hover:text-blue-700 ' href="">
              Ethereum
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Mint
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Base
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              BNB Chain
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Solana
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Polygon
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Avalanche
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Fantom
            </a>
          </div>{/* inner div1 end */}
          </div>{/* main div 3.1 end */}
          <div className="flex  lg:flex-row flex-col gap-24">{/* main div 3.2 */}
          <div className="flex flex-col gap-2  ">{/* inner div1 */}
            <h1 className="text-white text-2xl font-bold">Resources</h1>
            <a className='text-white hover:text-blue-700 ' href="">
              Ethereum
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Mint
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Base
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              BNB Chain
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Solana
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Polygon
            </a>

          </div>{/* inner div1 end */}
          <div className="flex flex-col gap-2  ">{/* inner div1 */}
            <h1 className="text-white text-2xl font-bold">Company</h1>
            <a className='text-white hover:text-blue-700' href="">
              About us
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              Terms of Services
            </a>
            <a className='text-white hover:text-blue-700 ' href="">
              NFTScan connect Program
            </a>
           </div>{}{/* main div 3.2 */}
          </div>{/* inner div1 end */}
        </div>{/* main div 3 end */}
        <hr className="text-gray-400 bg-gray-400" />
        <footer className="flex lg:flex-row flex-col gap-24 justify-between py-4 ">{/* footer */}
          <p className="text-gray-400 px-5 text-center ">© 2024 NFTScan. All rights reserved.</p>
        </footer>
      </div>{/* footer end */}
    </div>
  );
};

export default MainVeiw;