import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import TogoForm from './TogoForm';
import { AppDispatch } from '../../redux/store';
import { updateTogo } from '../../redux/togoSlice';
import type { MapPosition } from '../../types/map';
import type { Togo } from '../../types/togo';

type UpdateTogoModalProps = {
  togoData: Togo;
  isOpenUpdateTogoModal: boolean;
  handleCloseUpdateTogoModal: () => void;
};

const UpdateTogoModal: React.FC<UpdateTogoModalProps> = ({
  togoData,
  isOpenUpdateTogoModal,
  handleCloseUpdateTogoModal,
}) => {
  const dispatch: AppDispatch = useDispatch();

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
    initializeTogoState(isOpenUpdateTogoModal);
  }, [isOpenUpdateTogoModal]);

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

  const handleUpdateTogo = () => {
    if (!location || !tag) {
      return;
    }
    const updateTogoData: Togo = {
      id: togoData.id,
      done: togoData.done,
      location,
      tag,
      position: mapMarkerPosition,
    };
    dispatch(updateTogo(updateTogoData));
    handleCloseUpdateTogoModal();
  };

  return (
    <Dialog
      open={isOpenUpdateTogoModal}
      onClose={handleCloseUpdateTogoModal}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>TOGOの編集</DialogTitle>
      <TogoForm
        location={location}
        tag={tag}
        mapCenterPosition={mapCenterPosition}
        mapMarkerPosition={mapMarkerPosition}
        handleChangeLocation={handleChangeLocation}
        handleChangeTag={handleChangeTag}
        handleChangeMapMarkerPosition={handleChangeMapMarkerPosition}
        handleChangeMapCenterPosition={handleChangeMapCenterPosition}
      />
      <DialogActions sx={{ mb: 1, ml: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <Button variant="contained" onClick={handleUpdateTogo}>
          編集
        </Button>
        <Button variant="outlined" onClick={handleCloseUpdateTogoModal}>
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateTogoModal;
