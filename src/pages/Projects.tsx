import { ExternalLink, Github, ShoppingCart, MessageCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "EcoShop",
      description: "A comprehensive e-commerce platform with secure authentication, product management, and intuitive shopping experience.",
      icon: ShoppingCart,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "bcrypt"],
      features: [
        "Secure login-based product purchase and selling",
        "Password encryption with bcrypt",
        "Responsive design with Tailwind CSS",
        "Real-time inventory management"
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "ChatBuddy",
      description: "Real-time messaging and video interaction application with modern UI and seamless communication features.",
      icon: MessageCircle,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket", "Tailwind CSS"],
      features: [
        "Real-time messaging with WebSocket",
        "Video interaction capabilities",
        "Image and file sharing",
        "Clean and user-friendly interface"
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Krishi-Sethu",
      description: "Data-driven crop recommendation system helping farmers make informed decisions based on market demand and environmental factors.",
      icon: Leaf,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Machine Learning"],
      features: [
        "AI-powered crop recommendations",
        "Live crop price updates",
        "Government scheme alerts",
        "Environmental factor analysis"
      ],
      githubUrl: "#",
      liveUrl: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-8 items-center animate-slide-in-${
                index % 2 === 0 ? 'left' : 'right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Info */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="glass-card p-8">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} mb-4`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button variant="hero" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Project Visual */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative group">
                  <div className={`glass-card p-8 bg-gradient-to-br ${project.color} bg-opacity-10`}>
                    <div className="aspect-video rounded-lg bg-muted/20 flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button variant="hero" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;