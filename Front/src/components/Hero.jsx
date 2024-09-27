import React from 'react';
import { Link } from 'react-router-dom';

import InfoIcon from '@mui/icons-material/HelpOutline';


const Hero = () => {
    return (
        <div className="container w-[100%] min-h-screen flex justify-center items-center mx-auto bg-black">
            <div className="flex justify-center  flex-1 w-full items-center m-1">
                {/* Left Side Content */}
                <div className="bg-gray-900 h-full m-5 py-10 rounded-full flex flex-col items-center flex-1">
                    <h1 className="text-4xl text-white text-center m-8">
                        Fill the Family Detail
                    </h1>
                    <h4 className="text-xl text-gray-500 text-center pt-3 pb-3 m-4">
                        Website will tell Insurance Cost of Family
                    </h4>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-center mt-4">
                        <Link to="/insurance" style={{ textDecoration: 'none' }}>
                            <button className="flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-8 text-lg border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition duration-300 ease-in-out">
                                <InfoIcon className="mr-2" />
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center w-full flex-1">
                    <div className="relative w-[100%] h-0 m-5 pb-[56.25%]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/bxNw9VB5Y_0"
                            title="19 02 2023 14 39 57 REC"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
