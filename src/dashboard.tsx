import { useState } from "react";
import RightArrowIcon from './assets/reshot-icon-right-arrow-UCA8NGYZDJ.svg';
import LeftArrowIcon from './assets/reshot-icon-left-arrow-VCGUT7EKR3.svg';
 
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"about" | "experiences" | "recommended">("about");
  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImages([...images, imageUrl]);
      }
    };
    input.click();
  };

  const nextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const tabContent = {
    about: `Hello! I'm Jas, a full-Stack developer with hands-on experience building real-world SaaS apps, community platforms, and blogging systems using modern frameworks and BaaS tools. Skilled in React, Next.js, Tailwind CSS, Appwrite, Clerk, Prisma, Cloudinary AI, and Context API, with strong emphasis on authentication, UI/UX, and scalable design`,
    experiences: ` With a solid
foundation in software development, honed through my B.Tech in Electronics and Communication
Engineering and hands-on experience with modern frameworks and BaaS tools, I am eager to contribute
to your team and gain invaluable insights into creative engineering solutions.`,
    recommended: `I thrive on feedback and am committed to applying best practices to improve the technical solutions we
implement. I am particularly excited about the opportunity to learn new engineering methods and to
contribute insights that enhance product performance, reliability, and efficiency. My background in technologies such as React, Next.js, TailwindCSS, and effective use of Git demonstrates my commitment
to producing high-quality work and embracing innovations in programming.
I am eager to learn from world-class engineers, contribute to meaningful projects, and further sharpen
my technical and collaborative skills as part of your team`
  };

  return (
    <div className="flex w-screen h-screen bg-black">
      <div className="hidden lg:block flex-1"></div>

      <div className="flex-1 flex flex-col gap-5 p-6 justify-center items-end overflow-y-auto">
   
        <div className="w-full max-w-[720px] bg-[#363C43] rounded-[18px] overflow-hidden" 
        style={{ boxShadow: '0px 4.96px 12.4px 2.48px #00000040 inset' }}>
      
          <div className="flex items-center justify-between px-2 py-4">
            <div className="w-6 h-6 ml-2 bg-black rounded-full flex items-center justify-center text-gray-400 text-sm">
              ?
            </div>
          </div>

          <div className="flex bg-[#171717] rounded-[23px] mx-4 mb-6 p-1.5 gap-1.5">
              <button
              className={`flex-1 px-6 py-3 rounded-[20px] text-base font-medium transition-all duration-300 
                ${activeTab === "about" 
                  ? "bg-[#28292F] text-white" 
                  : "text-[#A3ADB2] hover-gradient "}`}
                  onClick={() => setActiveTab("about")}
                  style={activeTab === "about" ? { boxShadow: '0px 4.96px 12.4px 2.48px #00000040 inset' } : {}}
            >
              About
            </button>

          <button
              className={`flex-1 px-6 py-3 rounded-[20px] text-base font-medium transition-all duration-300 
                ${activeTab === "experiences" 
                  ? "bg-[#28292F] text-white" 
                  : "text-[#A3ADB2] hover-gradient "}`}
                  onClick={() => setActiveTab("experiences")}
                  style={activeTab === "experiences" ? { boxShadow: '0px 4.96px 12.4px 2.48px #00000040 inset' } : {}}
            >
            Experiences
            </button>
            <button
              className={`flex-1 px-6 py-3 rounded-[20px] text-base font-medium transition-all duration-300 
                ${activeTab === "recommended" 
                  ? "bg-[#28292F] text-white" 
                  : "text-[#A3ADB2] hover-gradient "}`}
                  onClick={() => setActiveTab("recommended")}
                  style={activeTab === "recommended" ? { boxShadow: '0px 4.96px 12.4px 2.48px #00000040 inset' } : {}}
            >
            Recommended
            </button>
          </div>

          <div className="px-10 pb-6">
            <div className="bg-[#363C43] p-4 rounded-md text-[#969696] leading-relaxed max-h-[175px] overflow-y-auto">
              <p className="whitespace-pre-line text-[15px]">{tabContent[activeTab]}</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[720px] bg-[#363C43] rounded-[18px] overflow-hidden" 
        style={{ boxShadow: '0px 4.96px 12.4px 2.48px #00000040 inset' }}>
          <div className="flex items-center justify-between px-2 py-4">
            <div className="w-6 h-6 ml-2 bg-black rounded-full flex items-center justify-center text-gray-400 text-sm">
              ?
            </div>
          </div>
          <div className="flex items-center justify-between px-10 mb-6">
            <h3 className="text-white text-lg font-semibold bg-[#171717] px-10 py-3 rounded-[20px]">
              Gallery
            </h3>
            <div className="flex gap-6 items-center">
              <button
                onClick={handleAddImage}
                className="px-6 py-2.5 text-white rounded-full transition-all text-sm font-medium flex items-center gap-1"
                style={{ 
                  background: '#FFFFFF08',
                  backdropFilter: 'blur(104.5599365234375px)',
                  boxShadow: '0px 3.26px 3.26px 0px #FFFFFF26 inset, 0px 0px 48.91px 0px #FFFFFF0D inset, 9px 10px 7.1px 0px #00000066, -0.5px -0.5px 6.9px 0px #FFFFFF40'
                }}
              >
                <span className="text-lg">+</span> ADD IMAGE
              </button>
              <div className="flex gap-3">
                <button
                onClick={prevImage}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)',
                    boxShadow: '4px 4px 4.9px 0px #00000040'
                  }}
                >
                  <img src={LeftArrowIcon} alt="Left Arrow" className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)',
                    boxShadow: '4px 4px 4.9px 0px #00000040'
                  }}
                >
                   <img src={RightArrowIcon} alt="Right Arrow" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-10 pb-8">
            <div className="flex gap-4 overflow-x-hidden">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`shrink-0 w-[190px] h-[179px] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform grayscale hover:grayscale-0 ${
                    idx < currentImageIndex ? 'hidden' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}