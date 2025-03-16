"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import TypingAnimation from "./typing-animation"
import { FileText } from "lucide-react"

export default function Hero() {
  const roles = ["Developer", "Researcher", "Product Manager"]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading">
              Hi, I&apos;m <span className="text-lightblue">Sidhant Rohatgi</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6 font-heading">
              I&apos;m a{" "}
              <span className="text-lightblue">
                <TypingAnimation phrases={roles} />
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Passionate about technology, research, and innovative product management while balancing academic and
              professional pursuits.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="px-6 py-3 bg-white text-navy font-medium rounded-lg hover:bg-lightblue transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
              <Image
                src="/images/goa3.JPG"
                alt="Sidhant Rohatgi"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-navy-light/50 backdrop-blur-sm p-4 rounded-lg text-sm text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <p>
                  <span className="font-semibold">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/sidhantrohatgi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lightblue transition-colors"
                  >
                    linkedin.com/in/sidhantrohatgi
                  </a>
                </p>
                <p>
                  <span className="font-semibold">GitHub:</span>{" "}
                  <a
                    href="https://github.com/sidhantrohatgi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lightblue transition-colors"
                  >
                    github.com/sidhantrohatgi
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1 (619)-820-7207
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:srohatgi@ucsd.edu" className="hover:text-lightblue transition-colors">
                    srohatgi@ucsd.edu
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}

