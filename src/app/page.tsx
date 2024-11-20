import { Button } from "@/components/ui/button";
import { ContainerScroll } from "../components/global/container-scroll-animation";
import Navbar from "../components/global/navbar";
import { InfiniteMovingCards } from "../components/global/infinite-moving-cards";
import { clients, products } from "@/lib/constants";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from "@/components/global/lamp";
import { SubscriptionCard } from "@/components/global/3d-card";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen min-w-screen-sm md:w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
      <div className="absolute h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>

  <div className="relative flex flex-col items-center min-w-screen-sm md:w-full mt-[-80px] sm:mt-[-60px] md:mt-[-50px] lg:mt-[-40px]">
    <ContainerScroll
      titleComponent={
        <div className="flex flex-col items-center justify-center w-full">
          <Button
            size={'lg'}
            className="p-4 sm:p-6 md:p-8 mb-4 md:mb-6 lg:mb-8 w-full max-w-xs sm:max-w-md lg:max-w-lg border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all duration-500 flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
              Start For Free Today
            </span>
          </Button>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold text-center leading-tight">
            Automate Your Work With Fuzzie
          </h1>
        </div>
      }
    />
  </div>
</section>
      <InfiniteMovingCards
        items={clients}
        direction="right"
        speed="slow"
      />
    <section className="max-w-full">
      <HeroParallax products={products}></HeroParallax>
    </section>
    <section className="mt-[-500px] w-full">
      <LampComponent />
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row md:gap-8 -mt-72">
        <SubscriptionCard
          name="Hobby"
          price={0}
          about="Get a glimpse of what our software is capable of. Just a heads
                up you'll never leave us after this!"
          features={["3 Free automations", "100 tasks per month", "Two-step Actions"]}
        />
        <SubscriptionCard
          name="Pro Plan"
          price={29}
          about="Get a glimpse of what our software is capable of. Just a heads
                up you'll never leave us after this!"
          features={["3 Free automations", "100 tasks per month", "Two-step Actions"]}
        />
        <SubscriptionCard
          name="Unlimited"
          price={99}
          about="Get a glimpse of what our software is capable of. Just a heads
                up you'll never leave us after this!"
          features={["3 Free automations", "100 tasks per month", "Two-step Actions"]}
        />
      </div>
    </section>
    {/* <section className="bg-neutral-950 text-white py-8 mt-10">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="flex flex-col md:flex-row md:space-x-8">
      <a href="/about" className="hover:text-neutral-400">About Us</a>
      <a href="/contact" className="hover:text-neutral-400">Contact</a>
      <a href="/privacy" className="hover:text-neutral-400">Privacy Policy</a>
      <a href="/terms" className="hover:text-neutral-400">Terms of Service</a>
    </div>
    <div className="mt-4 md:mt-0">
      <span className="text-sm">© 2024 Fuzzie. All rights reserved.</span>
    </div>
  </div>
</section> */}

    </main>
  );
}
