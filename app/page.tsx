"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";


export default function Home() {
  return (
    <div className="overflow-x-hidden mx-auto min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-[#0C2C47] dark:to-zinc-900 font-sans flex flex-col max-w-full">
      <main className="w-full max-w-full mx-auto relative flex-grow items-center">
        {/* Floating blurred background circles */}
        <div className="absolute -top-[2vh] -left-[2vw] h-72 w-72 rounded-full bg-[#ABCBCA] dark:bg-[#ABCBCA]/50 blur-3xl animate-pulse" />
        <div className="absolute top-[12vh] right-[-4vw] h-50 w-50 rounded-full bg-[#0C2C47]/50 dark:bg-[#ABCBCA]/50 blur-3xl animate-pulse" />

        <header className="z-1 max-w-full backdrop-blur-xl bg-gradient-to-br from-[#0C2C47]/60 to-[#ABCBCA]/60 dark:bg-gradient-to-br dark:from-[#0C2C47]/60 dark:to-[#ABCBCA]/10 mt-6 bg-white/60 rounded-3xl fixed top-0 left-1/2 -translate-x-1/2 z-50">
          <nav className="max-w-full rounded-3xl mx-auto flex items-center justify-center p-4">
            <ul className="flex gap-14 lg:text-lg sm:text-md">
              <li>
                <a
                  href="#about"
                  className="text-white font-bold hover:text-[#0C2C47]/70 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white font-bold hover:text-[#0C2C47]/70 transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white font-bold hover:text-[#0C2C47]/70 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-bold hover:text-[#0C2C47]/70 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-30 max-w-full mx-4 sm:mx-6 lg:max-w-3xl lg:mx-auto backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Image
              src="/images/ME.jpeg"
              alt="Profile"
              width={140}
              height={140}
              className="rounded-full shadow-xl transition duration-300 hover:scale-[1.1]"
            />
          </motion.div>

          <h1 className="text-center mt-6 text-5xl font-bold text-[#0C2C47] dark:text-white drop-shadow-sm transition duration-300 hover:scale-[1.1]">
            Aileen Joyce David
          </h1>

          <p className="mt-2 text-lg text-zinc-700 dark:text-zinc-300 text-center">
            Student of Informatics Engineering, specializing in Information
            Management and Enterprise Systems
          </p>
          <p className="text-center mt-2 text-md text-zinc-400 dark:text-zinc-300">
            University Of Surabaya (UBAYA)
          </p>
        </motion.header>

        {/* About */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 scroll-mt-30 mx-4 sm:mx-6 lg:max-w-3xl lg:mx-auto backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-center text-3xl font-semibold text-[#0C2C47] dark:text-white transition duration-300 hover:scale-[1.1]">
            About Me
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-8">
            A Bachelor of Informatics Engineering student at the University of
            Surabaya (Ubaya) with a focus on Enterprise Information Management
            Systems. Skilled in software development, spanning both front-end
            and back-end. A responsible, hardworking individual with integrity,
            she is committed to self-development.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-4 sm:mx-6 lg:max-w-3xl lg:mx-auto scroll-mt-30 mt-16 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-center text-3xl font-semibold text-[#0C2C47] dark:text-white transition duration-300 hover:scale-[1.1]">
            Skills
          </h2>
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "MySQL",
              "MongoDB",
              "PostgreSQL",
              "Git",
              "C#",
              "Python",
              "Java",
              "Kotlin",
              "PHP",
              "TypeScript",
              "Dart",
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="hover:scale-110 transition duration-300 px-4 py-2 rounded-full shadow-md bg-white/20 dark:bg-zinc-800/40 border border-white/10 text-sm text-[#0C2C47] dark:text-zinc-200 backdrop-blur-md"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-4 sm:mx-6 lg:max-w-3xl lg:mx-auto scroll-mt-30 mt-16"
        >
          <h2 className="text-center text-3xl font-semibold text-[#0C2C47] dark:text-white transition duration-300 hover:scale-[1.1]">
            Projects
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/MSME.png"
                alt="Project Preview"
                width={400}
                height={250}
                className="rounded-xl mb-4 object-cover w-full h-40"
              />
              <h3 className="text-xl font-semibold text-[#0C2C47] dark:text-white">
                Environmentally Friendly MSME Directory Website
              </h3>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm">
                A directory website for UMKM environmentally friendly MSMEs in
                Indonesia, showcasing their unique innovation of products and
                services.
              </p>
              <a
                href="https://mauikanadventure.vercel.app/umkm"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-blue-600 dark:text-blue-400 font-medium"
              >
                View Project →
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="p-6 backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/MOB.png"
                alt="Project Preview"
                width={400}
                height={250}
                className="rounded-xl mb-4 object-cover w-full h-40"
              />
              <h3 className="text-xl font-semibold text-[#0C2C47] dark:text-white">
                Website for Universitas Surabaya's 2025 Orientation (MOB 2025)
              </h3>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm">
                A modern full-stack project demonstrating UI, API integration,
                and scalable architecture.
              </p>
              <a
                href="https://mob.ubaya.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-blue-600 dark:text-blue-400 font-medium"
              >
                View Project →
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sm:mx-6 lg:max-w-4xl lg:mx-auto scroll-mt-30 mt-20 p-8 rounded-2xl text-center"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <h2 className="text-center text-center text-3xl font-bold text-gray-800 dark:text-white transition duration-300 hover:scale-[1.1]">
              Contact Me
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ContactCard
              icon={Phone}
              title="WhatsApp"
              value="+62 895-3182-8844"
              action={() => window.open(`https://wa.me/`, "_blank")}
              gradient="from-[#0C2C47] to-[#ABCBCA]"
            />
            <ContactCard
              icon={Linkedin}
              title="Linkedin"
              value="Aileen Joyce David"
              action={() =>
                window.open(
                  `www.linkedin.com/in/aileen-joyce-david-linked`,
                  "_blank"
                )
              }
              gradient="from-[#0C2C47] to-[#ABCBCA]"
            />
            <ContactCard
              icon={Mail}
              title="Email"
              value="aileenjoycedavid@gmail.com"
              action={() => window.open(`mailto:`)}
              gradient="from-[#0C2C47] to-[#ABCBCA]"
            />
          </div>
          {/* <h2 className="text-3xl font-semibold text-[#0C2C47] dark:text-white">
            Contact
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Let's build something amazing together.
          </p>
          <a
            href="mailto:aileenjoycedavid@gmail.com"
            className="mt-3 inline-block text-lg text-blue-600 dark:text-blue-400 font-semibold"
          >
            aileenjoycedavid@gmail.com
          </a> */}
        </motion.section>
      </main>
      <footer className="bg-gradient-to-br from-[#0C2C47] to-[#ABCBCA] text-center text-white py-6 w-full mt-16">
        © {new Date().getFullYear()} Aileen Joyce David. All rights reserved.
      </footer>
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, action, gradient }: any) {
  if (!value || value === "-") return null;

  return (
    <div className="group relative">
      <div
        className={`absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-40 transition`}
      />
      <div className="relative backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-2xl p-6 text-center border-2 border-white shadow-lg hover:shadow-2xl transition-all">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="dark:text-white font-bold text-gray-800 mb-2 text-lg">
          {title}
        </h3>
        <p className="dark:text-white/50 text-gray-600 text-sm mb-4 break-words">
          {value}
        </p>
        <button
          onClick={action}
          className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${gradient} hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2`}
        >
          Find Me
        </button>
      </div>
    </div>
  );
}
