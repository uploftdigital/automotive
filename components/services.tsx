"use client";

import { ArrowUpRight, Phone, X } from "lucide-react";
import { useRef, useState } from "react";
import { phone, services } from "@/app/content";

export function Services() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(services[0]);

  return (
    <>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id} id={service.id} data-reveal>
            <div className="service-photo">
              <img src={`/images/${service.image}.webp`} alt={service.alt} width={768} height={512} loading="lazy" />
            </div>
            <div className="service-text">
              <div>
                <h3>
                  <button
                    className="service-button"
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => {
                      setSelected(service);
                      dialog.current?.showModal();
                    }}
                  >
                    {service.name}
                    <span className="service-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
                  </button>
                </h3>
                <p>{service.summary}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <dialog className="service-dialog" ref={dialog} aria-labelledby="service-dialog-title">
        <button className="dialog-close icon-button" type="button" onClick={() => dialog.current?.close()} aria-label="Close service details">
          <X size={21} aria-hidden="true" />
        </button>
        <p className="eyebrow"><span className="signal" /> Our services</p>
        <h2 id="service-dialog-title">{selected.name}</h2>
        <p>{selected.detail}</p>
        <a className="button button-primary" href={phone.href}>Call to enquire <Phone size={16} aria-hidden="true" /></a>
      </dialog>
    </>
  );
}
