import tour1 from "./images/bull.jpeg";
import tour2 from "./images/bird.jpeg";
import tour3 from "./images/hedgehog.jpeg";
import tour4 from "./images/squirrel.jpeg";

export const pageLinks = [
    {id:1, href: "#home", text: "home"},
    {id:2, href: "#about", text: "about"},
    {id:3, href: "#services", text: "services"},
    {id:4, href: "#tours", text: "tours"},
    // {id:5, href: "#login", text: "login"},
];

export const socialLinks = [
    {id:1, href:"https://www.instagram.com", icon:"fa-brands fa-instagram"},
    {id:2, href:"https://www.facebook.com", icon:"fa-brands fa-facebook-f"},
    {id:3, href:"https://www.x.com", icon:"fa-brands fa-x-twitter"},
];

export const services = [
    {id:1, icon:"fas fa-wallet fa-fw", title:"saving money",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, et officia!"},
    {id:2, icon:"fas fa-tree fa-fw", title:"endless hiking",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, et officia!"},
    {id:3, icon:"fas fa-socks fa-fw", title:"amazing comfort",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, et officia!"},
];

export const tours = [
    {id:1,
    image:tour1,
    date:"August 26th, 2024",
    title:"Tibet adventure",
    info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.",
    location:"China",
    duration:"6 days",
    cost:"from $2100"},
    {id:2,
    image:tour2,
    date:"September 15th, 2024",
    title:"Amazon adventure",
    info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.",
    location:"Brazil",
    duration:"10 days",
    cost:"from $4300"},
    {id:3,
    image:tour3,
    date:"October 8th, 2024",
    title:"City adventure",
    info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.",
    location:"UK",
    duration:"10 days",
    cost:"from $3000"},
    {id:4,
    image:tour4,
    date:"Feberary 10th, 2024",
    title:"Nordic adventure",
    info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet voluptatum.",
    location:"Norway",
    duration:"15 days",
    cost:"from $5000"},
];