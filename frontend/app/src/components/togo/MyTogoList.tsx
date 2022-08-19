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
import sampleTogoList from '../../sampleData/togo';

const MyTogoList = () => (
  <>
    <Typography
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
      sx={{ fontWeight: 'bold' }}
    >
      My List
    </Typography>
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
        {sampleTogoList &&
          sampleTogoList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox checked={item.done} />
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
                <ModeEditOutlineIcon sx={{ cursor: 'pointer' }} />
              </TableCell>
              <TableCell>
                <DeleteIcon sx={{ cursor: 'pointer' }} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
    <Fab
      color="primary"
      aria-label="add"
      size="medium"
      sx={{ position: 'absolute', top: 16, right: 16 }}
    >
      <AddIcon />
    </Fab>
  </>
);

export default MyTogoList;
