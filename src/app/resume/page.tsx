import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";

// The resume PDF should be placed in the `public` folder.
const resumeUrl = "/ParthaMondal_Resume.pdf";
const resumeImageUrl = "/resume_preview.webp";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">
          My Resume
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-serif">
         Here is my professional resume. You can view it directly on this page or download it for your convenience.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <a href={resumeUrl} download="ParthaMondal_Resume.pdf">
          <Button size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </a>
      </div>

      <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-2xl bg-card/60 backdrop-blur-sm">
        <CardContent className="p-1 md:p-4">
            <Image
                src={resumeImageUrl}
                alt="Resume Preview"
                width={850}
                height={1100}
                className="w-full h-auto rounded-md"
            />
        </CardContent>
      </Card>
    </div>
  );
}
