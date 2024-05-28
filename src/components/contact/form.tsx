import React from "react";
import Button from "../ui/button";
export default function Contactform() {
  return (
    <div className="border-[1px] border-[#eee] rounded-md p-5">
      <h2 className="text-3xl md:text-3xl">Get In Touch</h2>
      <span className="my-3 w-full h-[1px] opacity-40 bg-primary block"></span>
      <form className=" mx-auto">
        <div className="flex gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          className="block w-full px-4 py-4 my-5 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        rows={4}
        ></textarea>
        <Button variant="normal" size="medium" label="Send message" />
      </form>
    </div>
  );
}
