const vehicles = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733595305/bike_ncwcfe.png',
    title: 'বাইক',
    to: 'bike',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593140/tomtom_vxyaqr.png',
    title: 'অটো',
    to: 'auto',
  },
  //   {
  //     id: 3,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593140/tomtom_vxyaqr.png',
  //     title: 'টমটম',
  //     to: 'tomtom',
  //   },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593130/cng_oolhgr.png',
    title: 'সিএনজি',
    to: 'cng',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593128/car_pukwfl.png',
    title: 'কার',
    to: 'car',
    subTypes: [
      {
        id: 1,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338882/3_%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%AE_%E0%A7%AB%E0%A6%B8%E0%A6%BF%E0%A6%9F_vde2wj.png',
        title: 'কার-রেগুলার (৫সিট)',
      },
      {
        id: 2,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338881/1_%E0%A6%95%E0%A6%BE%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B8_%E0%A7%AB-%E0%A6%B8%E0%A6%BF%E0%A6%9F_ukclgy.png',
        title: 'কার-লাক্সারী (৫সিট)',
      },
      {
        id: 3,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338882/3_%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B8_%E0%A7%AD%E0%A6%B8%E0%A6%BF%E0%A6%9F_lvrsn0.png',
        title: 'কার-ম্যাক্স (৭সিট)',
      },
      {
        id: 4,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735339756/%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B8_%E0%A7%A7%E0%A7%A7%E0%A6%B8%E0%A6%BF%E0%A6%9F_jnujsy.png',
        title: 'কার-ম্যাক্স (১১সিট)',
      },
    ],
  },
  //   {
  //     id: 5,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593133/microbus_h2bfag.png',
  //     title: 'মাইক্রোবাস',
  //     to: 'car',
  //   },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593128/bus_jzrg1m.png',
    title: 'বাস',
    to: 'car',
  },
  {
    id: 7,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593141/truck_yn95nw.png',
    title: 'ট্রাক',
    to: 'truck',
    subTypes: [
      {
        id: 1,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338862/1_%E0%A7%AD_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A7_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_iwrobr.png',
        title: '৭ ফিট ১ টন (খোলা)',
      },
      {
        id: 2,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338862/2_%E0%A7%AD_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A7_%E0%A6%9F%E0%A6%A8_%E0%A6%95%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1_ngvgsd.png',
        title: '৭ ফিট ১ টন (কাভার্ড)',
      },
      {
        id: 3,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338863/3_%E0%A7%AF_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A7.%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_uti3f6.png',
        title: '৯ ফিট ১.৫ টন (খোলা)',
      },
      {
        id: 4,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338869/4_%E0%A7%AF_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A7.%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%95%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1_ltiqq3.png',
        title: '৯ ফিট ১.৫ টন (কাভার্ড)',
      },
      {
        id: 5,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338868/5_%E0%A7%A7%E0%A7%A8_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A8_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_drjqso.png',
        title: '১২ ফিট ২ টন (খোলা)',
      },
      {
        id: 6,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338872/6_%E0%A7%A7%E0%A7%A8_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A8_%E0%A6%9F%E0%A6%A8_%E0%A6%95%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1_iil1xq.png',
        title: '১২ ফিট ২ টন (কাভার্ড)',
      },
      {
        id: 7,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338873/7_%E0%A7%A7%E0%A7%AA_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A9.%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_n7hbgy.png',
        title: '১৪ ফিট ৩.৫ টন (খোলা)',
      },
      {
        id: 8,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338874/8_%E0%A7%A7%E0%A7%AA_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A9.%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%95%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1_jlbn6g.png',
        title: '১৪ ফিট ৩.৫ টন (কাভার্ড)',
      },
      {
        id: 9,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338876/9_%E0%A7%A7%E0%A7%AC_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%AD.%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_ucx27y.png',
        title: '১৬ ফিট ৭.৫ টন (খোলা)',
      },
      {
        id: 10,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338876/9_%E0%A7%A7%E0%A7%AC_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%AD.%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_ucx27y.png',
        title: '১৬ ফিট ৭.৫ টন (কাভার্ড)',
      },
      {
        id: 11,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338878/11_%E0%A7%A7%E0%A7%AE_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A7%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_aoeaij.png',
        title: '১৮ ফিট ১৫ টন (খোলা)',
      },
      {
        id: 12,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338879/19_%E0%A7%A8%E0%A7%A6_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A7%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_fioogz.png',
        title: '২০ ফিট ১৫ টন (খোলা)',
      },
      {
        id: 13,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338881/20_%E0%A7%A8%E0%A7%A9_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A7%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%95%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1_aobpxi.png',
        title: '২৩ ফিট ১৫ টন (কাভার্ড)',
      },
      {
        id: 14,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338879/21_%E0%A7%A8%E0%A7%A9_%E0%A6%AB%E0%A6%BF%E0%A6%9F_%E0%A7%A8%E0%A7%AB_%E0%A6%9F%E0%A6%A8_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_qkycdo.png',
        title: '২৩ ফিট ২৫ টন (খোলা)',
      },
      {
        id: 15,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338862/22_%E0%A6%AB%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F_-_%E0%A6%AC%E0%A7%87%E0%A6%A1_%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%87%E0%A6%B2%E0%A6%BE%E0%A6%B0_ecaxps.png',
        title: 'ফ্ল্যাট - বেড ট্রেইলার',
      },
      {
        id: 16,
        icon: 'https://res.cloudinary.com/dqlhlrax9/image/upload/v1735338861/23_%E0%A6%B2%E0%A7%8B_-_%E0%A6%AC%E0%A7%87%E0%A6%A1_%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%87%E0%A6%B2%E0%A6%BE%E0%A6%B0_cazgkz.png',
        title: 'লো - বেড ট্রেইলার',
      },
    ],
  },
  //   {
  //     id: 6,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/mini-truck_kxilpl.png',
  //     title: 'মিনি ট্রাক',
  //     to: 'truck',
  //   },
  //   {
  //     id: 5,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593133/mahindra_foixzh.png',
  //     title: 'মাহেন্দ্র',
  //     to: 'car',
  //   },
  {
    id: 8,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593129/chander-gari_evlvfq.png',
    title: 'চাঁদের গাড়ি',
    to: 'van',
  },
  {
    id: 9,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593132/leguna_b4iqzy.png',
    title: 'লেগুনা',
    to: 'van',
  },
  {
    id: 10,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593137/rickshaw_mikirg.png',
    title: 'রিক্সা',
    to: 'rickshaw',
  },
  {
    id: 11,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593128/bycicle_yrflwq.png',
    title: 'বাই সাইকেল',
    to: 'rickshaw',
  },
  {
    id: 12,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593127/auto-van_nl6qrp.png',
    title: 'ভ্যান গাড়ি',
    to: 'van',
  },
  //   {
  //     id: 7,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/rickshaw-van_eathwb.png',
  //     title: 'রিক্সা ভ্যান',
  //     to: 'van',
  //   },
  //   {
  //     id: 7,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/power-tiller-trolley_zckpdx.png',
  //     title: 'পাওয়ার টিলার ট্রলি',
  //     to: 'van',
  //   },
  {
    id: 13,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593127/ambulance_fho2r6.png',
    title: 'অ্যাম্বুলেন্স',
    to: 'ambulance',
  },
  {
    id: 14,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593132/fire-service_mjkvhd.png',
    title: 'ফায়ার সার্ভিস',
    to: 'fire-service',
  },
  //   {
  //     id: 13,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/power-tiller_uonjri.png',
  //     title: 'পাওয়ার টিলার',
  //     to: 'power-tiller',
  //   },
  {
    id: 15,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593140/tractor_niu61f.png',
    title: 'ট্রাক্টর',
    to: 'pickup',
  },
  {
    id: 16,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593131/excavator_tnqocx.png',
    title: 'কনস্ট্রাকশন',
    to: 'construction',
  },
  //   {
  //     id: 17,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593131/crane_l7noko.png',
  //     title: 'ক্রেন',
  //     to: 'cargo',
  //   },
  //   {
  //     id: 18,
  //     icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593137/roller_ogbsgi.png',
  //     title: 'রোলার',
  //     to: 'cargo',
  //   },
  {
    id: 17,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593127/boat_kdhzoa.png',
    title: 'নৌ যান',
    to: 'cargo',
  },
];

export default vehicles;
