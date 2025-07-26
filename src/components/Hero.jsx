function Hero() {
  return (
    <div>
      <ol className="grid justify-center grid-flow-col-reverse grid-cols-1 gap-4 md:grid-cols-2">
        <div className="px-10 grid  rows-cols-2 gap-4  md:row-span-2 ">
          <p></p>
          <p className="text-sm gap-5 flex flex-col justify-center items-start text-[var(--sectext-color)] sm:text-md md:text-xl">
            <h1 className="animate-text-pulse text-3xl font-bold text-[var(--primary-color) sm:text-3xl]">
              Hi, I'm{" "}
              <span className="text-[var(--primary-color)]">Iyappan</span>
            </h1>
            <span className="text-[var(--primary-color)]"> Web Developer</span>
            Dedicated front-end developer with a strong foundation in HTML, CSS,
            and JavaScript, seeking to contribute to a dynamic development team.
            Eager to expand back-end knowledge and grow into a full-stack
            development role.
            <div className="flex font-semibold gap-4 text-black md:font-bold">
              <button className="bg-green-400 px-4 py-2 rounded-3xl hover:bg-green-600 ">
                Download resume
              </button>
              <button className="bg-green-400  px-4 py-2 rounded-3xl hover:bg-green-600">
                Contact
              </button>
            </div>
          </p>
        </div>
        <div className="w-90 mx-auto">
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
