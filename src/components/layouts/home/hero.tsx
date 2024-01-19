import ModalVideo from '@/src/components/utils/modal-video';
import Image from 'next/image';
import HeroBg from '@/public/images/home/hero-image.png';
import Slogan from '@/public/images/home/slogan.png';
export default function Hero() {
  
  return (
    <section className="relative">
      <div className="w-full min-h-screen flex items-center justify-center relative">
        {/* Hero video */}
        {/* <ModalVideo
          video='/videos/video.mp4'
          videoWidth={1920}
          videoHeight={1080}
        /> */}
        {/* Hero image */}
        <Image
          className="pl-2 pr-2 pt-2 pb-2 md:pb-0 rounded-2xl h-auto object-cover"
          src={HeroBg}
          fill
          alt="hero-bg"
        />
        {/* <Image
      className='absolute inset-0 mx-auto top-[530px] left-0 p-10 md:top-[530px] lg:top-[480px] xl:top-[550px] xxl:top-[500px] xxxl:top-[550px] 2xl:top-[720px] 3xl:top-[690px] wide:top-[735px]  wider:top-[1100px] md:left-[10px] lg:left-[100px] xl:left-[370px]  2xl:left-[600px] wide:left-[770px] wider:left-[1050px] '
      src={Slogan}
      width={930}
      height={72}
      alt='slogan'
      /> */}
        <Image
          className="absolute flex inset-0 mt-auto ml-auto mb-[90px] md:mb-5 px-10 md:p-20"
          src={Slogan}
          width={930}
          height={72}
          alt="slogan"
        />
      </div>
    </section>
  );
}
