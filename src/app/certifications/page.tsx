import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award, ShieldCheck, Cpu } from "lucide-react";
import { FlipCard } from "@/components/flip-card";

const certifications = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Oracle Cloud Infrastructure Foundation 2025",
    issuer: "Oracle",
    date: "July 2026",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Oracle Foundations Associate 2025",
    issuer: "Oracle",
    date: "July 2026",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Salesforce Platform Developer I",
    issuer: "Salesforce",
    date: "Mar 2026",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Salesforce Administrator",
    issuer: "Salesforce",
    date: "Feb 2026",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Microsoft Dynamic 365 Fundamentals",
    issuer: "Microsoft",
    date: "Dec 2026",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "Sep 2026",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "N/A",
  },
];

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4">
       <div className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">
          Certifications
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-serif">
          A showcase of my commitment to continuous learning and professional development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
           <FlipCard
              key={index}
              frontContent={
                <div className="flex flex-col items-center text-center p-4">
                    {cert.icon}
                    <CardTitle className="font-headline text-xl mt-4">{cert.title}</CardTitle>
                    <CardDescription className="font-serif mt-2">
                      {cert.issuer}
                    </CardDescription>
                     <CardDescription className="font-serif mt-2">
                      Expires: {cert.date}
                    </CardDescription>
                </div>
              }
              backContent={
                 <CardContent className="text-center">
                    <CardTitle className="font-headline text-xl mb-2">{cert.issuer}</CardTitle>
                  </CardContent>
              }
            />
        ))}
      </div>
    </div>
  );
}
