"use client"

import React from 'react';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import "./dashboard.css";
import { createContext, useContext, useState } from 'react';
import mockProfessors from "./mockData";

const DashboardContext = createContext({});

function Dashboard() {
  const router = useRouter();
  const [userCreds, setUserCreds] = useState(null);
  const [searchQuery, setQuery] = useState("")
  useEffect(() => {
    const creds = localStorage.getItem("RESEARCH DASHBOARD UC DAVIS CREDENTIALS");
    if (creds) {
      router.push("/");
      setUserCreds(JSON.parse(creds));
    }
  }, [router]);
  // const navigate = useNavigate();
  // const [searchResults, setSearchResults] = useState<Professor[]>([]);
  // const [hasSearched, setHasSearched] = useState(false);

  // const handleSearch = (query: string) => {
  //   // const results = professors.filter((professor) =>
  //   //   prof.researchInterests.some((interest) =>
  //   //     interest.toLowerCase().includes(query.toLowerCase())
  //   //   ) || 
  //   //   (prof.major && prof.major.toLowerCase().includes(query.toLowerCase()))
  //   // );
  //   // setSearchResults(results);
  //   // setHasSearched(true);
  //   // navigate("/professors", { state: { searchQuery: query } });
  // };
  return (
    <>
    <div id='searchboard'>
      <DashboardContext.Provider value={{userCreds, searchQuery, setQuery}}>
        <SearchBoard/>
      </DashboardContext.Provider>
    </div>
    <div id="dashboard-main" className="dashboard-main min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 max-w-4xl animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            Let&apos;s Do Research
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get started on your research journey!
          </p>
          <div className='flex items-center justify-center gap-0'>
          <Input id="first-input" className='w-[70%] rounded-r-none' placeholder='Enter research interest/subject' />
          <Button className='rounded-l-none' onClick={() => {
            const input = document.getElementById("first-input") as HTMLInputElement;
            const searchboard = document.getElementById("searchboard");
            if (input && searchboard) {
              setQuery(input.value);
              searchboard.style.display = "block";
            }
            const dash = document.getElementById("dashboard-main");
            if (input && dash) {
              dash.style.display = "none";
            }
          }}>Search</Button>
          </div>
          <div className='buttons-display mt-4 flex items-center justify-center gap-4'>
            <button className='px-4 py-2 border border-solid rounded-sm'>Economics</button>
            <button className='px-4 py-2 border border-solid rounded-sm'>Quantitative Analysis</button>
            <button className='px-4 py-2 border border-solid rounded-sm'>Computer Vision</button>
            <button className='px-4 py-2 border border-solid rounded-sm'>Biology</button>
          </div>
        </div>
        
        {/* <SearchBar onSearch={handleSearch} />
        {/* <InfiniteScroll onInterestClick={handleSearch} /> */}
      </div>
      <div className='sign-in-register'>
        { userCreds ? <h1>{userCreds.username} Research Dashboard</h1>:
        <>
        <div className='flex gap-2'>
          <Button>Login</Button>
          <Button onClick={() => {window.open('/signup', '_self')}} variant={"outline"}>Register</Button>
        </div>
        <p>Make an account or login to save professors and access more tools</p></>
        }
      </div>
    </div>
    </>
  )
}

export default Dashboard

function SearchBoard() {
  const { userCreds, searchQuery, setQuery } = useContext(DashboardContext);

  const filteredResults = mockProfessors.filter((prof) =>
    (
      prof.researchInterests.some((interest) =>
        interest.toLowerCase().includes(searchQuery.toLowerCase())
      )
      ||
      prof.major.toLowerCase() == searchQuery.toLowerCase()
    )
  );

  return (
    <div className='main-searchboard p-6 bg-white shadow-lg rounded-lg max-w-5xl mx-auto mt-10'>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Let&apos;s Do Research
          </h1>
          <h3 className='text-gray-600'>{userCreds?.username}'s Research Dashboard</h3>
        </div>
        <div className='flex items-center gap-2'>
          <Button>Your Profile</Button>
          <Button variant="outline">Saved Items</Button>
        </div>
      </div>
      <div className='flex gap-2 w-full mb-6'>
        <Input
          placeholder='Enter research interest/subject'
          defaultValue={searchQuery}
          id="searchQuery"
        />
        <Button onClick={() => {
          const input = document.getElementById("searchQuery") as HTMLInputElement;
          if (input) {
            setQuery(input.value);
          }
        }}>Search</Button>
      </div>

      {searchQuery ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Results for "{searchQuery}"</h2>
          {filteredResults.length > 0 ? (
            <ul className="space-y-2">
              {filteredResults.map((prof, idx) => (
                <React.Fragment key={idx}>
                  <li onClick={() => {
                    const detailPage = document.getElementById(`professor-detail-page-${idx}`) as HTMLInputElement;
                    if (detailPage) {
                      detailPage.style.display="flex"
                    }
                  }} key={idx} className="border p-4 rounded-lg shadow-sm">
                    <div className='flex items-start justify-center flex-col gap-2'>
                      <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">{prof.name}</h1>
                      <h3>{prof.title}</h3>
                      <h3 className='opacity-[60%]'>{prof.email}</h3>
                      <h3><b>Department: </b>{prof.department}</h3>
                      <h3><b>Major: </b>{prof.major}</h3>
                      <h3 className='mt-2'><b>Research Interests</b></h3>
                      {prof.researchInterests.map(element => (
                        <div key={element} className='px-4 py-2 border border-solid rounded-[25px] text-sm'>
                          {element}
                        </div>
                      ))}
                    </div>
                  </li>
                  <div className='professor-detail-page' id={`professor-detail-page-${idx}`}>
                    <div>
                      <div className="mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="md:col-span-2">
                            <Button onClick={() => {
                              const detailPage = document.getElementById(`professor-detail-page-${idx}`) as HTMLInputElement;
                              if (detailPage) {
                                detailPage.style.display="none"
                              }
                            }} variant={"outline"}>Back</Button>
                            <br/><br/>
                            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                              <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center mb-4 md:mb-0">
                                <div className="w-full h-full text-gray-500" />
                              </div>
                              <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{prof.name}</h1>
                                <p className="text-lg text-gray-600 mb-2">{prof.title}</p>
                                <p className="text-gray-800 mb-4">{prof.department}</p>
                                <a
                                  href={`mailto:${prof.email}`}
                                  className="inline-block px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
                                >
                                  {prof.email}
                                </a>
                              </div>
                            </div>

                            <div className="mb-8">
                              <h2 className="text-xl font-semibold mb-3">About</h2>
                              <p className="text-gray-700 leading-relaxed">{prof.bio}</p>
                            </div>

                            <div className="mb-8">
                              <h2 className="text-xl font-semibold mb-3">Research Interests</h2>
                              <div className="flex flex-wrap gap-2">
                                {prof.researchInterests.map((interest, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-800 text-sm"
                                  >
                                    {interest}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h2 className="text-xl font-semibold mb-3">Latest Research</h2>
                              <div className="space-y-4">
                                {prof.latestResearch?.map((research, idx) => (
                                  <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-gray-800">{research}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h2 className="text-lg font-semibold mb-4 text-gray-800">Education</h2>
                              <div className="space-y-6">
                                {prof.education?.map((edu, idx) => (
                                  <div key={idx}>
                                    <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                                    <p className="text-gray-700">{edu.degree}</p>
                                    <p className="text-sm text-gray-500">{edu.years}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      ) : (
        <p className="text-gray-400">Enter a search term to begin exploring.</p>
      )}
    </div>
  );
}
