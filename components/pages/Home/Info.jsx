"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Info = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".info-text",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".info-section",
          start: "top 80%", // يبدأ عند ظهور 80٪ من القسم في الشاشة
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".info-images",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".info-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto mb-44">
      <section className="relative  grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 px-6 md:px-16 bg-white mb-24">
        {/* خلفية نص */}
        <div className="absolute bottom-[-150px] inset-x-0 text-center select-none pointer-events-none">
          <h2 className="text-[50px] md:text-[160px] font-extrabold text-black/5 uppercase">
            AG<span className="text-red-600">Takaful</span>
          </h2>
        </div>

        {/* النصوص */}
        <div className="info-text relative z-20 space-y-6 text-right">
          <p className="text-red-600 font-semibold text-lg">مرحباً بك</p>
          <h3 className="text-4xl md:text-5xl font-bold leading-snug text-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-red-700">
              موقع العروض
            </span>{" "}
            — وجهتك الأولى لعروض وخصومات حقيقية
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            نحن في <span className="font-semibold text-black">موقع العروض</span>{" "}
            نوفّر لك أحدث الخصومات والعروض من أشهر المتاجر والعلامات التجارية
            حول العالم، في مكان واحد.
          </p>
          <p className="text-lg text-gray-700">
            تابع يومياً أفضل التخفيضات على الإلكترونيات، الأزياء، السفر والمزيد
            — لتوفّر وقتك ومالك بسهولة.
          </p>
          {/* <a
              href="#"
              className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              اكتشف العروض الآن
            </a> */}
        </div>

        {/* الصور */}
        <div className="info-images relative z-20 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="relative w-2/3 border-4 border-white shadow-lg z-10 rounded-2xl overflow-hidden">
              <Image
                src="/landing/info-1.jpg"
                alt="صورة رئيسية"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>

            <div className="absolute top-40 left-10 w-2/3 border-4 border-white shadow-lg z-20 rounded-2xl overflow-hidden">
              <Image
                src="/landing/info-1.jpg"
                alt="صورة ثانية"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>

            <div className="absolute -top-8 -left-4 w-1/2 border-4 border-white shadow-lg z-0 rounded-2xl overflow-hidden">
              <Image
                src="/landing/info-1.jpg"
                alt="صورة ثالثة"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
