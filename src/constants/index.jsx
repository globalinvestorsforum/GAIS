import {} from 'react-icons'
import { GiPublicSpeaker } from "react-icons/gi";
import { GiDiscussion } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";

export const navItems = [
    { name: 'GAIS', href: '#', current: true },
    { name: 'Conferences', href: '#', current: false },
    { name: 'Award Ceremony', href: '#', current: false },
    { name: 'Global Investors Meet', href: '#', current: false },
];
  
export const features =[
    { icon: <GiPublicSpeaker/>  , text:"Sharing the stage with industry titans and revolutionary minds." , description:"Witness visionary leaders unveil the cutting-edge developments shaping our world." },

    { icon: <GiDiscussion/> , text:"Engaging in electrifying discussions." , description:"Dive into panel sessions, workshops, and roundtables that spark critical dialogue and ignite your imagination. Explore the ethical considerations, the boundless applications, and the profound impact of AI across diverse industries." },

    { icon: <GiDiscussion/> , text:"Connecting with a global network of pioneers." , description:"Forge meaningful connections with fellow AI enthusiasts, entrepreneurs, investors, and researchers. Collaborate, share ideas, and build the future of AI together." }
]