"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  image: string
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Bioinformatics Research Assistant",
      company: "Cyphert Lab, UC San Diego",
      location: "San Diego, CA",
      period: "Sep 2024 – Present",
      description: [
        "Implementing bioinformatics pipelines for metagenomics research for sequence analysis and data integration.",
        "Using R to create detailed visualizations, facilitating insights into microbial community diversity and composition.",
        "Conducting data preprocessing, quality control, and optimization to improve efficiency and data reliability.",
        "Collaborating with lab members to refine experimental protocols and data workflows for studies.",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bioinformatics%20Research%20Assistant%20Cyphert%20Lab.jpg-lXYHXna3efcTuoubct9YAe00wUtp1K.jpeg",
    },
    {
      title: "Product Manager & Software Developer",
      company: "Triton Software Engineering",
      location: "San Diego, CA",
      period: "Nov 2022 – Present",
      description: [
        "Progressed to Product Manager in Sep 2024, leading a team of 8 developers in Agile workflows, focusing on enhancing productivity and project timelines.",
        "Facilitating client meetings to align product features with market needs and project specifications.",
        "Implementing strategic process improvements to reduce delays and ensure on-time project delivery.",
        "Developed iOS and web applications using SwiftUI, React, and Redux to streamline data management.",
        "Designed and built scalable client/server applications with ExpressJS and MongoDB.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSE-7ymyNYMsedE1JeVnp2ypkOgdKr04nO.png",
    },
    {
      title: "Professional Development Chair",
      company: "CSE Society, UCSD",
      location: "San Diego, CA",
      period: "Jan 2023 – Jan 2024",
      description: [
        "Increased student participation by 35% through organizing recruitment fairs and technical workshops.",
        "Coordinated events with Google and OpenAI, providing students with industry exposure.",
        "Enhanced event reach and engagement by improving marketing strategies and optimizing workshop formats.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSE%20Society-Wo2IT6izid07BaHv9FXoYV7WppLRqZ.png",
    },
    {
      title: "AI Team Intern",
      company: "Kearney",
      location: "Abu Dhabi, UAE",
      period: "Aug 2024 – Sep 2024",
      description: [
        "Developed linear regression models and conducted market basket analysis to predict sales trends, improving inventory management.",
        "Conducted market benchmarking to inform competitive strategies for clients.",
        "Collaborated with cross-functional teams to deliver AI-driven solutions aligned with client goals.",
        "Optimized ML workflows, enhancing model accuracy and deployment efficiency.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kearney.jpg-S1X9tiCES2eG9LqIpJ7QXwHiEpmBkk.jpeg",
    },
    {
      title: "Undergraduate Researcher",
      company: "Edwin Solares Bioinformatics and AI Lab, UC San Diego",
      location: "San Diego, CA",
      period: "Nov 2023 – December 2024",
      description: [
        "Conducted genomic data analysis, building vector databases for LLM training.",
        "Optimized data processing for machine learning tasks, enhancing performance and cost efficiency.",
        "Analyzed genomic data using Meryl and Merqury for k-mer generation and quality checks.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EDWIN-n3cGNqCevs0dgfbCMR8ux6XYYMHFKP.png",
    },
    {
      title: "Cloud Computing Intern",
      company: "Noventiq",
      location: "New Delhi, India",
      period: "June 2023 – Aug 2023",
      description: [
        "Optimized Microsoft Azure cloud infrastructure according to clients' needs, reducing costs by 10-27%.",
        "Solved client issues by identifying inefficiencies and eliminating resource waste, achieving 15-20% savings.",
        "Assisted in automating cloud resource management, improving operational efficiency.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noventiq-43guLwjWzzl2Wf6An9q1MkEpmyaH7n.png",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
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
            <span className="text-navy font-medium">Experience</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Professional Journey</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey spans research, product management, and software development across various
            organizations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-white rounded-xl shadow-md p-6 card-hover border-l-4 border-navy">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 relative mr-4 bg-white rounded-full p-2 shadow-sm">
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={exp.company}
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy">{exp.title}</h3>
                        <p className="text-navy/80 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2 text-navy/60" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-navy/60" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 timeline-item">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h4 className="text-lg font-semibold text-navy mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

