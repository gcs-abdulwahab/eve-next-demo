import ContentBlock from "./ContentBlock";

import blogs from "@/app/data/data";

// console.log(data)

// let blog = {
//     id: 1,
//     title: "Shooting Stars",
//     content: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
// }

const Content = () => {
	return (
		<section class="text-gray-600 body-font">
			<div class="container px-5 py-4 mx-auto">
				<div class="flex flex-col text-center w-full mb-20">
					<h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
						ROOF PARTY POLAROID
					</h2>
					<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						Master Cleanse Reliac Heirloom
					</h1>
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
						gentrify, subway tile poke farm-to-table. Franzen you probably
						haven't heard of them man bun deep jianbing selfies heirloom prism
						food truck ugh squid celiac humblebrag.
					</p>
				</div>
				<div class="flex flex-wrap">
					{/* <ContentBlock blog={blog} /> */}
					{/* <ContentBlock />
        <ContentBlock />
        <ContentBlock /> */}

				</div>
				<button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
					Button
				</button>
			</div>
		</section>
	);
};

export default Content;
