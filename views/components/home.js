
import React, { useState, useEffect } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home({authenticate}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()
    useEffect(()=>{
        
    }, [])
    return (
      <div class="font-jost hyphens-manual">
        <section
          class="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter"
        >
           <section class="block">
            <h1 class="mb-0 text-5xl font-bold text-gray-700">
              Evans Enonchong
            </h1>
            <h2
              class="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish"
            >
              Freelance Full Stack Web Developer
            </h2>

            
          </section>

          <section class="pb-2 pb-4 mt-5 border-b-4 border-gray-300 ">
           
            <section class="break-inside-avoid">
              <h2
                class="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal"
              >
                SUMMARY
              </h2>

              <section class="mb-2 break-inside-avoid">
                <p class="mt-2 leading-normal text-gray-700 text-md">
                  Experienced full-stack web developer with a proven track record of working alone and working on a team to overcome obstacles and solve complicated business requirements in order to produce well-designed and user-friendly online solutions.
                </p>
              </section>
            </section>
          </section>

          <section class="mt-2 border-b-2 break-inside-avoid">
            <header>
                <h3
                    class="text-lg font-semibold text-gray-700 leading-snugish"
                >
                    Tunxis Community College
                </h3>
                <p class="leading-normal text-gray-500 text-md">
                    2012 &ndash; 2015 | Associate of Science
                </p>
            </header>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Major:&nbsp;
                    </span>
                    Computer Information Systems
                </li>
               
            </ul>
        </section>

        <section class="mt-2 border-b-2 break-inside-avoid">
            <header>
                <h3
                    class="text-lg font-semibold text-gray-700 leading-snugish"
                >
                    Future Endeavors
                </h3>
            </header>
            <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
                <li>
                    <span
                        class="font-semibold text-md"
                    >
                        Open Source Project:&nbsp;&nbsp;
                    </span>
                    Crypto payday loans on hosted PWA (progressive web apps). For example, Flippa (https://flippa.com/) enables anyone to sell their digital asset. What about a scenario where you don't want to sell your digital asset? But you need access to funds. I thought to myself that I should be able to get a payday loan using my hosted application. In simple terms, the hosted application can be put into an escrow, and anyone can crowdfund the loan. When the loan is paid, the application is moved out of escrow. When the loan is defaulted on, the hosted application will be liquidated (ex., sold on Flippa). What do you think?<a class="text-blue-500 underline" href="https://github.com/citrudevmobile/kubecle">https://github.com/citrudevmobile/kubecle</a>
                </li>
               
            </ul>
        </section>

        <section class="pb-6 mt-5 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
             
              <section class="break-inside-avoid">
                <h2
                  class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                >
                  SKILLS
                </h2>
                <section class="mb-0 break-inside-avoid">
                  <section class="mt-1 last:pb-1">
										 <ul class="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            HTML5
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            CSS3
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            JavaScript
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Vue.js
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Node.js
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            React.js
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Python
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            MySQL
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Docker
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            MongoDB
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Linux
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            AWS
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Tailwind
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
            Web3.js
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
          GraphQl
        </li>
        <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
          Redis
        </li>
										
<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
											Web Design
											</li>
<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">UI/UX</li> <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"> CI/CD </li>
											
    </ul>
                  </section>
                </section>
                </section>
              </section>

              <section class="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
    
    <section class="break-inside-avoid">
        <h2 class="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
            EXPERIENCE
        </h2>
        
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                    Designer / Developer for Citrupoker
                </h3>
                <p class="text-sm leading-normal text-gray-500">
                    Jun 2019 &ndash; Present | Citrupoker
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp;
                    </span>
                    Strategized the business model, designed, and developed Citrupoker (a side project) from scratch using the MEVN stack. 
                </li>

                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp;
                    </span>
                    <a class="text-blue-500 underline" href="https://citrupoker.com/">https://citrupoker.com/</a>
                </li>
            </ul>
        </section>


        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                Freelance Full Stack Developer for Web3 project (Private)
                </h3>
                <p class="text-sm text-gray-500 leading-snugish">
                March 2022 &ndash; September 2023 | (Private)
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp; 
                    </span>
                    Developed multiple web scrapers to extract liquidity pool data from multiple sources.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp; 
                    </span>
                    Collaborated with an in-house senior software engineer to design and implement database schemas for MySql and MongoDB.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp; 
                    </span>
                    Collaborated with an in-house senior software engineer to design queries to extract insights from stored data.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp; 
                    </span>
                    Wrote code that interacts with smart contracts to automate the addition and removal of liquidity from liquidity pools.
                </li>
            </ul>
        </section>
        
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                Freelance Web Developer on Upwork
                </h3>
                <p class="text-sm text-gray-500 leading-snugish">
                July 2016 &ndash; Janaury 2020 | Upwork
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp; 
                    </span>
                    Worked with different clients around the world to build interesting applications such as bots, web scrapers,
                    MERN and MEVN stack web applications.
                </li>
            </ul>
        </section>
        
        <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                I.T. Department Intern at Tunxis Community College
                </h3>
                <p class="text-sm text-gray-500 leading-snugish">
                    Feb 2014 &ndash; June 2014 | Tunxis Community College
                </p>
            </header>
            <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                        &rsaquo;&nbsp;
                    </span>
                    Provided assistance and support to students, faculty, and staff requiring technical assistance in the computer lab.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                    &rsaquo;&nbsp;
                    </span>
                    Provided assistance and support for printers, computers, and other equipment in the staff and faculty offices, and also in
student classrooms.
                </li>
                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                    &rsaquo;&nbsp;
                    </span>
                    Collaborated with the I.T. staff to develop software utility applications for the computer lab using the Dot NET framework.
                </li>

                <li>
                    <span class="text-gray-500 transform -translate-y-px select-none">
                    &rsaquo;&nbsp;
                    </span>
                    Collaborated with the I.T staff to deploy and maintain I.T infrastructure on campus
                </li>
            </ul>
        </section>
        
        <section class="mb-2 border-b-0 border-gray-300 break-inside-avoid">
            <header>
                <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                    Contact
                </h3>
                <p class="text-sm text-gray-500 leading-snugish">
                    evansenonchong@hotmail.com
                </p>
            </header>
        </section>
    </section>
</section>

          
        </section>
      </div>
    )
}