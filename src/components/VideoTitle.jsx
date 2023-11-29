import React from 'react'
import {FaPlay, FaInfoCircle} from 'react-icons/fa'
import tw from 'tailwind-styled-components'

const VideoTitle = ({title, overview}) => {
  return (
    <Wrapper>
        <Title>{title}</Title>
        <div className='overflow-y-hidden w-1/2 md:w-1/3 h-16 md:h-36 my-4'>
        <Para>{overview}</Para>
        </div>
        <Buttons>
            <button className='bg-gray-200 shadow-md opacity-50 flex justify-center items-center gap-1 text-black md:py-2 px-2 md:px-6 text-xs md:text-lg font-semibold  rounded-sm'><FaPlay/> Play</button>
            <button className='bg-gray-900  opacity-90 flex justify-center items-center gap-1 text-white md:py-2 px-2 md:px-6 text-xs md:text-lg font-normal border-gray-900 shadow-md border-2 rounded-sm'><FaInfoCircle/> More Info</button>
        </Buttons>
    </Wrapper>
  )
}

export default VideoTitle

const Wrapper = tw.div`flex flex-col px-2 md:px-12 absolute top-0 justify-center left-0 bg-gradient-to-r from-gray-950 w-screen aspect-video -z-0 text-white`
const Title = tw.h1`text-md md:text-4xl font-bold tracking-wide`
const Para = tw.p`text-xs md:text-lg font-light h-fit`
const Buttons = tw.div`flex gap-2 -mb-8  md:mb-[12%]` 
