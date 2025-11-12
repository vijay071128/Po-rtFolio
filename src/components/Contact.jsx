import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz8t3A1sXlmDZYrj08crD8Ui47UiI39d74k63rSibIbsEaEKUEKIcEAILlYPLJDm6Hmqw/exec';
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        formRef.current.reset();
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-5xl w-full mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 lg:p-12 max-w-3xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" name="submit-to-google-sheet">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Full Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Email Address</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">Subject</label>
                <input
                  type="text"
                  name="Subject"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">Message</label>
                <textarea
                  name="Message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm sm:text-base"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base h-12 sm:h-14"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <div id="msg" className="mt-2 text-center">
                {successMessage && (
                  <p className={`text-sm ${successMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {successMessage}
                  </p>
                )}
              </div>
            </form>

            {/* Contact Info & Social Links */}
            <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-primary/20">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a href="mailto:your@email.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    frontendvijay@email.com
                  </a>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <a href="tel:+1234567890" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    +91 7904613690
                  </a>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/vijay071128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 sm:p-4 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <span className="text-foreground/70 group-hover:text-primary transition-colors text-sm sm:text-base">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vijay-bca2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 sm:p-4 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <span className="text-foreground/70 group-hover:text-primary transition-colors text-sm sm:text-base">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="glass-card p-3 sm:p-4 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <span className="text-foreground/70 group-hover:text-primary transition-colors text-sm sm:text-base">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-sm text-foreground/50">
            <p>© 2024 Your Name. Built with passion and modern web technologies.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
