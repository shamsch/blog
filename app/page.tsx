import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<section>
			<h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
				Who is Shamsur? 👩‍💻
			</h1>
			<p className='mb-4'>
				{`I am software developer based in Tampere, Finland. Currently working as a software consultant. This 
        is my minimal web presence. There is a blog section where I write about code and life. If you are interested,
        reach out to me via one of the platforms below. Happy to have a chat. Thanks for visiting! 🚀`}
			</p>
			<div className='my-8'>
				<BlogPosts />
			</div>
		</section>
	);
}
