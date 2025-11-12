import { useEffect, useRef, useState } from "react";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following industry best practices"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time, every time"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong team player with Good communication skills"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Main Content */}
            <div className="glass-card p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">full-stack web developer</span> with 
                expertise in building modern, scalable web applications. With a strong foundation in both frontend 
                and backend technologies, I create seamless digital experiences that users love.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                My journey in web development has equipped me with the skills to transform ideas into reality. 
                I specialize in <span className="text-primary font-semibold">React, JavaScript, Node.js</span>, 
                and modern web technologies. I believe in writing clean, maintainable code and staying up-to-date 
                with the latest industry trends.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                Beyond coding, I'm committed to continuous learning and contributing to the developer community. 
                I enjoy tackling complex problems and delivering solutions that make a real impact.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">64%</div>
                  <div className="text-xs sm:text-sm text-foreground/60">Annai Violet School</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">71%</div>
                  <div className="text-xs sm:text-sm text-foreground/60">Prince College - BCA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">6+</div>
                  <div className="text-xs sm:text-sm text-foreground/60">Cloud Synapse Tech - Months Exp</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4 sm:space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-5 sm:p-6 transition-all duration-500 hover:scale-105 hover:bg-primary/5"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
