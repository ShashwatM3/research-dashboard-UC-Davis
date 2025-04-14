import React from 'react'
import "./homepagestyles.css";
// import { Button } from '@/components/ui/button';
// import ucd from "@/media/ucd.jpg"
// import Image from 'next/image';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import Banner from "./Banner"
import TheDemand from "./TheDemand"
import WhatWeOffer from "./WhatWeOffer";

function HomePage() {
  return (
    <div className='home-page-main'>
      <div className='top-bar'>
        <h3>Only for UC Davis Students pursuing research or looking for resources for future research-related projects</h3>
      </div>
      <div className='nav-home'>
        <h1>@ letsdoresearch.com</h1>
      </div>
      <Banner/>
      <TheDemand/>
      <WhatWeOffer/>
    </div>
  )
}

export default HomePage