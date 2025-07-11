import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container mx-auto p-8">
        <img
          width="800"
          height="350"
          alt="What not store"
          title="What not store"
          decoding="async"
          fetchPriority="high"
          sizes="(max-width: 940px) 100vw, 940px"
          src="https://locktitestoragecenter.com/wp-content/uploads/2010/10/1.jpg"
          srcSet="https://locktitestoragecenter.com/wp-content/uploads/2010/10/1.jpg 940w, https://locktitestoragecenter.com/wp-content/uploads/2010/10/1-150x56.jpg 150w, https://locktitestoragecenter.com/wp-content/uploads/2010/10/1-300x112.jpg 300w"
          className="transition-opacity duration-400 ease-in w-full h-[350px] align-top border-0 bg-gray-100 text-gray-800 text-xs leading-[18px]"
        />
      </div>
    </section>
  );
}
