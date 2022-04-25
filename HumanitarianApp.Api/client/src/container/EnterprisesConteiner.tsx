import React from "react";
import AdList from "components/ad-list/AdList";
import {sectionMoc} from "shared/modules/layout/layoutData.moc";

export const EnterprisesContainer = () => {
    const [section] = React.useState(sectionMoc["Підприємства"])

    return (<AdList id={section.id} ads={section.ads} numberAdsOfPages={0}/>)
}
