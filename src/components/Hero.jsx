import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="mb-3 sm:mb-4">
              <span className="inline-block px-4 py-2 glass-card text-primary text-sm sm:text-base font-medium rounded-full">
                👋 Hello, I'm
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block mb-2">Vijay</span>
              <span className="gradient-text block">Full Stack Web Developer</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/70 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Crafting exceptional digital experiences with modern technologies. 
              Specializing in React, JavaScript, and responsive web design. 
              Let's build something amazing together.
            </p>
            
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap mb-6 sm:mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base px-6 sm:px-8"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-foreground hover:bg-primary/10 text-sm sm:text-base px-6 sm:px-8"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#" className="glass-card p-3 hover:bg-primary/10 transition-colors group">
                <Github className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="glass-card p-3 hover:bg-primary/10 transition-colors group">
                <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="glass-card p-3 hover:bg-primary/10 transition-colors group">
                <Mail className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 border-t-4 border-l-4 border-primary/50 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 border-b-4 border-r-4 border-primary/50 rounded-br-3xl" />
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-2xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 glass-card shadow-2xl">
                {/* Replace the placeholder below with your image */}
                {/* To add your photo:
                   1. Place your image file in the 'public' folder (e.g., 'public/your-photo.jpg')
                   2. Replace the div below with: <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
                   3. Or use an external URL: <img src="https://example.com/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
                */}
                <img src="/vijay.webp" alt="Vijay" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 sm:px-6 py-2 sm:py-3 border border-primary/30 animate-float">
                <p className="text-xs sm:text-sm font-semibold gradient-text whitespace-nowrap">Available for Work</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
