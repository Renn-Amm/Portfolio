import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aungminmyat2212@gmail.com",
      link: "mailto:aungminmyat2212@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+34 697751313",
      link: "tel:+34697751313",
    },
  ];

  const socialLinks = [
    { icon: Github, title: "GitHub", value: "View My Code", link: "https://github.com/Renn-Amm" },
    { icon: Linkedin, title: "LinkedIn", value: "Connect With Me", link: "https://www.linkedin.com/in/aung-min-myat/" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aungminmyat2212@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Message: ${formData.subject}`,
          _captcha: "true", 
          _honeypot: "bot-field", 
          _next: "https://renn-amm.github.io/Portfolio.github.io/thank-you", 
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary contact-bg-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to collaboration or new opportunities — drop me a line anytime.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gradient-card rounded-xl hover:shadow-card transition-all duration-300 hover:scale-[1.02] group border border-primary/10"
                >
                  <info.icon size={22} className="text-primary" />
                  <div>
                    <h5 className="font-semibold text-foreground">{info.title}</h5>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-3 p-4 bg-gradient-card rounded-xl hover:shadow-card transition-all duration-300 hover:scale-[1.02] group border border-primary/10"
                  >
                    <social.icon size={20} className="text-primary" />
                    <div className="flex-1">
                      <h5 className="font-medium text-sm">{social.title}</h5>
                      <p className="text-muted-foreground text-xs">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
                <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} required />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Send size={20} className="mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
