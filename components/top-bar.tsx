import Image from "next/image";
import { Text } from "@radix-ui/themes";

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black" style={{ height: "84px" }}>
      <div className="mx-auto max-w-7xl px-6 flex items-center h-full">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-10 w-10"
          />
          <Text size="3" weight="medium" style={{ color: "var(--brand)" }}>
            Praneeth Potnuru
          </Text>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 right-0 w-full" height="2" preserveAspectRatio="none">
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="#e4e4e7"
          strokeWidth="2"
          strokeDasharray="8 8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </header>
  );
}
