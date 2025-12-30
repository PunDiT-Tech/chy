import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['chyworld@gmail.com', 'chyworld@gmail.com'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+2347031616104', '+2347031616104'],
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 BELLO PLAZA KADUNA'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM - 8PM', 'Sat-Sun: 10AM - 6PM'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Chyworld</title>
        <meta
          name="description"
          content="Get in touch with Chyworld. We're here to help with any questions about our laptops, orders, or support inquiries."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container-main">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/80">
                Have a question or need help? We're here for you. Reach out and our
                team will get back to you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-12 relative z-10">
          <div className="container-main">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-secondary h-[400px] lg:h-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-foreground font-semibold">Our Location</p>
                    <p className="text-muted-foreground">
                      123 Tech Street, Silicon Valley
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container-main text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Check out our frequently asked questions for instant answers to common
              inquiries.
            </p>
            <Button variant="outline" size="lg">
              View FAQ
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
