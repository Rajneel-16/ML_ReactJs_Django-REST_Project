import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import Layout from '../components/Layout';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Insurance = () => {
    const [send, setSend] = useState(false);
    const [result, setResult] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (formData) => {
        const modifiedFormData = {
            age: Number(formData.age),
            sex: Number(formData.sex),
            bmi: parseFloat(formData.bmi),
            children: Number(formData.children),
            smoker: Number(formData.smoker),
            region: Number(formData.region),
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/predict/', {
                method: 'POST',
                body: JSON.stringify(modifiedFormData),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setPrediction(data);
            setSend(true);
            setResult(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDownload = () => {
        const documentDefinition = {
            content: [
                { text: "Insurance", style: "header" },
                { text: "Age: " + prediction?.age },
                { text: "Sex: " + (prediction?.sex === "0" ? "Female" : "Male") },
                { text: "BMI: " + prediction?.bmi },
                { text: "Children: " + prediction?.children },
                { text: "Smoker: " + (prediction?.smoker === "0" ? "Smoker" : "Non-Smoker") },
                { text: "Region: " + prediction?.region },
                { text: "Prediction: $" + prediction?.cost }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10],
                },
            },
        };
        pdfMake.createPdf(documentDefinition).download("InsuranceDetail.pdf");
    };

    return (
        <>
            <Layout>
                <div className="bg-gray-900 min-h-screen py-15">
                    <div className="container mx-auto p-5">
                        <h1 className="text-4xl text-center text-white mb-8">Insurance Form</h1>
                        {send && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline"> Details were sent to the machine learning model successfully.</span>
                            </div>
                        )}
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-black text-white p-8 rounded shadow-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block">Age</label>
                                    <input
                                        type="number"
                                        {...register("age", { required: true })}
                                        className={`border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded w-full p-2 bg-slate-800`}
                                    />
                                    {errors.age && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block ">BMI</label>
                                    <input
                                        type="number"
                                        {...register("bmi", { required: true })}
                                        className={`border ${errors.bmi ? 'border-red-500' : 'border-gray-300'} rounded w-full p-2 bg-slate-800`}
                                    />
                                    {errors.bmi && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block ">Smoker</label>
                                    <select {...register("smoker")} className="border rounded w-full p-2 bg-slate-800">
                                        <option value="0">Smoker</option>
                                        <option value="1">Non-Smoker</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block ">Sex</label>
                                    <select {...register("sex")} className="border rounded w-full p-2 bg-slate-800">
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block ">Children</label>
                                    <input
                                        type="number"
                                        {...register("children", { required: true })}
                                        className={`border ${errors.children ? 'border-red-500' : 'border-gray-300'} rounded w-full p-2 bg-slate-800`}
                                    />
                                    {errors.children && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block ">Region</label>
                                    <select {...register("region")} className="border rounded w-full p-2 bg-slate-800">
                                        <option value="0">Southeast</option>
                                        <option value="1">Southwest</option>
                                        <option value="2">Northeast</option>
                                        <option value="3">Northwest</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Submit</button>
                                <button type="button" onClick={handleDownload} className="bg-green-500 text-white py-2 px-4 rounded">Download</button>
                            </div>
                        </form>
                        <div className='bg-black m-5 p-5 text-white'>

                            <div>
                                Result
                            </div>
                            {result && prediction && (
                                <div className="mt-8">
                                    <h2 className="text-2xl text-center mb-4">Result</h2>
                                    <p className="text-xl text-center">
                                        {`Rajneel's machine learning model has predicted the Cost of Insurance: `}
                                        <span className="text-green-600 text-4xl">${prediction.cost}</span>
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </Layout>

        </>
    );
};

export default Insurance;
