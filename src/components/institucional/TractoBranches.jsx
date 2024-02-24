'use client';
import { useState } from "react";
import { branches } from "@/seed"
import BranchesMap from "./BranchesMap"

export const TractoBranches = () => {

    const [brancheSelected, setBrancheSelected] = useState(branches[0]);

    return (
        <div className="location">
            <div>
                <BranchesMap
                    branches={branches}
                    branchSelected={brancheSelected}
                    key={brancheSelected.city}
                />
            </div>
            <div className="branches__container">
                <ul className="branches">

                    {
                        branches.map((branch, index) => {
                            return (
                                <li key={branch.city + index} onClick={() => setBrancheSelected(branch)}>
                                    <section className="branches__branch">
                                        <h3 className="branch__city">{branch.city}</h3>
                                        <p className="branches__address">{branch.address}</p>
                                        <p className="branches__departament">{branch.departament}</p>
                                        <p className="branches__tel"><span className="branches__tellabel">Tel:</span>{branch.tel}</p>
                                    </section>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}
