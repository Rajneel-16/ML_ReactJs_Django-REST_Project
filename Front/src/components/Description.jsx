import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit as EditIcon } from '@fortawesome/free-regular-svg-icons';
import { faDownload as DownloadIcon } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare as ShareSquareIcon } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode as LaptopCodeIcon } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
    return (
        <div className="mx-auto  bg-gradient-to-l from-gray-500 via-gray-700 to-gray-800">
            <div className=" w-[80%] mx-auto p-4  shadow-md">
                <h1 className="text-4xl text-white text-center mt-8 mb-4">
                    How Does It Work?
                </h1>
                <h4 className="text-xl text-gray-500 text-center mb-8">
                    A step-by-step guide on how to use the app
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <DescriptionItem
                        color="rgb(31, 102, 239)"
                        icon={EditIcon}
                        title="Fill the Form"
                        subtitle="First, fill the form to the best of your knowledge so it can give you estimated insurance cost precisely."
                    />
                    <DescriptionItem
                        color="rgb(220, 38, 38)"
                        icon={ShareSquareIcon}
                        title="Send the Data for Prediction"
                        subtitle="Click on Result button to know the prediction of model."
                    />
                    <DescriptionItem
                        color="rgb(30, 58, 138)"
                        icon={LaptopCodeIcon}
                        title="Get the Prediction Result"
                        subtitle="Once you have sent your data to the machine learning model, the model returns the cost of Insurance for the whole family."
                    />
                    <DescriptionItem
                        color="rgb(245, 158, 11)"
                        icon={DownloadIcon}
                        title="Download Your Prediction Report"
                        subtitle="You can download your report by pressing the Download button."
                    />
                </div>
            </div>
        </div>
    );
};

const DescriptionItem = ({ color, icon, title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col bg-slate-900 items-center p-4 border rounded-lg shadow-lg">
            <FontAwesomeIcon icon={icon} className={`text-4xl mb-4`} style={{ color: color }} />
            <h2 className="text-2xl font-semibold text-white text-center">{title}</h2>
            <p className="text-center text-gray-500 mt-2">{subtitle}</p>
        </motion.div>
    );
};

export default Description;
