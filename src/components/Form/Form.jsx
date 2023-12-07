import React from "react";
import "./Form.css";

import InputF from "../InputF/InputF";
import Select from "../Select/Select";

import { states } from "../../datas/states";
import { departement } from "../../datas/department";

export default function Form() {

    return (
        <form className="form">
            <div className="part-form">
                <InputF
                    id="firstName"
                    label="First Name"
                />
                <InputF
                    id="lastName"
                    label="Last Name"
                />
                <InputF
                    id="birthday"
                    label="Date of Birth"
                />
                <InputF
                    id="startdate"
                    label="Start Date"
                />
            </div>
            <div className="part-form">
                <div className="adress">
                    <InputF
                        id="street"
                        label="Street"
                    />
                    <InputF
                        id="city"
                        label="City"
                    />
                    <Select
                        id="state"
                        label="State"
                        options={states}
                    />
                    <InputF
                        id="Zip Code"
                        label="City"
                    />
                </div>
                <Select
                    id="departement"
                    label="Department"
                    options={departement}
                />


            </div>
            <button className="modal" type="submit">Save</button>
        </form>
    );
}