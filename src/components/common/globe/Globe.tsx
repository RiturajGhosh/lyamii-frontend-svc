import React, { FC, useState } from "react";
import ReactGlobe, { Coordinates, Marker } from "react-globe";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Object3D } from "three";
import { useHistory } from "react-router-dom";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { useDispatch, useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import defaultMarkers from "./markers";

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
  function onClickMarker(
    marker: Marker,
    markerObject: Object3D,
    event: PointerEvent
  ) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    dispatch({
      type: SET_SELECTED_LOCATION,
      payload: marker,
    });
    window.scroll(0, 0);
    history.push("/explore");
  }
  function onDefocus(previousFocus: Coordinates) {
    setEvent({
      type: "DEFOCUS",
      previousFocus,
    });
    dispatch({
      type: SET_SELECTED_LOCATION,
      payload: {},
    });
  }
  // console.log(
  //   cities?.map((city: any, index: number) => {
  //     return city?.Column2 && {
  //       id: index.toString(),
  //       city: city?.Column2,
  //       color: "red",
  //       coordinates: [
  //         ...Array(parseFloat(city?.Column3), parseFloat(city?.Column4)),
  //       ],
  //       value: 50,
  //     };
  //   })
  // );
  return (
    <div>
      <ReactGlobe
        height={!screenSize.isMobile ? "500px" : "300px"}
        markers={defaultMarkers}
        options={options}
        width={!screenSize.isMobile ? "500px" : "300px"}
        onDefocus={onDefocus}
        globeBackgroundTexture={null}
        onClickMarker={onClickMarker}
      />
    </div>
  );
};

export default Globe;
