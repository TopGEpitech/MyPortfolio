'use client';
import Button from "@/app/components/Button";
import React from "react";
import { motion } from "framer-motion";

function ContactFR() {
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
        <h2 className="contact-title">Et Après ?</h2>
        <h2 className="contact-sub-title">Contact</h2>
        <p className="contact-text">
          Je suis actuellement à la recherche de nouvelles opportunités.
          <br />Ma boîte mail est toujours ouverte, et je vous encourage à me contacter. Que vous ayez des questions ou que vous souhaitiez simplement échanger, je m'engage à vous répondre de manière rapide et réfléchie.
        </p>
        <div className="contact-cta">
          <Button link="mailto:topg.dev@gmail.com" text="Me Contacter" />
        </div>
      </motion.div>
  );
}

export default ContactFR;