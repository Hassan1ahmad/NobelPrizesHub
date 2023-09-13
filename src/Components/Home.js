import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Home(props) {
  return (
    <div className={props.mode === 'dark'? 'dark-background':''}>
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4 top-margin">Nobel Prizes</h1>
                <p className="lead">
                    The Nobel Prizes are international awards bestowed annually in several categories by 
                    Swedish and Norwegian institutions in recognition of academic, cultural, or scientific advances.
                </p>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className={`card  text-bg-${props.mode} border-${props.mode === 'dark' ? 'light' : 'dark'} mb-4`}>
                        <div className={`card-header border-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            Nobel Prize
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                The Nobel Prizes were established by Alfred Nobel's will in 1895 and were first awarded in 1901 in Physics, 
                                Chemistry, Physiology or Medicine, Literature, and Peace. The Peace Prize is awarded in Oslo, Norway, 
                                while the other prizes are awarded in Stockholm, Sweden.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className={`card text-bg-${props.mode} border-${props.mode === 'dark' ? 'light' : 'dark'} mb-4`}>
                        <div className={`card-header border-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel
                        </div>
                        <div className="card-body  ">
                            <p className="card-text ">
                                Established in 1968 through a donation from Sweden's central bank, Sveriges Riksbank, this prize is commonly referred to 
                                as the Nobel Prize in Economics. It was instituted to celebrate the bank's 300th anniversary and is awarded alongside the 
                                original Nobel Prizes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col md-3">
                    <h3>Important Nobel Prize Categories:</h3>
                    <ul className="list-unstyled " >
                        {['Chemistry', 'Physics', 'Economics', 'Literature','Search Manually'].map(subject => (
                            <li key={subject} className="mb-3 " >
                                <Link to={`/${subject.toLowerCase()}`} className={` ${props.mode === 'dark'? 'dark-home' : 'subject-link' } card p-3 `}>
                                    {subject}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className={`alert alert-${props.mode === 'dark' ? 'info' : 'light'} mt-3`}role="alert">
                    <p className="text-muted font-italic">
    Note: The information provided is sourced from an external API and may contain inaccuracies or errors.<br/> Always verify with official sources before relying on it.
                    </p>
                   </div>
                </div>
            </div>
        </div>


    </div>
  )
}
