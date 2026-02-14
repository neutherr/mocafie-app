import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const galleryItems = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACHH5umFf-yoPmw-LywxUr2hXm7vQOgl9Ij37ZtVT2i2Hk4vFKp749UtdfVkTM1mZWirHBBjU3IkmhWsuKvBoBL4hTvERCHoXjTt4XQJYlv9uNupCfVNXR4E8_B1bz_WDCMKPfrBCcnJkxA00ERdfFsoJYBhpXZ2okZHqr4X1HcMIUpypBSmv3585LoIFG5GM9gUHnBJ-Qnqyynk_Sv5Mny5_9BT69uTEAkR6NtRaokKZaus98YjLi2cFeZs1MnLKtDNQJjj0uMXGs",
        tag: "Fermentasi",
        title: "Proses Enzimatis",
        desc: "Fermentasi 12-24 jam dalam wadah higienis untuk menghasilkan tepung berkualitas."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb7vlJuZQ7UDWqgmZcTXbp_hUHbTFywI1PjbGyRFNRwdCuaIXIujx4HJUCzEilJByOs3YFEcr2_XWN_WEgikp7cNcxh3JmlAGCykQyn6ihd_ka5nPr49dhTm81pdHXaVmgeQ9qyGqy0NbuCSQKGnQxjAf3t4nnoA1JoGvctcWI1repj8lxDAgtROVdKpwxccEQjMUbHYpZtk04H_dl5c6_VRLLb5f_OaUxFsKuvJXp89kZGCAy2mMBeMr7_UnGfwLgOMEhywQ9as9G",
        tag: "Pengeringan",
        title: "Solar Drying",
        desc: "Pengeringan di area terkontrol untuk menjaga warna putih alami."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBL4PF6wVopfWJ-rV1Lf5XhdiOUrywTiH83_sFQd8DHu1D-2tXYM61KGgd980OLYRCp6Nftc2vB6hvi9htcPatW70XA0ESfBLxut8ZvnmwyyMo1NuErqOrrn4Yh96tk1s91XWZxc4A2vuuC0zF_ryEgrXNErXh_OVx-SQYRNSTPUbbzUzuDLaEOUGMnfVpB3SfX66HvWG6fqZN7_caqIzxKPBNapXZOmBY4VBrSkCxqi1joVq24XUMctHwE27ynwsEBrh53qFszX0E",
        tag: "Manufaktur",
        title: "Teknologi Modern",
        desc: "Mesin stainless steel food-grade untuk hasil gilingan yang halus dan konsisten."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU9kawyCZzi26TqrLN6ZFRo0t3HPZmhE075N6CNKNy295rU1VKyNhFOx9z2570yk8EcoxI0h8VAVMqAxV2oLI-YQ3hP0H8JK3POaQlN1Osf7cf9V1WljWA4xgXsm2Fje_TCZ_6lgRLDhMSscmNeXtHUXbDhmF06Da80_wTCil1CCXzuHQ2R33YW3BoHgg4ZaOjpFVHuAhJYlXLQKhnoc2QgsNNLWKo6P8mHBZRsfymOOsT_VTGpLfZJUyRP4syH7B4g_UO43Gb-5lv",
        tag: "Quality Control",
        title: "Standar Tinggi",
        desc: "Tim QC di Bogor memastikan setiap batch memenuhi standar keamanan pangan."
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7wUEycKWydykb7LJJalc6R48IuEmJbq3GyXSMLIaEheCRJNqp7sgmD7yFrcICnHE_n71VV8IsgpxmwzjV6t9RWjdaBn3KyzFmsj5m5LhWLfWJ8UERqmSHowl_tHN1IhofmecwpEDmAOTL1nZP1n5w3epeA-AsbIcuQ5dHrFSf6gaJotxkdAwhv2CIj_uP_iJCA-dV0702TmjnKmKYW_rcobERSf3UmmP3onLCv321PxgcUmwUGMfAclXeVzeSMyArUuCmOwQnfjaG",
        tag: "Logistik",
        title: "Penyimpanan Terjaga",
        desc: "Gudang bersih dan terorganisir untuk menjaga kesegaran produk Mocafie."
    }
];

export function GalleryCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs md:max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {galleryItems.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                        <div className="p-1">
                            <div className="relative group shadow-soft rounded-3xl overflow-hidden h-[400px] cursor-pointer hover:shadow-glow transition-all duration-300">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">{item.tag}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-white/80 text-xs">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
