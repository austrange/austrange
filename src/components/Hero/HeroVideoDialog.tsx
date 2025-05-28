import HeroVideoDialog from "../magicui/hero-video-dialog";

export function HeroVideoDialogComponent() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/uCmFiOVW0A8?si=8oONgKedfe0vTWJr"
        thumbnailSrc="/assets/images/thumbnail.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/uCmFiOVW0A8?si=8oONgKedfe0vTWJr"
        thumbnailSrc="/assets/images/thumbnail.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
