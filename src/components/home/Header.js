import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                  Agencia para <span></span>
                  <Typewriter
                        words={['Dreamers', 'Creators', 'You!']}
                        loop={0}
                        cursor
                        
                        cursorStyle='_'
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                    />
                </h1>
                <ul className="flex gap-8 mt-20">
                    <li className="inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button">
                        <Link to='/services/algoAqui' className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                           Web
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button">
                        <Link to='/services/algoAqui' className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Apps
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button">
                        <Link to='/services/algoAqui' className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Video Juegos
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button">
                        <Link to='/services/algoAqui' className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Marketing
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-button">
                        <Link to='/services/algoAqui' className="mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                            Consultorias
                        </Link>
                    </li>
                </ul>
              </div>
              <p className="mt-16 text-2xl leading-8 text-black">
                </p>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
               </div>
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                  </div>
              </div>
            </div>
      </main>
    )
}

export default Header;