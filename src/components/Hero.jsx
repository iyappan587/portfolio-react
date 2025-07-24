function Hero() {
  return (
    <div>
      <ol className="grid grid-flow-col-reverse grid-cols-1 gap-4 md:grid-cols-2">
        <div className="grid  rows-cols-2 gap-4 px-20 text-xl md:row-span-2 sm:col-span-">
          <p></p>
          <p className="gap-5 flex flex-col justify-center items-start text-[var(--sectext-color)]">
            <h1 className="animate-text-pulse text-3xl font-bold text-[var(--primary-color)]">
              Hi, I'm Iyappan
            </h1>
            Web Developer Dedicated front-end developer with a strong foundation
            in HTML, CSS, and JavaScript, seeking to contribute to a dynamic
            development team. Eager to expand back-end knowledge and grow into a
            full-stack development role.
            <div className="flex gap-4 text-black font-bold">
              <button className="bg-green-400 px-4 py-2 rounded-3xl hover:bg-green-600 ">
                Download Resume
              </button>
              <button className="bg-green-400  px-4 py-2 rounded-3xl hover:bg-green-600">
                Contact
              </button>
            </div>
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <img
            src="images/profile-image/iyappan22.png"
            alt="Iyappan's Profile"
          />
        </div>
      </ol>
    </div>
  );
}

export default Hero;
