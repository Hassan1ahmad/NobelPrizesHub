import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';


export default function LaureateDetail(props) {
    const [laureate, setLaureate] = useState({});
    const [Loading, setLoading] = useState(true);
    const {link}  = useParams();
    const decodedLink = decodeURIComponent(link);
    const LaurateDetails=async()=>{
        props.setProgress(10)
        let getdata =await fetch(decodedLink)
        let  parsedata =await getdata.json()
        props.setProgress(50)
        setLaureate(await parsedata[0])
        props.setProgress(100)
        setLoading(false)
    }
   useEffect(() => {
    const wait=async()=>{
        await LaurateDetails()
    }
    wait()
    /* eslint-disable */
   }, []);
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
      }
      
  return (
    <div className={props.mode === 'dark'? 'dark-background':''}>
    {Loading ? (<><div className="container top-margin spinner"></div> <div className='text-center fw-medium'>Loading. . .</div> </>): (
        <div className="container top-margin">
            <div className={`card  text-bg-${props.mode} border-${props.mode === 'dark' ? 'light' : 'dark'} mb-4`}>
                <div className={`card-header border-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <h3>{laureate.fullName ? laureate.fullName.en : 'Name not available'}</h3>
                </div>
                <div className="card-body">
                    <p><strong>Known as:</strong> {laureate.knownName ? laureate.knownName.en : 'Name not available'}</p>
                    <p><strong>Birth:</strong> {laureate.birth ? `${formatDate(laureate.birth.date)} in ${laureate.birth.place.locationString.en}` : 'Birth info not available'}</p>
                    <p><strong>Death:</strong> {laureate.death ? `${formatDate(laureate.death.date)} in ${laureate.death.place.locationString.en}` : 'Death info not available'}</p>
                    
                    <hr />

                    <h5>Nobel Prize Details:</h5>
                    <ul className="list-group list-group-flush">
                    {laureate.nobelPrizes && laureate.nobelPrizes.map(prize => (
                        <li key={prize.awardYear} className={`list-group-item ${props.mode === 'dark'? 'dark-background' : ' '}`}>
                        {prize.categoryFullName ? prize.categoryFullName.en : 'Category not available'} Honored On {prize.dateAwarded ? <strong>{formatDate(prize.dateAwarded)}</strong> : 'Date not available'}
                        <br />
                        <strong>Basis for Honor:</strong> {prize.motivation ? prize.motivation.en : 'Motivation not available'}
                        <br />
                        {prize.affiliations && prize.affiliations[0] ? <><strong>Affiliation:</strong> {prize.affiliations[0].name.en}, {prize.affiliations[0].locationString.en}</> : 'Affiliation not available'}
                        </li>
                    ))}
                    </ul>

                    <hr />

                    <h5>Additional Links to read more information about {laureate.knownName ? laureate.knownName.en : 'Laureate'} :</h5>
                    <ul className="list-group  list-group-flush">
                    {laureate.wikipedia ? 
                        <li className={`list-group-item ${props.mode === 'dark'? 'dark-background' : ' '}`}>
                            <a href={laureate.wikipedia.english} className={` ${props.mode === 'dark'? 'dark-home' : 'subject-link' } card p-3 `} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        </li> 
                        : null
                    }
                    {laureate.links && laureate.links.map(link => (
                        link.rel === "external" ? (
                        <li key={link.href} className={`list-group-item ${props.mode === 'dark'? 'dark-background' : ' '}`}>
                            <a href={link.href} className={` ${props.mode === 'dark'? 'dark-home' : 'subject-link' } card p-3 `} target="_blank" rel="noopener noreferrer">{link.title}</a>
                        </li>
                        ) : null
                    ))}
                    </ul>
                </div> 
            </div>
        </div>
    )}
    </div>
  )
}
