"use client";

import Link from "next/link";
import { motion } from "motion/react";

//import { useState } from "react";
//import FormModal from "./contact-us/FormModal";

const Contact = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  /*const [openModal, setOpenModal] = useState(false);

  const onClick = () => {
    setOpenModal(true);
  };*/

  return (
    <div
      id="contact"
      className="flex min-h-[80vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-5xl"
        >
          <span className="bg-gradient-to-r from-[rgba(169,241,223)] to-[rgba(255,187,187)] bg-clip-text text-transparent">
            Contact Us
          </span>
        </motion.h1>

        <p className="text-center text-lg font-semibold text-gray-400">
          Have any questions? Want to chat? Click below to send us an E-mail. We
          look forward to hearing from you!
        </p>

        <Link
          href="mailto:bytestack.io@gmail.com"
          className="text-nowrap rounded-lg border border-indigo-300 bg-black px-5 py-3 text-lg font-bold shadow-lg shadow-gray-500 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-gray-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Contact;
