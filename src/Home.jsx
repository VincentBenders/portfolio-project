import { Component } from "react";
import photo from '/photo.png';
import React from "react";
import { Link } from "react-router";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="font-mono text-[#f6f7f8] h-screen flex items-center bg-[#001427]">
          <img
            src={photo}
            className="max-h-[700px] relative mx-auto rounded-lg overflow-hidden"
            alt="Example"
          />
          <section className="bg-[#12304f]  p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-[#4D6CFA]">Im Vincent!</h1>
            <p className="mt-4 text-lg ">
              Im a technical thinker who likes a challange and wants to
              strenghten his weakpoints.
            </p>
            <p className="mt-2 text-lg ">
              Im very curius about learning new things and viewing problems
              through other peoples eyes. I view dyslexia as a tool more than a
              problem because of the unique perspectives I have on certain
              topics. The best way to gain experience is by trying and i will
              try as many times as needed to succeed.
            </p>
            <p className="mt-2 text-lg ">
              I am currently looking for a internship in software development or backend development for web. 
              My current experience from school and internships has been mostly in webdevelopment.
              There are more challenges out there than i can see. 
              I simply ask for the opertunities that you can give me. 
            </p>
            <div className="mt-10">
                <p className="mb-5 font-normal text-gray-700 dark:text-[#f6f7f8]">
                  <Link
                    className={
                      "bg-blue-500 hover:bg-blue-700 text-[#f6f7f8] font-bold py-2 px-4 rounded"
                    }
                    to={"https://www.linkedin.com/in/vincent-bendersvincent-benders-software-developer/"}
                  >
                    My LinkedIn
                  </Link>
                </p>
              </div>
          </section>
          <section className="bg-[#12304f] text-[#f6f7f8] w-96 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl ">Skills</h2>
            <div>
              <p>HTML</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[90%]"></div>
            </div>
            <div>
              <p>CSS/SASS</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[90%]"></div>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[85%]"></div>
            </div>
            <div>
              <p>React</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[80%]"></div>
            </div>
            <div>
              <p>ExpressJS</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[80%]"></div>
            </div>
            <div>
              <p>PHP</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[85%]"></div>
            </div>
            <div>
              <p>Laravel</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[70%]"></div>
            </div>
            <div>
              <p>C#</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[40%]"></div>
            </div>
            <div>
              <p>Unity</p>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-blue-600 rounded-full dark:bg-[#4D6CFA] w-[50%]"></div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
