import Image from "next/image";

interface ContentBlockProps {
  title: string;
  subtitle?: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  badge?: {
    label: string;
    value: string;
  };
}

export function ContentBlock({ 
  title, 
  subtitle,
  content, 
  imageSrc, 
  imageAlt, 
  imagePosition,
  badge 
}: ContentBlockProps) {
  const imageElement = (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="object-cover" 
        />
      </div>
      {badge && (
        <div className="absolute bottom-6 left-6 bg-white shadow-xl p-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
            {badge.label}
          </p>
          <p className="text-3xl font-black text-neutral-900">{badge.value}</p>
        </div>
      )}
    </div>
  );

  const textElement = (
    <div className="flex flex-col justify-center">
      {subtitle && (
        <span className="label mb-6">
          <span className="w-12 h-px bg-neutral-900 mr-4" />
          {subtitle}
        </span>
      )}
      <h2 className="mb-6">{title}</h2>
      <div 
        className="prose prose-lg text-neutral-600 max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {imagePosition === "left" ? (
            <>
              {imageElement}
              {textElement}
            </>
          ) : (
            <>
              {textElement}
              {imageElement}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
