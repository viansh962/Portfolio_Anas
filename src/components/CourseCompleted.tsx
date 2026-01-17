const CourseCompleted = () => {
  return (
    <section
      id="course-completed"
      className="min-h-screen bg-gradient-to-br from-black-900 to-gray-800 text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-center mb-16 text-white-400">
          Course Completed
        </h1>

        <div className="space-y-12">

          {/* Section Title */}
          <h2 className="text-4xl font-bold flex items-center gap-3 mb-8 text-indigo-500">
            📜 Courses Completed
          </h2>

          {/* Course Cards */}
          <div className="space-y-6">
            {[
              {
                year: "2024",
                title: "Artificial Intelligence Builder Course",
                org: "MPSSDEGB & FITT, IIT Delhi",
                link: "https://drive.google.com/file/d/1dmnQbY2UTPSM6T-_uGN1yvS5YY3dfvFM/view",
              },
              {
                year: "2024",
                title: "Blockchain Builder Course",
                org: "MPSSDEGB & FITT, IIT Delhi",
                link: "https://drive.google.com/file/d/1drUEfGedw1WKMD0q66Cvliux5idtWjge/view",
              },
              {
                year: "2023",
                title: "Cyber Security Essentials",
                org: "Cisco Networking Academy",
                link: "https://drive.google.com/file/d/1DwHb2oaxEIkIoQ8NJU6rA1WM2xNBM1Yh/view",
              },
              {
                year: "2023",
                title: "Machine Learning with Python",
                org: "IBM Developer Skills Network",
                link: "https://courses.cognitiveclass.ai/certificates/3952f5afa75c4593acf95e7e12496da4",
              },
              {
                year: "2023",
                title: "Data Visualization with Python",
                org: "IBM Developer Skills Network",
                link: "https://courses.cognitiveclass.ai/certificates/a81d0892d55d487d9cb5b8dac7283f0d",
              },
              {
                year: "2022",
                title: "Python for Data Science",
                org: "IBM Developer Skills Network",
                link: "https://courses.cognitiveclass.ai/certificates/0bcb0e7712d646fd9c1f31a2e3956c81",
              },
              {
                year: "2022",
                title: "Build Your Own Chatbot",
                org: "IBM Developer Skills Network",
                link: "https://courses.cognitiveclass.ai/certificates/6a2cb3953cb04244bcc56b611ba0dbc0",
              },
              {
                year: "2022",
                title: "Blockchain Essentials",
                org: "IBM Developer Skills Network",
                link: "https://courses.cognitiveclass.ai/certificates/f05672c178c7447e8cb7526521f22804",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-blue-400 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-400"></div>

                <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl hover:shadow-blue-500/20">
                  <p className="text-gray-400">{course.year}</p>
                  <h3 className="text-xl font-semibold text-blue-400">
                    {course.title}
                  </h3>
                  <p className="text-gray-300">{course.org}</p>

                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-300 hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseCompleted;
