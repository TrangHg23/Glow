import { Carousel } from 'antd';
import Slider from '~/components/slider';
import { sliderInfo } from '~/constants';

const Home = () => {
    return (
        <div className="w-screen">
            {/* slider */}
            <Carousel autoplay>
                {sliderInfo.map((slider, index) => (
                    <div key={index}>
                        <Slider
                            largeImg={slider.largeImg}
                            smallImg={slider.smallImg}
                            subTitle={slider.subTitle}
                            mainTitle={slider.mainTitle}
                            desc={slider.desc}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;
