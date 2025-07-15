
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Component, Server, Cloud } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="h-6 w-6" />, href: 'https://github.com/Partha-Mondal' },
  { icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/in/partha-m-271572132/' },
];

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Full Stack Development',
    description: 'Building responsive and scalable full-stack web applications using modern technologies.',
  },
  {
    icon: <Component className="h-10 w-10 text-primary" />,
    title: 'DevOps Engineer',
    description: 'Implementing CI/CD pipelines, automating infrastructure, and ensuring application reliability.',
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: 'Mulesoft Developer',
    description: 'Designing and deploying robust integration solutions using the MuleSoft Anypoint Platform.',
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: 'Salesforce Developer',
    description: 'Developing custom applications and integrations on the Salesforce platform.',
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center pt-12 md:pt-0 md:min-h-[calc(100vh-10rem)] text-center md:text-left">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-primary leading-tight">
            Hi, I'm Partha Mondal
          </h1>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground font-serif">
            Highly motivated, performance-focused software engineer with four years of hands-on experience designing, developing, and implementing scalable integration solutions using the MuleSoft Anypoint platform. Java expert and proficient in executing DevOps practices to speed up software development and delivery. With proven proficiency in executing work at all stages of the software development life cycle, from requirements gathering to production support. I seek to utilize my multifaceted skill set to design and develop efficient and scalable business applications.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/about">
                More About Me <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <div className="flex items-center justify-center md:justify-start gap-2">
              {socialLinks.map((link, index) => (
                <Button key={index} asChild variant="outline" size="icon">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
             <Image
                src="/my_photo.webp"
                alt="Partha Mondal"
                fill
                className="object-cover rounded-full shadow-2xl"
                
              />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section>
        <div className="text-center mb-12">
           <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">What I Do</h2>
           <p className="mt-2 text-lg text-muted-foreground font-serif">I build high-quality applications and websites.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/60 backdrop-blur-sm">
              <CardHeader className="flex items-center justify-center">
                {service.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                <p className="font-serif text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
