import React from 'react'
import "./homepagestyles.css";
import { Button } from '@/components/ui/button';
import ucd from "@/media/ucd.jpg"
// import Image from 'next/image';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

function Banner() {
  // const images = [
  //   { src: ucd, alt: "UC Davis Campus" },
  //   { src: ucd, alt: "UC Davis Research" },
  //   { src: ucd, alt: "UC Davis Labs" },
  // ];
  return (
    <div>
      <div className='banner'>
        <div className='sec' id="sec1">
          <div>
            <h1>THE ONLY PLATFORM FOR RESEARCH</h1>
            <h2>for and by UC DAVIS Students</h2>
            <h3>We help undergrads easily find research opportunities by connecting them with professors, students researchers, and postdocs. With AI tools, filters, researchers rating system and office hour access, we streamline the process of discovering and applying to the right labs.</h3>
            <div>
              <Button>Get Started</Button>
              <Button>More about us</Button>
            </div>
          </div>
        </div>
        <div className='sec' id="sec2">
          {/* <Carousel
            className="w-full flex items-center justify-center"
            opts={{
              align: "start",
              loop: true,
              autoplay: true,
              interval: 3000,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="image-wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
          </Carousel> */}
        </div>
      </div>
    </div>
  )
}

export default Banner