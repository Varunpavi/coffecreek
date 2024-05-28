import Meta from '@/components/ui/meta';
import Head from 'next/head';
import Image from 'next/image';

export default function Custom404() {
  // const images = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: error404,
  // };
  return (
    <>
      <Meta title={"Error"} />
      <div className='h-fit w-full flex flex-col justify-center items-center'>

        {/* <Lottie options={images} height={500} width={500} className="w-96" /> */}
        <Image
          src="/assets/img/error.png"
          className="rounded-md"
          width={500}
          height={500}
          alt="error"
        />
        <div className='leading-loose'>
          <h1 className='text-center text-primary text-3xl'>Oops Sorry, something went wrong.</h1>
          <p className='text-center my-2'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <div className='bg-primary w-[200px] hover:bg-secondary text-white rounded-full p-3 my-5 m-auto text-center flex justify-center items-center '><a href="/">Go to Homepage</a></div>
        </div>
      </div>
    </>
  )
}
