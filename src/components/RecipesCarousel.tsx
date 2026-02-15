import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

const recipes = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuVbA7gO-_4p2oxBzYXuHv87VCnSpIiGM8QSplSgH-9bpFxuqFvrcS-YHVvsAu3lOadkwRpTp6giPeAqEhgc8Eb7VjvcqoWDBHRr_SUCvemJ5JVf6DxoxYls6aU8NZR1T_-a9XaPZiz77uF70mjvdJoBCb8x5ucHoF0Nf8orDQFyJYAWQIETQXaeb4hn0ZjdUrh1powek56i7Kf2mY9w4tM5bbr6jySi-c_D2XQ2ySr57Be9cbcTS8hkoutVyNJEU2i-LlJYkuwFq8",
        tag: "Cookies",
        title: "Soft Baked Cookies",
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfX36I_HDnExLOEMvv6xaj1XvCgzoAMOhLHBMO3grUzSjH-15sBdPQ3yKZzcJgBXdXHpAnJHfJCbrf1QvbRZ5DWwnvOBSk3UZXmIYUGmtjH-m6OKezaCJpU1on-S1dWMApuA0tefqLbqTmZjodkcvSkhE8rWsuPU37b3aAHn_H-PDQI6GpCSPr6QC-V22uLG89inJrDQd5CTGy53CYFcMfm_Ofd8ek3xCQDhRmUX2ZCVrWTZCovvOqEBtrI3XtohNtJc6zNqzezFWf",
        tag: "Dessert",
        title: "Fudgy Brownies",
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ia1Mk2o6pYulOiZAIVrC1yMzUnYRrq1Jy2l_AaqFZ793ttTjGF3FQX6SQmrH8hi3EXxfg_d9p36fiaZYVcD4p387rLhViFdGxn1nxjBMJmuL7hgPN01f98FExded9YFGOLYA3pzQjm2pzY0Dk85qtnXarG_8VXPrTUGGS1puW8JBqxPgzkGp4Rx5IGCKpQZg-gXlX8iRU5VkkgPyaGnrPpRt2i7t8eI6XmneIWDMaDkgluSYhHSOuI98t5-U0qwEE6Gr7z1ffP-p",
        tag: "Sarapan",
        title: "Pancake Fluffy",
    },
];

export function RecipesCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-2xl">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full border border-primary-light/30 bg-primary-light/10 text-primary-light text-xs font-bold uppercase tracking-wider mb-4"
                    >Galeri Resep</span
                    >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Inspirasi Dapur Mocafie
                    </h2>
                    <p className="text-primary-light/80 text-lg">
                        Satu tepung, sejuta kreasi. Temukan berbagai resep lezat dan
                        sehat.
                    </p>
                </div>

                <div className="hidden md:flex gap-4">
                    <CarouselPrevious className="static translate-y-0 w-16 h-16 rounded-full border-2 border-primary-light/30 bg-primary-dark/50 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-primary-dark hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 group shadow-lg cursor-pointer text-white hover:text-primary-dark" />
                    <CarouselNext className="static translate-y-0 w-16 h-16 rounded-full border-2 border-primary-light/30 bg-primary-dark/50 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-primary-dark hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 group shadow-lg cursor-pointer text-white hover:text-primary-dark" />
                </div>
            </div>

            <CarouselContent className="-ml-6">
                {recipes.map((item, index) => (
                    <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-[600px]">
                        <div className="w-full h-[500px] rounded-3xl overflow-hidden relative group shadow-2xl cursor-pointer">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300" />

                            <div className="absolute top-6 right-6">
                                <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <button className="text-white font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all group/btn bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm mt-2 pointer-events-none">
                                        Lihat Resep
                                        <span className="material-icons-round group-hover/btn:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Mobile Indicators - Optional, keeping basic structure but might not be fully functional without extra state, can omit or keep simple */}
            <div className="md:hidden flex justify-center mt-6 gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
        </Carousel>
    )
}
