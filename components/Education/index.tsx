import Image from 'next/image';
import Link from 'next/link';

const Education = () => {
  return (
    // in this section wrap all data in a table and apply .map to reduce the redundancy in the code
    <div className="mt-10 px-5 md:px-10">
      <h1 className="text-white text-5xl font-extrabold mb-8 border-b-4 border-lime-400 pb-2 w-max">
        My Education
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-lg font-bold uppercase bg-lime-500 text-black">
            <tr>
              <th className="px-6 py-3">Degree / Course</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Institution</th>
            </tr>
          </thead>
          <tbody>
            {[
              { degree: "Diploma in Artificial Intelligence", date: "01-2023 - Present", institution: "PIAIC" },
              { degree: "Diploma in Web 3.0 and Metaverse", date: "01-2023 - Present", institution: "PIAIC" },
              { degree: "Certified Web & Mobile Hybrid App Development Course", date: "02-2022 - 09/2022", institution: "UIT University" },
              { degree: "Diploma In Artificial-Intelligence & Cloud Computing", date: "11/2019 - 01/2020", institution: "UIT University" },
              { degree: "Diploma in Advance Web Development", date: "11/2016 - 01/2017", institution: "Computer Collegiate" },
              { degree: "Intermediate Pre-Engineering", date: "2014 - 2016", institution: "City College" },
              { degree: "Matric", date: "2013", institution: "Ali Ali School Sharifabad" }
            ].map((item, index) => (
              <tr key={index} className="border-b border-gray-700 bg-gray-900 hover:bg-gray-800 transition duration-300">
                <th scope="row" className="px-6 py-4 font-medium text-lime-300 whitespace-nowrap">
                  {item.degree}
                </th>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.institution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;