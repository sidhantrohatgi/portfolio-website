"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Search, X, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

interface Course {
  code: string
  title: string
  description: string
  prerequisites?: string
  link: string
  department: "CSE" | "MATH"
}

export default function Coursework() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const courses: Course[] = [
    // CSE Courses
    {
      code: "CSE 11",
      title: "Introduction to Programming and Computational Problem-Solving: Java",
      description:
        "Introduction to programming and computational problem-solving using Java. Basic programming concepts including variables, control structures, arrays, methods, and object-oriented programming.",
      prerequisites: "None",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse11",
      department: "CSE",
    },
    {
      code: "CSE 12",
      title: "Basic Data Structures and Object-Oriented Design",
      description:
        "Use and implementation of basic data structures including linked lists, stacks, queues, binary trees, and hash tables. Object-oriented design including interfaces, polymorphism, encapsulation, and abstract data types.",
      prerequisites: "CSE 11 or equivalent",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse12",
      department: "CSE",
    },
    {
      code: "CSE 15L",
      title: "Software Tools and Techniques Laboratory",
      description:
        "Hands-on exploration of software development tools and techniques. Investigation of the scientific process as applied to software development and debugging.",
      prerequisites: "CSE 11 or equivalent",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse15l",
      department: "CSE",
    },
    {
      code: "CSE 30",
      title: "Computer Organization and Systems Programming",
      description:
        "Introduction to organization of modern digital computers and systems programming. Topics include assembly language, C programming, memory organization, and basic concepts of operating systems.",
      prerequisites: "CSE 12 or equivalent",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse30",
      department: "CSE",
    },
    {
      code: "CSE 100",
      title: "Advanced Data Structures",
      description:
        "Design and analysis of efficient data structures and algorithms. Binary search trees, balanced trees, hash tables, priority queues, and graph algorithms.",
      prerequisites: "CSE 12, CSE 15L, CSE 30",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse100",
      department: "CSE",
    },
    {
      code: "CSE 101",
      title: "Design and Analysis of Algorithms",
      description:
        "Design and analysis of efficient algorithms with emphasis on non-numerical algorithms such as sorting, searching, pattern matching, and graph and network algorithms.",
      prerequisites: "CSE 100, MATH 188 or CSE 21",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse101",
      department: "CSE",
    },
    {
      code: "CSE 105",
      title: "Theory of Computability",
      description:
        "Introduction to formal languages, automata, computability, and complexity. Regular and context-free languages, finite automata, Turing machines, and NP-completeness.",
      prerequisites: "CSE 12, CSE 15L, CSE 21 or MATH 154 or MATH 184A",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse105",
      department: "CSE",
    },
    {
      code: "CSE 120",
      title: "Principles of Computer Operating Systems",
      description:
        "Basic concepts and principles of operating systems. Process management, memory management, file systems, resource allocation, scheduling, and security.",
      prerequisites: "CSE 101 or CSE 110",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse120",
      department: "CSE",
    },
    {
      code: "CSE 150B",
      title: "Introduction to Artificial Intelligence: Search and Reasoning",
      description:
        "Fundamental concepts and algorithms in artificial intelligence. Search, constraint satisfaction, game playing, logical and probabilistic reasoning, planning, and decision making.",
      prerequisites: "CSE 100 or MATH 176",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse150b",
      department: "CSE",
    },
    {
      code: "CSE 151A",
      title: "Introduction to Machine Learning",
      description:
        "Introduction to machine learning algorithms and applications. Supervised learning, unsupervised learning, learning theory, reinforcement learning, and adaptive control.",
      prerequisites: "CSE 12, MATH 18, MATH 20C",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse151a",
      department: "CSE",
    },
    {
      code: "CSE 158",
      title: "Recommender Systems and Web Mining",
      description:
        "Algorithms for mining the web and building recommendation systems. Collaborative filtering, content-based recommendations, web crawling, link analysis, and clustering.",
      prerequisites: "CSE 12, CSE 15L, CSE 151A or similar",
      link: "https://catalog.ucsd.edu/courses/CSE.html#cse158",
      department: "CSE",
    },

    // MATH Courses
    {
      code: "MATH 20A",
      title: "Calculus for Science and Engineering",
      description:
        "Foundations of differential and integral calculus of functions of one variable. Limits, continuity, differentiation, integration, applications, and the Fundamental Theorem of Calculus.",
      prerequisites: "Math Placement Exam qualifying score",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math20a",
      department: "MATH",
    },
    {
      code: "MATH 20B",
      title: "Calculus for Science and Engineering",
      description:
        "Integral calculus of functions of one variable, with applications. Techniques of integration, logarithmic and exponential functions, sequences and series, and Taylor expansions.",
      prerequisites: "MATH 20A or MATH 10A",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math20b",
      department: "MATH",
    },
    {
      code: "MATH 20C",
      title: "Calculus and Analytic Geometry for Science and Engineering",
      description:
        "Vector geometry, vector functions, partial derivatives, multiple integrals, and vector calculus. Applications to science and engineering.",
      prerequisites: "MATH 20B",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math20c",
      department: "MATH",
    },
    {
      code: "MATH 20D",
      title: "Introduction to Differential Equations",
      description:
        "First-order ordinary differential equations, second-order linear equations, series solutions, and Laplace transforms. Systems of linear equations and numerical methods.",
      prerequisites: "MATH 20C",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math20d",
      department: "MATH",
    },
    {
      code: "MATH 20E",
      title: "Vector Calculus",
      description:
        "Change of variable in multiple integrals, Jacobian, line integrals, Green's theorem, vector fields, divergence and curl, surface integrals, Stokes' theorem, and applications.",
      prerequisites: "MATH 20C",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math20e",
      department: "MATH",
    },
    {
      code: "MATH 18",
      title: "Linear Algebra",
      description:
        "Matrix algebra, Gaussian elimination, determinants, linear transformations, vector spaces, orthogonality, eigenvalues, and eigenvectors.",
      prerequisites: "MATH 20A",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math18",
      department: "MATH",
    },
    {
      code: "MATH 103A",
      title: "Modern Algebra I",
      description:
        "Introduction to abstract algebra. Groups, rings, and fields, with applications to number theory, geometry, and cryptography.",
      prerequisites: "MATH 18 or MATH 31AH, MATH 109 or MATH 31CH",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math103a",
      department: "MATH",
    },
    {
      code: "MATH 103B",
      title: "Modern Algebra II",
      description:
        "Continuation of abstract algebra. Sylow theorems, rings, ideals, unique factorization domains, and field extensions.",
      prerequisites: "MATH 103A",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math103b",
      department: "MATH",
    },
    {
      code: "MATH 109",
      title: "Mathematical Reasoning",
      description:
        "Introduction to mathematical proof. Logic, set theory, functions, relations, and induction. Techniques of proof and construction of counterexamples.",
      prerequisites: "MATH 20C",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math109",
      department: "MATH",
    },
    {
      code: "MATH 154",
      title: "Discrete Mathematics and Graph Theory",
      description:
        "Basic concepts in discrete mathematics with emphasis on graph theory. Graphs, trees, connectivity, Euler and Hamiltonian paths, matchings, and network flows.",
      prerequisites: "MATH 20C, MATH 18",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math154",
      department: "MATH",
    },
    {
      code: "MATH 171A",
      title: "Introduction to Numerical Mathematics: Linear Algebra",
      description:
        "Floating point arithmetic, direct and iterative solution of linear equations, iterative solution of nonlinear equations, optimization, approximation theory.",
      prerequisites: "MATH 20D, MATH 18",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math171a",
      department: "MATH",
    },
    {
      code: "MATH 171B",
      title: "Introduction to Numerical Mathematics: Approximation and Nonlinear Equations",
      description:
        "Numerical approximation of functions, numerical integration and differentiation, and numerical solution of nonlinear equations and differential equations.",
      prerequisites: "MATH 171A",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math171b",
      department: "MATH",
    },
    {
      code: "MATH 183",
      title: "Statistical Methods",
      description:
        "Introduction to probability. Discrete and continuous random variables–binomial, Poisson and Gaussian distributions. Central limit theorem. Data analysis and inferential statistics: graphical techniques, confidence intervals, hypothesis tests, curve fitting.",
      prerequisites: "MATH 20C or MATH 31BH",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math183",
      department: "MATH",
    },
    {
      code: "MATH 187",
      title: "Introduction to Cryptography",
      description:
        "Introduction to cryptography, including classical cryptosystems, block ciphers, public-key cryptosystems, digital signatures, and hash functions.",
      prerequisites: "MATH 103A or CSE 21 or MATH 154 or MATH 184A",
      link: "https://catalog.ucsd.edu/courses/MATH.html#math187",
      department: "MATH",
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment ? course.department === selectedDepartment : true
    return matchesSearch && matchesDepartment
  })

  const departments = ["CSE", "MATH"]

  return (
    <section id="coursework" className="py-20 bg-lightblue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-navy mr-4"></div>
            <span className="text-navy font-medium">Coursework</span>
            <div className="h-[1px] w-10 bg-navy ml-4"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-heading">Academic Courses</h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            A comprehensive list of courses I've completed at UC San Diego, showcasing my academic foundation in
            Mathematics and Computer Science.
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center mx-auto bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy-light transition-colors duration-300"
          >
            {isExpanded ? "Hide Courses" : "View Courses"}
            {isExpanded ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
          </button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {/* Search and Filter */}
              <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-1/3">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-navy"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                <div className="flex gap-2 w-full md:w-auto justify-center">
                  <button
                    onClick={() => setSelectedDepartment(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedDepartment === null ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy/10"
                    }`}
                  >
                    All
                  </button>
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDepartment === dept ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy/10"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-navy">{course.code}</h3>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            course.department === "CSE" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {course.department}
                        </span>
                      </div>

                      <h4 className="text-md font-medium text-gray-800 mb-3">{course.title}</h4>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>

                      {course.prerequisites && (
                        <div className="mb-4">
                          <span className="text-xs font-semibold text-gray-500">Prerequisites:</span>
                          <p className="text-xs text-gray-600">{course.prerequisites}</p>
                        </div>
                      )}

                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-navy font-medium hover:text-navy/70 transition-colors"
                      >
                        View Course Details
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No courses found matching your search criteria.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

