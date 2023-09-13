import React, { useState, useEffect } from "react";
import Noble from "./Noble";

export default function Nobleprize(props) {
  // let data = [{
  //     "nobelPrizes": [
  //       {
  //         "awardYear": "2016",
  //         "category": {
  //           "en": "Literature",
  //           "no": "Litteratur",
  //           "se": "Litteratur"
  //         },
  //         "categoryFullName": {
  //           "en": "The Nobel Prize in Literature",
  //           "no": "Nobelprisen i litteratur",
  //           "se": "Nobelpriset i litteratur"
  //         },
  //         "dateAwarded": "2016-10-13",
  //         "prizeAmount": 8000000,
  //         "prizeAmountAdjusted": 8451577,
  //         "links": [
  //           {
  //             "rel": "nobelPrize",
  //             "href": "https://api.nobelprize.org/2/nobelPrize/lit/2016",
  //             "action": "GET",
  //             "types": "application/json"
  //           }
  //         ],
  //         "laureates": [
  //           {
  //             "id": "937",
  //             "knownName": { "en": "Bob Dylan" },
  //             "fullName": { "en": "Bob Dylan" },
  //             "portion": "1",
  //             "sortOrder": "1",
  //             "motivation": {
  //               "en": "for having created new poetic expressions within the great American song tradition",
  //               "se": "som skapat nya poetiska uttryck inom den stora amerikanska sångtraditionen"
  //             },
  //             "links": [
  //               {
  //                 "rel": "laureate",
  //                 "href": "https://api.nobelprize.org/2/laureate/937",
  //                 "action": "GET",
  //                 "types": "application/json"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "awardYear": "2017",
  //         "category": {
  //           "en": "Literature",
  //           "no": "Litteratur",
  //           "se": "Litteratur"
  //         },
  //         "categoryFullName": {
  //           "en": "The Nobel Prize in Literature",
  //           "no": "Nobelprisen i litteratur",
  //           "se": "Nobelpriset i litteratur"
  //         },
  //         "dateAwarded": "2017-10-05",
  //         "prizeAmount": 9000000,
  //         "prizeAmountAdjusted": 9342577,
  //         "links": [
  //           {
  //             "rel": "nobelPrize",
  //             "href": "https://api.nobelprize.org/2/nobelPrize/lit/2017",
  //             "action": "GET",
  //             "types": "application/json"
  //           }
  //         ],
  //         "laureates": [
  //           {
  //             "id": "947",
  //             "knownName": { "en": "Kazuo Ishiguro" },
  //             "fullName": { "en": "Kazuo Ishiguro" },
  //             "portion": "1",
  //             "sortOrder": "1",
  //             "motivation": {
  //               "en": "who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world",
  //               "se": "som i romaner med stark känslomässig verkan har blottat avgrunden under vår skenbara hemhörighet i världen"
  //             },
  //             "links": [
  //               {
  //                 "rel": "laureate",
  //                 "href": "https://api.nobelprize.org/2/laureate/947",
  //                 "action": "GET",
  //                 "types": "application/json"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "awardYear": "2018",
  //         "category": {
  //           "en": "Literature",
  //           "no": "Litteratur",
  //           "se": "Litteratur"
  //         },
  //         "categoryFullName": {
  //           "en": "The Nobel Prize in Literature",
  //           "no": "Nobelprisen i litteratur",
  //           "se": "Nobelpriset i litteratur"
  //         },
  //         "dateAwarded": "2019-10-10",
  //         "prizeAmount": 9000000,
  //         "prizeAmountAdjusted": 9000000,
  //         "links": [
  //           {
  //             "rel": "nobelPrize",
  //             "href": "https://api.nobelprize.org/2/nobelPrize/lit/2018",
  //             "action": "GET",
  //             "types": "application/json"
  //           }
  //         ],
  //         "laureates": [
  //           {
  //             "id": "979",
  //             "knownName": { "en": "Olga Tokarczuk" },
  //             "fullName": { "en": "Olga Tokarczuk" },
  //             "portion": "1",
  //             "sortOrder": "1",
  //             "motivation": {
  //               "en": "for a narrative imagination that with encyclopedic passion represents the crossing of boundaries as a form of life",
  //               "se": "för en berättarkonst som med encyklopedisk lust gestaltar gränsöverskridandet som livsform"
  //             },
  //             "links": [
  //               {
  //                 "rel": "laureate",
  //                 "href": "https://api.nobelprize.org/2/laureate/979",
  //                 "action": "GET",
  //                 "types": "application/json"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "awardYear": "2019",
  //         "category": {
  //           "en": "Literature",
  //           "no": "Litteratur",
  //           "se": "Litteratur"
  //         },
  //         "categoryFullName": {
  //           "en": "The Nobel Prize in Literature",
  //           "no": "Nobelprisen i litteratur",
  //           "se": "Nobelpriset i litteratur"
  //         },
  //         "dateAwarded": "2019-10-10",
  //         "prizeAmount": 9000000,
  //         "prizeAmountAdjusted": 9000000,
  //         "links": [
  //           {
  //             "rel": "nobelPrize",
  //             "href": "https://api.nobelprize.org/2/nobelPrize/lit/2019",
  //             "action": "GET",
  //             "types": "application/json"
  //           }
  //         ],
  //         "laureates": [
  //           {
  //             "id": "980",
  //             "knownName": { "en": "Peter Handke" },
  //             "fullName": { "en": "Peter Handke" },
  //             "portion": "1",
  //             "sortOrder": "1",
  //             "motivation": {
  //               "en": "for an influential work that with linguistic ingenuity has explored the periphery and the specificity of human experience",
  //               "se": "för ett inflytelserikt författarskap som med stor språkkonst har utforskat periferin och människans konkreta erfarenhet"
  //             },
  //             "links": [
  //               {
  //                 "rel": "laureate",
  //                 "href": "https://api.nobelprize.org/2/laureate/980",
  //                 "action": "GET",
  //                 "types": "application/json"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "awardYear": "2020",
  //         "category": {
  //           "en": "Literature",
  //           "no": "Litteratur",
  //           "se": "Litteratur"
  //         },
  //         "categoryFullName": {
  //           "en": "The Nobel Prize in Literature",
  //           "no": "Nobelprisen i litteratur",
  //           "se": "Nobelpriset i litteratur"
  //         },
  //         "dateAwarded": "2020-10-08",
  //         "prizeAmount": 10000000,
  //         "prizeAmountAdjusted": 10000000,
  //         "links": [
  //           {
  //             "rel": "nobelPrize",
  //             "href": "https://api.nobelprize.org/2/nobelPrize/lit/2020",
  //             "action": "GET",
  //             "types": "application/json"
  //           }
  //         ],
  //         "laureates": [
  //           {
  //             "id": "993",
  //             "knownName": { "en": "Louise Glück" },
  //             "fullName": { "en": "Louise Glück" },
  //             "portion": "1",
  //             "sortOrder": "1",
  //             "motivation": {
  //               "en": "for her unmistakable poetic voice that with austere beauty makes individual existence universal",
  //               "se": "för hennes omisskännliga poetiska röst, som med sträng skönhet gör den enskilda människans existens universell"
  //             },
  //             "links": [
  //               {
  //                 "rel": "laureate",
  //                 "href": "https://api.nobelprize.org/2/laureate/993",
  //                 "action": "GET",
  //                 "types": "application/json"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "awardYear": "2021",
  //         "category": {
  //           "en": "Literature",
  //           "no": "Litteratur",
  //           "se": "Litteratur"
  //         },
  //         "categoryFullName": {
  //           "en": "The Nobel Prize in Literature",
  //           "no": "Nobelprisen i litteratur",
  //           "se": "Nobelpriset i litteratur"
  //         },
  //         "dateAwarded": "2021-10-07",
  //         "prizeAmount": 10000000,
  //         "prizeAmountAdjusted": 10000000,
  //         "links": [
  //           {
  //             "rel": "nobelPrize",
  //             "href": "https://api.nobelprize.org/2/nobelPrize/lit/2021",
  //             "action": "GET",
  //             "types": "application/json"
  //           }
  //         ],
  //         "laureates": [
  //           {
  //             "id": "1004",
  //             "knownName": { "en": "Abdulrazak Gurnah" },
  //             "fullName": { "en": "Abdulrazak Gurnah" },
  //             "portion": "1",
  //             "sortOrder": "1",
  //             "motivation": {
  //               "en": "for his uncompromising and compassionate penetration of the effects of colonialism and the fate of the refugee in the gulf between cultures and continents"
  //             },
  //             "links": [
  //               {
  //                 "rel": "laureate",
  //                 "href": "https://api.nobelprize.org/2/laureate/1004",
  //                 "action": "GET",
  //                 "types": "application/json"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         "awardYear": "2022",
  //         "category": {
  //           "en": "Literature",
  //           "no": "Litteratur",
  //           "se": "Litteratur"
  //         },
  //         "categoryFullName": {
  //           "en": "The Nobel Prize in Literature",
  //           "no": "Nobelprisen i litteratur",
  //           "se": "Nobelpriset i litteratur"
  //         },
  //         "dateAwarded": "2022-10-06",
  //         "prizeAmount": 10000000,
  //         "prizeAmountAdjusted": 10000000,
  //         "links": [
  //           {
  //             "rel": "nobelPrize",
  //             "href": "https://api.nobelprize.org/2/nobelPrize/lit/2022",
  //             "action": "GET",
  //             "types": "application/json"
  //           }
  //         ],
  //         "laureates": [
  //           {
  //             "id": "1017",
  //             "knownName": { "en": "Annie Ernaux" },
  //             "fullName": { "en": "Annie Ernaux" },
  //             "portion": "1",
  //             "sortOrder": "1",
  //             "motivation": {
  //               "en": "for the courage and clinical acuity with which she uncovers the roots, estrangements and  collective restraints of personal memory",
  //               "se": "för det mod och den kliniska skärpa varmed hon avtäcker det personliga minnets rötter,  främlingskap och kollektiva ramar"
  //             },
  //             "links": [
  //               {
  //                 "rel": "laureate",
  //                 "href": "https://api.nobelprize.org/2/laureate/1017",
  //                 "action": "GET",
  //                 "types": "application/json"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ],
  //     "meta": {
  //       "offset": 1,
  //       "limit": 100,
  //       "nobelPrizeYear": 2015,
  //       "yearTo": 2023,
  //       "nobelPrizeCategory": "lit",
  //       "count": 8,
  //       "terms": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/",
  //       "license": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#licence",
  //       "disclaimer": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#disclaimer"
  //     },
  //     "links": {
  //       "first": "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=0&limit=100&nobelPrizeYear=2015&yearTo=2023&nobelPrizeCategory=lit",
  //       "self": "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=1&limit=100&nobelPrizeYear=2015&yearTo=2023&nobelPrizeCategory=lit",
  //       "last": "https://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=0&limit=100&nobelPrizeYear=2015&yearTo=2023&nobelPrizeCategory=lit"
  //     }
  //   }]
  const [data, setdata] = useState([]);
  const [Loading, setLoading] = useState(true);
  const seenLaureateNames = new Set();

  const updatedata = async () => {
    props.setProgress(10)
    let url = `https://api.nobelprize.org/2.1/nobelPrizes?limit=1000&nobelPrizeYear=1901&yearTo=2023&nobelPrizeCategory=${props.subject}`;
    let data = await fetch(url);
    props.setProgress(50)
    let parseddata = await data.json();
    props.setProgress(100)
    setdata(parseddata.nobelPrizes);
    setLoading(false);
  };
  useEffect(() => {
    updatedata();
    /* eslint-disable */
  }, []);
  
  return (
    <div className={props.mode === 'dark'? 'dark-background':''}>
    <div className="container">
      <div className="top-margin headingbox">
        <h1 className="text-center ">
          The Nobel Prizes in {props.subjectname}
        </h1>
      </div>
      <div className="row d-flex align-items-stretch">
        {Loading ? (
          <>
            <div className={`spinner-container ${props.mode === 'dark'? 'dark-background':''}`}>
             <div className="spinner"></div>
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
  );
}
