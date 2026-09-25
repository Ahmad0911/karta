import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { rooms } from '@/data/rooms';
import SafeImage from '@/components/ui/SafeImage';
import { IMAGES } from '@/data/images';

function getRoomImage(id: string): string | undefined {
  return (IMAGES.rooms as Record<string, string>)[id];
}

export default function CategoryShowcase() {
  return (
    <section
      className="
        relative overflow-hidden
        border-b border-[#101E21]/[0.08]
        bg-[#f8f7f4]
        py-20 sm:py-28
      "
    >
      <div className="container-x">
        {/* ============================================================ */}
        {/* Section heading                                               */}
        {/* ============================================================ */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#9a7338]
              "
            >
              The Karta edit
            </p>

            <h2
              className="
                mt-4
                font-display
                text-[2.7rem]
                font-medium
                leading-[1.02]
                tracking-[-0.04em]
                text-[#101E21]
                sm:text-5xl
                lg:text-[4.25rem]
              "
            >
              Start where
              <span className="block italic text-[#101E21]/70">
                you live.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-[#101E21]/50
                sm:text-[0.95rem]
              "
            >
              Discover considered pieces for every room, curated to bring
              character, balance and lasting beauty into your space.
            </p>
          </div>

          <Link
            to="/shop"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              border-b
              border-[#101E21]/20
              pb-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#101E21]/65
              transition-all duration-300
              hover:border-[#9a7338]
              hover:text-[#9a7338]
            "
          >
            Explore collection

            <ArrowUpRight
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* ============================================================ */}
        {/* Room gallery                                                   */}
        {/* ============================================================ */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-3
            sm:mt-16
            sm:gap-5
            lg:grid-cols-4
          "
        >
          {rooms.map((room, index) => (
            <Link
              key={room.id}
              to={`/shop?room=${room.id}`}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-[1.5rem]
                bg-[#ebe8e1]
                shadow-[0_10px_35px_rgba(16,30,33,0.04)]
                transition-all
                duration-700
                hover:-translate-y-1
                hover:shadow-[0_25px_60px_-25px_rgba(16,30,33,0.25)]
              "
            >
              {/* Room image */}
              <SafeImage
                src={getRoomImage(room.id)}
                alt={room.name}
                fallback="bg-gradient-to-br from-paper-deep to-brass-300/60"
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.055]
                "
              >
                {/* Editorial image overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#101E21]/75
                    via-[#101E21]/10
                    to-transparent
                    opacity-90
                    transition-opacity duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Soft top wash */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-white/[0.08]
                    via-transparent
                    to-transparent
                  "
                />

                {/* ==================================================== */}
                {/* Room number                                             */}
                {/* ==================================================== */}

                <span
                  className="
                    absolute
                    left-5
                    top-5
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-white/60
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* ==================================================== */}
                {/* Explore icon                                            */}
                {/* ==================================================== */}

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/[0.10]
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    className="
                      h-4 w-4
                      transition-transform duration-500
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>

                {/* ==================================================== */}
                {/* Room information                                       */}
                {/* ==================================================== */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    sm:p-6
                  "
                >
                  <span
                    className="
                      block
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-white/55
                      transition-colors duration-300
                      group-hover:text-[#d6b77a]
                    "
                  >
                    Shop the edit
                  </span>

                  <span
                    className="
                      mt-1.5
                      block
                      font-display
                      text-[1.35rem]
                      font-medium
                      tracking-[-0.02em]
                      text-white
                      sm:text-[1.5rem]
                    "
                  >
                    {room.name}
                  </span>

                  {/* Animated underline */}
                  <span
                    className="
                      mt-3
                      block
                      h-px
                      w-8
                      bg-white/50
                      transition-all
                      duration-500
                      group-hover:w-16
                      group-hover:bg-[#d6b77a]
                    "
                  />
                </div>
              </SafeImage>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}