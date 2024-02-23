import { Button } from 'antd';
import './styles.scss';

export type SliderProps = {
    largeImg: string,
    smallImg: string;
    subTitle: string;
    mainTitle: string;
    desc: string;
};

export default function Slider({ largeImg, smallImg, subTitle, mainTitle, desc }: SliderProps) {
    return (
        <>
            <div className="flex justify-center sm:justify-end sm:items-center relative">
                <div>
                    {/* image for large screen */}
                    <img className="sm:max-w-full z-0 h-auto hidden sm:block" src={largeImg} alt="large slider" />
                    {/* image for small screen */}
                    <img className="max-w-full z-0 h-auto block sm:hidden" src={smallImg} alt="small slider" />
                </div>
                {/* content */}
                <div className="z-50 w-200 sm:w-80 sm:-ml-8 lg:w-[457px] sm:ms-10 lg:mr-12 xl:mr-[10%] absolute mt-[3%] sm:-mt-6 text-center sm:text-left">
                    <div className="capitalize text-4xl sm:text-5xl lg:text-8xl fontMrsSaint text-primaryColor mb-2 sm:mb-4">
                        {subTitle}
                    </div>
                    <div className="capitalize text-3xl sm:text-4xl lg:text-7xl fontPlayfair font-extrabold mb-4 sm:mb-5 lg:mb-6">
                        {mainTitle}
                    </div>
                    <p className="text-gray-500 sm:text-sm lg:text-base mb-4 lg:mb-5 pl-0 max-sm:hidden max-w-ful">
                        {desc}
                    </p>
                    <Button
                        type="primary"
                        className="bg-primaryColor hover:!bg-slate-800 !rounded-none size-min lg:size-max"
                    >
                        <span className="text-xs sm:text-sm lg:text-lg uppercase">shop now</span>
                    </Button>
                </div>
            </div>
        </>
    );
}
