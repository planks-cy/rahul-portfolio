If you'd rather self-host your showreel instead of embedding YouTube,
drop an .mp4 here (e.g. reel.mp4) and swap the <iframe> in
src/components/sections/VideoReel.tsx for:

  <video className="h-full w-full" controls autoPlay>
    <source src="/videos/reel.mp4" type="video/mp4" />
  </video>
