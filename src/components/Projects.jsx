import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Academy Project Of Technologies",
      description: "This project is a static website for Cloud Synapse Technologies, an IT training institute offering courses in AWS, DevOps, Full Stack Development, Data Science, Testing, UI/UX, and AR/VR Gaming Development.",
      tech: ["Html5", "Css3", "Bootstrap", "Javascript", "Responsive Design"],
      gradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/10",
      image: "/cloud.webp"
    },
    {
      title: "E-Commerce Platform",
      description: "RealtyHub is a modern real estate marketplace platform for buying, renting, and selling properties like houses, apartments, villas, and land.",
      tech: ["React", "Typescript", "Tailwind CSS", "Node js", "Express", "MongoDB"],
      gradient: "from-purple-500/30 via-pink-500/20 to-purple-500/10",
      image: "/ecommerce.webp"
    },
    {
      title: "Dress Website",
      description: "This project is a React-based e-commerce boutique application blueprint, featuring a modern UI for showcasing fashion products.",
      tech: ["React", "Typescript", "Tailwind CSS", "shadcn-ui", "Responsive Design"],
      gradient: "from-orange-500/30 via-yellow-500/20 to-orange-500/10",
      image: "/dresspic.webp"
    },
    // {
    //   title: "Social Media App",
    //   description: "Modern social platform with posts, stories, real-time messaging, and media sharing with responsive design.",
    //   tech: ["React", "GraphQL", "PostgreSQL"],
    //   gradient: "from-green-500/30 via-emerald-500/20 to-green-500/10",
    //   emoji: "📱"
    // },
    // {
    //   title: "Portfolio CMS",
    //   description: "Content management system for creative professionals to showcase work, manage clients, and handle project inquiries.",
    //   tech: ["React", "Headless CMS", "Next.js"],
    //   gradient: "from-red-500/30 via-rose-500/20 to-red-500/10",
    //   emoji: "🎨"
    // },
    // {
    //   title: "Fitness Tracker",
    //   description: "Comprehensive fitness application with workout plans, progress tracking, nutrition logging, and social features.",
    //   tech: ["React", "Express", "MySQL"],
    //   gradient: "from-indigo-500/30 via-blue-500/20 to-indigo-500/10",
    //   emoji: "💪"
    // },
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
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto">
              A showcase of my recent work and successful collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Gradient */}
                <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-white/5" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-3 z-20">
                    {index === 0 ? (
                      <>
                        <a
                          href="https://vijay071128.github.io/Academy-website/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-primary/50 hover:bg-primary/20"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href="https://github.com/vijay071128/Academy-website"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-primary/50 hover:bg-primary/20"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </>
                    ) : index === 1 ? (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/50 hover:bg-primary/20"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <a
                          href="https://github.com/vijay071128/OLXmini"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-primary/50 hover:bg-primary/20"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/50 hover:bg-primary/20"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <a
                          href="https://github.com/vijay071128/Dress-Web"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-primary/50 hover:bg-primary/20"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10 sm:mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-sm sm:text-base px-6 sm:px-8"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
