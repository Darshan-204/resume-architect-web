import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center animate-fade-in">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold gradient-text opacity-20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card p-8 rounded-2xl">
                <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
                <p className="text-muted-foreground">
                  The page you're looking for doesn't exist.
                </p>
              </div>
            </div>
          </div>

          {/* Error Details */}
          <div className="glass-card p-6 mb-8 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Requested path:</span>{" "}
              <code className="bg-muted/50 px-2 py-1 rounded text-xs">
                {location.pathname}
              </code>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Looking for something specific?</p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <Link to="/experience" className="hover:text-primary transition-colors">Experience</Link>
              <Link to="/skills" className="hover:text-primary transition-colors">Skills</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
