type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8 md:mb-12 text-center">
      <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-serif">
          {description}
        </p>
      )}
    </div>
  );
}
