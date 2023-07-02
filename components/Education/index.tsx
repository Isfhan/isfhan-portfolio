import Image from 'next/image';
import Link from 'next/link';


const Education = () => {

    return (

        <div className="mt-10">

            <h1 className="text-white text-5xl text-left font-bold mb-5">My Education</h1>

            <div className="my-10 p-3">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="text-lg font-bold text-background uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-lime-400">
                                    Degree / Course
                                </th>
                                <th scope="col" className="px-6 py-3 bg-lime-400">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 bg-lime-400">
                                    Institution
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Diploma in Artificial Intelligence
                                </th>
                                <td className="px-6 py-4 text-background">
                                    01-2023 - Present
                                </td>
                                <td className="px-6 py-4 text-background">
                                    PIAIC
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Diploma in Web 3.0 and Metaverse
                                </th>
                                <td className="px-6 py-4 text-background">
                                    01-2023 - Present
                                </td>
                                <td className="px-6 py-4 text-background">
                                    PIAIC
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Certified Web & Mobile Hybrid App
                                    Development Course
                                </th>
                                <td className="px-6 py-4 text-background">
                                    02-2022 - 09/2022
                                </td>
                                <td className="px-6 py-4 text-background">
                                    UIT University
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Diploma In Artificial-Intelligence & Cloud
                                    Computing
                                </th>
                                <td className="px-6 py-4 text-background">
                                    11/2019 - 01/2020
                                </td>
                                <td className="px-6 py-4 text-background">
                                    UIT University
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Diploma in Advance Web Development
                                </th>
                                <td className="px-6 py-4 text-background">
                                    11/2016 - 01/2017
                                </td>
                                <td className="px-6 py-4 text-background">
                                    Computer Collegiate
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Intermediate Pre-Engineering
                                </th>
                                <td className="px-6 py-4 text-background">
                                    2014 - 2016
                                </td>
                                <td className="px-6 py-4 text-background">
                                    City College
                                </td>
                            </tr>

                            <tr className="border-b-4 border-background bg-white text-lg">
                                <th scope="row" className="px-6 py-4 font-medium text-background whitespace-nowrap  ">
                                    Matric
                                </th>
                                <td className="px-6 py-4 text-background">
                                    2013
                                </td>
                                <td className="px-6 py-4 text-background">
                                    Ali Ali School Sharifabad
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
}



export default Education;