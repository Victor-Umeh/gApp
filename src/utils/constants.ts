import {
  Bolt,
  User,
  Filter,
  Money,
  Visa,
  PowerOff,
  Facebook,
  Twitter,
  Instagram,
  Skype,
  Apple,
  Android,
} from "@/icons";

const text =
  "Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. duis odio nisl, tinci dunt eturn sed molis velit.";
export const featuresData = [
  { heading: "Simple user friendly", paragraph: text, Icon: Bolt },
  { heading: "Private Gateways", paragraph: text, Icon: User },
  { heading: "Filter Statements", paragraph: text, Icon: Filter },
  { heading: "No Extra Fee", paragraph: text, Icon: Money },
  { heading: "Visa Card Support", paragraph: text, Icon: Visa },
  { heading: "Offline Working", paragraph: text, Icon: PowerOff },
];

export const socials = [
  { Logo: Facebook, link: "https://www.facebook.com/" },
  { Logo: Twitter, link: "https://twitter.com/" },
  { Logo: Instagram, link: "https://www.instagram.com/" },
  { Logo: Skype, link: "https://www.skype.com/en/" },
  { Logo: Apple, link: "https://www.apple.com/ng/" },
  { Logo: Android, link: "https://www.android.com/" },
];

export const packages = [
  {
    category: "secondary",
    tag: "Basic Plan",
    price: "$19",
    packages: [
      { package: "Basic Version", available: true },
      { package: "6 Months Support", available: true },
      { package: "Free installation", available: true },
      { package: "Full Version", available: false },
      { package: "Lifetime Updates", available: false },
    ],
  },
  {
    category: "secondary",
    tag: "Personal Plan",
    price: "$29",
    packages: [
      { package: "Basic Version", available: true },
      { package: "6 Months Support", available: true },
      { package: "Free installation", available: true },
      { package: "Full Version", available: true },
      { package: "Lifetime Updates", available: false },
    ],
  },
  {
    category: "main",
    tag: "Basic Plan",
    price: "$49",
    packages: [
      { package: "Basic Version", available: true },
      { package: "6 Months Support", available: true },
      { package: "Free installation", available: true },
      { package: "Full Version", available: true },
      { package: "Lifetime Updates", available: true },
      { package: "Phone Support", available: false },
    ],
  },
  {
    category: "secondary",
    tag: "Basic Plan",
    price: "$69",
    packages: [
      { package: "Basic Version", available: true },
      { package: "6 Months Support", available: true },
      { package: "Free installation", available: true },
      { package: "Full Version", available: true },
      { package: "Lifetime Updates", available: true },
    ],
  },
];
