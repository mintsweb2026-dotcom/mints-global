export interface Category {
  _id: string;
  name: string;
  description: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  titleImage: string;
  type: string;
  mediaUrls: string[];
  category: Category;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const projects: Project[] = [
  {
    "_id": "69de17735514a13aa28eef5f",
    "title": "NUX",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162776/projects/g13bkwz2lwhnqh4wfsne.jpg",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162672/projects/o453bwq3rnvfwjp0mxrg.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162672/projects/ta10vhouxdu8z9oxqymj.webp",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162674/projects/ec82s27p42hslvu8uf6y.webp"
    ],
    "category": {
      "_id": "69c4e4f6759f54071ce99070",
      "name": "Branding",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-04-14T10:31:15.823Z",
    "updatedAt": "2026-04-14T10:32:58.556Z",
    "__v": 0
  },
  {
    "_id": "69de17115514a13aa28eef52",
    "title": "IDUKKI GOLD",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162572/projects/ly8ul6hvmqkvzsrauw1a.jpg",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162573/projects/mf7xxxtwlpjg0ycmpzu0.webp",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162575/projects/yr1jix1f8ecueosyvly8.webp",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162575/projects/zsez2awu1aavzosmvwsr.jpg"
    ],
    "category": {
      "_id": "69c4e4f6759f54071ce99070",
      "name": "Branding",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-04-14T10:29:37.513Z",
    "updatedAt": "2026-04-14T10:29:37.513Z",
    "__v": 0
  },
  {
    "_id": "69de16185514a13aa28eef49",
    "title": "CLOTHS",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162324/projects/ut6lrqfyrulc8uz5ulyi.jpg",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162326/projects/vhdosdwfbfp4m9mgdxes.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162327/projects/si6sumvl5cimkko42sbf.jpg"
    ],
    "category": {
      "_id": "69c63930575c7d188ed20585",
      "name": "PRODUCT PHOTOGRAPHY",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-04-14T10:25:28.329Z",
    "updatedAt": "2026-04-14T10:25:28.329Z",
    "__v": 0
  },
  {
    "_id": "69de15ca5514a13aa28eef3f",
    "title": "OUD",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162246/projects/bahgtzac9q5pgqd3twof.jpg",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162247/projects/dla048ypj2jlzoqcufdt.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162249/projects/vfhrirxvox8o701pe8t0.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1776162248/projects/cmjhmf58w1mobcqyihqf.jpg"
    ],
    "category": {
      "_id": "69c63930575c7d188ed20585",
      "name": "PRODUCT PHOTOGRAPHY",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-04-14T10:24:10.959Z",
    "updatedAt": "2026-04-14T10:24:10.959Z",
    "__v": 0
  },
  {
    "_id": "69c64c9c4143e208ab5515bf",
    "title": "INDIAN PRAVASI MOVEMENT",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774605106/projects/lucrxc4m4dydmuoyfpj1.png",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603418/projects/qrz2xxsdy6svotywwhul.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603411/projects/lkhi3zct4nxgodrg2xnt.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603411/projects/ie1zki1ciat2agyo0ats.png"
    ],
    "category": {
      "_id": "69be31c4048c8703b25a8a93",
      "name": "Web Development",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-03-27T09:23:40.147Z",
    "updatedAt": "2026-03-27T09:51:48.334Z",
    "__v": 0
  },
  {
    "_id": "69c648d35ed3353094fa8adf",
    "title": "GARDEN VILLE",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774603616/projects/goy9vcfipzyaojoshqge.png",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774602448/projects/fpn1inxui34o6tptihwa.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774602444/projects/hl44zk8pkgdiwrtn7koo.png",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774602446/projects/ciystvrhgyitovq5urlk.png"
    ],
    "category": {
      "_id": "69be31c4048c8703b25a8a93",
      "name": "Web Development",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-03-27T09:07:31.060Z",
    "updatedAt": "2026-03-27T09:26:58.654Z",
    "__v": 0
  },
  {
    "_id": "69c64405376c937a3c1ce3f9",
    "title": "OUD",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601217/projects/zmmma37acqzzdehnvgma.jpg",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601219/projects/hf0d0aydoi2fo3xitcko.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601219/projects/wjdcjsbbqr51rhva4u8m.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601220/projects/mpy3pjwuw4zy6pdaqjf6.jpg"
    ],
    "category": {
      "_id": "69c63930575c7d188ed20585",
      "name": "PRODUCT PHOTOGRAPHY",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-03-27T08:47:01.381Z",
    "updatedAt": "2026-03-27T08:47:01.381Z",
    "__v": 0
  },
  {
    "_id": "69c64373162eec10142391e5",
    "title": "LOGO AND MOCKUPS",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601069/projects/wnjckc6twxgssp8xlvtg.jpg",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601071/projects/bkq0uhiq5m34htsjjct4.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601072/projects/zforoemkvmz8uy34we92.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601073/projects/zw32iusufou0kq0dekod.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601074/projects/zqiq0nonxg1chgwraz7f.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774601073/projects/ipttwd7xdtnfd2cbih6i.jpg"
    ],
    "category": {
      "_id": "69c4e4f6759f54071ce99070",
      "name": "Branding",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-03-27T08:44:35.513Z",
    "updatedAt": "2026-03-27T08:44:35.513Z",
    "__v": 0
  },
  {
    "_id": "69c63a5d83a415da7848665d",
    "title": "POSTERS",
    "description": "",
    "titleImage": "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598742/projects/lntdd1i4pv2bvw0mzhge.jpg",
    "type": "image",
    "mediaUrls": [
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598745/projects/vi3g6rkrwbvpclpcgfwr.gif",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598747/projects/jb7ueuex0x6ku4bsjhoj.jpg",
      "https://res.cloudinary.com/dvzbjweuk/image/upload/v1774598747/projects/t9esp8xij0jjfuzn4ufb.jpg"
    ],
    "category": {
      "_id": "69be31dc048c8703b25a8a98",
      "name": "DIGITAL MARKETING",
      "description": ""
    },
    "tags": [],
    "createdAt": "2026-03-27T08:05:49.662Z",
    "updatedAt": "2026-03-27T08:05:49.662Z",
    "__v": 0
  }
];
