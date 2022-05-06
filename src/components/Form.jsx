import { React, useState } from "react";
import useLink from "../hooks/useLink";
import Input from "./Input";

const Form = () => {
  const [url, setUrl] = useState({
    fullLink: "",
  });

  //? use custom link for getting response
  const { data, refetch, isRefetching, isLoading, isError } = useLink(
    url.fullLink
  );

  //* input change event
  const onChange = (e) => {
    const { name, value } = e.target;
    setUrl((prevUrl) => {
      return {
        ...prevUrl,
        [name]: value,
      };
    });
  };

  //* button.addEventListener()
  const getUrl = (e) => {
    e.preventDefault();
    refetch();

    //* set all links reset again
    setUrl((prevUrl) => {
      return {
        ...prevUrl,
        fullLink: "",
        shortLink: "",
      };
    });
  };

  if ((isLoading, isRefetching)) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className="container">
      <form className="pure-form" onSubmit={getUrl}>
        <fieldset>
          <Input fullLink={url.fullLink} handleChange={onChange} />
          <button className="pure-button ml-2">
            Give me that god damn short link
          </button>
        </fieldset>
      </form>
      <p>
        Data:
        <a href={`https://${data?.result?.short_link}`}>{data?.result?.short_link}</a>
      </p>
    </div>
  );
};

export default Form;
