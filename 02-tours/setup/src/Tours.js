import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <div className='title'>
      <h2>our tours</h2>
      <div className='underline'></div>
      {tours.map((tour) => {
        return (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        )
      })}
    </div>
  );
};

export default Tours;
