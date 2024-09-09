"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main style={{background:"#000000"}}>
      <div className="first h-screen  md:flex w-100% float-left" >
      <div className="left w-1/2">
      <div className="flex">
        <img className="ml-40 w-56" src="x2.jpg" />
      </div>
      <div className="flex justify-right text-9xl ml-40 mt-10 text-neutral-50">
        Launching <br /> Soon
      </div>
      <div className="ml-40 text-center text-xl text-justify mr-60 text-neutral-50">
       "Embrace the future of urban mobility with our self-driving e-bicycle taxi service-where convenience meets sustainability.
       Powered by clean energy, our eco-friendly fleet reduces emissions,
       eases traffic, and fosters a healthier environment for everyone. Ride with us towards a greener, smarter, and more connected city."
      </div>
      <div className="ml-40">
      <button className="bg-neutral-950 mr-2 w-48 mt-5 uppercase py-2 px-3 cursor-pointer tracking-wider border-2
       border-yellow-300 hover:bg-transparent hover:text-yellow-300 hover:text-lg font-semibold text-neutral-50"
        >CONTACT US</button>
      </div>
      </div>
      
      
      <div className="right flex justify-end w-1/2 ">
      <img className="w-5/6 mr-40" src="x1.jpg" />
      </div>
      </div>
      <div className="">
        <h1 className="text-6xl text-neutral-50 text-center "><strong className="border-2 border-yellow-300 p-2">How to STV</strong></h1>
      
      </div>
      
      <div style={{background:"#000000"}} className="second flex h-screen w-100% float-left">
        <div>

        </div>
      <div className="left w-1/2 flex items-center">
       <div className="">
        <img className="w-1/2 ml-60" src="scan.png" />
       </div>
      </div>
    
      <div className="right w-1/2">
      <div className="ml-60">
      
       <div className="hover:border-2 cursor-pointer w-1/3 p-3 mt-20 text-neutral-50">
       
       <h4 className="text-2xl hover:text-yellow-300 text-neutral-50"><strong>Download STV app</strong></h4>
       <p className="text-md">Download STV from Appstore or Playstore</p>
      
       </div>
       <div className="hover:border-2 cursor-pointer w-1/3 mt-5 p-3 text-neutral-50">
      
       <h4 className="text-2xl hover:text-yellow-300"><strong>Locate a STV</strong></h4>
       <p className="text-md">Use the STV app to find the closest vehicle to you or look out for a STV Zone around you.</p>
     
       </div>
       <div className="hover:border-2 cursor-pointer w-1/3 mt-5 p-3 text-neutral-50">
       
       <h4 className="text-2xl hover:text-yellow-300"><strong>Scan the QR code </strong></h4>
       <p className="text-md">To unlock the vehicle, simply scan the QR code located on the panel.</p>
      
       </div>
       <div className="hover:border-2 cursor-pointer w-1/3 mt-5 p-3 text-neutral-50">
       
       <h4 className="text-2xl hover:text-yellow-300"><strong>Ride Safely</strong></h4>
       <p className="text-md">Enjoy the STV ride but remember to abide by all the traffic laws and parking policies.</p>
      
       </div>
       <div className="hover:border-2 cursor-pointer w-1/3 mt-5 p-3 text-neutral-50">
       
       <h4 className="text-2xl hover:text-yellow-300"><strong>End your ride  </strong></h4>
       <p className="text-md">To end your ride, park the vehicle at a STV Zone, lock it and click on the End button on your app.</p>
      
       </div>
      </div>
      
      </div>
      </div>
      <div className="">
        <h1 className="text-6xl text-neutral-50 text-center "><strong className="border-2 border-yellow-300 p-2">Why STV</strong></h1>
      
      </div>
      <div style={{background:"#000000"}} className="third flex h-full w-100% float-left">
      <div className="left w-1/2">
      <div className="ml-60">
      
       <div className="cursor-pointer p-3 mt-20 text-neutral-50">
       
       <h4 className="text-2xl text-yellow-300"><strong>Eco-Friendly</strong></h4>
       <p className="text-md text-justify">An e-cycle STV taxi is an eco-friendly transportation option powered by electricity. It reduces air and noise pollution,
         conserves energy, and promotes sustainable urban mobility with 
         minimal environmental impact. </p>
      
       </div>
       <div className="cursor-pointer p-3 mt-5 text-neutral-50">
       
       <h4 className="text-2xl text-yellow-300"><strong>Sustainability</strong></h4>
       <p className="text-md text-justify">STV’s mission is to make urban mobility in India seamless, shareable and sustainable . 
        What started off as an initiative to reduce traffic congestion and pollution in Indian cities, is now redefining urban mobility across the country.
      We are driven by three guiding principles of urban mobility – Accessibility, Availability, and Affordability.</p>
      
       </div>
       <div className="cursor-pointer p-3 mt-5 text-neutral-50">
       
       <h4 className="text-2xl text-yellow-300"><strong>Self Driving</strong></h4>
       <p className="text-md text-justify">Passengers who drive themselves may feel more comfortable controlling the speed, route, and pace of the trip,
         tailoring the journey to their preferences.In areas with a shortage of drivers, allowing passengers to drive the bike taxi themselves 
         could help solve mobility issues.</p>
      
       </div>
       <div className="cursor-pointer p-3 mt-5 text-neutral-50">
       
       <h4 className="text-2xl text-yellow-300"><strong>24/7 Availability</strong></h4>
       <p className="text-md text-justify">Autonomous bike taxis could operate 24/7 without the need for a human driver,
         offering round-the-clock service and reducing waiting times for users.</p>
      
       </div>
       <div style={{background:"#000000"}} className="cursor-pointer p-3 mt-5 text-neutral-50">
       
       <h4 className="text-2xl text-yellow-300"><strong>Women Safety</strong></h4>
       <p className="text-md text-justify">Self-riding allows women to commute at any time without having to wait for a driver,
         reducing the risks that come with late-night waiting for taxis or ride-sharing services.All bike taxis have 
        real-time GPS tracking that allows passengers to share their ride details with family or friends. 
        This ensures that someone can track their journey from start to finish..</p>
      
       </div>
      </div>
      
      </div>
      
      
      <div className="right flex justify-end w-1/2">
      <img className="" src="logo.jfif" />
      </div>
      </div>
      
    </main>
  );
}
