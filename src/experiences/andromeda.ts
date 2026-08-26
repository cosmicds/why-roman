import type { TourExperience } from "./types";

// This is the source of truth for the length of a tour. Make sure the count matches the number of steps 
// in the corresponding tour. If the same text is needed on multiple steps, duplicate the text
export const andromedaExperience: TourExperience = [
  {
    title: "Andromeda",
    tourSheetText: [
      "Andromeda (M31) is our nearest neighboring spiral galaxy.",
      "It spans 3 degrees (or 6 full Moons!) across the sky.",
      "By studying Andromeda, astronomers can better understand our own Milky Way galaxy.",
    ],
    instaText: "Andromeda covers a huge amount of sky",

  },
  {
    title: "View from the ground",
    tourSheetText: [
      "This image shows Andromeda as viewed from a 1.2-m telescope on Earth.",
      "Zoom in and pan around Andromeda to explore the stars and dust lanes in the spiral arms.",
    ],
    instaText: "A telescope on the ground sees this...",
  },
  {
    title: "Hubble's view from space",
    tourSheetText: [
      "The Hubble Space Telescope has provided the clearest view to date of Andromeda in visible light (that we can see with our eyes).",
      "Zoom in to see how much more detail you can notice with Hubble.",
      "Use the slider to cross-fade between the 2 images.",
    ],
    instaText: "Hubble sees this...",
  },
  {
    title: "Over 1,000 Hubble images",
    tourSheetText: [
      "To obtain this view with Hubble, astronomers stitched together 1,400 images taken over 500 hours.",
      "The overlaid grid shows where each individual image was taken across Andromeda to make this beautiful mosaic.",
    ],
    instaText: "Hubble took 1,400 images (and 500 hours)!",
  },
  {
    title: "Webb",
    tourSheetText: [
      "The James Webb Space Telescope takes images in infrared light",
      "It can see a similar amount of sky at once as Hubble."
    ],
    instaText: "Webb can see only tiny pieces at a time",
  },
  {
    title: "Roman, Webb, and Hubble",
    tourSheetText: [
      "The Roman Space Telescope will take infrared images similar to Webb, but it can see MUCH more of the sky at once compared with Webb and Hubble.",
    ],
    instaText: "Roman covers way more sky per infrared image.",
  },
  {
    title: "Roman's view of Andromeda",
    tourSheetText: [
      "Just 6 images (taken over 3 hrs) with Roman will cover more of Andromeda than 1,400 images (taken over 500 hrs) with Hubble!",
    ],
    instaText: "Roman is over 100x faster than Hubble.",
  },
  {
    title: "Roman's tiny pixels",
    tourSheetText: [
      "Even with its huge field of view, Roman's high resolution will allow very detailed images, similar to Hubble.",
    ],
    instaText: "Roman images will have similar detail to Hubble.",
  },
  {
    title: "Explore on your own",
    tourSheetText: [
      "You can continue exploring different regions of the sky and the fields of view of Hubble, Webb, and Roman.",
    ],
  },
];
