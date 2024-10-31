"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import ThreeModel from '@/components/ThreeModel';

export default function Page() {
  

  const [diwaliWishes] = useState([
    "May the lights of Diwali brighten your path and illuminate your life with peace and joy. Happy Diwali!",
    "Wishing you a Diwali filled with warmth, joy, and success in all your endeavors. Happy Diwali!",
    "May your life be as colorful and vibrant as the Diwali decorations! Enjoy a joyous celebration.",
    "Sending heartfelt wishes for health, wealth, and happiness this Diwali. May all your dreams come true!",
    "May the spirit of Diwali bring you closer to your loved ones, filling your heart with love and joy.",
    "Wishing you a year filled with blessings and a Diwali celebration that lights up your life.",
    "May this festival of lights brighten your home and heart, bringing peace and joy into your life.",
    "May the joy of Diwali surround you and create beautiful memories that last a lifetime.",
    "Wishing you success, prosperity, and happiness this Diwali. Have a sparkling celebration!",
    "May this Diwali fill your life with happiness and may all your dreams come true. Enjoy the festivities!",
    "On this auspicious occasion, may you be blessed with love, health, and prosperity.",
    "May the glow of diyas and the sound of laughter fill your home with endless joy. Happy Diwali!",
    "As we celebrate Diwali, may your life be filled with peace, harmony, and happiness.",
    "Happy Diwali! May new opportunities come your way as you savor the celebrations.",
    "Wishing you success and good fortune on this holy night. Happy Diwali!",
    "Cheers to a joyful Deepavali! May the fireworks send messages of wealth and hope.",
    "On this auspicious day, may the blessings of Goddess Lakshmi bring you prosperity.",
    "Diwali is a time for reflection. May you find inner peace as you light the lamps of self-discovery.",
    "Wishing you and your family a very happy and prosperous Diwali. Happy Diwali 2024!",
    "May the festival of lights inspire hope, joy, and new beginnings in your life.",
    "Best wishes for Diwali from our family to yours. Enjoy this beautiful festival!",
    "May Goddess Lakshmi bless you with good health, wealth, and happiness.",
    "On this special occasion, let us remember that good always triumphs over evil.",
    "Let us learn from Lord Ram's life and imbibe those lessons into our lives.",
    "May happiness and glory surround you during this festive season of Diwali.",
    "May the joy of Diwali fill your life with endless moments of love and laughter.",
    "Wishing you a magical Diwali filled with the blessings of wealth and knowledge.",
    "May the joy of this wonderful festival fill your life with infinite happiness.",
    "With the light of diyas, may your life be filled with happiness and prosperity.",
    "This Diwali, may you find peace and happiness in every moment spent with loved ones.",
    "Celebrate this festival with a heart full of joy and a spirit of love.",
    "May the light of Diwali guide you toward a brighter future, filled with opportunities.",
    "Let's cherish the joy and warmth of Diwali together, strengthening our bonds.",
    "Wishing you sweet memories and joyful moments this Diwali, surrounded by loved ones.",
    "May this festival bring new beginnings and endless opportunities for growth.",
    "May your home be filled with light, laughter, and love this Diwali.",
    "Celebrate the triumph of light over darkness with joy and gratitude this Diwali.",
    "Wishing you joy, prosperity, and success in all your endeavors. Happy Diwali!",
    "Embrace the spirit of Diwali and let love and joy flourish around you.",
    "Happy Diwali! Wishing you cherished moments filled with laughter and joy.",
    "May this Diwali bring peace, prosperity, and success to every aspect of your life.",
    "Light up your life with the joy of Diwali! May happiness warm your home.",
    "Wishing you a Diwali that sparkles with joy and positivity!",
    "Celebrate the festival of lights with love, laughter, and joy!",
    "Sending warm wishes for a beautiful Diwali! May joy and peace abound.",
    "Let’s celebrate the victory of good over evil this Diwali with love and happiness."
]);


  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(Math.floor(Math.random() * diwaliWishes.length));
  }, []);
  const [namee, setName] = useState("")
  useEffect(()=>{
    const route = window.location.href.split("/")
    setName(route[route.length-1])
    },[])
  return (
    <>
    <div className="p-4 bg-[linear-gradient(0deg,rgba(255,255,255,0.6),rgba(255,255,255,0.3))] rounded-3xl">
      <h1 className="m-1 text-2xl text-white">Happy Diwali 🪔🪔 </h1>
      {message !== null && <p className="m-1">{diwaliWishes[message]}</p>}
      <div className='m-1'>{"From:  "+namee.replace("%20"," ").toUpperCase()}</div>
    </div>
    <div className='flex '>
    <a href={`https://api.whatsapp.com/send?text=Happy%20Diwali%20${window.location.href}`} target="_blank" className='m-4 p-2 bg-black text-white rounded-xl'>
        Wish Others ➔
      </a>
      <Link href="/" className='m-4 p-2 bg-black text-white rounded-xl'>
        Make your Own +
      </Link>
    </div>
    <ThreeModel modelPath="/model.glb" />
    <p className='font-[Arial] text absolute bottom-0 text-white text-center rounded bg-black w-full text-[5px]'>Made with Love by Soumya Jaiswal</p>
    
    
    </>
  );
}
