
import React from 'react'
import Footer from "../../components/footer/Footer"
import glass from "../../assets/images/glass.png"
import cover from "../../assets/images/cover.png"

const Blog = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tempered Glass</h2>
          <div className="blog_card flex flex-col md:flex-row items-center gap-8 p-6 bg-zinc-400 rounded-3xl">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img src={glass} alt="Tempered Glass" className="w-full rounded-xl" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Back Cover</h2>
          <div className="blog_card flex flex-col md:flex-row items-center gap-8 p-6 bg-zinc-400 rounded-3xl">
            <div className="md:w-1/2">
              <img src={cover} alt="Back Cover" className="w-full rounded-xl" />
            </div>
            <div className="md:w-1/2">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mobile Brand and Price Strategy</h2>
          <div className="blog_card flex flex-col md:flex-row items-center gap-8 p-6 bg-zinc-400 rounded-3xl">
            <div className="w-full">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Blog
