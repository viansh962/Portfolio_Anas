
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'DMRC Internship ',
      description: 'Completed internship with excellence in IT Department of DMRC',
      link: 'https://drive.google.com/file/d/1d8shKzdjgrlDONbz_niBurbLwMTBCLSz/view'
    },
    {
      title: ' BusinessOnBot Internship ',
      description: 'Completed internship with excellence at BusinessOnBot',
      link: 'https://drive.google.com/file/d/1acDCTKiwyQAoOq43jW0CSkZNVAEqPWEB/view'
    },
    {
      title: 'Bharat Intern Internship ',
      description: 'Continue on 1 month full stack web development internship',
      link: 'https://drive.google.com/file/d/1-2jWkADG47Gs762RF2x3FDOrU-LLzeXc/view?usp=sharing'
    },


  ];

  return (
    <section id="achievements" className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Achievements
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500" />

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } mb-12 md:mb-16`}
            >
              <div className="w-full md:w-1/2 flex items-center">
                <div
                  className={`bg-gray-800 p-6 rounded-lg shadow-xl ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-blue-500 mr-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;





