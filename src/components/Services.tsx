import { motion } from 'framer-motion';
import { Code, Globe, Palette, Image, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Coding Websites',
      description: 'Tailor-made websites using HTML, CSS, JavaScript, React, and more for unique business needs.',
    },
    {
      icon: Globe,
      title: 'WordPress Website Development',
      description: 'Quick and efficient WordPress-based websites with custom themes and plugins.',
    },
    {
      icon: Palette,
      title: 'Website UI/UX Design',
      description: 'Engaging and responsive web interface designs using Figma and Canva.',
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description: 'Eye-catching designs for social media campaigns and promotions.',
    },
    {
      icon: Database,
      title: 'System Design Planning',
      description: 'Structuring scalable and efficient software systems with clear architecture.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Services
        </motion.h2>

        {/* Services 5 in one line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-black border border-gray-700 p-8 rounded-xl flex flex-col items-center text-center hover:bg-gray-900 hover:border-blue-400 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-white mb-6" />

              <h3 className="text-lg font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;