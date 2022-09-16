import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import TogoForm from './TogoForm';
import { RootState, AppDispatch } from '../../redux/store';
import { addTogo, initialState } from '../../redux/togoSlice';
import useSetTogoFormValue from '../../hooks/togo/useSetTogoFormValue';
import type { Togo } from '../../types/togo';

type AddTogoModalProps = {
  togoData: Togo;
  isOpenAddTogoModal: boolean;
  handleCloseAddTogoModal: () => void;
};

const AddTogoModal: React.FC<AddTogoModalProps> = ({
  togoData,
  isOpenAddTogoModal,
  handleCloseAddTogoModal,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const [
    { mapMarkerPosition, location, tag, mapCenterPosition },
    {
      handleChangeLocation,
      handleChangeTag,
      handleChangeMapCenterPosition,
      handleChangeMapMarkerPosition,
    },
  ] = useSetTogoFormValue(togoData, isOpenAddTogoModal);

  const { togoList } = useSelector((state: RootState) => state.togo || initialState);

  const handleAddTogo = () => {
    if (!location || !tag) {
      return;
    }
    const addTogoData: Togo = {
      id: togoList.length,
      done: false,
      location,
      tag,
      position: mapMarkerPosition,
    };
    dispatch(addTogo(addTogoData));
    handleCloseAddTogoModal();
  };

  return (
    <Dialog open={isOpenAddTogoModal} onClose={handleCloseAddTogoModal} fullWidth maxWidth="md">
      <DialogTitle>あなたが行きたいところを登録しましょう！</DialogTitle>
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
        <Button variant="contained" onClick={handleAddTogo}>
          登録
        </Button>
        <Button variant="outlined" onClick={handleCloseAddTogoModal}>
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTogoModal;
