import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";

const Page = ({ blok }: any) => {
  return (
    <main className="px-6" {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}

export default Page;