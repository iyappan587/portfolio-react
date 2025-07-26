function Hero() {
  const handleDownload = () => {
    const confirmDownload = window.confirm("Do you want to iyappan's resume?");
    if (confirmDownload) {
      const link = document.createElement("a");
      link.href = "./iyappan-resume-2025.pdf";
      link.download = "Iyappan_Resume.pdf";
      link.click();
    }
  };

  return (
    <div>
      <ol className="grid justify-center  grid-cols-1 gap-4 md:grid-cols-2">
        <div className="px-10 grid  rows-cols-2 gap-4 ">
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
              <button
                onClick={handleDownload}
                className="bg-green-400 px-4 py-2 rounded-3xl hover:bg-green-600 "
              >
                Download resume
              </button>
              <a
                href="mailto:iyappansabari587@gmail.com"
                className="bg-green-400  px-4 py-2 rounded-3xl hover:bg-green-600"
              >
                Contact
              </a>
            </div>
          </p>
        </div>
        <div className="w-70  position relative flex ml-10 items-center sm:ml-30 md:ml-0 lg:ml-30  md:w-100">
          <img
            className="position absolute rounded-lg z-10 "
            src="images/profile-image/pf.png"
            alt="Iyappan's Profile"
          />
          <img
            className="animate-spin-slow "
            src="images/profile-image/sec-bg3.png"
            alt="Iyappan's Profile"
          />
        </div>
      </ol>
    </div>
  );
}

export default Hero;
