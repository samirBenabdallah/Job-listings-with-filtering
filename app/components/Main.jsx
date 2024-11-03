"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
function Main() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterProps, setFilterProps] = useState({
    role: "",
    level: "",
    languages: [],
  });
  function addFilterValue(prop, value) {
    switch (prop) {
      case "role":
        setFilterProps((curr) => {
          return { ...curr, role: value };
        });
        break;
      case "level":
        setFilterProps((curr) => {
          return { ...curr, level: value };
        });
        break;
      case "languages": {
        let lang = filterProps.languages;
        if (!lang.includes(value)) {
          lang.unshift(value);
          setFilterProps((curr) => {
            return { ...curr, languages: lang };
          });
        }
      }
    }
  }
  function removeFilterProp(prop, value) {
    switch (prop) {
      case "role":
        setFilterProps((curr) => {
          return { ...curr, role: "" };
        });
        break;
      case "level":
        setFilterProps((curr) => {
          return { ...curr, level: "" };
        });
        break;
      case "languages": {
        let lang = filterProps.languages;
        if (lang.includes(value)) {
          lang.splice(lang.indexOf(value), 1);
          setFilterProps((curr) => {
            return { ...curr, languages: lang };
          });
        }
      }
    }
  }
  function clearFilter() {
    setFilterProps({ role: "", level: "", languages: [] });
  }
  useEffect(() => {
    let result = data;
    if (filterProps.level)
      result = result.filter((ele) => ele.level === filterProps.level);
    if (filterProps.role)
      result = result.filter((ele) => ele.role === filterProps.role);
    if (filterProps.languages.length) {
      result = result.filter((ele) => {
        for (let i = 0; i < filterProps.languages.length; i++) {
          if (!ele.languages.includes(filterProps.languages[i])) return false;
        }
        return true;
      });
    }
    setFilterData(result);
  }, [filterProps]);
  useEffect(() => {
    (async function () {
      const response = await fetch("/data.json");
      const data = await response.json();
      setData(data);
      setFilterData(data);
    })();
  }, []);
  return (
    <div className="w-full h-max flex flex-col items-center justify-center py-5 relative">
      {!(
        !filterProps.level &&
        !filterProps.role &&
        !filterProps.languages.length
      ) && (
        <Filter
          filterProps={filterProps}
          removeFilterProp={removeFilterProp}
          clearFilter={clearFilter}
        />
      )}
      {filterData?.map((ele) => {
        return (
          <Card data={ele} key={ele.id} addFilterValue={addFilterValue}></Card>
        );
      })}
    </div>
  );
}

export default Main;
