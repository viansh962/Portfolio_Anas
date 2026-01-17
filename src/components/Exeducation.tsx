// import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';
const EducationExperience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Centered Heading */}
        <h1 className="text-5xl font-bold text-center mb-16 text-white-400">
          Resume
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold flex items-center gap-3 mb-8 text-indigo-500">
              {/* <GraduationCap className="w-8 h-8 text-blue-400" /> */}
              🎓 Education
            </h2>

            <div className="space-y-6">
              {/* Education Items */}
              {[
                {
                  year: "2021 - 2025",
                  title: "B.Tech in Computer Science & Engineering",
                  institution: "UIT RGPV Shivpuri",
                  extra: "CGPA: 7.85",
                },
                {
                  year: "2021",
                  title: "12th Standard",
                  institution: "STS School, Aligarh Muslim University",
                  extra: "Division: 1st",
                },
                {
                  year: "2019",
                  title: "10th Standard",
                  institution: "Jai Hind Public School",
                  extra: "Division: 1st",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-400 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-400"></div>
                  <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl hover:shadow-blue-500/20">
                    <p className="text-gray-400">{edu.year}</p>
                    <h3 className="text-xl font-semibold text-blue-400">{edu.title}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-blue-300 mt-2">{edu.extra}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold flex items-center gap-3 mb-8 text-indigo-500">
              {/* <Briefcase className="w-8 h-8 text-blue-400" /> */}
              💼 Experience
            </h2>

            <div className="space-y-6">
              {/* Experience Items */}
              {[
                {
                  year: " 1/July/2024 - 30/Aug/2024",
                  title: " Full Stack Web Developer",
                  description: "Internship at BusinessOnBot",
                },
                {
                  year: " 15/May/2023 - 16/Jun/2023",
                  title: "IT Intern",
                  description: "Internship at Delhi Metro Rail Corporation Pvt. Ltd",
                },
                
                {
                  year: " 10/Aug/2023 - 30/Sept/2023",
                  title: " Full Stack Web Developer",
                  description: "Internship at Bharat Intern",
                },

                {
                  year: "2023 - 2025",
                  title: "President of Technoverse Club",
                  description: "A Technical Society in UIT RGPV SHIVPURI",
                },
                {
                  year: "2025",
                  title: "Co-ordinator Codemanthan 2025",
                  description: "State Level Tech Fest",
                },
                
                {
                  year: "2021 - 2025",
                  title: "Member of Branding Team",
                  description: "UIT RGPV Shivpuri",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-400 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-400"></div>
                  <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl hover:shadow-blue-500/20">
                    <p className="text-gray-400">{exp.year}</p>
                    <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                    {exp.description && (
                      <p className="text-gray-300">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
