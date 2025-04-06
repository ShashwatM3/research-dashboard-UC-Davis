"use client"

import React from 'react';
// import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import "./dashboard.css";

function Dashboard() {
  // const navigate = useNavigate();
  // const [searchResults, setSearchResults] = useState<Professor[]>([]);
  // const [hasSearched, setHasSearched] = useState(false);

  // const handleSearch = (query: string) => {
  //   // const results = professors.filter((professor) =>
  //   //   professor.researchInterests.some((interest) =>
  //   //     interest.toLowerCase().includes(query.toLowerCase())
  //   //   ) || 
  //   //   (professor.major && professor.major.toLowerCase().includes(query.toLowerCase()))
  //   // );
  //   // setSearchResults(results);
  //   // setHasSearched(true);
  //   // navigate("/professors", { state: { searchQuery: query } });
  // };
  return (
    <div className="dashboard-main min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 max-w-4xl animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            Let&apos;s Do Research
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get started on your research journey!
          </p>
          <div className='flex items-center justify-center gap-0'>
          <Input className='w-[70%] rounded-r-none' placeholder='Enter research interest/major' />
          <Button className='rounded-l-none'>Search</Button>
          </div>
          <div className='mt-4 flex items-center justify-center gap-4'>
            <button className='px-4 py-2 border border-solid rounded-sm'>Economics</button>
            <button className='px-4 py-2 border border-solid rounded-sm'>Quantitative Analysis</button>
            <button className='px-4 py-2 border border-solid rounded-sm'>Computer Vision</button>
            <button className='px-4 py-2 border border-solid rounded-sm'>Quantum Mechanics</button>
          </div>
        </div>
        
        {/* <SearchBar onSearch={handleSearch} />
        <InfiniteScroll onInterestClick={handleSearch} /> */}
      </div>
      <div className='sign-in-register'>
        <div className='flex gap-2'>
          <Button>Login</Button>
          <Button onClick={() => {window.open('/signup', '_self')}} variant={"outline"}>Register</Button>
        </div>
        <p>Make an account or login to save professors and access more tools</p>
      </div>
    </div>
  )
}

export default Dashboard