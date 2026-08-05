type PagePlaceholderProps = {
  title: string;
  description: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-3 py-4">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance">
        {title}
      </h1>
      <p className="text-muted-foreground text-base leading-relaxed text-pretty">
        {description}
      </p>
    </section>
  );
}
