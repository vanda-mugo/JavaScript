import React from "react";
import './Services.css';

export const Services = () => {
    const [selectedService, setSelectedService] = React.useState("FrontEnd-Development");

    const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedService(event.target.value);
    };

    return (
        <div className="services wrapper">
            <div className="container">
                <input
                    type="radio"
                    name="service"
                    id="c1"
                    value="FrontEnd-Development"
                    checked={selectedService === "FrontEnd-Development"}
                    onChange={handleServiceChange}
                />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="description">
                            <h4>FrontEnd Engineering</h4>
                            <p>Details about FrontEnd Engineering services...</p>
                        </div>
                        <div className="icon"></div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="service"
                    id="c2"
                    value="graphicDesign"
                    checked={selectedService === "graphicDesign"}
                    onChange={handleServiceChange}
                />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="description">
                            <h4>Graphic Design</h4>
                            <p>Details about Graphic Design services...</p>
                        </div>
                        <div className="icon"></div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="service"
                    id="c3"
                    value="BackEnd-Development"
                    checked={selectedService === "BackEnd-Development"}
                    onChange={handleServiceChange}
                />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="description">
                            <h4>BackEnd Engineering</h4>
                            <p>Details about BackEnd Engineering services...</p>
                        </div>
                        <div className="icon"></div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="service"
                    id="c4"
                    value="Flat-Art-Design"
                    checked={selectedService === "Flat-Art-Design"}
                    onChange={handleServiceChange}
                />
                <label htmlFor="c4" className="card">
                    <div className="row">
                        <div className="description">
                            <h4>Flat Art Design</h4>
                            <p>Details about Flat-Art-Design services...</p>
                        </div>
                        <div className="icon"></div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="service"
                    id="c5"
                    value="Drone-Videography"
                    checked={selectedService === "Drone-Videography"}
                    onChange={handleServiceChange}
                />
                <label htmlFor="c5" className="card">
                    <div className="row">
                        <div className="description">
                            <h4>Drone Videography</h4>
                            <p>Details about Drone Videography services...</p>
                        </div>
                        <div className="icon"></div>
                    </div>
                </label>
            </div>
        </div>
    );
};