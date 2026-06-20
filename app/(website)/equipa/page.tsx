"use client";
import Container from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useTranslation } from "@/hooks/useTranslation";
import { Loader2 } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role_pt: string;
  role_en: string | null;
  role_fr: string | null;
  imageUrl: string | null;
  linkedinUrl: string | null;
  instagramUrl: string | null;
  order: number;
}

export default function EquipaPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useTranslation();

  useEffect(() => {
    fetch("/api/public/team")
      .then((r) => r.json())
      .then((data) => setMembers(data.members ?? []))
      .finally(() => setLoading(false));
  }, []);

  const getRole = (member: TeamMember) => {
    if (lang === "en") return member.role_en ?? member.role_pt;
    if (lang === "fr") return member.role_fr ?? member.role_pt;
    return member.role_pt;
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <div className="w-full h-[250px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
        <h1 className="text-4xl font-bold">A NOSSA EQUIPA</h1>
        <div className="flex items-center justify-center gap-2">
          <Link className="hover:underline duration-300" href={"/"}>HOME</Link>
          <p>-</p>
          <p>EQUIPA</p>
        </div>
      </div>

      <Container>
        <div className="w-full flex flex-col gap-10 py-10">
          <h2 className="italic text-lg md:text-xl text-center">Estrutura Organizacional</h2>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-primaryColor" size={40} />
            </div>
          ) : members.length === 0 ? (
            <p className="text-center text-gray-500">Nenhum membro da equipa disponível.</p>
          ) : (
            <div className="w-full flex gap-10 items-center justify-center flex-wrap">
              {members.map((member) => (
                <div key={member.id} className="w-[350px] h-[400px] rounded-tl-3xl rounded-br-3xl relative">
                  {member.imageUrl ? (
                    <Image
                      className="w-full h-full absolute z-10 rounded-tl-3xl rounded-br-3xl object-cover object-center shadow-lg"
                      src={member.imageUrl}
                      alt={member.name}
                      width={500}
                      height={500}
                    />
                  ) : (
                    <div className="w-full h-full absolute z-10 rounded-tl-3xl rounded-br-3xl bg-gray-200 flex items-center justify-center shadow-lg">
                      <span className="text-6xl text-gray-400 font-bold">{member.name[0]}</span>
                    </div>
                  )}
                  <div className="absolute z-20 p-2 flex flex-col gap-2 bottom-0 left-0 w-full bg-white/90 rounded-br-3xl shadow-white/50 backdrop-blur-md">
                    <div className="flex gap-2">
                      {member.linkedinUrl && (
                        <Link href={member.linkedinUrl} target="_blank">
                          <FaLinkedinIn className="text-xl" />
                        </Link>
                      )}
                      {member.instagramUrl && (
                        <Link href={member.instagramUrl} target="_blank">
                          <FaInstagram className="text-xl" />
                        </Link>
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-medium">{member.name}</p>
                      <p className="italic">{getRole(member)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
