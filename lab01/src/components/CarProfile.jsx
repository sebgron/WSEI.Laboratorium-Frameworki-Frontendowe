import React from "react";

const CarProfile = ({ car }) => {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">ID: {car.id}</p>
                <p className="card-text">Marka: {car.brand}</p>
                <p className="card-text">Silnik: {car.engine}</p>
                <p className="card-text">Rocznik: {car.year}</p>
            </div>
        </div>
    );
}

export default CarProfile;