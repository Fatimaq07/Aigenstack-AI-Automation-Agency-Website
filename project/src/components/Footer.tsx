import { Cpu, Mail } from "lucide-react";
import logo from "../logo.png";  // <-- FIXED

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo + Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="logo"
                className="w-16 h-12 object-contain"
              />
              <span className="text-xl font-semibold tracking-wide">
                AigenStack
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Building intelligent AI automation systems that help businesses
              scale effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("process")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Process
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

            <a
              href="mailto:qfatima504@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>qfatima504@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-cyan-500/10 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} AigenStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
