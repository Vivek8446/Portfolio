import React, { useState, useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition';
import ReactTextTransition from "react-text-transition";

const TEXTS = ['Start where', 'Use what', 'Do what'];
const TEXTS2 = ['are', 'have', 'can'];
function Quote() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (


        <div> <div className='bg-[#050816] md:p-[3rem] p-2'>
            <div className='text-left '>
                {/* <p className={`sm:text-[18px] text-[14px] text-secondary text-white uppercase tracking-wider`}>My work</p> */}
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[50px]`}>Quote</h2>
            </div>

            <div className='md:mt-2 mt-14 flex justify-center items-center'>

                <section className="inline text-purple-200 text-5xl">

                    <ReactTextTransition
                        springConfig={presets.gentle}
                        style={{ margin: "0 4px" }}
                        inline
                    >
                        {TEXTS[index % TEXTS.length]}
                    </ReactTextTransition>

                    You
 
                    <ReactTextTransition
                        springConfig={presets.gentle}
                        style={{ margin: "0 4px" }}
                        inline
                    >
                        {TEXTS2[index % TEXTS.length]}
                    </ReactTextTransition>
                </section>
            </div>

        </div></div>
    )
}

export default Quote