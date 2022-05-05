import React from "react";

interface FilerButtons {
    id: number;
    name: string;
}

interface Props {
    filterButtons: FilerButtons[];
    onFilterSelect: (value: string) => void;
}

export const SectionCategories = React.memo(({filterButtons, onFilterSelect}: Props) => {
    const categories = filterButtons.map(({id, name}) => (<option key={id} value={name}>{name}</option>))

    return <>{filterButtons.length > 0 && (
        <select className="section__categories"
                onChange={(e) => onFilterSelect(e.target.value)}>{categories}</select>
    )} </>;
});
