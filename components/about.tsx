"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-navy mr-4"></div>
            <span className="text-navy font-medium">About Me</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Get to Know Me</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover border-t-4 border-navy">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-lightblue rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-navy font-heading">About Me</h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
              I am a third-year Mathematics-Computer Science major at the University of California, San Diego, with a strong passion for leveraging technology to address real-world challenges. I am currently seeking internships and research opportunities in the field of Computer Science to further develop my skills and contribute to impactful projects.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                My diverse background spans from leading development teams to conducting cutting-edge research in
                genomics and AI. I thrive in collaborative environments where I can apply my technical skills and
                product vision to create innovative solutions to complex problems.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Whether I'm optimizing cloud infrastructure, developing mobile applications, or analyzing genomic data,
                I bring a detail-oriented and creative approach to every project I undertake.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

