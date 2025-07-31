import Button from "@/app/components/Button";
import React from "react";
import { motion } from "framer-motion";
import {Mail, MessageCircle} from "lucide-react";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Let's Connect</h2>
      <p className="contact-text">
        Elevate your online presence with me.<br />
        Deliver a unique digital presence.<br />
        Ready to get started? I’ll follow up within 24H.<br />
        Fast - Fair pricing - Quality guaranteed.
      </p>


      {/* WhatsApp Contact Button */}
      <div className="contact-cta relative">
        <div className="flex items-center justify-center gap-3 w-full min-w-[280px] h-14 px-6 py-3 bg-transparent border-2 border-green-400 text-green-300 hover:bg-green-400/10 hover:text-green-200 hover:border-green-300 transition-all duration-300 text-lg font-medium rounded-lg cursor-pointer">
          <MessageCircle className="w-5 h-5" />
          <span>Contact WhatsApp</span>
        </div>
        <a href="https://wa.me/+32486188501" className="absolute inset-0 z-10" aria-label="Contact via WhatsApp"></a>
      </div>
      <div className="space-y-6">
          {/* Email Contact Button */}
          <div className="contact-cta relative">
            <div className="flex items-center justify-center gap-3 w-full min-w-[280px] h-14 px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 hover:text-blue-200 hover:border-blue-300 transition-all duration-300 text-lg font-medium rounded-lg cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>Contact E-mail</span>
            </div>
            <a href="mailto:topg.dev@gmail.com" className="absolute inset-0 z-10" aria-label="Contact via email"></a>
          </div>
      </div>


    </motion.div>
  );
}

export default Contact;
