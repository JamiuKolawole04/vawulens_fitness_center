import { SiOpenaigym } from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Jefit ",
        info: "Jefit is a great strength-training program for anyone who enjoys connecting to a wider community. You can connect with other members to share tips, get feedback, and offer encouragement.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Glo",
        info: "Glo has an amazing array of experienced teachers offering over 4,000 live and on-demand yoga, Pilates, and meditation classes. The program also includes tutorials and lectures.  ",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Barre3",
        info: "Barre3 offers barre classes infused with mindfulness, cardio, and strength training.Barre3 also offers workouts that focus on cardio, strength training, or specific muscle groups, such as the upper body, core, and glutes.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Tone It Up",
        info: "Tone It Up offers workouts that tone, sculpt, and strengthen your body while improving flexibility. Pregnancy and postnatal workouts are also available. In addition to workouts, it offers guided meditations, nutritious eating tips, and meal plans.  ",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Quality of quantity",
        desc: "We provide quality and great workouts with necessary workout tools in our disposal."
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Flexibility",
        desc: "Flexible and transparency practices mean you can reshedule your workout days and tailor it according to your own ways."
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Accountability",
        desc: "We maintain our inegrity and we are also accountable for any events during the workout periods. You can always reach out to us for your complaints."
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Making a Difference",
        desc: "Always ready to work with you and achieve great and common resiult together with external factors in mind."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "As a general goal, aim for at least 30 minutes of moderate physical activity every day. If you want to lose weight, maintain weight loss or meet specific fitness goals, you may need to exercise more. Reducing sitting time is important, too. The more hours you sit each day, the higher your risk of metabolic problems."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "You can workout any day, however, early morning workout is one of the best way to improve general functionalty of the body system."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Ideally, aim for at least 150 minutes of moderate activity or 75 minutes of vigorous intensity cardio exercise per week.."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes and No. You can warm up properly before exercising to prevent injury and make your workouts more effective. This warm-up routine should take at least 6 minutes. Warm up for longer if you feel the need."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Depends on your fitness goals.."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes, lifting weights help a lot in strength training."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Best training and trainers I have ever had in my life!.Super friendly atmosphere,Every session is different and fun.The trainers really push,motivate and helps us to exceed our limits and achieve our goals.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Wow, I really recommend this place for you if you want to have some fun while you do your workout! They have an amazing staff that are super serious and makes you reach your goals with a smile on their faces!! Thank you Titan Fitness, I will come back as soon as possible!!.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Awesome facility on an inspiring road. Probably the best facilities available on the Soi. A great supplement to martial arts training – or an ideal venue for a fitness holiday.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "It has been almost one year and I have lost weight and increased my strength.  I find the coaches – so motivating and supportive.  During the shred I worked with Dave and he was very motivating and held me accountable.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "The best parts of the workouts are anyone can do them! They are set up so that you can work at your own pace, while still feeling the burn and intensity of the work out.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            { feature: 'Always open for business', available: true },
            { feature: 'Large facility with lots of space', available: true },
            { feature: 'Focus on heavy lifting with an intense atmosphere', available: true },
            { feature: 'Budget-friendly basic membership', available: true },
            { feature: 'Efficient and effective', available: true },
            { feature: 'Large selection of free weights and resistance training machines', available: false },
            { feature: 'Affordable membership options and 600+ locations in US and Canada', available: false },
            { feature: 'Cycling and aqua options', available: false },
            { feature: 'Full-service spa, steam room, sauna, locker rooms, pool, and other high-end amenities', available: false },
            { feature: 'Recruit well-known certified personal trainers and fitness instructors', available: false },
            { feature: 'Environment is high-energy and fun', available: false },
            { feature: 'Extensive features and services', available: false },
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            { feature: 'Always open for business', available: true },
            { feature: 'Large facility with lots of space', available: true },
            { feature: 'Focus on heavy lifting with an intense atmosphere', available: true },
            { feature: 'Budget-friendly basic membership', available: true },
            { feature: 'Efficient and effective', available: true },
            { feature: 'Large selection of free weights and resistance training machines', available: true },
            { feature: 'Affordable membership options and 600+ locations in US and Canada', available: true },
            { feature: 'Cycling and aqua options', available: true },
            { feature: 'Full-service spa, steam room, sauna, locker rooms, pool, and other high-end amenities', available: true },
            { feature: 'Recruit well-known certified personal trainers and fitness instructors', available: false },
            { feature: 'Environment is high-energy and fun', available: false },
            { feature: 'Extensive features and services', available: false },
        ]

    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            { feature: 'Always open for business', available: true },
            { feature: 'Large facility with lots of space', available: true },
            { feature: 'Focus on heavy lifting with an intense atmosphere', available: true },
            { feature: 'Budget-friendly basic membership', available: true },
            { feature: 'Efficient and effective', available: true },
            { feature: 'Large selection of free weights and resistance training machines', available: true },
            { feature: 'Affordable membership options and 600+ locations in US and Canada', available: true },
            { feature: 'Cycling and aqua options', available: true },
            { feature: 'Full-service spa, steam room, sauna, locker rooms, pool, and other high-end amenities', available: true },
            { feature: 'Recruit well-known certified personal trainers and fitness instructors', available: true },
            { feature: 'Environment is high-energy and fun', available: true },
            { feature: 'Extensive features and services', available: true },
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]