import { getPosts } from "@/app/utils/utils";
import { Flex } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { Carousel } from "@/once-ui/components/Carousel";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { work } = renderContent(t);

  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/work/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Work({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  let allProjects = getPosts([
    "src",
    "app",
    "[locale]",
    "work",
    "projects",
    locale,
  ]);

  const t = useTranslations();
  const { person, work } = renderContent(t);

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Flex justifyContent="center">
        <h1>Digital Photography</h1>
      </Flex>
      <Flex marginBottom="xl" marginTop="s">
        <Carousel
          aspectRatio="16 / 9"
          indicator="thumbnail"
          images={[
            {
              alt: "Sample image 1",
              src: "/images/gallery/digital/16-x-20-jpg_orig.jpg",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/digital/archetypal-copy-1200x1500.jpg",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/digital/cropped-polarized-thought-1-1-scaled-1.jpg",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/digital/dogma.png",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/digital/eggplant-onejpg.jpg",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/digital/ephemeral.png",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/digital/irritated.png",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/digital/lemon-one-jpg.jpg",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/digital/Lettuce-3-19-14-1200x797.jpg",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/digital/Lettuce-Lake-2-1200x797.jpg",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/digital/Lettuce-Lake-Series-3-1200x797.jpg",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/digital/many-times1.jpg",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/digital/notion-of-being-web-site-copy.jpg",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/digital/rethink.png",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/digital/rigid.jpg",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/digital/rope.jpg",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/digital/stage-upon22-1622X2022-Color-Photography-2014_0.jpg",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/digital/triad-JPG1-1200x797.jpg",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/digital/unhappy-heart-.png",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/digital/you-think-copy-web.jpg",
            },
          ]}
        />
      </Flex>
      <Flex justifyContent="center">
        <h1>Film Photography</h1>
      </Flex>
      <Flex marginTop="s">
        <Carousel
          aspectRatio="16 / 9"
          indicator="thumbnail"
          images={[
            {
              alt: "Sample image 1",
              src: "/images/gallery/film/3-panel-work-1-1-1200x720.jpg",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/film/arlington.png",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/film/Blackness-has-Softened-01.jpg",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/film/charley.png",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/film/clouds.jpg",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/film/Eleanor.jpg",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/film/mixed_msg.png",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/film/Mothers-Fear.jpg",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/film/my_dog_your_dog.png",
            },
            {
              alt: "Sample image 1",
              src: "/images/gallery/film/No-Thank-You-I-Am-Not-Hungrey.jpg",
            },
            {
              alt: "Sample image 2",
              src: "/images/gallery/film/rice-tea.png",
            },
            {
              alt: "Sample image 3",
              src: "/images/gallery/film/Shelf-Series.jpg",
            },
          ]}
        />
      </Flex>
      {/* <Projects locale={locale} /> */}
    </Flex>
  );
}
