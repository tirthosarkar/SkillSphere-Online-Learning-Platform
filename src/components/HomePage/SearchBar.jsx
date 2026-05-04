"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ defaultValue }) => {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
      
        if (searchTerm) {
            router.push(`/courses?search=${searchTerm}`);
        } else {
            router.push(`/courses`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative flex items-center">
            <input
                type="text"
                placeholder="Search by title or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
            <button 
                type="submit" 
                className="absolute right-2 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-1"
            >
                <IoSearchSharp />Search
            </button>
        </form>
    );
};

export default SearchBar;