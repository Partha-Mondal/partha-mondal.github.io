import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const publications = [
  {
    title: "Study of Automatic Solar Power based Micro-irrigation System",
    journal: "Springer",
    date: "August 2021",
    description: "This improve farmers' agricultural production methodology, so that maximum yield is achieved without much difficulty.",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-9154-6_64",
  },
  {
    title: "Application of a Hesitant Fuzzy Programming Technique",
    journal: "Springer",
    date: "March 2019",
    description: "An in-depth look at creating intuitive and engaging user interfaces with modern design principles.",
    link: "#",
  },
];

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">
          Publications
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-serif">
          My thoughts and research on technology, design, and development, shared with the community.
        </p>
      </div>
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{pub.title}</CardTitle>
              <CardDescription className="font-serif">{pub.journal} &bull; {pub.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-lg text-muted-foreground">{pub.description}</p>
            </CardContent>
            {index === 0 && (
              <CardFooter>
                <Button asChild variant="link" className="text-primary hover:text-accent-foreground p-0">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    Read Publication <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
