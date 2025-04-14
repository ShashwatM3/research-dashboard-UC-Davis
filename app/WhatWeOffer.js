import React from 'react'
import "./homepagestyles.css";
import Bento from "./bento"
import { Button } from '@/components/ui/button';

function WhatWeOffer() {
  return (
    <div className='what-we-offer'>
      {/* <div className='what-we-offer-main'>
        <div>
          <h1>What we offer you</h1>
        </div>
      </div> */}
      <br/>
      <Bento/>
      <br/>
      <Button>Get Started</Button>
    </div>
  )
}

export default WhatWeOffer