import React, { useState, useEffect } from 'react';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchedCars = [
      { id: 1, name: 'Car 1' },
      { id: 2, name: 'Car 2' },
      { id: 3, name: 'Car 3' }
    ];
    setCars(fetchedCars);
  }, []);

  return (
    <div className="cars">
      <h1>Cars</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cars;