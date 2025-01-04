import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Patricia ",
  lastName: "Yontz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Photographer",
  avatar: "/images/avatar.png",
  location: "United States", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about photography, art, and share thoughts on the
      intersection of creativity and life.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:patty@patriciayontz.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Photographer and Artist</>,
  subline: (
    <>
      I'am Patricia Yontz, a photographer and artist I invite the viewer to
      search beneath the mundane surfaces of things for something that is felt
      but remains elusive.
      <br /> I’m excited daily by the labor and the amount of decision making
      that goes into creating these photographs
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I have come to believe that the art of making photographs has as much to
        do with problem solving as with aesthetics.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Art Statement",
    experiences: [
      {
        achievements: [
          <>
            My recent work has to do with feelings of loss. However, this
            emotion is only hinted at in pictures which never reveal the full
            story. The viewer is invited to search beneath the mundane surfaces
            of things for something that is felt but remains elusive. I’m
            excited daily by the labor and the amount of decision making that
            goes into creating these photographs.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        achievements: [
          //   <>
          //     Developed a design system that unified the brand across multiple
          //     platforms, improving design consistency by 40%.
          //   </>,
          //   <>
          //     Led a cross-functional team to launch a new product line,
          //     contributing to a 15% increase in overall company revenue.
          //   </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of South Florida",
        description: <>Bachelor of Arts degree</>,
      },
      {
        name: "Florida State University",
        description: <>Master of Fine Arts degree</>,
      },
    ],
  },
  technical: {
    // display: true, // set to false to hide this section
    // title: "Technical skills",
    skills: [
      {
        // title: "Figma",
        // description: (
        //   <>Able to prototype in Figma with Once UI with unnatural speed.</>
        // ),
        // optional: leave the array empty if you don't want to display images
        images: [
          //   {
          //     src: "/images/projects/project-01/cover-02.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
          //   {
          //     src: "/images/projects/project-01/cover-03.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        title: "Next.js",
        // description: (
        //   <>Building next gen apps with Next.js + Once UI + Supabase.</>
        // ),
        // optional: leave the array empty if you don't want to display images
        images: [
          //   {
          //     src: "/images/projects/project-01/cover-04.jpg",
          //     alt: "Project image",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/film/3-panel-work-1-1-1200x720.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/film/arlington.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/film/Blackness-has-Softened-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/film/charley.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/film/clouds.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/film/Eleanor.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/film/mixed_msg.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/film/Mothers-Fear.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/film/my_dog_your_dog.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/film/No-Thank-You-I-Am-Not-Hungrey.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/film/rice-tea.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/film/Shelf-Series.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};
const digital = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/digital/16-x-20-jpg_orig.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/digital/archetypal-copy-1200x1500.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/digital/cropped-polarized-thought-1-1-scaled-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/digital/dogma.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/eggplant-onejpg.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/ephemeral.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/digital/irritated.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/lemon-one-jpg.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/digital/Lettuce-3-19-14-1200x797.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/Lettuce-Lake-2-1200x797.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/Lettuce-Lake-Series-3-1200x797.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/many-times1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/notion-of-being-web-site-copy.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/rethink.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/digital/rope.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/stage-upon22-1622X2022-Color-Photography-2014_0.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/triad-JPG1-1200x797.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/digital/unhappy-heart-.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/digital/you-think-copy-web.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  digital,
};
