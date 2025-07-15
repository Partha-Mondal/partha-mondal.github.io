import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Associate",
    company: "Cognizant Technology Solution",
    location: "Kolkata, West Bengal, India",
    period: "December 2023 - Present",
    description: "Led the design and development of critical integration projects using MuleSoft Anypoint Platform. Mentored junior developers and introduced best practices for API development and CI/CD pipelines.",
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solution",
    location: "Bangalore, Karnataka, India",
    period: "December 2021 - November 2023",
    description: "Engineered robust database management systems using MySQL and MongoDB, optimizing data retrieval processes to decrease response times by 20% and improve overall application performance.",
  },
];

export default function WorkExperiencePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">
          Work Experience
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-serif">
          A timeline of my professional journey and key accomplishments.
        </p>
      </div>
      <div className="relative border-l-2 border-primary/20 ml-4 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[1.9rem] top-1.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{exp.role}</CardTitle>
                <CardDescription className="font-serif text-base">
                  {exp.company} {exp.location && `(${exp.location})`} &bull; {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-lg text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
