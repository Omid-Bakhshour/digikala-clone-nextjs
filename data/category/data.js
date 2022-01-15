
import ComputerIcon from "@heroicons/react/outline/DesktopComputerIcon"
import BriefcaseIcon from "@heroicons/react/outline/BriefcaseIcon"

export const data = [


    {

        name: "کالای دیجیتال",
        id: "1",
        image: ComputerIcon,
        childs: [
            {
                name: "لوازم جانبی گوشی",
                hasChild: "yes",
                childs: [

                    {
                        name: "کیف و کاور گوشی",
                        hasChild: "no",
                    }
                    , {
                        name: "پاور بانک (شارژر همراه)",
                        hasChild: "no",

                    }
                    , {
                        name: "پایه نگهدارنده گوشی",
                        hasChild: "no",

                    }

                ]

            },
            {
                name: "گوشی موبایل",
                hasChild: "yes",

                childs: [
                    {
                        name: "سامسونگ",
                        hasChild: "no",
                    },
                    {
                        name: "هوآوی",
                        hasChild: "no",
                    },
                    {
                        name: "اپل",
                        hasChild: "no",
                    },
                    {
                        name: "شیائومی",
                        hasChild: "no",
                    },
                    {
                        name: "انر",
                        hasChild: "no",
                    },
                    {
                        name: "نوکیا",
                        hasChild: "no",
                    },
                ]

            }, {
                name: "واقعیت مجازی",
                hasChild: "no",
                childs: []
            },
            {
                name: "مچ‌بند و ساعت هوشمند",
                hasChild: "no",
                childs: []
            },
            {
                name: "هدفون، هدست، هندزفری",
                hasChild: "no",
                childs: []
            }
            ,
            {
                name: "اسپیکر بلوتوث و با سیم",
                hasChild: "no",
                childs: []
            }

        ]
    },
    {
        name: "خودرو، ابزار و تجهیزات صنعتی",
        id: "2",
        image: ComputerIcon,

        childs: [
            {
                name: "خودروهای ایرانی و خارجی",
                hasChild: "no",
                childs: [],

            },
            {
                name: "موتور سیکلت",
                hasChild: "no",
                childs: [],

            },
            {
                name: "لوازم جانبی خودرو و موتورسیکلت",
                hasChild: "yes",
                childs: [
                    {
                        name: "لوازم تزیینی",
                        hasChild: "no",


                    }
                ],

            }
        ]
    },

    {
        name: "مد و پوشاک",
        id: "3",
        image: ComputerIcon,

        childs: []
    },

    {
        name: "اسباب بازی، کودک و نوزاد",
        id: "4",
        image: ComputerIcon,

        childs: []
    },


    {
        name: "کالاهای سوپرمارکتی",
        id: "5",
        image: ComputerIcon,

        childs: []
    },

    {
        name: "زیبایی و سلامت",
        id: "6",
        image: ComputerIcon,

        childs: []
    },

    {
        name: "خانه و آشپزخانه",
        id: "7",
        image: ComputerIcon,

        childs: []
    },

    {
        name: "کتاب، لوازم تحریر و هنر",
        id: "8",
        image: BriefcaseIcon,

        childs: []
    },

    {
        name: "ورزش و سفر",
        id: "9",
        image: ComputerIcon,

        childs: []
    },

    {
        name: "محصولات بومی و محلی",
        id: "10",
        image: ComputerIcon,

        childs: []
    },






];