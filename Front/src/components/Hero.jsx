// Hero.jsx
import React from 'react';
import HeroButtons from '../components/HeroButtons';

const Hero = () => {
    return (
        <div className="max-w-3xl mx-auto pt-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {/* Left Side Content */}
                <div className="flex flex-col items-center">
                    <div className="mb-2">
                        <h1 className="text-4xl text-black text-center mt-8">
                            Fill the Family Detail
                        </h1>
                    </div>
                    <div className="mb-3">
                        <h4 className="text-xl text-gray-600 text-center pt-3 pb-3 mb-4">
                            Website will tell Insurance Cost of Family
                        </h4>
                    </div>
                    <HeroButtons />
                </div>

                {/* Right Side Content with Video */}
                <div className="flex items-left justify-left">
                    <div className="relative w-full h-0 pb-9/16">
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
