import React from 'react';

export const Pizza = (props) => {
    if(!props.data) {
        return null;
    } else {
        return (
            <div className="pizza">
                <img alt="crust" src={`${process.env.PUBLIC_URL}/images/crust/${props.data.Size}/${props.data.Crust}.png`} />
                <img alt="donnes" src={`${process.env.PUBLIC_URL}/images/donnes/${props.data.Donnes}.png`} />
                <img alt="sauce" src={`${process.env.PUBLIC_URL}/images/sauce/${props.data.Sauce}.png`} />
                <img alr="speciality" src={`${process.env.PUBLIC_URL}/images/speciality/${props.data.Speciality}.png`} />
            </div>
        )
    }
}