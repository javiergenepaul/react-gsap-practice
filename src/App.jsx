import React, { useRef, useLayoutEffect, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function App() {
    let logoItem = useRef(null)
    let title = useRef(null)
    useLayoutEffect(() => {
        let from = gsap.from(title, {
            opacity: 0,
            y: 100,
            immediateRender: false,
            duration: 2,
            ease: gsap.easeOut
        })

        return () => {
            from.kill()
        }
    })

    useEffect(() => {
        gsap.to(logoItem, {
            scrollTrigger: {
                trigger: logoItem,
                markers: true,
				start: "top center",
				end: 'top 100px',
				scrub: 1,
				toggleActions: "restart pause reverse pause"
            },
            x: 400,
            rotation: 360,
            duration: 3
        })
    })

    return (
        <div className="App">
            <div className="helper h-screen bg-orange-500 font-bold p-4 items-center flex justify-center">
                <span
                    ref={(el) => {
                        title = el
                    }}
                    className="text-center uppercase text-6xl">
                    title here
                </span>
            </div>
            <div className="flex flex-col w-full items-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo w-[200px] h-[200px]" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react w-[200px] h-[200px]"
                        alt="React logo"
                        ref={(el) => {
                            logoItem = el
                        }}
                    />
                </a>
            </div>
			<div className="h-screen">sampl</div>
			<div className="h-screen">sampl</div>
        </div>
    )
}

export default App
