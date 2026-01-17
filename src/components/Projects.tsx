

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import CoeImg from "../assets/logos/coe.png";
import portfolioImg from "../assets/logos/portfolio.png";
import TaskmasterImg from "../assets/logos/taskmaster.png";
import MydocImg from "../assets/logos/MyDoc.png";

const Projects = () => {
  const projects = [
    {
      title: 'Center Of Excellence',
      description: 'Official Center of Excellence website for UIT RGPV SHIVPURI',
      image: CoeImg,
      demoLink: 'https://coergpv.vercel.app/',
      githubLink: 'https://github.com/viansh962/center-of-excellence-master',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio with 3D animations',
      image: portfolioImg,
      demoLink: '',
      githubLink: '',
    },
    {
      title: 'Task Master',
      description: ' A Full Stack Task Management Application',
      image: TaskmasterImg,
      demoLink: 'https://task-master-app-rosy.vercel.app/',
      githubLink: 'https://github.com/viansh962/Task-Master-App',
    },
    {
      title: 'MY DOC',
      description: 'A Doctor Appointment Booking System',
      image: MydocImg,
      demoLink: 'https://mydoc.infinityfreeapp.com/',
      githubLink: 'https://github.com/viansh962/Hospital-Appointment-Booking-System',
    },
  ];

  const handleDemoClick = (demoLink: string) => {
    if (!demoLink || demoLink === '#') {
      alert("🚧 This project is under development and will be live soon!");
    } else {
      window.open(demoLink, "_blank");
    }
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => handleDemoClick(project.demoLink)}
                    className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </button>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
