import { GraduationCap, Code, Brain, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "9.18/10" },
    { icon: Code, label: "Projects", value: "3+" },
    { icon: Brain, label: "Technologies", value: "15+" },
    { icon: Trophy, label: "Experience", value: "Intern" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Computer Science Engineering student at RNS Institute of Technology,
                currently maintaining a CGPA of 9.18/10. My journey in tech began with curiosity
                about how things work behind the scenes.
              </p>
              <p>
                With expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), I focus
                on building full-stack applications that solve real-world problems. My experience
                ranges from e-commerce platforms to real-time chat applications.
              </p>
              <p>
                I recently completed an internship at Sasken Technologies Ltd., where I developed
                a Smart Traffic Light System Simulator using C++ with advanced features like
                multithreading and priority-based vehicle handling.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source
                projects, and sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>

          {/* Skills Highlights */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">What I Do</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Building complete web applications using modern technologies like React, Node.js,
                    and MongoDB with focus on user experience and performance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Strong foundation in data structures and algorithms, with experience in
                    optimizing solutions for complex technical challenges.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">System Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Experience in designing scalable systems, from traffic management simulators
                    to e-commerce platforms with real-time features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Always staying updated with the latest technologies and best practices in
                    software development and engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;