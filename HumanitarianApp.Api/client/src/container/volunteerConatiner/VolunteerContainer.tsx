import React from "react";
import AdList from "shared/components/ad-list/AdList";
import {sectionMoc} from "shared/modules/layout/layoutData.moc";

const section = sectionMoc["Волонтери"];

export const VolunteerContainer = () => {
    return (<AdList id={section.id} ads={section.ads} numberAdsOfPages={0}/>)
}
