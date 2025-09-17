import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mpdarshan204@gmail.com",
      href: "mailto:mpdarshan204@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 63631 28894",
      href: "tel:+916363128894"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-500"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me through any of the following channels. 
                I typically respond within 24 hours.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.label}</div>
                      <div className="text-sm text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Response Time</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                I usually respond to emails and messages within 24 hours. 
                For urgent matters, feel free to call me directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-muted/20 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-muted/20 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-muted/20 border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={6}
                    className="bg-muted/20 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By sending this message, you agree that I may contact you back regarding your inquiry.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Looking for collaboration?</h3>
            <p className="text-muted-foreground">
              I'm always interested in hearing about new projects, especially those involving 
              full-stack development, innovative web applications, or exciting technical challenges. 
              Whether you have a project proposal, want to discuss technology, or just want to network, 
              don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;