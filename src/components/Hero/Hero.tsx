"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { AuroraText } from "../magicui/aurora-text";
import { Particles } from "../magicui/particles";
import { ShimmerButton } from "../magicui/shimmer-button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { LineShadowText } from "../magicui/line-shadow-text";
import Link from "next/link";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="heroSection">
      <div className="z-10 flex flex-col min-h-screen items-center md:py-32 py-48">
        <Link href={"https://www.e-sight.tech/"} target="_blank">
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 my-6 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Introducing e-Sight
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>
        </Link>
        <div className="justify-center text-center text-sm font-medium text-neutral-500 dark:text-neutral-400">
          <h1 className="md:text-6xl text-4xl text-secondary-foreground font-bold ease-in-out duration-300">
            Empowering <AuroraText>Lives</AuroraText> <br /> Through{" "}
            <LineShadowText className="italic" shadowColor={color}>
              Intelligent
            </LineShadowText>
            Solutions
          </h1>

          <p className="md:text-2xl text-md my-6 w-3/4 mx-auto text-neutral-500 dark:text-neutral-400">
            Austrange Solutions Private Limited is an innovation-driven company
            focused on creating socially impactful technologies.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href={"https://www.e-sight.tech/"} target="_blank">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Support e-Sight
                </span>
              </ShimmerButton>
            </Link>
            <Link href="#about">
              <InteractiveHoverButton className="font-medium leading-none tracking-tight text-secondary-foreground dark:to-slate-900/10 lg:text-lg">
                Learn More
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </div>
  );
}
