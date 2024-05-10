"use client"
import { SetStateAction, useEffect, useState } from 'react';
import { Header } from '../_components/header';

export default function Categories() {
    const categories = ["Technology", "Fashion", "Sports", "Food", "Travel", "Books", "Movies", "Music", "Fitness", "Health", "Movies", "Music", "Fitness", "Health"]; // Example categories
    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (page: SetStateAction<number>) => {
        setCurrentPage(page);
    };

    return (
        <>
        <Header/>
        <div className="flex items-center justify-center h-screen">
            <div className="w-996 p-8 border border-gray-300 rounded-2xl">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
                    Please mark your interests!
                </h1>
                <h2 className="mb-4 flex items-center justify-center">
                    We will keep you notified.
                </h2>
                <h1 className="text-xl mt-8 font-bold mb-4 flex items-center justify-start">
                    My saved interests!
                </h1>
                <ul>
                    {categories
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((category, index) => (
                            <li key={index} className="flex items-center justify-start mb-2">
                                <input type="checkbox" id={`category-${index}`} className="mr-2" />
                                <label htmlFor={`category-${index}`}>{category}</label>
                            </li>
                        ))}
                </ul>
                <div className="flex justify mt-14 mb-14">
                    <button
                        className="mr-2 px-2 py-1 border-none outline-none bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    >
                        {'<<'}
                    </button>
                    <button
                        className="mr-2 px-2 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>
                    {pageNumbers.map(page => (
                        <button
                            key={page}
                            className={`mr-2 px-2 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 ${currentPage === page ? 'font-bold' : ''}`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="mr-2 px-2 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        {'>'}
                    </button>
                    <button
                        className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        {'>>'}
                    </button>
                </div>
            </div>
        </div>
        </>

    );
}

// pages/categories.tsx
// "use client"
// import { api } from "~/trpc/server";

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// export default function Categories() {
//   // const [categories, setCategories] = useState([]);
//   // setCategories(latestcate);

//   // useEffect(() => {
//   //   const fetchCategories = async () => {
//   //     try {
//   //       const response = await axios.get('api/categories');
//   //       setCategories(latestcate);
//   //     } catch (error) {
//   //       console.error('Error fetching categories:', error);
//   //     }
//   //   };

//   //   fetchCategories();
//   // }, []);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-996 p-8 border border-gray-300 rounded-2xl">
//         <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
//           Please mark your interests!
//         </h1>
//         <h2 className="mb-4 flex items-center justify-center">
//           We will keep you notified.
//         </h2>
//         <h1 className="text-xl mt-8 font-bold mb-4 flex items-center justify-start">
//           My saved interests!
//         </h1>
//         <ul>
//           {latestcate.map((category: any) => (
//             <li key={category.id} className="flex items-center justify-start mb-2">
//               <input type="checkbox" id={`category-${category.id}`} className="mr-2" />
//               <label htmlFor={`category-${category.id}`}>{category.name}</label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
