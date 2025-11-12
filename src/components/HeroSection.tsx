import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Full-Stack Developer', 'Software Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}cv/Aung Min Myat - CV.pdf`;
    link.download = 'Aung Min Myat - CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg-animation px-4"
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-fade-in flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl break-words leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent transition-opacity duration-500">
              {titles[currentTitle]}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed px-2" ">
            Got an idea? Hand it to me and I’ll build it into reality
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 text-xl px-10 py-4"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 text-xl px-10 py-4"
              onClick={handleDownloadCV}
            >
              <Download size={24} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
