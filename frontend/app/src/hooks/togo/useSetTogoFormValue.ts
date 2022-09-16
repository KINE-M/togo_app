import { useState, useEffect } from 'react';
import { Togo } from '../../types/togo';
import { MapPosition } from '../../types/map';

type TogoFormValue = {
  mapCenterPosition: MapPosition;
  location: string;
  tag: string;
  mapMarkerPosition: MapPosition;
};

type SetTogoFormValue = {
  handleChangeMapCenterPosition: (position: MapPosition) => void;
  handleChangeLocation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTag: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMapMarkerPosition: (position: MapPosition) => void;
};

const useSetTogoFormValue = (
  togoData: Togo,
  isOpenModal: boolean
): [TogoFormValue, SetTogoFormValue] => {
  const [mapCenterPosition, setMapCenterPosition] = useState<MapPosition>(togoData.position);

  const [location, setLocation] = useState<string>(togoData.location);
  const [tag, setTag] = useState<string>(togoData.tag);
  const [mapMarkerPosition, setMapMarkerPosition] = useState<MapPosition>(togoData.position);

  const initializeTogoState = (isOpen: boolean) => {
    if (isOpen) {
      setLocation(togoData.location);
      setTag(togoData.tag);
      setMapMarkerPosition(togoData.position);
      setMapCenterPosition(togoData.position);
    }
  };

  useEffect(() => {
    initializeTogoState(isOpenModal);
  }, [isOpenModal]);

  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const handleChangeMapMarkerPosition = (position: MapPosition) => {
    setMapMarkerPosition(position);
  };

  const handleChangeMapCenterPosition = (position: MapPosition) => {
    setMapCenterPosition(position);
  };

  return [
    {
      mapMarkerPosition,
      location,
      tag,
      mapCenterPosition,
    },
    {
      handleChangeLocation,
      handleChangeTag,
      handleChangeMapCenterPosition,
      handleChangeMapMarkerPosition,
    },
  ];
};

export default useSetTogoFormValue;
