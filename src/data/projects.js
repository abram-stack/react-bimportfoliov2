import cloudLP from '../assets/cloud-LP.png'
import thesisImage from '../assets/thesisProj.png'
import shoplistImage from '../assets/shoplist-proj.png'
import spaceImage from '../assets/space-proj.png'
import colorImage from '../assets/colorpalette-proj.png'
import movieImage from '../assets/movielist-proj.png'
import vanlifeImage from '../assets/vanlife-proj.png'

export const projects = [
    {
      id: 1,
      image: spaceImage,
      title: 'Landing Page for Space Exploration',
    category: 'LandingPage',
      link: 'https://github.com/abram-stack/space-tourism'
    },
    {
      id: 2,
      image: thesisImage,
      title: 'Thesis Project: Reduce CO2 Footprints per visit',
      category: 'WebApp',
      link:'https://github.com/abram-stack/nextjs-rendering-pattern-ssg'
    },
    {
      id: 3,
      image: shoplistImage,
      title: 'Shopping List for Business: das Lesecafe employee',
      category: 'WebApp',
      link:'https://github.com/abram-stack/shopping-cart'
    },
    ,
    {
      id: 4,
      image: colorImage,
      title: 'Color Palette Generator ',
      category: 'WebApp',
      link:'https://github.com/abram-stack/color-palette'
    },
    {
      id: 5,
      image: cloudLP,
      title: 'Landing Page: Cloud Company Mockup',
      category: 'LandingPage',
      link:'https://cloudlandingpage.netlify.app/'
    },
    ,
    {
      id: 6,
      image: movieImage  ,
      title: 'Favorite Movie? Then put it the list',
      category: 'WebApp',
      link:'https://github.com/abram-stack/movie-watchlist'
    },
    {
      id: 7,
      image: vanlifeImage  ,
      title: 'Camper van for life',
      category: 'WebApp',
      link:'https://github.com/abram-stack/camping-van'
    },
  ]