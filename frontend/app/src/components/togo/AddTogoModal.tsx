import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GMap from '../common/GMap';
import type { MapPosition } from '../../types/map';

type AddTogoModalProps = {
  isOpenAddTogoModal: boolean;
  handleCloseAddTogoModal: () => void;
};

const AddTogoModal: React.FC<AddTogoModalProps> = ({
  isOpenAddTogoModal,
  handleCloseAddTogoModal,
}) => {
  const mapStyles = {
    height: '500px',
    width: '100%',
  };

  const mapOptions = {
    gestureHandling: 'cooperative',
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    panControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  const [searchLocationKeyword, setSearchLocationKeyword] = useState<string>('');
  const [mapCenterPosition, setMapCenterPosition] = useState<MapPosition>({
    lat: 35.6808610662155,
    lng: 139.76856460990368,
  });
  const [mapMarkerPosition, setMapMarkerPosition] = useState<MapPosition>({
    lat: 35.6808610662155,
    lng: 139.76856460990368,
  });

  const createMarker = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      setMapMarkerPosition({ lat, lng });
    }
  };

  const geocode = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder
      .geocode({ address: searchLocationKeyword }, (results, status) => {
        if (results && status === google.maps.GeocoderStatus.OK) {
          const lat = results[0].geometry?.location.lat();
          const lng = results[0].geometry?.location.lng();
          setMapCenterPosition({ lat, lng });
        }
      })
      .catch((err) => console.log(err));
  };

  const searchLocation = () => {
    if (!searchLocationKeyword) {
      return;
    }
    geocode();
  };

  const handleKeyPressSearchLocation = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchLocation();
    }
  };

  const handleSearchLocation = () => {
    searchLocation();
  };

  return (
    <Dialog open={isOpenAddTogoModal} onClose={handleCloseAddTogoModal} fullWidth maxWidth="md">
      <DialogTitle>あなたが行きたいところを登録しましょう！</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="場所"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField margin="dense" id="name" label="タグ" type="text" fullWidth variant="standard" />
        <Paper
          component="form"
          elevation={2}
          sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={(e) => setSearchLocationKeyword(e.target.value)}
            onKeyDown={handleKeyPressSearchLocation}
          />
          <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleSearchLocation}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Paper elevation={0} sx={{ mt: 2 }}>
          <GMap
            mapStyles={mapStyles}
            zoom={10}
            mapCenterPosition={mapCenterPosition}
            mapOptions={mapOptions}
            handleClick={(e) => createMarker(e)}
          >
            {mapMarkerPosition && <Marker position={mapMarkerPosition} />}
          </GMap>
        </Paper>
      </DialogContent>
      <DialogActions sx={{ mb: 1, ml: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <Button variant="contained">登録</Button>
        <Button variant="outlined" onClick={handleCloseAddTogoModal}>
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTogoModal;
