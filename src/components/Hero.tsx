import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Full-Stack Developer",
    "MERN Stack Enthusiast", 
    "Problem Solver",
    "Tech Innovator"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      
      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Darshan M P</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
            I'm a{" "}
            <span className="text-primary font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-in-left">
            Computer Science Engineering student passionate about building innovative 
            full-stack applications with modern technologies. Currently pursuing 
            B.E. at RNS Institute of Technology with a CGPA of 9.18/10.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-right">
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/projects">
                View My Work
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-scale-in">
            <Button variant="ghost" size="lg" className="hover:text-primary hover:scale-110 transition-all">
              <a href="https://github.com/Darshan-204" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="hover:text-primary hover:scale-110 transition-all">
              <a href="https://www.linkedin.com/in/darshan-mp" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="hover:text-primary hover:scale-110 transition-all">
              <a href="mailto:mpdarshan204@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;