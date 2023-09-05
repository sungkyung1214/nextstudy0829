import Image from 'next/image';
import img1 from "/public/images/tired.jpg";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <h2>Hello,Web!</h2>
      {/* 해당 이미지를 따로 import 하지 않으면 width,height를 반드시 지정하자 */}
      <p><Image alt="" src="/images/tired.jpg" width={100} height={100}/></p>
      <p><Image alt="" src={img1} /></p>
    </>
  )
}
