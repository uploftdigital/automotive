"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { gallery } from "@/app/content";

export function Showcase() {
  const [index, setIndex] = useState(0);
  const frame = gallery[index];

  function move(direction: number) {
    setIndex((current) => (current + direction + gallery.length) % gallery.length);
  }

  return (
    <div className="gallery" role="region" aria-roledescription="carousel" aria-label="Illustrative automotive showcase">
      <figure className="gallery-frame">
        <div className="gallery-image" key={frame.image}>
          <img src={`/images/${frame.image}.webp`} alt={frame.alt} width={1160} height={760} loading="lazy" />
        </div>
        <figcaption className="gallery-caption" aria-live="polite" aria-atomic="true">
          <span className="eyebrow">{frame.category}</span>
          <span className="gallery-title">{frame.title}</span>
        </figcaption>
      </figure>
      <div className="gallery-controls">
        <div className="gallery-index" role="group" aria-label="Select a showcase image">
          {gallery.map((item, itemIndex) => (
            <button
              type="button"
              key={item.image}
              aria-label={item.category}
              aria-pressed={index === itemIndex}
              onClick={() => setIndex(itemIndex)}
            >
              <span />
            </button>
          ))}
        </div>
        <div className="gallery-arrows" role="group" aria-label="Browse showcase images">
          <button className="icon-button" type="button" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft size={20} aria-hidden="true" /></button>
          <button className="icon-button" type="button" onClick={() => move(1)} aria-label="Next image"><ArrowRight size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
