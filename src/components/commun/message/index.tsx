import Image from "next/image";
import React from "react";

export default function MessageComponent() {
    return (
        <div className="w-full flex justify-center items-center pb-5">
            {/* Imagem de fundo */}
            <Image
                data-aos="zoom-in"
                src={"/assets/message.png"}
                alt="Association Image"
                width={1000}
                height={1000}
                className="w-[85%] md:w-[60%] object-contain object-center "
            />
        </div>
    );
}
