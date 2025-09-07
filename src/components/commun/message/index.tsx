import Image from "next/image";
import React from "react";

export default function MessageComponent() {
    return (
        <div className="w-full relative flex justify-center items-center py-20 md:h-[300px] lg:h-[550px]">
            {/* Imagem de fundo */}
            <Image
                data-aos="zoom-in"
                src={"/assets/message.png"}
                alt="Association Image"
                width={1000}
                height={1000}
                className="w-[85%] md:w-[60%] object-contain object-center absolute z-10 bottom-5 md:bottom-10 lg:bottom-5"
            />

            {/* Fundo preto de baixo */}
            <div className="w-full absolute bottom-0 z-0 bg-[#111827] py-5 md:py-10 lg:py-20"></div>
        </div>
    );
}
