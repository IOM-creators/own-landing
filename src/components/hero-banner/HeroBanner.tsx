import React from 'react';
import { TypeAnimation } from 'react-type-animation';
interface Letter {
  letter: string,
  fullText: string,
  delay: number
}

interface HeroSection {
  showAnimation?: boolean
}
const letters: Letter[] = [
  {
    letter: 'I',
    fullText: '- Interactive Web Development',
    delay: 1000
  },
  {
    letter: 'O',
    fullText: '- Optimized Code Efficiency',
    delay: 3000
  },
  {
    letter: 'M',
    fullText: '- Modern Framework Proficiency',
    delay: 5000
  }
]


const HeroSection: React.FC<HeroSection> = ({ showAnimation = false }) => {
  return (
    <section id='section1'>
      <div className="relative w-full h-screen">
        <div id="pt" className="canvas ">
          <canvas id="canvas" width="973" height="1048" >
          </canvas>
        </div>
        <div className='absolute inset-0 flex flex-col items-left justify-center ml-10 sm:ml-10 md:ml-20'>
          <div className='text-left max-w-3xl lap:max-w-6xl'>
            {letters.map((item: Letter) => {
              return <div className="flex mb-3 text-lg sm:text-2xl md:text-4xl lg:text-5xl lap:text-7xl">
                {!showAnimation && <span className='mr-2'>{item.letter} {item.fullText}</span>}
                {showAnimation && <span className='mr-2'>{item.letter}</span>}
                {showAnimation && <TypeAnimation
                  sequence={[
                    '',
                    item.delay,
                    `${item.fullText}`
                  ]}
                  speed={50}
                  cursor={false}
                />}
              </div>
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
