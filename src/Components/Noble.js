import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Noble(props) {
    let {winnername,catagory,date,prizeamount,motivation,id,laureateLink} = props
    function formatDate(inputDate) {
      const date = new Date(inputDate);
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }

  return (
    <div className='container my-2'>
      <div className="card " >  
  <div className={`card-body  text-bg-${props.mode === 'dark'? 'dark' : 'light'} border-${props.mode === 'dark' ? 'light' : 'dark'} `}>
    <h3 className="card-title text-center">{catagory}</h3>
    <h4 className={`card-subtitle mb-2 ${props.mode === 'dark'? ' ' : 'text-body-secondary'} `}> <b>Award Winner: {winnername}</b></h4>
    <h5 className={`card-subtitle mb-2 ${props.mode === 'dark'? ' ' : 'text-body-secondary'} `}>Honored On: {formatDate(date)}</h5>
    <h5 className={`card-subtitle mb-2 ${props.mode === 'dark'? ' ' : 'text-body-secondary'} `}>Prize Amount: {prizeamount}</h5>
    <p className="card-text"><b>Basis for Honor:</b> {motivation}</p>{id}
    <Link to={`/laureate/${encodeURIComponent(laureateLink)}`} className=" link-secondary text-decoration-none">Know more about {winnername}</Link>
  </div>
</div>
    </div>
  )
}
