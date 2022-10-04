import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { RootState, AppDispatch } from '../redux/store';
import { getPostList, initialState } from '../redux/postSlice';
import GMap from './common/GMap';
import type { Post } from '../types/post';
import type { MapPosition } from '../types/map';
import samplePostList from '../sampleData/posts';

const Map = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const mapOptions = {
    gestureHandling: 'cooperative',
    zoomControl: true,
    scaleControl: true,
    streetViewControl: false,
    panControl: false,
    mapTypeControl: true,
    fullscreenControl: true,
  };

  const initialMapCenterPosition = {
    lat: 35.6808610662155,
    lng: 139.76856460990368,
  };

  const dispatch: AppDispatch = useDispatch();

  const { postList } = useSelector((state: RootState) => state.post || initialState);
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [mapCenterPosition, setMapCenterPosition] = useState<MapPosition>(initialMapCenterPosition);

  useEffect(() => {
    dispatch(getPostList(samplePostList));
  }, [dispatch]);

  const handleActiveMarker = (post: Post) => {
    if (post.togo.id === undefined || post.togo.id === activeMarker) {
      return;
    }
    setActiveMarker(post.togo.id);
  };

  return (
    <GMap
      mapStyles={mapStyles}
      zoom={2}
      mapCenterPosition={mapCenterPosition}
      mapOptions={mapOptions}
      handleClick={() => setActiveMarker(null)}
    >
      {postList &&
        postList.map((post) => (
          <Marker
            key={post.togo.id}
            position={post.togo.position}
            onClick={() => handleActiveMarker(post)}
          >
            {activeMarker === post.togo.id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <Link to={`/posts/${post.togo.id}`}>{post.togo.location}</Link>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
    </GMap>
  );
};

export default Map;
