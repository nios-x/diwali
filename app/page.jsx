"use client"
import React,{useState} from "react";
import Link from "next/link";

export default function Home() {
  const [name,setName] = useState("")
  
  return (
   <div className="p-4 bg-[linear-gradient(0deg,rgba(255,255,255,0.6),rgba(255,255,255,0.3))] rounded-3xl">

    <h1 className="m-1 text-2xl text-white">Wish Others Happy Diwali !!</h1>
    <p className="m-1">Greet Others on this Diwali </p>
    <span>

    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="rounded-xl p-1 px-2 font-[Comic-Sans]" placeholder="Enter Your Name" />
    <Link href={`wish/${name}`} className="ml-2 bg-black text-white px-1 py-[5px] text-center rounded">Enter</Link>
    </span>


   </div>
  );
}
