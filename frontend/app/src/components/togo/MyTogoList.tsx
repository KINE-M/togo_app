import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Checkbox,
  Chip,
  Fab,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  LocationOn as LocationOnIcon,
  ModeEditOutline as ModeEditOutlineIcon,
} from '@mui/icons-material';
import { RootState, AppDispatch } from '../../redux/store';
import { getTogoList, updateTogoDone, deleteTogo, initialState } from '../../redux/togoSlice';
import AddTogoModal from './AddTogoModal';
import sampleTogoList from '../../sampleData/togo';
import type { Togo } from '../../types/togo';

const initialTogoData = {
  id: undefined,
  done: false,
  location: '',
  tag: '',
  position: {
    lat: 35.6808610662155,
    lng: 139.76856460990368,
  },
};

const MyTogoList = () => {
  const dispatch: AppDispatch = useDispatch();

  const { togoList } = useSelector((state: RootState) => state.togo || initialState);
  const [isOpenAddTogoModal, setIsOpenAddTogoModal] = useState<boolean>(false);
  const [isOpenUpdateTogoModal, setIsOpenUpdateTogoModal] = useState<boolean>(false);

  const [togoData, setTogoData] = useState<Togo>(initialTogoData);

  useEffect(() => {
    dispatch(getTogoList(sampleTogoList));
  }, [dispatch]);

  const handleChangeTogoDone = (id: number | undefined) => {
    if (id === undefined) {
      return;
    }
    dispatch(updateTogoDone(id));
  };

  const handleDeleteTogo = (id: number | undefined) => {
    if (id === undefined) {
      return;
    }
    dispatch(deleteTogo(id));
  };

  const handleOpenAddTogoModal = () => {
    setIsOpenAddTogoModal(true);
  };

  const handleCloseAddTogoModal = () => {
    setIsOpenAddTogoModal(false);
  };

  const handleOpenUpdateTogoModal = (id: number | undefined) => {
    if (id === undefined) {
      return;
    }
    const data = togoList.filter((togo) => togo.id === id);
    setTogoData(data[0]);
    setIsOpenUpdateTogoModal(true);
  };

  const handleCloseUpdateTogoModal = () => {
    setIsOpenUpdateTogoModal(false);
  };

  return (
    <>
      <AddTogoModal
        togoData={initialTogoData}
        isOpenAddTogoModal={isOpenAddTogoModal}
        handleCloseAddTogoModal={handleCloseAddTogoModal}
      />
      <UpdateTogoModal
        togoData={togoData}
        isOpenUpdateTogoModal={isOpenUpdateTogoModal}
        handleCloseUpdateTogoModal={handleCloseUpdateTogoModal}
      />
      <Typography
        component="h2"
        variant="h6"
        color="primary"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        My List
      </Typography>
      {togoList.length ? (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              <TableCell>場所</TableCell>
              <TableCell>タグ</TableCell>
              <TableCell>地図</TableCell>
              <TableCell>編集</TableCell>
              <TableCell>削除</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {togoList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox checked={item.done} onChange={() => handleChangeTogoDone(item.id)} />
                </TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  <Chip label={item.tag} color="primary" size="small" />
                </TableCell>
                <TableCell>
                  <Link
                    href={`https://maps.google.co.jp/maps?ll=${item.position.lat},${item.position.lng}&z=20`}
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <LocationOnIcon />
                  </Link>
                </TableCell>
                <TableCell>
                  <ModeEditOutlineIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleOpenUpdateTogoModal(item.id)}
                  />
                </TableCell>
                <TableCell>
                  <DeleteIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleDeleteTogo(item.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="body1">登録されているToGoはありません</Typography>
      )}
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        sx={{ position: 'absolute', top: 16, right: 16 }}
        onClick={handleOpenAddTogoModal}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default MyTogoList;
