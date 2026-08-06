Drop your project cover images here, e.g.:

  cover-01.jpg
  cover-02.jpg

Then update the `coverImage` field for each project in
src/data/projects.ts to point at the file you added, e.g.:

  coverImage: "/images/projects/cover-01.jpg"

And swap the placeholder gradient <div> in
src/components/ui/ProjectCard.tsx for a Next.js <Image> tag pointing
at project.coverImage.
