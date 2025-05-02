import React from 'react'

export default function TitleDesc({ title, desc }) {
    return (
        <div className="flex gap-[14px] flex-col">
            <h2 className="text-[38px] font-bold leading-normal text-white">{title}</h2>
            <p className="text-[18px] text-grey-shade-60 font-normal">{desc} </p>
        </div>
    )
}
