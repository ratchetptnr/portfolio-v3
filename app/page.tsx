"use client";

import { TopBar } from "@/components/top-bar";
import Image from "next/image";
import { Text, Button, Flex } from "@radix-ui/themes";
import { CardStack } from "@/components/card-stack";
import { FadeIn } from "@/components/fade-in";
import * as motion from "motion/react-client";

// Static rotations for images (either -3 or 3 degrees)
const heroRotation = 3;
const wompRotation = -3;
const bibleRotation = 3;
const flowerRotation = -3;

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <TopBar />
      <main
        className="flex items-center justify-center px-6 md:px-4"
        style={{
          backgroundImage: "repeating-linear-gradient(transparent, transparent 41px, var(--mauve-6) 41px, var(--mauve-6) 42px)",
          minHeight: "calc(100vh - 84px)",
          paddingTop: "84px"
        }}
      >
        <motion.div
          className="w-full max-w-80 sm:max-w-[448px]"
          initial={{ opacity: 0, y: 40, rotate: heroRotation }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            opacity: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            y: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            rotate: { duration: 0.15, ease: "easeOut" }
          }}
          style={{
            filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05)) drop-shadow(0 2px 1px rgba(0, 0, 0, 0.04)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.04))",
          }}
        >
          <Image
            src="/hero.png"
            alt="Hero"
            width={448}
            height={600}
            priority
            className="w-full h-auto"
          />
        </motion.div>
      </main>

      <section className="px-6 md:px-4 py-16 bg-white dark:bg-black">
        <FadeIn>
          <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
            <Text size="5" weight="medium" as="p">
              <span style={{ color: "var(--gray-12)" }}>I am a Product Designer.</span>
              <br />
              <span style={{ color: "var(--gray-10)" }}>But I also photograph things, video game occasionally, make coffee daily.</span>
            </Text>
            <Text size="5" weight="medium" as="p">
              <span style={{ color: "var(--gray-10)" }}>My design philosophy:</span>
              <br />
              <span style={{ color: "var(--gray-10)" }}>"Keep the </span><span style={{ color: "var(--gray-12)" }}>details less</span><span style={{ color: "var(--gray-10)" }}>, and make those </span><span style={{ color: "var(--gray-12)" }}>details perfect.</span><span style={{ color: "var(--gray-10)" }}>" - Jack Dorsey</span>
            </Text>
            <Text size="5" weight="medium" as="p">
              <span style={{ color: "var(--gray-12)" }}>Previously at Womp 3D.</span>
              <br />
              <span style={{ color: "var(--gray-10)" }}>Open to work.</span>
            </Text>
            <Button
              variant="solid"
              highContrast
              color="gray"
              radius="large"
              size="4"
              style={{ width: "fit-content" }}
              asChild
            >
              <a href="mailto:ratchet.ptnr@gmail.com">Contact</a>
            </Button>
          </Flex>
        </FadeIn>
      </section>

      <section className="px-6 md:px-4 py-16 bg-white dark:bg-black">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="flex flex-col items-center relative">
                <motion.div
                  className="flex justify-center relative z-0"
                  initial={{ rotate: wompRotation }}
                  whileInView={{ rotate: wompRotation }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <Image
                    src="/womp3d.png"
                    alt="Womp"
                    width={288}
                    height={400}
                    className="w-full max-w-72 h-auto"
                  />
                </motion.div>
                <Image
                  src="/womp-text.png"
                  alt="Womp 3D"
                  width={180}
                  height={60}
                  className="h-auto -mt-8 relative z-10 scale-150"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Flex direction="column" gap="6" className="w-full max-w-xl">
                <Text size="5" weight="medium" as="p">
                  <span style={{ color: "var(--gray-12)" }}>Imagine Canva but for 3D.</span>
                </Text>
                <Text size="5" weight="medium" as="p">
                  <span style={{ color: "var(--gray-10)" }}>Users who have trouble with Adobe Suite use Canva.</span>
                </Text>
                <Text size="5" weight="medium" as="p">
                  <span style={{ color: "var(--gray-10)" }}>What about people who don't want to learn complex 3D tools. </span><span style={{ color: "var(--gray-12)" }}>That's where Womp comes in.</span>
                </Text>
                <Button
                  variant="outline"
                  highContrast
                  color="gray"
                  radius="large"
                  size="4"
                  style={{ width: "fit-content" }}
                  asChild
                >
                  <a href="https://womp.com" target="_blank" rel="noopener noreferrer">Visit Womp 3D</a>
                </Button>
              </Flex>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-4 py-16 bg-white dark:bg-black">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="flex flex-col items-center relative">
                <motion.div
                  className="flex justify-center relative z-0"
                  initial={{ rotate: bibleRotation }}
                  whileInView={{ rotate: bibleRotation }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <Image
                    src="/bible.png"
                    alt="Bible"
                    width={288}
                    height={400}
                    className="w-full max-w-72 h-auto"
                  />
                </motion.div>
                <Image
                  src="/bible-text.png"
                  alt="Simple Telugu Bible"
                  width={200}
                  height={65}
                  className="h-auto -mt-12 relative z-10"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Flex direction="column" gap="6" className="w-full max-w-xl">
                <Text size="5" weight="medium" as="p">
                  <span style={{ color: "var(--gray-12)" }}>The app I am building for my grandma.</span>
                </Text>
                <Text size="5" weight="medium" as="p">
                  <span style={{ color: "var(--gray-10)" }}>She struggles with printed bibles, the text is too small and apps are too complicated for her.</span>
                </Text>

                <Button
                  variant="outline"
                  highContrast
                  color="gray"
                  radius="large"
                  size="4"
                  style={{ width: "fit-content" }}
                  asChild
                >
                  <a href="https://ratchetptnr.github.io/simple-telugu-bible/changelog.html" target="_blank" rel="noopener noreferrer">View changelog</a>
                </Button>
              </Flex>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-4 py-16 bg-white dark:bg-black">
        <FadeIn>
          <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
            <Text size="5" weight="medium" as="p">
              <span style={{ color: "var(--gray-12)" }}>I loooove designing and building things that people want to use.</span>
            </Text>
            <Text size="5" weight="medium" as="p">
              <span style={{ color: "var(--gray-10)" }}>I help startups scale by</span>
              <br />
              <span style={{ color: "var(--gray-12)" }}>keeping the details less and making those details perfect.</span>
            </Text>
            <Text size="5" weight="medium" as="p">
              <span style={{ color: "var(--gray-12)" }}>If the vibe matches, and you have a startup to scale. Hit me up.</span>
              <br />
              <span style={{ color: "var(--gray-10)" }}>Even if we don't work together, let's connect. I value connections.</span>
            </Text>
            <Flex direction="row" gap="4" className="mx-auto w-full max-w-xl flex-wrap">
            <Button
              variant="solid"
              highContrast
              color="gray"
              radius="large"
              size="4"
              style={{ width: "fit-content" }}
              asChild
            >
              <a href="mailto:ratchet.ptnr@gmail.com">Contact</a>
            </Button>
            <Button
              variant="outline"
              color="gray"
              radius="large"
              size="4"
              style={{ width: "fit-content" }}
              asChild
            >
              <a href="https://www.instagram.com/ratchetpotnuru/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </Button>
            <Button
              variant="outline"
              color="gray"
              radius="large"
              size="4"
              style={{ width: "fit-content" }}
              asChild
            >
              <a href="https://x.com/ratchet__tweets" target="_blank" rel="noopener noreferrer">Twitter X</a>
            </Button>
            </Flex>

          </Flex>
        </FadeIn>
      </section>

      <section className="flex flex-col items-center justify-center pt-16 pb-0 bg-white dark:bg-black gap-20 overflow-hidden max-h-[920px]">
        <FadeIn>
          <motion.div
            initial={{ rotate: flowerRotation }}
            whileInView={{ rotate: flowerRotation }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Image
              src="/flower.png"
              alt="Flower"
              width={256}
              height={256}
              className="w-64 h-auto"
            />
          </motion.div>
        </FadeIn>
        <div className="mt-20">
          <CardStack />
        </div>
      </section>

    </div>
  );
}
