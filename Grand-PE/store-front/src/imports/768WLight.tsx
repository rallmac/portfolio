import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import svgPaths from "./svg-a1i88rwup0";
import clsx from "clsx";
import imgComponent1 from "figma:asset/grand_pe_logo.png";
import imgComponent2 from "figma:asset/3fd0f8d0e8cb4e879d99f298bd07ac85a38f1aad.png";
import imgComponent11 from "figma:asset/9cd90e9d09ab540087f7330bd8758c42b6882d87.png";
import imgComponent12 from "figma:asset/refrigerator1.png";
import imgComponent13 from "figma:asset/3f0e1b93902d9df30707d17e10d48ac11b67fa86.png";
import imgComponent14 from "figma:asset/tv1.png";
import imgComponent15 from "figma:asset/hisense2.png";
import imgComponent16 from "figma:asset/appliances1.png";
import imgComponent17 from "figma:asset/4f4404acb89936f8eef7c17c8b4d5c4bcc7645de.png";
import imgComponent18 from "figma:asset/furnitures1.png";
import imgContainer from "figma:asset/lg1.png";
import imgDocMp4 from "figma:asset/video.png";
import imgComponent19 from "figma:asset/lg6.png";
import imgComponent20 from "figma:asset/59d577d0f8136d21c9e38156c47c122d0a23f421.png";
import imgComponent21 from "figma:asset/maxi8.png";
import imgComponent22 from "figma:asset/huawei1.png";
import imgComponent23 from "figma:asset/growatt1.png";
import imgComponent24 from "figma:asset/8c8045af4b759a818af5f51e651dfb92fb2b6d59.png";
import imgComponent25 from "figma:asset/2a5eab5e34c01a28c8c04d3e3a0eba2f0813c31e.png";
import imgComponent26 from "figma:asset/actiu1.png";
import imgContainer1 from "figma:asset/hisense9.png";
import imgComponent3 from "figma:asset/5b5b979c73806392280d2bf469781da394e246f9.png";
import imgComponent4 from "figma:asset/hisense7.png";
import imgComponent5 from "figma:asset/hisense8.png";
import imgComponent6 from "figma:asset/hisense6.png";
import imgComponent7 from "figma:asset/growatt1.png";
import imgComponent8 from "figma:asset/2f3f2e7192ab27121e603c47d1224045b881ae64.png";
import imgComponent9 from "figma:asset/6ae17ddf838acfc7ebfbf86154cfeab80d7b2ac4.png";
import imgContainer2 from "figma:asset/0f3e28460737a81127d4d6a4af70bed2944ece16.png";
import imgComponent10 from "figma:asset/lg_banner1.png";
import imgComponent27 from "figma:asset/maxi2.png";
import imgComponent28 from "figma:asset/hisense1.png";
import imgOutOfStock from "figma:asset/out_of_stock_label.png";
import imgComponent29 from "figma:asset/046e33f576771f1529a0a0515157f6b383ee7671.png";
import imgComponent30 from "figma:asset/whatsapp1.png";

function BackgroundBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(107deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)" }} className="absolute content-stretch flex inset-0 items-end justify-end p-[7px]">
      {children}
    </div>
  );
}

function ComponentBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <a href="https://grandpestore.com/search" className="aspect-[362/203.63] block cursor-pointer relative shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{children}</div>
    </a>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <a href="https://grandpestore.com/" className={clsx("block cursor-pointer relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden">{children}</div>
    </a>
  );
}

function SectionBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="max-w-[1660px] relative shrink-0 w-full">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[17.5px] items-start max-w-[inherit] px-[14px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="max-w-[1660px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] px-[14px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type ComponentBackgroundImage4Props = {
  additionalClassNames?: string;
};

function ComponentBackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<ComponentBackgroundImage4Props>) {
  return (
    <div className={clsx("absolute bg-[#a60029] content-stretch flex items-center justify-center left-[10px] pb-0 pl-0 pr-[3px] pt-px rounded-[40px] size-[40px] translate-y-[-50%]", additionalClassNames)}>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("max-w-[1660px] relative shrink-0 w-full", additionalClassNames)}>
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[14px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ComponentBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-10 size-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Component 2">{children}</g>
      </svg>
    </div>
  );
}

function ComponentBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Component 2">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] tracking-[0.255px] w-full">
        <p className="leading-[20px]">{children}</p>
      </div>
    </div>
  );
}
type ComponentBackgroundImageAndText1Props = {
  text: string;
};

function ComponentBackgroundImageAndText1({ text }: ComponentBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-black tracking-[0.255px]">
        <a className="block cursor-pointer leading-[20px] text-[14px]" href="https://grandpestore.com/search">
          {text}
        </a>
      </div>
    </div>
  );
}

function LinkBackgroundImage() {
  return (
    <a href="https://grandpestore.com/search" className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </a>
  );
}
type ComponentBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ComponentBackgroundImageAndText({ text, additionalClassNames = "" }: ComponentBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-center justify-center left-0 px-px py-[9.75px] right-0 rounded-[9999px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] text-center text-nowrap tracking-[0.102px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] text-nowrap tracking-[0.102px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingBackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImage({ text, text1, additionalClassNames = "" }: HeadingBackgroundImageProps) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col items-start left-0 min-h-[46px] overflow-clip pb-0 pt-[7px] px-0 right-0", additionalClassNames)}>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] text-nowrap tracking-[0.102px]">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return <BackgroundImage>{text}</BackgroundImage>;
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.153px] w-full">
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-right text-white tracking-[0.153px]">
        <p className="cursor-pointer leading-[24px] text-[16px]" role="link" tabIndex="0">
          {text}
        </p>
      </div>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[22px] w-full">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}

function ComponentBackgroundImage1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.167px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 14">
        <g id="Component 2">
          <path d={svgPaths.p2eb98c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ComponentBackgroundImage() {
  return (
    <BackgroundImage2 additionalClassNames="h-[49px] w-[154px]">
      <img alt="" className="absolute h-[76.61%] left-0 max-w-none top-[11.7%] w-full" src={imgComponent1} />
    </BackgroundImage2>
  );
}

function Component() {
  return (
    <ComponentBackgroundImage2>
      <path d={svgPaths.p2f187900} fill="var(--fill-0, #1B1B1B)" id="Vector" />
    </ComponentBackgroundImage2>
  );
}

function Component5({ onClick }: { onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Hamburger clicked!');
    onClick?.();
  };
  
  return (
    <button 
      onClick={handleClick}
      className="content-stretch flex items-center justify-center relative shrink-0 bg-transparent border-0 cursor-pointer p-2 z-[100] touch-auto" 
      data-name="Component 7"
      aria-label="Toggle menu"
      type="button"
      style={{ minWidth: '40px', minHeight: '40px' }}
    >
      <Component />
    </button>
  );
}

function Container({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Component5 onClick={onClick} />
    </div>
  );
}

function Container1({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Container">
      <Container onClick={onMenuClick} />
      <ComponentBackgroundImage />
    </div>
  );
}

function Component2() {
  return (
    <ComponentBackgroundImage3>
      <path d={svgPaths.p21fbd000} fill="var(--fill-0, #1B1B1B)" id="Vector" />
    </ComponentBackgroundImage3>
  );
}

function Component1() {
  return (
    <a className="content-stretch cursor-pointer flex items-center p-0 relative rounded-[9999px] shrink-0" data-name="Component 3" href="https://grandpestore.com/showrooms/showrooms-map">
      <Component2 />
    </a>
  );
}

function Component3() {
  return (
    <ComponentBackgroundImage3>
      <path d={svgPaths.p243cd200} fill="var(--fill-0, #1B1B1B)" id="Vector" />
    </ComponentBackgroundImage3>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-center p-[7px] relative shrink-0" data-name="Component 7">
      <Component3 />
    </div>
  );
}

function Component12() {
  return (
    <ComponentBackgroundImage3>
      <path d={svgPaths.p1190fe00} fill="var(--fill-0, #1B1B1B)" id="Vector" />
    </ComponentBackgroundImage3>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Component12 />
    </div>
  );
}

function Component4() {
  return (
    <a className="content-stretch cursor-pointer flex items-center p-0 relative shrink-0" data-name="Component 6" href="https://grandpestore.com/account/login">
      <Container2 />
    </a>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Component4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[10.5px] items-center relative shrink-0" data-name="Container">
      <Component1 />
      <Component6 />
      <Container3 />
    </div>
  );
}

function Container5({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="basis-0 grow max-w-[1660px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[14px] py-0 relative w-full">
          <Container1 onMenuClick={onMenuClick} />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Nav({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center px-0 py-[14px] sticky top-0 shrink-0 w-full z-[90]" data-name="Nav">
      <Container5 onMenuClick={onMenuClick} />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-px pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-full">
        <p className="leading-[normal]">Search for products</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] h-[42px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[49px] py-[10.5px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute h-[42px] left-[14px] top-0 w-[28px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 42">
        <g id="Component 2">
          <path d={svgPaths.p3dfce600} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Component13 />
    </div>
  );
}

function Background() {
  return (
    <BackgroundImage1 additionalClassNames="bg-[#f3f3f3]">
      <Container7 />
    </BackgroundImage1>
  );
}

function Background1() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-start pb-[14px] pt-0 px-0 relative shrink-0 w-full" data-name="Background">
      <Background />
    </div>
  );
}

function Component18() {
  return (
    <BackgroundImage2 additionalClassNames="aspect-[362/643.55] w-full">
      <img alt="" className="absolute h-full left-[-21.11%] max-w-none top-0 w-[142.22%]" src={imgComponent2} />
    </BackgroundImage2>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start relative shrink-0 w-[362px]" data-name="Container">
      <Component18 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[32px] py-0 relative self-stretch shrink-0 w-[394px]" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Margin1() {
  return null;
}

function Container9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[3546px]" data-name="Container">
      <Margin />
      {[...Array(8).keys()].map((_, i) => (
        <Margin1 key={i} />
      ))}
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative size-[14px]" data-name="Image+Background">
      <ImageFill />
    </div>
  );
}

function Component7() {
  return (
    <ComponentBackgroundImage4 additionalClassNames="opacity-[0.35] top-[calc(50%-2.01px)]">
      <ImageBackground />
    </ComponentBackgroundImage4>
  );
}

function ImageFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground1() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Image+Background">
      <ImageFill1 />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-[#a60029] content-stretch flex items-center justify-center pb-0 pl-[3px] pr-0 pt-px right-[10px] rounded-[40px] size-[40px] top-[calc(50%-2.01px)] translate-y-[-50%]" data-name="Component 10">
      <ImageBackground1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container9 />
      <Component7 />
      <Component8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="max-w-[1660px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] py-0 relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[5.25px] shrink-0 w-full" data-name="Section">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText text="Categories" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-right text-white tracking-[0.153px]" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Audio</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <BackgroundBackgroundImage>
      <Container13 />
    </BackgroundBackgroundImage>
  );
}

function Component9() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-0" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent11} />
      </div>
      <Background2 />
    </a>
  );
}

function Background3() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Refrigerator" />
    </BackgroundBackgroundImage>
  );
}

function Component19() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-0" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-1.28%] max-w-none top-0 w-[102.57%]" src={imgComponent12} />
      </div>
      <Background3 />
    </a>
  );
}

function Background4() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Washing Machines" />
    </BackgroundBackgroundImage>
  );
}

function Component20() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-[116.34px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent13} />
      </div>
      <Background4 />
    </a>
  );
}

function Background5() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="TVs" />
    </BackgroundBackgroundImage>
  );
}

function Component21() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-[116.34px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent14} />
      </div>
      <Background5 />
    </a>
  );
}

function Background6() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="ACs" />
    </BackgroundBackgroundImage>
  );
}

function Component22() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-[232.68px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent15} />
      </div>
      <Background6 />
    </a>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[20.95px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="cursor-pointer flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[0px] text-[16px] text-nowrap text-right text-white tracking-[0.153px]">
        <p className="mb-0" role="link" tabIndex="0">
          Small
        </p>
        <p role="link" tabIndex="0">
          Appliances/Fans
        </p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <BackgroundBackgroundImage>
      <Container14 />
    </BackgroundBackgroundImage>
  );
}

function Component23() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-[232.68px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent16} />
      </div>
      <Background7 />
    </a>
  );
}

function Background8() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Power Solution" />
    </BackgroundBackgroundImage>
  );
}

function Component24() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-[349.03px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent17} />
      </div>
      <Background8 />
    </a>
  );
}

function Background9() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="furnitures1" />
    </BackgroundBackgroundImage>
  );
}

function Component25() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-[349.03px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent18} />
      </div>
      <Background9 />
    </a>
  );
}

function Container15() {
  return (
    <div className="cursor-pointer h-[451.38px] relative shrink-0 w-full" data-name="Container">
      <Component9 />
      <Component19 />
      <Component20 />
      <Component21 />
      <Component22 />
      <Component23 />
      <Component24 />
      <Component25 />
    </div>
  );
}

function Section1() {
  return (
    <SectionBackgroundImage>
      <Container12 />
      <Container15 />
    </SectionBackgroundImage>
  );
}

function Container16() {
  return (
    <div className="aspect-[320/320] overflow-clip pointer-events-none relative rounded-[10.5px] shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer} />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#1b1b1b] text-[22px] w-full">
        <p className="mb-0">LG TV StanbyME 27 Inch</p>
        <p className="mb-0">Lifestyle Display Touch</p>
        <p>Screen (27ART10AK)</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.153px] w-full">
        <p className="leading-[24px]">NGN 1,250,000</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Item() {
  return <BackgroundImage>{`Stanby ME 27"`}</BackgroundImage>;
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[14px] tracking-[0.255px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[20px]">α7 Gen4 Processor</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <BackgroundImageAndText1 text="FHD" />
      <BackgroundImageAndText1 text="60Hz Native" />
      <Item1 />
      <BackgroundImageAndText1 text="HDR10 / HLG" />
      <BackgroundImageAndText1 text="621 x 361 x 29.9" />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Component 12">
      <a className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1b1b1b] text-[14px] tracking-[0.255px]" href="https://salva.ams3.cdn.digitaloceanspaces.com/production/tenants/grandpe/document/6/6eacf994-deb2-4114-8764-de54a989e471/doc.pdf">
        <p className="cursor-pointer leading-[20px]">LG Warranty</p>
      </a>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Component10 />
    </div>
  );
}

function Component26() {
  return (
    <div className="absolute content-stretch flex items-start left-[6.61px] pl-0 pr-[222.4px] py-0 top-[20px]" data-name="Component 12">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[0px] text-nowrap tracking-[0.255px]">
        <a className="block cursor-pointer leading-[20px] text-[14px]" href="https://salva.ams3.cdn.digitaloceanspaces.com/production/tenants/foua">
          https://salva.ams3.cdn.digitaloceanspaces.com/production/tenants/foua
        </a>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Item">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[40px] justify-center leading-[20px] left-0 not-italic text-[#1b1b1b] text-[14px] top-[20px] tracking-[0.255px] translate-y-[-50%] w-[229.22px]">
        <p className="mb-0">{`[Insurance Terms & Conditions]`}</p>
        <p>(</p>
      </div>
      <Component26 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[545.31px] not-italic text-[#1b1b1b] text-[14px] top-[30px] tracking-[0.255px] translate-y-[-50%] w-[9.887px]">
        <p className="leading-[20px]">...</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[28px] pt-0 px-0 relative shrink-0 w-full" data-name="List">
      <Item2 />
      <Item3 />
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-black relative rounded-[9999px] shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[21px] py-[10.5px] relative w-full">
          <a className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.153px]" href="https://grandpestore.com/product/711">
            <p className="cursor-pointer leading-[24px]">View Product Details</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container18 />
      <BackgroundImageAndText1 text="Description:" />
      <List />
      <BackgroundImageAndText1 text="Related PDFs:" />
      <List1 />
      <Component11 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#eee] relative rounded-[7px] shrink-0 w-full" data-name="Background">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-start p-[21px] relative w-full">
          <Container16 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <BackgroundImage1>
      <Background10 />
    </BackgroundImage1>
  );
}

function DocMp() {
  return (
    <div className="aspect-[362/238.77] relative shrink-0 w-full" data-name="doc.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDocMp4} />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <BackgroundImage1>
      <DocMp />
    </BackgroundImage1>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText text="Shop by Brand" />
    </div>
  );
}

function Background11() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="LG" />
    </BackgroundBackgroundImage>
  );
}

function Component27() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-0" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent19} />
      </div>
      <Background11 />
    </a>
  );
}

function Background12() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Hisense" />
    </BackgroundBackgroundImage>
  );
}

function Component28() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-0" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent20} />
      </div>
      <Background12 />
    </a>
  );
}

function Background13() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Maxi" />
    </BackgroundBackgroundImage>
  );
}

function Component29() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-[116.34px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent21} />
      </div>
      <Background13 />
    </a>
  );
}

function Background14() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Huawei" />
    </BackgroundBackgroundImage>
  );
}

function Component30() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-[116.34px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-2.28%] max-w-none top-0 w-[104.56%]" src={imgComponent22} />
      </div>
      <Background14 />
    </a>
  );
}

function Background15() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="growatt" />
    </BackgroundBackgroundImage>
  );
}

function Component31() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-[232.69px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[170.02%] left-0 max-w-none top-[-35.01%] w-full" src={imgComponent23} />
      </div>
      <Background15 />
    </a>
  );
}

function Background16() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Jinko" />
    </BackgroundBackgroundImage>
  );
}

function Component32() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-[232.69px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[170.02%] left-0 max-w-none top-[-35.01%] w-full" src={imgComponent24} />
      </div>
      <Background16 />
    </a>
  );
}

function Background17() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Deye" />
    </BackgroundBackgroundImage>
  );
}

function Component33() {
  return (
    <a className="absolute aspect-[174/102.34] block left-0 overflow-clip right-[188px] rounded-[7px] top-[349.03px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[170.02%] left-0 max-w-none top-[-35.01%] w-full" src={imgComponent25} />
      </div>
      <Background17 />
    </a>
  );
}

function Background18() {
  return (
    <BackgroundBackgroundImage>
      <ContainerBackgroundImageAndText text="Actiu" />
    </BackgroundBackgroundImage>
  );
}

function Component34() {
  return (
    <a className="absolute aspect-[174/102.34] block left-[188px] overflow-clip right-0 rounded-[7px] top-[349.03px]" data-name="Component 11" href="https://grandpestore.com/search">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.82%] max-w-none top-0 w-[117.63%]" src={imgComponent26} />
      </div>
      <Background18 />
    </a>
  );
}

function Container21() {
  return (
    <div className="cursor-pointer h-[451.38px] relative shrink-0 w-full" data-name="Container">
      <Component27 />
      <Component28 />
      <Component29 />
      <Component30 />
      <Component31 />
      <Component32 />
      <Component33 />
      <Component34 />
    </div>
  );
}

function Section4() {
  return (
    <SectionBackgroundImage>
      <Container20 />
      <Container21 />
    </SectionBackgroundImage>
  );
}

function Container22() {
  return <div className="basis-0 grow h-[56px] min-h-px min-w-px shrink-0" data-name="Container" />;
}

function Background19() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[42.42%] from-[rgba(0,0,0,0)] inset-0 items-end to-[#000000]" data-name="Background">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-3.87%] max-w-none top-0 w-[107.73%]" src={imgContainer1} />
      </div>
      <Background19 />
    </div>
  );
}

function Container24() {
  return <div className="basis-0 grow h-[56px] min-h-px min-w-px shrink-0" data-name="Container" />;
}

function Background20() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[42.42%] from-[rgba(0,0,0,0)] inset-0 items-end to-[#000000]" data-name="Background">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Background20 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[724px]" data-name="Container">
      <Container23 />
      <Container25 />
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground2() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative size-[14px]" data-name="Image+Background">
      <ImageFill2 />
    </div>
  );
}

function Component35() {
  return (
    <ComponentBackgroundImage4 additionalClassNames="opacity-[0.35] top-[calc(50%-2px)]">
      <ImageBackground2 />
    </ComponentBackgroundImage4>
  );
}

function ImageFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground3() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Image+Background">
      <ImageFill3 />
    </div>
  );
}

function Component36() {
  return (
    <div className="absolute bg-[#a60029] content-stretch flex items-center justify-center pb-0 pl-[3px] pr-0 pt-px right-[10px] rounded-[40px] size-[40px] top-[calc(50%-2px)] translate-y-[-50%]" data-name="Component 10">
      <ImageBackground3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Component35 />
      <Component36 />
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[14px] py-0 relative w-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText text="Promotions" />
    </div>
  );
}

function Section6() {
  return (
    <div className="max-w-[1660px] relative shrink-0 w-full" data-name="Section">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[17.5px] pt-0 px-[14px] relative w-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText text="Featured Products" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="h-[20px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-end min-h-[43px] pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[53.5px] pt-[198.74px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.74px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.74px]" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Component37() {
  return (
    <a className="absolute aspect-[151.73/151.74] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/373">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgComponent3} />
      </div>
    </a>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 418,900" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.74px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Hisense Split AC 1.5" text1="HP Inverter" additionalClassNames="top-[151.74px]" />
      <Component37 />
      <Container35 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.74px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Component38() {
  return (
    <a className="absolute aspect-[151.73/151.74] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/202">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgComponent4} />
      </div>
    </a>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 308,000" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.74px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Hisense Chest" text1="Freezer 198L (FC260)" additionalClassNames="top-[151.74px]" />
      <Component38 />
      <Container39 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.74px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container40 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container41 />
    </div>
  );
}

function Component39() {
  return (
    <a className="absolute aspect-[151.74/151.74] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/617">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-[99.99%] top-0" src={imgComponent5} />
      </div>
    </a>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 446,800" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.74px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Hisense TV UHD 50" text1="Inch A6N 4K Smart" additionalClassNames="top-[151.74px]" />
      <Component39 />
      <Container43 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.74px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.74px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.74px]" data-name="Margin">
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="h-[20px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-end min-h-[43px] pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[53.5px] pt-[198.74px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container48 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex inset-[0_-4651.76px_-0.01px_-161.74px] items-start" data-name="Container">
      <Margin2 />
      <Margin3 />
      <Margin4 />
      <Margin5 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
      <Margin2 />
      <Margin6 />
    </div>
  );
}

function ImageFill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground4() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative size-[14px]" data-name="Image+Background">
      <ImageFill4 />
    </div>
  );
}

function Component40() {
  return (
    <ComponentBackgroundImage4 additionalClassNames="top-[calc(50%-2.01px)]">
      <ImageBackground4 />
    </ComponentBackgroundImage4>
  );
}

function ImageFill5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground5() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Image+Background">
      <ImageFill5 />
    </div>
  );
}

function Component41() {
  return (
    <div className="absolute bg-[#a60029] content-stretch flex items-center justify-center pb-0 pl-[3px] pr-0 pt-px right-[10px] rounded-[40px] size-[40px] top-[calc(50%-2.01px)] translate-y-[-50%]" data-name="Component 10">
      <ImageBackground5 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[295.23px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Component40 />
      <Component41 />
    </div>
  );
}

function Section7() {
  return (
    <SectionBackgroundImage>
      <Container29 />
      <Container51 />
    </SectionBackgroundImage>
  );
}

function Component42() {
  return (
    <ComponentBackgroundImage5>
      <img alt="" className="absolute h-full left-[-0.14%] max-w-none top-0 w-[100.28%]" src={imgComponent6} />
    </ComponentBackgroundImage5>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Component42 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <ContainerBackgroundImage>
      <Container54 />
    </ContainerBackgroundImage>
  );
}

function Section8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[5.25px] shrink-0 w-full" data-name="Section">
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText text="Explore Solar Power Solutions" />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="h-[20px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-end min-h-[43px] pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[53.5px] pt-[198.74px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.74px]" data-name="Container">
      <Container59 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.74px]" data-name="Margin">
      <Container60 />
    </div>
  );
}

function Component43() {
  return (
    <a className="absolute aspect-[151.73/151.74] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/551">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgComponent7} />
      </div>
    </a>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 532,000" />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.74px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="growatt Hybrid" text1="Inverter SPF | ES…" additionalClassNames="top-[151.74px]" />
      <Component43 />
      <Container62 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.74px]" />
    </div>
  );
}

function Container64() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container64 />
    </div>
  );
}

function Component44() {
  return (
    <a className="absolute aspect-[151.73/151.74] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/693">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgComponent8} />
      </div>
    </a>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 1,064,000" />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.74px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="growatt Low Voltage" text1="LiFePO4 Battery…" additionalClassNames="top-[151.74px]" />
      <Component44 />
      <Container66 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.74px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container68 />
    </div>
  );
}

function Component45() {
  return (
    <a className="absolute aspect-[151.74/151.74] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/494">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-[99.99%] top-0" src={imgComponent9} />
      </div>
    </a>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 4,811,000" />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.74px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Huawei Power-M" text1="5kW Power Module" additionalClassNames="top-[151.74px]" />
      <Component45 />
      <Container70 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.74px]" />
    </div>
  );
}

function Container72() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.74px]" data-name="Container">
      <Container71 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.74px]" data-name="Margin">
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="h-[20px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-end min-h-[43px] pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[53.5px] pt-[198.74px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container75 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container76 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex inset-[0_-1093.6px_-0.01px_-161.74px] items-start" data-name="Container">
      <Margin7 />
      <Margin8 />
      <Margin9 />
      <Margin10 />
      <Margin11 />
      <Margin7 />
      <Margin11 />
      <Margin7 />
      <Margin11 />
      <Margin11 />
    </div>
  );
}

function ImageFill6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground6() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative size-[14px]" data-name="Image+Background">
      <ImageFill6 />
    </div>
  );
}

function Component46() {
  return (
    <ComponentBackgroundImage4 additionalClassNames="top-[calc(50%-2.01px)]">
      <ImageBackground6 />
    </ComponentBackgroundImage4>
  );
}

function ImageFill7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground7() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Image+Background">
      <ImageFill7 />
    </div>
  );
}

function Component47() {
  return (
    <div className="absolute bg-[#a60029] content-stretch flex items-center justify-center pb-0 pl-[3px] pr-0 pt-px right-[10px] rounded-[40px] size-[40px] top-[calc(50%-2.01px)] translate-y-[-50%]" data-name="Component 10">
      <ImageBackground7 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[295.23px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Component46 />
      <Component47 />
    </div>
  );
}

function Section9() {
  return (
    <SectionBackgroundImage>
      <Container56 />
      <Container78 />
    </SectionBackgroundImage>
  );
}

function Container79() {
  return (
    <div className="aspect-[362/203.63] mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.11%] max-w-none top-0 w-[100.21%]" src={imgContainer2} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[22px] w-full">
        <p className="leading-[28px]">LGFS25Q2YB0</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] tracking-[0.255px] w-full">
        <p className="mb-0">Buy LG Floor Standing AC 2.5 HP Dual Inverter</p>
        <p className="mb-0">AirTower M And Get Free LG Split AC 1.0 HP Dual</p>
        <p>Inverter with Gen-mode</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative rounded-[9999px] shrink-0 w-full" data-name="Component 19">
      <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[22px] py-[8px] relative w-full">
          <a className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] text-center text-nowrap tracking-[0.5px]" href="https://grandpestore.com/product/867">
            <p className="cursor-pointer leading-[24px]">View Product</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between mb-[-0.01px] px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Heading2 />
      <Component16 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] pt-0 px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container79 />
      <Container80 />
    </div>
  );
}

function Heading3() {
  return <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />;
}

function Heading4() {
  return <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />;
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Heading4 />
      <LinkBackgroundImage />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/444">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[60px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/782">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/784">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/104">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/101">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/160">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[60px] shrink-0 w-full" data-name="Heading 2" />
      <LinkBackgroundImage />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/759">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/957">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between px-0 py-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[28px] shrink-0 w-full" data-name="Heading 2" />
      <div className="h-[40px] shrink-0 w-full" data-name="Heading 2" />
      <a className="block cursor-pointer h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Link" href="https://grandpestore.com/product/736">
        <div aria-hidden="true" className="absolute border border-[#7e7576] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </a>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20.01px] pt-[203.62px] px-0 relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Container102 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-start min-h-[387.6300048828125px] relative shrink-0 w-[5430px]" data-name="Container">
      <Container81 />
      <Container83 />
      <Container85 />
      <Container87 />
      <Container89 />
      <Container91 />
      <Container93 />
      <Container95 />
      {[...Array(2).keys()].map((_, i) => (
        <Container97 key={i} />
      ))}
      <Container99 />
      <Container101 />
      <Container83 />
      <Container103 />
      <Container83 />
    </div>
  );
}

function ImageFill8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground8() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative size-[14px]" data-name="Image+Background">
      <ImageFill8 />
    </div>
  );
}

function Component48() {
  return (
    <ComponentBackgroundImage4 additionalClassNames="opacity-[0.35] top-[calc(50%-2.01px)]">
      <ImageBackground8 />
    </ComponentBackgroundImage4>
  );
}

function ImageFill9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground9() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Image+Background">
      <ImageFill9 />
    </div>
  );
}

function Component49() {
  return (
    <div className="absolute bg-[#a60029] content-stretch flex items-center justify-center pb-0 pl-[3px] pr-0 pt-px right-[10px] rounded-[40px] size-[40px] top-[calc(50%-2.01px)] translate-y-[-50%]" data-name="Component 10">
      <ImageBackground9 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <Component48 />
      <Component49 />
    </div>
  );
}

function Container106() {
  return (
    <BackgroundImage1>
      <Container105 />
    </BackgroundImage1>
  );
}

function Section10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Section">
      <Container106 />
    </div>
  );
}

function Component50() {
  return (
    <ComponentBackgroundImage5>
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgComponent10} />
    </ComponentBackgroundImage5>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Component50 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container107 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <ContainerBackgroundImage>
      <Container109 />
    </ContainerBackgroundImage>
  );
}

function Section11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[5.25px] shrink-0 w-full" data-name="Section">
      <Container110 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImageAndText text="Kitchen Small Appliances" />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="h-[20px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex items-end min-h-[43px] pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container112 />
    </div>
  );
}

function Container114() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[53.5px] pt-[198.73px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.74px]" data-name="Container">
      <Container114 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.74px]" data-name="Margin">
      <Container115 />
    </div>
  );
}

function Component51() {
  return (
    <a className="absolute aspect-[151.73/151.73] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/258">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgComponent27} />
      </div>
    </a>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 37,000" />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.73px]" data-name="Container">
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Maxi Standing Fan 16" text1="inch Black (40-…" additionalClassNames="top-[151.73px]" />
      <Component51 />
      <Container117 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.73px]" />
    </div>
  );
}

function Container119() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container118 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container119 />
    </div>
  );
}

function Component52() {
  return (
    <a className="absolute aspect-[151.73/151.73] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/330">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgComponent28} />
      </div>
    </a>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 91,900" />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.73px]" data-name="Container">
      <Container120 />
    </div>
  );
}

function Container122() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Hisense Ice Maker" text1="12KG/24h 1000mL…" additionalClassNames="top-[151.73px]" />
      <Component52 />
      <Container121 />
      <ComponentBackgroundImageAndText text="Add To Cart" additionalClassNames="top-[248.73px]" />
    </div>
  );
}

function Container123() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container122 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container123 />
    </div>
  );
}

function OutOfStock() {
  return (
    <div className="absolute left-0 size-[70px] top-0" data-name="out of stock">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOutOfStock} />
      </div>
    </div>
  );
}

function Component53() {
  return (
    <a className="absolute aspect-[151.74/151.73] block cursor-pointer left-0 overflow-clip right-0 top-0" data-name="Component 1" href="https://grandpestore.com/product/671">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[99.99%]" src={imgComponent29} />
      </div>
      <OutOfStock />
    </a>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ContainerBackgroundImageAndText1 text="NGN 119,000" />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex items-end left-0 min-h-[43px] pb-0 pt-[16px] px-0 right-0 top-[198.73px]" data-name="Container">
      <Container124 />
    </div>
  );
}

function Container126() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Hisense Air Fryer 8L" text1="2700W Dual Basket" additionalClassNames="top-[151.73px]" />
      <Component53 />
      <Container125 />
      <div className="absolute border border-[#1b1b1b] border-solid h-[39.5px] left-0 opacity-50 right-0 rounded-[9999px] top-[248.73px]" data-name="Button" />
    </div>
  );
}

function Container127() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.74px]" data-name="Container">
      <Container126 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.74px]" data-name="Margin">
      <Container127 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="h-[20px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex items-end min-h-[43px] pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container128 />
    </div>
  );
}

function Container130() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[53.5px] pt-[198.73px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container129 />
    </div>
  );
}

function Container131() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-[151.73px]" data-name="Container">
      <Container130 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[10px] py-0 relative self-stretch shrink-0 w-[161.73px]" data-name="Margin">
      <Container131 />
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute content-stretch flex inset-[0_-1902.28px_0_-161.74px] items-start" data-name="Container">
      <Margin12 />
      <Margin13 />
      <Margin14 />
      <Margin15 />
      <Margin16 />
      <Margin12 />
      <Margin16 />
      <Margin12 />
      <Margin16 />
      <Margin16 />
      <Margin12 />
      <Margin16 />
      <Margin12 />
      <Margin16 />
      <Margin12 />
    </div>
  );
}

function ImageFill10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground10() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative size-[14px]" data-name="Image+Background">
      <ImageFill10 />
    </div>
  );
}

function Component54() {
  return (
    <ComponentBackgroundImage4 additionalClassNames="top-[calc(50%-2.01px)]">
      <ImageBackground10 />
    </ComponentBackgroundImage4>
  );
}

function ImageFill11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2.917px] py-0 relative shrink-0 size-[14px]" data-name="image fill">
      <ComponentBackgroundImage1 />
    </div>
  );
}

function ImageBackground11() {
  return (
    <div className="bg-[#a60029] content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Image+Background">
      <ImageFill11 />
    </div>
  );
}

function Component55() {
  return (
    <div className="absolute bg-[#a60029] content-stretch flex items-center justify-center pb-0 pl-[3px] pr-0 pt-px right-[10px] rounded-[40px] size-[40px] top-[calc(50%-2.01px)] translate-y-[-50%]" data-name="Component 10">
      <ImageBackground11 />
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[295.23px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container132 />
      <Component54 />
      <Component55 />
    </div>
  );
}

function Section12() {
  return (
    <SectionBackgroundImage>
      <Container111 />
      <Container133 />
    </SectionBackgroundImage>
  );
}

function Component56() {
  return (
    <a className="aspect-[362/203.63] block cursor-pointer relative shrink-0 w-full" data-name="Component 1" href="https://wa.me/23407018884444">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgComponent30} />
      </div>
    </a>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[362px]" data-name="Container">
      <Component56 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container134 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <Container135 />
    </div>
  );
}

function Container137() {
  return (
    <ContainerBackgroundImage>
      <Container136 />
    </ContainerBackgroundImage>
  );
}

function Section13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[5.25px] shrink-0 w-full" data-name="Section">
      <Container137 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[21px] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="mb-0">Now you can Buy Premium Home Appliances with</p>
        <p className="mb-0">Warranty, we deliver quality, durability, and trusted</p>
        <p>performance, Free Shipping Available.</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <ComponentBackgroundImage />
      <Container138 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="Promotions" />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="Refrigerator" />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="Freezer" />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="Washing Machines" />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="TVs" />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText text="Categories" />
      <List2 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="TSTY" />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="Maxi" />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="growatt" />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="Jinko" />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Item">
      <ComponentBackgroundImageAndText1 text="Huawei" />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText text="Top Brands" />
      <List3 />
    </div>
  );
}

function Component57() {
  return (
    <ComponentBackgroundImage3>
      <path d={svgPaths.p1892700} fill="var(--fill-0, black)" id="Vector" />
    </ComponentBackgroundImage3>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[35px]" data-name="Container">
      <Component57 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[21px]">online@grandpe.com</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[10.5px] items-center p-0 relative shrink-0 w-full" data-name="Component 17" href="mailto:online@grandpe.com">
      <Container142 />
      <Container143 />
    </a>
  );
}

function Component58() {
  return (
    <ComponentBackgroundImage3>
      <path d={svgPaths.p3a3f5400} fill="var(--fill-0, black)" id="Vector" />
    </ComponentBackgroundImage3>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[35px]" data-name="Container">
      <Component58 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[21px]">+234 201 888 4444</p>
      </div>
    </div>
  );
}

function Component59() {
  return (
    <div className="content-stretch flex gap-[10.5px] items-center relative shrink-0 w-full" data-name="Component 17">
      <Container144 />
      <Container145 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="List">
      <Component14 />
      <Component59 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText text="Contact Us" />
      <List4 />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container139 />
      <Container140 />
      <Container141 />
      <Container146 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 18">
      <a className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap" href="https://grandpestore.com/privacy-policy">
        <p className="cursor-pointer leading-[21px]">Privacy Policy</p>
      </a>
    </div>
  );
}

function Component60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Component 18">
      <a className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://grandpestore.com/privacy-policy">
        <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">{`Terms & Conditions`}</p>
      </a>
    </div>
  );
}

function Container148() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21px] items-center relative">
        <Component15 />
        <Component60 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between pb-0 pt-[29px] px-0 relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[21px]">© 2025 grandpe. All rights reserved</p>
      </div>
      <Container148 />
    </div>
  );
}

function Container149() {
  return (
    <div className="max-w-[1660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[42px] items-start max-w-[inherit] px-[14px] py-0 relative w-full">
          <Container147 />
          <HorizontalBorder />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-start pb-[42px] pt-[119px] px-0 relative shrink-0 w-full" data-name="Footer">
      <Container149 />
    </div>
  );
}

function Container150({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Nav onMenuClick={onMenuClick} />
      <Background1 />
      <Main />
      <Footer />
    </div>
  );
}

function Component61() {
  return (
    <ComponentBackgroundImage2>
      <path d={svgPaths.pd2321f0} fill="var(--fill-0, white)" id="Vector" />
    </ComponentBackgroundImage2>
  );
}

function Background21() {
  return (
    <div className="absolute bg-[#e6e6e6] content-stretch flex items-center justify-center min-w-[28px] pl-[9.45px] pr-[9.47px] py-[4px] right-[-7px] rounded-[9999px] top-[-7px] w-[28px]" data-name="Background">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] text-center text-nowrap tracking-[0.102px]" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[20px]">0</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <a className="absolute bg-[#e61b42] bottom-[6082.29px] content-stretch cursor-pointer flex h-[49px] items-center justify-center overflow-clip p-0 right-[17.5px] rounded-[10.5px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[56px]" data-name="Component 20" href="https://grandpestore.com/checkout/cart">
      <Component61 />
      <Background21 />
    </a>
  );
}

// Mobile Menu Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('MobileMenu isOpen changed:', isOpen);
    }
  }, [isOpen]);
  if (!isOpen) return null;

  const content = (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[2147483646] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed top-0 left-0 h-full w-[280px] bg-white z-[2147483647] shadow-xl overflow-y-auto">
        <div className="flex flex-col p-6">
          <button
            onClick={onClose}
            className="self-end mb-4 p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <nav className="flex flex-col gap-4">
            <a href="https://grandpestore.com/" className="text-lg font-medium text-gray-900 hover:text-[#e61b42] py-2">Home</a>
            <a href="https://grandpestore.com/search" className="text-lg font-medium text-gray-900 hover:text-[#e61b42] py-2">Products</a>
            <a href="https://grandpestore.com/showrooms/showrooms-map" className="text-lg font-medium text-gray-900 hover:text-[#e61b42] py-2">Showrooms</a>
            <a href="https://grandpestore.com/account/login" className="text-lg font-medium text-gray-900 hover:text-[#e61b42] py-2">Account</a>
            <a href="https://grandpestore.com/checkout/cart" className="text-lg font-medium text-gray-900 hover:text-[#e61b42] py-2">Cart</a>
          </nav>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
}

export default function Component768WLight() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('toggleMenu called, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="768w light">
      <Container150 onMenuClick={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <div className="absolute bg-[rgba(0,0,0,0.2)] inset-[0_0_6012.27px_0] opacity-0" data-name="Overlay" />
      <Component17 />
    </div>
  );
}