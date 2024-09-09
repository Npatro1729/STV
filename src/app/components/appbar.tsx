"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter} from"next/navigation"



export default function Appbar(){
    const router = useRouter();
   
   
   return <div style={{background:"#000000"}} className=" flex justify-between">
    <div>
        
        <button onClick={()=>{router.push('/')}}><img className="w-28 h-28" src="/logo.jfif" alt="" /></button>
        </div>
     
     <div className= "flex mt-3">
        <div >
        <button className="bg-neutral-950 mr-4 rounded-full uppercase py-2 px-3 cursor-pointer tracking-wider 
        border-2 border-yellow-300 hover:bg-transparent hover:text-lg hover:text-yellow-300 font-semibold text-neutral-50"
                
        >Sign Up</button>
        </div>
        <div>
        <button className="bg-neutral-950 mr-2 rounded-full uppercase py-2 px-3 cursor-pointer 
        tracking-wider border-2 border-yellow-300 hover:bg-transparent hover:text-lg hover:text-yellow-300 font-semibold text-neutral-50"
             onClick={()=>{
             
            }}
        >Log In</button>
        </div>
     </div>
    
   </div>
   // if(status === "authenticated"){
   //    return <div style={{
   //       background : "#1f998c",
   //      }} className="flex justify-end">
   //           <div >
   //      <button className="bg-green-700 mr-4 mt-3 rounded-full uppercase py-2 px-3 cursor-pointer tracking-wider border-2 hover:bg-transparent hover:text-stone-950 font-semibold"
   //              onClick={()=> signOut({ callbackUrl: '/' })}
   //      >Logout</button>
   //      </div>
   //    </div>
   }
   // if(status === "authenticated" && session.user.admin){
   //    return <div style={{
   //       background : "#1f998c",
   //      }} className="flex justify-end">
   //       <div>
   //       <button className="bg-green-700 mr-4 mt-3 rounded-full uppercase py-2 px-3 cursor-pointer tracking-wider border-2 hover:bg-transparent hover:text-stone-950 font-semibold"
   //             onClick={()=>{router.push('/admin/Ev')}}
   //       >ADD EV</button>
   //      </div>
   //      <div >
   //      <button className="bg-green-700 mr-4 mt-3 rounded-full uppercase py-2 px-3 cursor-pointer tracking-wider border-2 hover:bg-transparent hover:text-stone-950 font-semibold"
   //              onClick={()=> signOut({ callbackUrl: '/' })}
   //      >Logout</button>
   //      </div>
        
   //    </div>
   // }
