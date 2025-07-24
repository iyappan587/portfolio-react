import React from "react";

const slides = [
  { id: 1, image: "certificate1" },
  { id: 2, image: "certificate2" },
  { id: 3, image: "certificate3" },
];

export default function Cerification() {
  const fullSlides = [
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
  ];

  return (
    <div
      className="autoshow 
    "
    >
      <h2 class="text-4xl font-bold mb-4  text-[var(--primary-color)]">
        Certificates
      </h2>
      <div className="overflow-hidden w-full py-4">
        <div className="inline-flex animate-scroll">
          {fullSlides.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              className={`w-60 h-40 mx-2 flex items-center justify-center rounded ${slide.bg}`}
            >
              <img
                src={`./images/certificates/${slide.image}.jpg`}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
