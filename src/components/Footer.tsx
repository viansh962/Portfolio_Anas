import logo from '../assets/logos/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Icon" className="w-8 h-8" />
              <span className="text-xl font-bold">Anas</span>
            </div>
            <p className="text-gray-400">
              Crafting digital experiences with passion and precision.
              Full-stack developer specializing in modern web technologies.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-2">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <a
              href="mailto:zsanaspvt.alig@gmail.com"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              zsanaspvt.alig@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; Anas Portfolio 2026. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
