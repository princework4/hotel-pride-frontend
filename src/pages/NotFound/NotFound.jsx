import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { reducerMethods } from "../../context/reducerMethods";
import "./NotFound.css";

const NotFound = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({ type: reducerMethods.setShouldShowCallback, payload: false });
  }, []);

  return (
    <div className="not_found_container">
      <div className="not_found_error">
        <h1>Oops</h1>
        <p>The Page you're looking for isn't here.</p>
        <p className="goback_home">
          Go back to <Link to="/">Home</Link>
        </p>
      </div>
      <div className="not_found_design_1"></div>
      <div className="not_found_design_2"></div>
    </div>
  );
};

export default NotFound;
