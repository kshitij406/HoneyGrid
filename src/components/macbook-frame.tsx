"use client";

type Props = {
  url: string;
  title: string;
  accent: string;
};

// Screenshot via thum.io — free, no API key, returns a PNG thumbnail of the page.
// Width 1280 gives enough resolution for the mockup.
function screenshotSrc(siteUrl: string) {
  return `https://image.thum.io/get/width/1280/crop/800/${siteUrl}`;
}

export function MacbookFrame({ url, title, accent }: Props) {
  const src = screenshotSrc(url);

  return (
    <div className="select-none px-3 pt-3">
      {/* Screen housing — dark aluminum */}
      <div className="relative mx-auto w-full rounded-t-xl bg-[#1c1c1e] px-[3%] pt-[2.5%] shadow-2xl ring-1 ring-black/20">
        {/* Camera notch */}
        <div className="mx-auto mb-[1.5%] h-[3px] w-[3px] rounded-full bg-[#444]" />

        {/* Screen */}
        <div
          className="relative overflow-hidden rounded-t-sm bg-black"
          style={{ aspectRatio: "16 / 10" }}
        >
          {/* Accent gradient shown while screenshot loads */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60`}
          />

          {/* Screenshot image — loads on top of accent gradient */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${title} website screenshot`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
            onError={(e) => {
              // If screenshot fails, hide and leave the accent gradient visible
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Hinge */}
      <div className="h-[6px] w-full bg-gradient-to-b from-[#6e6e73] to-[#5a5a5f]" />

      {/* Keyboard deck — wider than screen */}
      <div className="relative mx-[-6%] h-[18px] rounded-b-lg bg-gradient-to-b from-[#d8d8dc] to-[#c4c4c8] shadow-md" />

      {/* Bottom foot line */}
      <div className="mx-auto h-[3px] w-[40%] rounded-b-full bg-[#a8a8ae]" />
    </div>
  );
}
