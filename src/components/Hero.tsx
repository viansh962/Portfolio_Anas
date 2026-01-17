import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import cvImg from "../assets/logos/Profile Photo.png";

const Hero = () => {
  const socialLinks = [
    {
      type: "icon",
      icon: Github,
      href: 'https://github.com/viansh962',
    },
    {
      type: "icon",
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/md-anas-434a70389/',
    },
    {
      type: "image",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      href: "https://leetcode.com/u/zsanas/", 
      alt: "LeetCode",
    },
  ];

  const stats = [
    { label: 'Years Experience', value: 'Fresher' },
    { label: 'Internships', value: '3+' },
    { label: 'Projects', value: '5+' },
  ];

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Anas</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 text-indigo-100"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>

          <p className="text-gray-400 mb-6 text-base sm:text-lg">
            Passionate about creating beautiful and functional web experiences.
            Specialized in modern web technologies and user-centric design.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-4 mb-6">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                {item.type === "icon" && item.icon && (
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                )}

                {item.type === "image" && item.img && (
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* SCROLL LINK */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 cursor-pointer text-sm sm:text-base"
          >
            <span>Learn More</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </Link>
        </motion.div>

        {/* RIGHT SIDE – IMAGE (FULL, NOT CROPPED) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center"
        >
          <img
            src={cvImg}
            alt="Md Anas"
            className="
              w-56 h-56
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-96 lg:h-96
              object-contain
              rounded-2xl
              bg-gray-900
              p-3
              shadow-2xl
            "
          />
        </motion.div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
