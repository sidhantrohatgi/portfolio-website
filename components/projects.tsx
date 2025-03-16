"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

interface Project {
  title: string
  organization: string
  description: string[]
  link?: string
  github?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "California Council for Interior Design Certification (CCIDC) Web App",
      organization: "Triton Software Engineering",
      description: [
        "Collaborated with a team of 8 developers to create a web application for the nonprofit CCIDC using React, TypeScript, and Redux.",
        "Integrated MongoDB for backend storage, improving data handling efficiency by 25%.",
        "The app streamlined the application process for interior designers seeking certification in California, resulting in a 30% reduction in processing time for new applications.",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "Spay.LA Project",
      organization: "Product Manager",
      description: [
        "Leading a cross-functional team to build a user-friendly platform connecting pet owners with accessible, affordable spay/neuter services in the Los Angeles area.",
        "By streamlining scheduling, clinic information, and educational resources, the project aims to reduce shelter overpopulation and improve animal welfare in the community.",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "Alum Mentorship iOS Application",
      organization: "Triton Software Engineering",
      description: [
        "Led the frontend development of an iOS app for connecting high school students seeking mentorship with alumni.",
        "Built app using SwiftUI with MVVM architecture, and integrated Firebase for real-time data management.",
        "Spearheaded API development using ExpressJS to create seamless data flows.",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "Sentiment Analysis of Amazon Reviews",
      organization: "Data Science Project",
      description: [
        "Led a data science project analyzing 30,000 Amazon magazine subscription reviews using machine learning models.",
        "Successfully implemented logistic regression combined with TF-IDF and Word2Vec features to enhance sentiment classification, achieving an accuracy of 85.83%.",
      ],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-lightblue">
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
            <span className="text-navy font-medium">Projects</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Featured Projects</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group card-hover"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 font-heading">{project.title}</h3>
                <p className="text-navy/70 font-medium mb-4">{project.organization}</p>

                <ul className="space-y-2 mb-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center text-navy font-medium hover:text-navy/80 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} className="mr-2" />
                      GitHub
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-navy font-medium hover:text-navy/80 transition-colors group"
                    >
                      View Project
                      <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={16} />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

