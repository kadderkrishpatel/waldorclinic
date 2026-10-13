import { asset } from "@/src/lib/assets";

export interface LogoItem {
  id: number;
  name: string;
  logo: string;
  width: number;
  height: number;
  containerClass?: string;
}

export interface LogoSliderData {
  eyebrow: string;
  heading: {
    before: string;
    highlight: string;
  };
  description: string;
  logos: LogoItem[];
}

export const logoSliderData: LogoSliderData = {
  eyebrow: "AS SEEN ON",
  heading: {
    before: "Featured Across Leading",
    highlight: "Publications",
  },
  description:
    "Recognised for clinical skincare excellence and restorative medical aesthetics by premier British and international media.",
  logos: [
    {
      id: 1,
      name: "The Irish News",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo01.png"),
      width: 501,
      height: 42,
      containerClass: "max-w-[170px] sm:max-w-[190px] h-6 sm:h-7",
    },
    {
      id: 2,
      name: "RTÉ 100",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo02.png"),
      width: 166,
      height: 40,
      containerClass: "max-w-[110px] sm:max-w-[130px] h-7 sm:h-8",
    },
    {
      id: 3,
      name: "Vingt Sept Magazine",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo03.png"),
      width: 147,
      height: 45,
      containerClass: "max-w-[110px] sm:max-w-[125px] h-8 sm:h-9",
    },
    {
      id: 4,
      name: "The Cheshire Magazine",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo04.png"),
      width: 482,
      height: 120,
      containerClass: "max-w-[150px] sm:max-w-[175px] h-8 sm:h-9",
    },
    {
      id: 5,
      name: "London on the Inside",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo05.png"),
      width: 824,
      height: 58,
      containerClass: "max-w-[180px] sm:max-w-[210px] h-6 sm:h-7",
    },
    {
      id: 6,
      name: "Rock My Wedding",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo06.png"),
      width: 263,
      height: 89,
      containerClass: "max-w-[120px] sm:max-w-[140px] h-8 sm:h-9",
    },
    {
      id: 7,
      name: "Country & Town House",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo07.png"),
      width: 262,
      height: 133,
      containerClass: "max-w-[110px] sm:max-w-[125px] h-10 sm:h-11",
    },
    {
      id: 8,
      name: "Salon",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo08.png"),
      width: 497,
      height: 120,
      containerClass: "max-w-[130px] sm:max-w-[150px] h-8 sm:h-9",
    },
    {
      id: 9,
      name: "Kensington & Chelsea Review",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo09.png"),
      width: 619,
      height: 120,
      containerClass: "max-w-[170px] sm:max-w-[195px] h-8 sm:h-9",
    },
    {
      id: 10,
      name: "Loaded",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo10.png"),
      width: 180,
      height: 76,
      containerClass: "max-w-[100px] sm:max-w-[115px] h-8 sm:h-9",
    },
    {
      id: 11,
      name: "The London Mother",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo11.png"),
      width: 479,
      height: 120,
      containerClass: "max-w-[135px] sm:max-w-[155px] h-8 sm:h-9",
    },
    {
      id: 12,
      name: "Safety in Beauty London Diamond Awards",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo12.png"),
      width: 110,
      height: 120,
      containerClass: "max-w-[85px] sm:max-w-[100px] h-11 sm:h-12",
    },
    {
      id: 13,
      name: "Pure Beauty Awards Finalist",
      logo: asset("/assets/waldor/product_logo_slider/slide_logo13.png"),
      width: 217,
      height: 120,
      containerClass: "max-w-[110px] sm:max-w-[130px] h-9 sm:h-10",
    },
  ],
};
