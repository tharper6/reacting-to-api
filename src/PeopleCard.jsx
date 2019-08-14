import React from 'react';

const PeopleCard = (props) => {
    return(
        <article className='col-md-8' >
            <div className="card shadow">
                <div className="card-body bg-secondary">
                    <h3 className='bg-info text-white p-2 border border-dark rounded'>Name: {props.person.name} </h3>
                    <p className='text-white' >Age: {props.person.age} </p>
                    <p className='text-white' >Gender: {props.person.gender} </p>
                    <p className='bg-info text-white p-2 border border-dark rounded'> <a className='text-white' href={props.person.url}>Personal Website</a>  </p>
                </div>
            </div>
        </article>
    )
}

export default PeopleCard;