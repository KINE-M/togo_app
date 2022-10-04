import type { Post } from '../types/post';

const samplePostList: Post[] = [
  {
    title: '天空都市　マチュピチュ',
    description:
      'マチュピチュはアンデスの山中、標高2,400mの断崖に突如として姿をあらわす都市遺跡である。ケチャ語で「年老いた峰」という意味を持つこの地は、15世紀半ばのインカ帝国時代に築かれ1911年、偶然に発見されるまで、深い密林に覆われていた。 そのため神殿、大広場、段々畑、墓地、水路や通路が巡らされた住居跡などがそのままの状態で残されている。',
    publishedAt: '2022-01-01',
    image: 'https://source.unsplash.com/HSAItzUiSrg',
    togo: {
      id: 0,
      done: true,
      tag: '世界遺産',
      location: 'マチュピチュ',
      position: {
        lat: -13.163113012711815,
        lng: -72.54494397376752,
      },
    },
  },
  {
    title: 'あっさり系　豚骨らーめん',
    description:
      '豚骨は鶏のろっ骨である「鶏ガラ」とともにスープ作りに必要な素材のひとつです。多くのラーメン屋では、豚骨や鶏ガラ、野菜などを加えてスープを作っています。',
    publishedAt: '2021-12-01',
    image: 'https://source.unsplash.com/mE6kjov4rTg',
    togo: {
      id: 1,
      done: true,
      location: 'ラーメン屋',
      tag: 'らーめん',
      position: {
        lat: 35.6808610662155,
        lng: 139.76856460990368,
      },
    },
  },
  {
    title: 'ニューヨークに行ってきました！！',
    description:
      'ニューヨーク市はハドソン川と大西洋の接点にあり、5 つの行政区に分かれています。その中核となるマンハッタンは、人口密度の高い、世界の主要な商業、金融、文化の中心地の 1 つです。',
    publishedAt: '2021-12-01',
    image: 'https://source.unsplash.com/iANyXOzpsMM',
    togo: {
      id: 2,
      done: true,
      location: 'ニューヨーク',
      tag: 'アメリカ',
      position: {
        lat: 40.75334800401968,
        lng: -73.99070313667248,
      },
    },
  },
  {
    title: '山を登ってきました！',
    description:
      '飛騨山脈（北アルプス）北部の立山連峰にある標高2,999mの山。富山県の上市町と立山町にまたがる。中部山岳国立公園内にあり、山域はその特別保護地区になっている。日本百名山および新日本百名山に選定されている。',
    publishedAt: '2022-04-01',
    image: 'https://source.unsplash.com/ePpaQC2c1xA',
    togo: {
      id: 3,
      done: true,
      location: '剱岳（つるぎだけ）',
      tag: '山',
      position: {
        lat: 36.624476367402565,
        lng: 137.61765903902852,
      },
    },
  },
];

export default samplePostList;
