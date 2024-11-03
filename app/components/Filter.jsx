import Image from "next/image";

const Filter = ({ filterProps, removeFilterProp, clearFilter }) => {
  return (
    <div
      className="relative -top-10 bg-cyan-filter 
    shadow-md shadow-cyan-dark flex items-center h-16 w-[80%]
     rounded-md justify-between px-7 mb:w-[350px] mb:h-max"
    >
      <div className="flex items-center mb:flex-wrap h-max pt-3">
        {filterProps.role && (
          <div className="h-8 flex items-center rounded-md bg-cyan-300 mr-4 mb-3">
            <p className="text-cyan-header pl-2">{filterProps.role}</p>
            <Image
              src="/images/icon-remove.svg"
              alt="remove"
              className="p-2 h-full bg-cyan-header rounded-r-md duration-300 cursor-pointer ml-3 hover:bg-cyan-very-dark"
              height={30}
              width={30}
              onClick={() => removeFilterProp("role", filterProps.role)}
            />
          </div>
        )}
        {filterProps.level && (
          <div className="h-8 flex items-center rounded-md bg-cyan-300 mr-4 mb-3">
            <p className="text-cyan-header pl-2">{filterProps.level}</p>
            <Image
              src="/images/icon-remove.svg"
              alt="remove"
              className="p-2 h-full bg-cyan-header rounded-r-md duration-300 cursor-pointer ml-3 hover:bg-cyan-very-dark"
              height={30}
              width={30}
              onClick={() => removeFilterProp("level", filterProps.level)}
            />
          </div>
        )}
        {filterProps.languages.map((ele) => {
          return (
            <div
              key={ele}
              className="h-8 flex items-center rounded-md bg-cyan-300 mr-4 mb-3"
            >
              <p className="text-cyan-header pl-2">{ele}</p>
              <Image
                src="/images/icon-remove.svg"
                alt="remove"
                className="p-2 h-full bg-cyan-header rounded-r-md duration-300 cursor-pointer ml-3 hover:bg-cyan-very-dark"
                height={30}
                width={30}
                onClick={() => removeFilterProp("languages", ele)}
              />
            </div>
          );
        })}
      </div>
      <p
        className="ml-auto text-cyan-header cursor-pointer"
        onClick={() => clearFilter()}
      >
        clear
      </p>
    </div>
  );
};

export default Filter;
