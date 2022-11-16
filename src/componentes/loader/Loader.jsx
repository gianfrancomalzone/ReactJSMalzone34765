import React from 'react'
import { Ring } from '@uiball/loaders'
import "../../styles.scss"

export default function Loader() {
    return (
        <div className="col d-flex justify-content-center mb-4">
            <div className="col d-flex justify-content-center mb-4">
                <Ring
                    size={100}
                    lineWeight={5}
                    speed={2}
                    color="black"
                    className="justify-content-center d-flex" />
            </div>
        </div>
    )
}




