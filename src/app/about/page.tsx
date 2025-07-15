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
                  Highly motivated and results-oriented Software Engineer with four years of hands-on experience in designing, developing, and deploying robust integration solutions using the MuleSoft Anypoint Platform. Proficient in Java and skilled in implementing DevOps practices to streamline software development and delivery.Proven ability to contribute to all phases of the software development lifecycle, from requirements gathering to production support. Seeking to leverage my diverse skill set to build and maintain efficient and scalable enterprise-level applications.
                </p>
                <p>
                  I led initiatives to automate deployment processes, resulting in a 30% reduction in deployment
time and a significant decrease in error rates. This experience has equipped me with strong
problem-solving skills and the ability to collaborate effectively with cross-functional teams to achieve
project goals. Solid Frontend Developer, experienced using Jenkins, CI/CD pipelines and delivering
multiple large releases for web applications. Experienced working with designers and back-end developers
to convert design mockups into complete, customised websites Excellent test and debug skills to deliver
highly reliable, performant code. Up to date with modern frontend development trends and practice.
Achieved the next level of orchestrating our centralized server environment with more advanced practical
load balancing and security enhancements. This decrease translated into a 45% improvement in
system uptime and better behaved operation under different loading conditions. Integrated more
modern orchestration along with the security controls which made it so that only trusted clients can
connect to the appropriate resources and ensure a certain level of redundancy.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
