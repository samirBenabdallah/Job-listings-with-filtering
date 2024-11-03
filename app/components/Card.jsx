function Card({ data, addFilterValue }) {
  const {
    id,
    company,
    logo,
    featured,
    new: New,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
  } = data;
  return (
    <div
      className={`w-[80%] bg-cyan-filter h-24 shadow-md shadow-cyan-dark
                  mb-3 mt-4 px-4 py-3 flex items-center rounded-md
                  md:w-[300px] md:flex-col md:relative md:pt-10 md:pb-7 md:px-5 md:h-max
                  ${featured && "border-l-cyan-header border-l-[3px]"}`}
    >
      <img
        src={logo}
        alt="logo"
        className="h-full mr-4 md:absolute md:h-10 left-5 top-0 md:-translate-y-1/2"
      />
      <section
        className="flex flex-col h-full justify-center
       md:pb-5 md:border-b border-cyan-dark md:w-full"
      >
        <div className="flex items-center">
          <p className="text-cyan-600 text-[12px] mr-2">{company}</p>
          {New && (
            <button className="px-3 ml-2 pt-1 uppercase text-[12px] rounded-2xl bg-cyan-600 text-cyan-filter">
              NEW!
            </button>
          )}
          {featured && (
            <button className="px-3 pt-1 flex items-center justify-center uppercase text-[12px] rounded-2xl ml-2 bg-cyan-very-dark text-cyan-filter">
              Featured
            </button>
          )}
        </div>
        <p className="my-1 text-[14px] text-cyan-very-dark font-bold duration-300 hover:text-cyan-header cursor-pointer">
          {position}
        </p>
        <div>
          <p className="text-[12px] text-cyan-dark">
            {postedAt}
            <span className="mx-3">.</span>
            {contract}
            <span className="mx-3">.</span>
            {location}
          </p>
        </div>
      </section>
      <section className="ml-auto flex items-center mt-5 md:flex-wrap">
        <p
          className="text-cyan-700 md:mb-3 text-[14px] mr-5 bg-cyan-300 rounded-md px-3 py-1 cursor-pointer duration-300 hover:bg-cyan-header hover:text-cyan-filter"
          onClick={() => {
            addFilterValue("role", role);
          }}
        >
          {role}
        </p>
        <p
          className="text-cyan-700 md:mb-3 text-[14px] mr-5 bg-cyan-300 rounded-md px-3 py-1 cursor-pointer duration-300 hover:bg-cyan-header hover:text-cyan-filter"
          onClick={() => {
            addFilterValue("level", level);
          }}
        >
          {level}
        </p>
        {languages.map((ele, index) => {
          return (
            <p
              key={`${id}_${index}`}
              className="text-cyan-700 md:mb-3 text-[14px] mr-5 bg-cyan-300 rounded-md px-3 py-1 cursor-pointer duration-300 hover:bg-cyan-header hover:text-cyan-filter"
              onClick={() => {
                addFilterValue("languages", ele);
              }}
            >
              {ele}
            </p>
          );
        })}
      </section>
    </div>
  );
}

export default Card;
