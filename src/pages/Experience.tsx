import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Sasken Technologies Ltd.",
    position: "Intern",
    location: "Bengaluru, Karnataka",
    duration: "May 2025 – Jul 2025",
    project: "Smart Traffic Light System Simulator",
    responsibilities: [
      "Designed and implemented a Smart Traffic Light Simulator in C++ with priority-based vehicle handling",
      "Integrated multithreading, priority queues, and sensor simulation to manage real-time traffic conditions",
      "Added conflict-checking logic for simultaneous green lights on non-intersecting lanes",
      "Developed modular C++ files and tested using Google Test framework",
      "Optimized performance through efficient algorithms and data structures"
    ],
    technologies: ["C++", "Multithreading", "Priority Queues", "Google Test", "System Design"],
    achievements: [
      "Successfully implemented complex traffic management logic",
      "Achieved 99% accuracy in conflict detection algorithms",
      "Delivered project ahead of schedule with comprehensive testing",
      "Received positive feedback for code quality and documentation"
    ]
  };

  const timeline = [
    {
      year: "2025",
      title: "Internship at Sasken Technologies",
      description: "Gained hands-on experience in systems programming and software testing",
      type: "work"
    },
    {
      year: "2024",
      title: "Advanced Project Development",
      description: "Built multiple full-stack applications with modern technologies",
      type: "project"
    },
    {
      year: "2023",
      title: "MERN Stack Mastery",
      description: "Developed proficiency in MongoDB, Express.js, React.js, and Node.js",
      type: "learning"
    },
    {
      year: "2022",
      title: "Started B.E. in Computer Science",
      description: "Began journey at RNS Institute of Technology",
      type: "education"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key milestones in my development career.
          </p>
        </div>

        {/* Main Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 animate-scale-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold gradient-text">{experience.position}</h2>
                <div className="flex items-center gap-2 text-lg font-semibold mt-1">
                  <Building2 className="h-5 w-5 text-primary" />
                  {experience.company}
                </div>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  {experience.location}
                </div>
              </div>
            </div>

            <div className="border-l-2 border-primary/20 pl-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">{experience.project}</h3>
              
              <div className="space-y-6">
                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Journey Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary/20" />
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-slide-in-${
                  index % 2 === 0 ? 'left' : 'right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'ml-auto pl-8'}`}>
                  <div className="glass-card p-6">
                    <div className="text-lg font-bold text-primary mb-1">{item.year}</div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;