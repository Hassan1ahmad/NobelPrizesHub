import React, { useState } from "react";
import Noble from "./Noble";

export default function Manually(props) {
  const [Loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const [Catagory, setCatagory] = useState("");
  const [YearFrom, setYearFrom] = useState("");
  const [YearTo, setYearTo] = useState("");
  const [Error, setError] = useState("");
  const seenLaureateNames = new Set();

  const Handlesubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    props.setProgress(10)
    const currentyear = new Date().getFullYear();
    if (YearFrom < 1901 || YearTo > currentyear) {
      setError(
        "Invalid year. Please enter a year between 1901 and the current year."
      );
      setdata([]);
      setLoading(false);
      props.setProgress(100);
      return;
    }
    if (Catagory === "" || Catagory === "---Select Subject---") {
      setError("Please select at least one catagory");
      setdata([]);
      setLoading(false);
      props.setProgress(100);
      return;
    } else {
      setError("");
    }
    const updateprize = async () => {
        props.setProgress(30)
      let url = `https://api.nobelprize.org/2.1/nobelPrizes?limit=1000&nobelPrizeYear=${YearFrom}&yearTo=${YearTo}&nobelPrizeCategory=${Catagory}`;
      let fetchdata = await fetch(url);
      props.setProgress(60)
      let parseddata = await fetchdata.json();
      props.setProgress(100)
      setLoading(false);
      setdata(parseddata.nobelPrizes);
    };
    updateprize();
  };

  return (
    <div className={props.mode === 'dark'? 'dark-background':''}>
      <h2 className="text-center top-margin">
        Nobel Prizes Hub - Search Manually
      </h2>
      <form onSubmit={Handlesubmit}>
        <div className="d-flex padding-left align-items-center">
          <label
            className="dropdown-toggle me-2  custom-padding"
            required
            htmlFor="select"
          >
            Please Select Category:
          </label>
          <select
            className={`form-select custom-width ${props.mode === 'dark'? "dark-select" : ''} `}
            id="select"
            value={Catagory}
            onChange={(e) => setCatagory(e.target.value)}
            aria-label="Default select example"
          >
            <option selected>---Select Subject---</option>
            <option value="che">Chemistry</option>
            <option value="eco">Economics</option>
            <option value="phy">Physics</option>
            <option value="lit">Literature</option>
          </select>
        </div>

        <div className="container custom-padding">
          <div className="row align-items-center">
            <div className="col-12 col-md-auto">
              <label htmlFor="fromInput">Please select year:  From</label>
            </div>
            <div className="col col-md mb-3 mb-md-0">
              <input
                type="text"
                className={`form-control ${props.mode === 'dark'? 'dark-input' : ''}`}
                value={YearFrom}
                onChange={(e) => setYearFrom(e.target.value)}
                id="fromInput"
                placeholder="Year from(Minimum 1901)"
                aria-label="Year from"
              />
            </div>
            <div className="col-12 col-md-auto">
              <label htmlFor="toInput">To:</label>
            </div>
            <div className="col col-md mb-3 mb-md-0">
              <input
                type="text"
                className={`form-control ${props.mode === 'dark'? 'dark-input' : ''}`}
                value={YearTo}
                onChange={(e) => setYearTo(e.target.value)}
                id="toInput"
                placeholder="Year to"
                aria-label="Year to"
              />
            </div>
            {Error && <p className="text-danger text-center">{Error} </p>}
            <div className="row mt-4">
              {" "}
              {/* New row for the button, with top margin for spacing */}
              <div className="col text-center">
                {" "}
                {/* Center the button */}
                <button
                  className="btn btn-outline-secondary custom-width"
                  type="submit"
                  id="button-addon2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

       <div  className={props.mode === 'dark'? 'dark-background':''}>
      <div className="container">
      <div className="">
          <h1 className="text-center ">
            The Nobel Prizes in {Catagory === "eco"
              ? "Economics"
              : Catagory === "che"
              ? "Chemistry"
              : Catagory === "phy"
              ? "Physic"
              : Catagory === "lit"
              ? "Literature"
              : Catagory}{" "}
            from {YearFrom} to {YearTo}
          </h1>
        </div>
        <div className="row d-flex align-items-stretch">
          {Loading ? (
            <>
              <div class={`spinner-container ${props.mode === 'dark'? 'dark-background':''}`}>
             <div class="spinner"></div>
              </div>
              <div className="text-center fw-medium">Loading. . .</div>
            </>
          ) : (
           
            data.map((elements) => {
              // Check if laureates exist and has at least one item
              if (elements.laureates && elements.laureates.length > 0) {
                const currentName = elements.laureates[0].fullName.en;

                // If the currentName is already seen, skip this element
                if (seenLaureateNames.has(currentName)) {
                  return null;
                }

                // Add the currentName to the set
                seenLaureateNames.add(currentName);
                return (
                    
                  <div
                    key={elements.laureates[0].id}
                    className="col-md-6 d-flex mb-4"
                  >
                    <Noble mode={props.mode}
                      date={elements.dateAwarded}
                      winnername={elements.laureates[0].fullName.en}
                      catagory={elements.categoryFullName.en}
                      prizeamount={elements.prizeAmount}
                      motivation={elements.laureates[0].motivation.en}
                      laureateLink={elements.laureates[0].links[0].href}
                    />
                  </div>
                );
              } else {
                return null; // Return null if the conditions aren't met
              }
            })
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
