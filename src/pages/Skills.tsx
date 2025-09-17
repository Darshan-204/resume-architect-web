import { Code, Database, Globe, Wrench, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "Java", level: 75 },
        { name: "Python", level: 70 },
        { name: "HTML/CSS", level: 95 },
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "WebSocket", level: 75 },
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Database Design", level: 75 },
        { name: "Query Optimization", level: 70 },
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Google Test", level: 75 },
        { name: "C++ STL", level: 80 },
        { name: "bcrypt", level: 80 },
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Concepts & Domains",
      icon: Brain,
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 85 },
        { name: "System Design", level: 75 },
        { name: "Machine Learning", level: 70 },
        { name: "Software Engineering", level: 80 },
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Self-learning", level: 95 },
        { name: "Adaptability", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Teamwork", level: 85 },
      ],
      color: "from-pink-500 to-pink-600"
    }
  ];

  const certifications = [
    "Data Structures and Algorithms",
    "Full Stack Web Development",
    "Database Management Systems",
    "Software Engineering Principles",
    "Operating Systems"
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-6 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Interest */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Areas of Interest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Web Development", "Machine Learning", "Software Engineering", "Database Systems"].map((area, index) => (
              <div
                key={area}
                className="glass-card p-6 text-center animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-lg font-semibold gradient-text">{area}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Relevant Coursework</h2>
          <div className="glass-card p-8 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((course, index) => (
                <div
                  key={course}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6">
              I believe in staying updated with the latest technologies and continuously 
              improving my skills. Currently focusing on advanced React patterns, 
              system design, and machine learning applications.
            </p>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Next on my learning path:</span>
              {" "}TypeScript, Docker, AWS, Advanced Algorithms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;