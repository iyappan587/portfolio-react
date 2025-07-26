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
    <div id="certification" className=" px-8 py-2 md:px-14">
      <h2 className="text-2xl font-bold text-[var(--primary-color)] md:text-4xl">
        Certificates
      </h2>
      <div className="overflow-hidden  py-4">
        <div className="inline-flex animate-scroll">
          {fullSlides.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              className={`w-72 h-40 mx-2 flex items-center justify-center rounded`}
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
