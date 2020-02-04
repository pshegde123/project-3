import React, { useState } from 'react';
import './style.css'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://media.rawg.io/media/games/0ea/0ea05d4703f3af63a570471fbad79d40.jpg',
    altText: '',
    caption: '',
    caption2: ''
  },
  {
    src: 'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
    altText: '',
    caption: '',
    caption2: ''
  },
  {
    src: 'https://media.rawg.io/media/games/e9c/e9cbc91e2090638ddab6ae0b3d334f90.jpg',
    altText: '',
    caption: '',
    caption2: ''
  },
  {
    src: 'https://media.rawg.io/media/games/ded/dedd631793c5666ffab9ef03975eb226.jpg',
    altText: '',
    caption: '',
    caption2: ''
  },
  {
    src: 'https://media.rawg.io/media/games/23d/23d78acedbb5f40c9fb64e73af5af65d.jpg',
    altText: '',
    caption: '',
    caption2: ''
    
  }
];
// const element = <h1>Hello, world</h1>;

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className='thingy' src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption2} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        {}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <div className='thingy2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    </div>
  );
}







export default Example;