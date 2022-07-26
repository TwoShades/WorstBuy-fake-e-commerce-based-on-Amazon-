import React from "react"
import ProductsList from "../ProductsList";
import Product from "../Product";
import { useState } from "react";
import Search from "../Search"

export default function Filter() {

    const [choice, setChoice] = useState({ cate: "" })

    // const search = ProductsList.map((item) =>
    //     if()
    // )

    function handleChange(event) {

        console.log("sdfa", event.target.value)
        setChoice(event.target.value)
        // console.log("wowfe", choice.target.value)




    }

    return (
        <div>
            <form className="choose">
                <label htmlFor="cate">What are you looking for?</label>
                <br />
                <select
                    id="cate"
                    value={choice}
                    onChange={handleChange}
                    name="cate"
                >
                    <option value="Choose">Choose</option>
                    <option value="Phone">Phone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Tablet">Tablet</option>

                </select>
            </form>
            {(choice != "Choose") && <Search name={choice} />}
        </div>
    )

} 