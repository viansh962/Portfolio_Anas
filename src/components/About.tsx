import { motion } from "framer-motion";
import cvImg from "../assets/logos/Profile Photo.png";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 md:py-20 px-6 md:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-indigo-500 uppercase">
          WHO AM I?
        </h1>
        <p className="text-gray-400 text-base md:text-lg mt-4">
          Get to know more about me and what I do.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={cvImg}
            alt="Profile"
            className="rounded-2xl shadow-lg w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 object-cover border-4 border-indigo-600"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-4"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-400 mb-4">
            I'm Md Anas
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            a passionate{" "}
            <span className="text-indigo-500 font-semibold">Full Stack Web Developer</span> and{" "}
            <span className="text-indigo-500 font-semibold">UI/UX Designer</span> with expertise in crafting modern, responsive,
            and user-friendly web applications.
          </p>
          <p className="mt-4 text-gray-400">
            With a strong foundation in both frontend and backend development, I specialize in building scalable and dynamic web
            solutions that enhance user experience and functionality. I enjoy transforming ideas into real-world, impactful digital experiences.
          </p>

          <motion.a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition"
            whileHover={{ scale: 1.1 }}
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
