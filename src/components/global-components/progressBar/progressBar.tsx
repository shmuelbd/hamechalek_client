import { ProgressBar } from 'primereact/progressbar'
import React from 'react'

type Props = {}

const ProgressBarCustom = (props: Props) => {
    return (
        <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
    )
}

export default ProgressBarCustom