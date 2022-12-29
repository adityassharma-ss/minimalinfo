import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useEffect } from "react";
import { DefaultSection } from "../elements/DefaultSection";

const MyList = () => {
	return (
	  <ul>
		<li style={{ margin: '20px 0', color: "white" }}><a href="https://github.com/adityassharma-ss/mujbubble">"MUJBubble"</a>
		<p>
			An online platform for students to connect with each other and share their Work, Experience & other stuffs
		</p>
		</li>
		<li style={{ margin: '20px 0', color: "#387BDF" }}><a href="https://aditya-sage.vercel.app/">"Portfolio WebSite"</a>
		<p>
			My own Portfolio Website
		</p>
		</li>
		<li style={{ margin: '20px 0', color: "#46912B" }}><a href="https://github.com/adityassharma-ss/DevOps">"DevOps"</a>
		<p>
			My very own DevOps Journey
		</p>
		</li>
		<li style={{ margin: '20px 0', color: "#D5C922" }}><a href="https://thisdoesnothing.vercel.app/">"thisdoesnothing"</a>
		<p>
			Sorry, I don't know what to put here
		</p>
		</li>
		<li style={{ margin: '20px 0', color: "#E68C26" }}><a href="https://github.com/adityassharma-ss/hackeducation">"HackEducation"</a>
		<p>
			An e-learning platform, consisting of resources & guidance to explore the world of Computer Science
		</p>
		</li>
		<li style={{ margin: '20px 0', color: "#26D9E6" }}><a href="https://github.com/adityassharma-ss/">"OpenSource"</a>
		<p>
			You can checkout my contributions to OpenSource on Github
		</p>
		</li>
		<li><a href="https://github.com/adityassharma-ss">And much more..</a>
		</li>
		<li style={{ margin: '20px 0'}}>
			<p>
			I'm always open to freelance work. If you're interested, feel free to contact me!
			</p>
		</li>
	  </ul>
	);
}

const Section1 = () => {
	const text = "Stuffs I've made".split(" ");
	const subText =
		"".split(" ");

	return (
		<DefaultSection>
			<div>
				<h1 className="overflow-hidden text-4xl leading-loose font-bold">
					{text.map((word, index) => (
						<span
							key={index}
							className="text-animate-up whitespace-pre inline-block overflow-hidden"
							style={{
								// @ts-ignore
								"--start": "150ms",
								"--delay": `${index * 0.1}s`,
							}}
						>
							{index === 2 ? (
								<RoughNotation
									type="underline"
									show={true}
									strokeWidth={3}
									animationDuration={400}
									animationDelay={1000}
									color="	
									rgb(255,255,0)"
								>
									{word}
								</RoughNotation>
							) : (
								word
							)}
							{index !== text.length - 1 && " "}
						</span>
					))}
				</h1>
				<h5>
					<MyList />
				</h5>
				<h3 className="font-medium overflow-hidden text-2xl leading-loose text-gray-400">
					{subText.map((word, index) => (
						<span
							key={index}
							className="text-animate-up whitespace-pre inline-block"
							style={{
								// @ts-ignore
								"--start": "600ms",
								"--delay": `${index * 0.1}s`,
							}}
						>
							{index === 3 || index === 5 || index === 7 ? (
								<span className="font-serif italic text-white text-4xl">
									{word}
								</span>
							) : (
								word
							)}
							{index !== subText.length - 1 && " "}
						</span>
					))}
				</h3>
			</div>
		</DefaultSection>
	);
};

export default Section1;
