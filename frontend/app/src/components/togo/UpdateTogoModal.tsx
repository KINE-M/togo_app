import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import TogoForm from './TogoForm';
import { AppDispatch } from '../../redux/store';
import { updateTogo } from '../../redux/togoSlice';
import useSetTogoFormValue from '../../hooks/togo/useSetTogoFormValue';
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

  const [
    { mapCenterPosition, location, tag, mapMarkerPosition },
    {
      handleChangeLocation,
      handleChangeTag,
      handleChangeMapCenterPosition,
      handleChangeMapMarkerPosition,
    },
  ] = useSetTogoFormValue(togoData, isOpenUpdateTogoModal);

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
