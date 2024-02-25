import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, } from "lucide-react";


const Linked = ["About", "Terms of Use", "Privacy Policy", "How it Works", "Contact Us"]
const Support = ["Support Carrier", "24h Service", "Quick Chat"]
const ContactUs = ["Whatsapp", "Support 24h"]

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-4 mt-5">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image src={"/header/Logo.webp"} alt="Logo" width={150} height={106} />
          </div>
          <div className="ml-6 mt-5">
            Small, artisan label that offers a
            thoughtfully curated collection of
            high quality everyday essentials made.
          </div>
          <div className="flex gap-10 mt-5 mb-5">
            <div className="bg-slate-200 rounded-md p-2"><Twitter /></div>
            <div className="bg-slate-200 rounded-md p-2"><Facebook /></div>
            <div className="bg-slate-200 rounded-md p-2"><Linkedin /></div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-600">Company</div>
          <div className="ml-6 mt-5 mb-10">
            {Linked.map((items, i) =>
              (<button className="flex flex-col" key={i} >{items}</button>))}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-600">Support</div>
          <div className="ml-6 mt-5 mb-10">
            {Support.map((items, i) =>
              (<button className="flex flex-col" key={i} >{items}</button>))}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-600">Contact</div>
          <div className="ml-6 mt-5 mb-10">
            {ContactUs.map((items, i) =>
              (<button className="flex flex-col" key={i} >{items}</button>))}

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
