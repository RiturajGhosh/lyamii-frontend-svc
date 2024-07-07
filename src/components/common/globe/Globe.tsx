import React, { FC, useState } from "react";
import ReactGlobe, { Coordinates, Marker } from "react-globe";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import defaultMarkers from "./markers";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { Object3D } from "three";

function markerTooltipRenderer(marker: Marker) {
  const tooltipContent =
    // document.createElement("div");
    // tooltipContent.innerHTML = `
    //   <img src="${marker.image}" className={'w-100'}/><br/>
    `${marker.city}`;
  return tooltipContent;
}

const options = {
  markerTooltipRenderer: markerTooltipRenderer,
};

// type GlobeProps = {
//   width: any;
//   height: any;
// }
const Globe: FC = () => {
  const [, setEvent] = useState({}) as any;
  const screenSize = useSelector(selectScreenSize);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickMarker = (
    marker: Marker,
    markerObject: Object3D,
    event: PointerEvent
  ) => {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    dispatch({
      type: SET_SELECTED_LOCATION,
      payload: {
        city: marker.city,
        id: marker.id,
        value: marker.value,
        coordinates: marker.coordinates,
        color: marker.color,
      },
    });
    window.scroll(0, 0);
    history.push("/explore");
    return;
  };
  function onDefocus(previousFocus: Coordinates) {
    setEvent({
      tydispatchpe: "DEFOCUS",
      previousFocus,
    });
    dispatch({
      type: SET_SELECTED_LOCATION,
      payload: {},
    });
  }
  return (
    <div>
      <ReactGlobe
        height={screenSize.screenSize / 3}
        markers={defaultMarkers}
        options={options}
        width={screenSize.screenSize / 3}
        onDefocus={onDefocus}
        globeBackgroundTexture={null}
        onClickMarker={onClickMarker}
      />
    </div>
  );
};

export default Globe;
