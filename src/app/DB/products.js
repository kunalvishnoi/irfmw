export const PRODUCT_TYPES = {
  ACTIVE_PHASED_ARRAY_ANTENNAS: "active_phased_array_antennas",
  HYBRID_RF_CIRCUITS: "hybrid_rf_circuits",
  TR_MODUCLES: "tr_moducles",
  WIDE_BAND_UP_DOWN_CONVERTERS: "wide_band_up_down_converters",
};

export const filters = [
  {
    id: 'all',
    title: "All",
  },
  {
    id: PRODUCT_TYPES.ACTIVE_PHASED_ARRAY_ANTENNAS,
    title: "Active Phased Array Antennas",
  },
  {
    id: PRODUCT_TYPES.HYBRID_RF_CIRCUITS,
    title: "Hybrid RF Circuits",
  },
  {
    id: PRODUCT_TYPES.TR_MODUCLES,
    title: "TR Moducles",
  },
  {
    id: PRODUCT_TYPES.WIDE_BAND_UP_DOWN_CONVERTERS,
    title: "Wide Band Up-Down Converters",
  },
];

export const products = [
  {
    id: 1,
    imgUrl: `${process.env.imageBasePath}/p1.png`,
    title: "Active Phased Array Antennas",
    description: "Description for Antenna/Product",
    productType: PRODUCT_TYPES.ACTIVE_PHASED_ARRAY_ANTENNAS,
  },
  {
    id: 2,
    imgUrl: `${process.env.imageBasePath}/p2.png`,
    title: "Hybrid RF Circuits",
    description: "Description for Antenna/Product",
    productType: PRODUCT_TYPES.HYBRID_RF_CIRCUITS,
  },
  {
    id: 3,
    imgUrl: `${process.env.imageBasePath}/p3.png`,
    title: "TR Modules",
    description: "Description for Antenna/Product",
    productType: PRODUCT_TYPES.TR_MODUCLES,
  },
];
