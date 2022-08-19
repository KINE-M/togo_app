import type { Togo } from '../types/togo';

const sampleTogoList: Togo[] = [
  {
    id: 0,
    done: true,
    location: 'マチュピチュ',
    tag: '世界遺産',
    position: {
      lat: -13.163113012711815,
      lng: -72.54494397376752,
    },
  },
  {
    id: 1,
    done: false,
    location: 'イタリア',
    tag: 'ヨーロッパ',
    position: {
      lat: 42.479879289066886,
      lng: 13.033953405114632,
    },
  },
  {
    id: 2,
    done: false,
    location: '富士山',
    tag: '山',
    position: {
      lat: 35.36118465795378,
      lng: 138.7277925158369,
    },
  },
  {
    id: 3,
    done: false,
    location: '沖縄',
    tag: '海',
    position: {
      lat: 26.60456447107552,
      lng: 128.03689813756162,
    },
  },
];

export default sampleTogoList;
