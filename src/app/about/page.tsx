import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <Card className="overflow-hidden shadow-lg bg-card/60 backdrop-blur-sm mt-8 md:mt-12">
        <CardContent className="p-6 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative h-64 w-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/my_photo.webp"
                  alt="Partha Mondal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="font-headline text-3xl font-bold mb-4 text-primary text-center md:text-left">Partha Mondal</h2>
              <div className="space-y-6 text-lg text-foreground/80 font-serif">
                <p>
                Experienced Software Engineer with a strong foundation in Java, MuleSoft Anypoint Platform, and DevOps practices.
                </p>
                <p>
                Proven track record of contributing across all phases of the software development lifecycle, from design to deployment.
                </p>
                <p>
                Successfully automated deployment processes, significantly reducing deployment time and minimizing manual error rates.
                </p>
                <p>
                Collaborated with cross-functional teams to align development with business goals and ensure timely project delivery.
                </p>
                <p>
                Designed and developed large-scale, enterprise web applications, leveraging Jenkins, CI/CD pipelines, and modern development frameworks.
                </p>
                <p>
                Ensured high reliability and performance through strong unit testing, integration testing, and expert debugging skills.
                </p>
                <p>
                Orchestrated centralized server environments, implementing advanced load balancing, high availability, and enhanced security mechanisms.
                </p>
                <p>
                Integrated modern orchestration and API security controls to establish trusted, redundant, and secure client-server connections.
                </p>
                <p>
                Passionate about building efficient, scalable, and secure applications that solve complex business problems.
                </p>
                <p>
                Eager to contribute to forward-thinking teams and continue delivering robust solutions in challenging and evolving environments.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
