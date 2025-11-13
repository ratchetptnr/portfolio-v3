"use client";

import { TopBar } from "@/components/top-bar";
import Image from "next/image";
import { Text, Button, Flex } from "@radix-ui/themes";
import { FadeIn } from "@/components/fade-in";

export default function SimpleTeluguBiblePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <TopBar />
      <main className="pt-[84px] pb-20">

        {/* Hero Section */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" align="center" className="mx-auto w-full max-w-xl text-center">
              <Image
                src="/bible.png"
                alt="Simple Telugu Bible App"
                width={288}
                height={400}
                className="w-full max-w-72 h-auto"
              />
              <Text size="8" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                A Bible App for My Grandma
              </Text>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                Designed for seniors. Built with love.
              </Text>
              <a
                href="https://play.google.com/store/apps/details?id=com.ratchet.simpletelugubible"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Image
                  src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-auto"
                />
              </a>
            </Flex>
          </FadeIn>
        </section>

        {/* Where this story begins */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Where this story begins
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                  My grandma often asked me to open specific verses in her printed Telugu Bible.
                </Text>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-12)" }}>
              "Matthew… 3… chapter… 15… verse."
              </Text>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                Because I didn't know the Telugu names of the books, I would quickly Google the English ↔ Telugu mapping each time. It happened during church, during evenings. Honestly, I didn't mind. It was our small ritual.
              </Text>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-12)" }}>
              But over time, I realised something deeper:
              <br/> She wasn't just asking for help.
              She was losing independence.<br/> That stayed with me.
              </Text>
            </Flex>
          </FadeIn>
        </section>

        {/* When bigger print wasn't enough */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  When bigger print wasn't enough
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                  We bought her the largest-print Telugu Bible.<br/>
                  It worked… then it didn't.
                </Text>
              </Flex>
              <Flex direction="column" gap="6">
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                We tried existing Bible apps too. They were filled with…
                </Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Habits and gamification</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Social features</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Overloaded menus</Text></li>
                </ul>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                Great for modern users but overwhelming for grandma.
              </Text>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-12)" }}>
              At that point, I asked myself:
              <br/> Why not build something just for her?
              </Text>
            </Flex>
          </FadeIn>
        </section>

        {/* Voice navigation */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Voice navigation
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                Since she always said the verse out loud, my first idea was simple:
                </Text>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-12)" }}>
              Let her speak the verse → app jumps to it.
              <br/> I built a prototype using Gemini Flash Lite.
              </Text>

              {/* Video placeholder */}
              <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Text size="3" style={{ color: "var(--gray-9)" }}>Video placeholder</Text>
              </div>

              <Flex direction="column" gap="6">
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                  Why it failed:
                </Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Microphone quality, </Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Telugu order is unpredictable</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Token cost was too high</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>It was overkill for a simple problem</Text></li>
                </ul>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
              This was my key insight:
              <br/> AI isn't always the answer. Sometimes good UX is enough.
              </Text>
            </Flex>
          </FadeIn>
        </section>

        {/* Simple and calm navigation */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Simple and calm navigation
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                  I reframed the problem:
                </Text>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-12)" }}>
                How do I let her reach any verse in three easy taps?
              </Text>
              <Flex direction="column" gap="6">
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                So I designed, with these 3 key principles:
                </Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Choose book → Choose chapter → Scroll to verse</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Customisable text</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Zero clutter</Text></li>
                </ul>
              </Flex>

              {/* Video placeholder */}
              <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Text size="3" style={{ color: "var(--gray-9)" }}>Video placeholder</Text>
              </div>
            </Flex>
          </FadeIn>
        </section>

        {/* Building it */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Building it (Android + Vibe Coding)
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                  Since she uses Android, I built natively using:
                </Text>
              </Flex>
              <ul className="list-disc pl-6 space-y-2">
                <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Android studio.</Text></li>
                <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Claude Code.</Text></li>
              </ul>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                The core app came together quickly.
              </Text>
            </Flex>
          </FadeIn>
        </section>

        {/* A new insight */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  A new insight - Understanding the Verse
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                While talking to my dad, he mentioned something important: <br/>
                "Reading is fine. Understanding is hard."
                </Text>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-12)" }}>
              Telugu Biblical language is old and complex.
              </Text>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
              This led to the next idea: <br/>
              What if Grandma could ask the app what a verse means?
              </Text>
            </Flex>
          </FadeIn>
        </section>

        {/* Adding AI chat */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Adding AI chat
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                  I built a simple chat using Claude Code in ~30 minutes.
                </Text>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                The family tested it. Responses were in Telugu. It immediately added value.
              </Text>
            </Flex>
          </FadeIn>
        </section>

        {/* Reducing steps */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Reducing steps — Help from the verse itself
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                Feedback: "We want to get help while reading."
                </Text>
              </Flex>
              <Flex direction="column" gap="6">
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                So I added:
                </Text>
                <ul className="list-disc pl-6 space-y-2">
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Tap + hold a verse</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Bottom sheet → "Ask AI about this verse"</Text></li>
                  <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Verse auto-filled in chat</Text></li>
                </ul>
              </Flex>

              {/* Video placeholder */}
              <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Text size="3" style={{ color: "var(--gray-9)" }}>Video placeholder</Text>
              </div>
            </Flex>
          </FadeIn>
        </section>

        {/* Bilingual support */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Bilingual support
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                Younger family members preferred English.
                </Text>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                So I added a simple Telugu ↔ English toggle. <br/> Two generations could now use the same app.
              </Text>
            </Flex>
          </FadeIn>
        </section>

        {/* Launch day */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  Launch day
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                After 4 weeks of iteration and testing, I shipped the app on Google Play.
                </Text>
              </Flex>
              <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
              Now my grandma reads independently again, something she thought she was losing.
              </Text>
              {/* Video placeholder */}
              <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Text size="3" style={{ color: "var(--gray-9)" }}>Video placeholder</Text>
              </div>
            </Flex>
          </FadeIn>
        </section>

        {/* What I learned */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  What I learned
                </Text>
              </Flex>
              <ul className="list-disc pl-6 space-y-2">
                <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Designing for one person brings extreme clarity</Text></li>
                <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Universal design leaves many elders behind</Text></li>
                <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Accessibility is emotional, not just technical</Text></li>
                <li><Text size="5" weight="medium" style={{ color: "var(--gray-10)" }}>Designers who build can ship end-to-end very fast is the new norm for the industry</Text></li>
              </ul>
            </Flex>
          </FadeIn>
        </section>

        {/* What's next */}
        <section className="px-6 md:px-4 py-16">
          <FadeIn>
            <Flex direction="column" gap="6" className="mx-auto w-full max-w-xl">
              <Flex direction="column" gap="4">
                <Text size="7" weight="bold" as="p" style={{ color: "var(--gray-12)" }}>
                  What's next
                </Text>
                <Text size="5" weight="medium" as="p" style={{ color: "var(--gray-10)" }}>
                For now, the mission is simple: <br/> Put this in front of more Telugu-speaking elders.
                </Text>
              </Flex>
            </Flex>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}
