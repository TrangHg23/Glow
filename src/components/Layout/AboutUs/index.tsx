import { ArrowRightOutlined } from "@ant-design/icons"
import { Button, Typography } from "antd"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <section className="fontPoppins lg:min-w-[960px] p-5 md:p-16 m-auto">
            <h1 className='capitalize text-2xl text-center my-5'>about us</h1>
            {/* block1 */}
            <div className="flex flex-col lg:flex-row m-auto justify-center items-center gap-10">
                <div className="hover:cursor-pointer flex justify-center">
                    <img className="w-full" src="src/assets/images/about_img.webp" alt="" />
                </div>
                {/* content */}
                <div className="lg:w-1/2">
                   <h1 className="capitalize text-2xl my-4">we have everything you need?</h1>
                   <p className="text-secondaryColor mb-4">
                    Lorem, ipsum dolor sit amet consectetsi placeat ab animi architecto neque labore amet. Eum delectus repudiandae ssitatibus. Distinctio, autem esse! 
                   </p>
                   <Typography.Title level={5}>Sample Unordered List</Typography.Title>
                   <ul className="text-secondaryColor list-disc ml-4 space-y-1 my-5">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Molestias, fugit maxime ad in sapiente officia corrupti velit ut nullatae.</li>
                        <li>Quos laudantium quaerat corporis autem enim reprehenderit in!</li>
                        <li>Dolorum molestiae soluta tempore rem, quidem eos </li>
                        <li>Perferendis ipsum deleniti id odit! Praesentium ipsum</li>
                    </ul>
                    <Link to="/contact"> 
                        <Button
                            type="primary" 
                            className="bg-primaryColor hover:!bg-slate-800 !rounded-none size-min lg:size-max flex items-center"
                        >
                            <span className="uppercase">contact us</span>
                            <ArrowRightOutlined />
                            
                        </Button>
                    </Link>
                </div>
            </div>
            {/* the products our services */}
            <div className="text-center mt-16">
                <h1 className="fontMrsSaint text-6xl text-primaryColor">The Products</h1>
                <Typography.Title className="fontPlayfair">Our Services.</Typography.Title>
                <div className="flex flex-col md:flex-row text-center justify-center items-center mt-10">
                    {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index}>
                            <div className="text-center mb-4 md:min-w-52 xl:min-w-96 mx-5 gap-2">
                                <div className="inline-block cursor-pointer hover:opacity-80"><img src="src/assets/images/icon_about.png" alt="" /></div>
                                <Typography.Title level={5} className='uppercase'>free resources</Typography.Title>
                                <p className="text-secondaryColor">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About