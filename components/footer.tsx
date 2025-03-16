import { Linkedin, Github, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-navy text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-heading flex items-center">
              Sidhant Rohatgi
              <span className="cat-icon ml-2 w-5 h-5 opacity-70"></span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Researcher, Product Manager, and Developer passionate about technology and innovation.
            </p>
            <div className="flex items-center text-gray-300 mb-4">
              <MapPin size={18} className="mr-2" />
              <span>San Diego, California</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/sidhantrohatgi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/sidhantrohatgi"
                className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:srohatgi@ucsd.edu"
                className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Education
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 relative">
          <p className="text-center text-gray-400">&copy; {currentYear} Sidhant Rohatgi. All rights reserved.</p>

          {/* Cute cat in the corner */}
          <div className="absolute bottom-0 right-0 opacity-30 transform -translate-y-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 9v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 9v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M12 17c1.5 0 3-1 3-3h-6c0 2 1.5 3 3 3z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 3c0 2-2 3-2 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3c0 2 2 3 2 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}

