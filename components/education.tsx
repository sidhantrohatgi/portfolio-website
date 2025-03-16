"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-lightblue relative overflow-hidden">
      {/* Beach/Wave Background */}
      <div className="absolute inset-0 wave-bg opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-navy mr-4"></div>
            <span className="text-navy font-medium">Education</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Academic Background</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 card-hover relative overflow-hidden"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-navy/10 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy font-heading">University of California San Diego</h3>
            </div>

            <div className="pl-16">
              <p className="text-gray-700 font-medium text-lg mb-2">
                Bachelor of Science in Mathematics-Computer Science
              </p>
              <p className="text-gray-600 italic mb-4">September 2022 – December 2025</p>
            </div>

            {/* San Diego themed decoration */}
            <div className="absolute top-4 right-4 opacity-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 17.5C9 16.5 9 15 8 14C7 13 5.5 13 4.5 14C3.5 15 3.5 16.5 4.5 17.5C5.5 18.5 7 18.5 8 17.5Z"
                  stroke="#14213D"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 14C13 15 13 16.5 14 17.5C15 18.5 16.5 18.5 17.5 17.5C18.5 16.5 18.5 15 17.5 14C16.5 13 15 13 14 14Z"
                  stroke="#14213D"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 8C4 7 4 5.5 3 4.5C2 3.5 0.5 3.5 -0.5 4.5C-1.5 5.5 -1.5 7 -0.5 8C0.5 9 2 9 3 8Z"
                  stroke="#14213D"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 8C21 7 21 5.5 20 4.5C19 3.5 17.5 3.5 16.5 4.5C15.5 5.5 15.5 7 16.5 8C17.5 9 19 9 20 8Z"
                  stroke="#14213D"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

