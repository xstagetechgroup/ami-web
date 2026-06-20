'use client'
import Container from "@/components/shared/container";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, CalendarDays, Loader2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { SiteContent } from "@/types/siteContent";
import { useEffect, useState } from "react";

interface PublicEvent {
  id:        string
  title:     string
  title_en:  string | null
  title_fr:  string | null
  startDate: string
  location:  string | null
  imageUrl:  string | null
}

export default function EventosPage() {
  const { t, lang } = useTranslation();
  const e = (t as unknown as SiteContent).eventsPage;

  const [events,  setEvents]  = useState<PublicEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/public/events')
      .then((r) => r.json())
      .then((data) => setEvents(data.events ?? []))
      .finally(() => setLoading(false));
  }, []);

  function getTitle(ev: PublicEvent): string {
    if (lang === 'en' && ev.title_en) return ev.title_en;
    if (lang === 'fr' && ev.title_fr) return ev.title_fr;
    return ev.title;
  }

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString(
      lang === 'pt' ? 'pt-PT' : lang === 'fr' ? 'fr-FR' : 'en-US',
      { day: '2-digit', month: 'long', year: 'numeric' }
    );
  }

  const gridClass =
    events.length === 1
      ? 'flex justify-center'
      : events.length === 2
      ? 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  return (
    <div className="w-full">
      <div className="w-full h-62.5 bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
        <h1 className="text-4xl font-bold">{e?.title ?? "EVENTOS"}</h1>
        <div className="flex items-center justify-center gap-2">
          <Link className="hover:underline duration-300" href="/">
            {e?.breadcrumbHome ?? "Home"}
          </Link>
          <p>-</p>
          <p>{e?.breadcrumbEvents ?? "Eventos"}</p>
        </div>
      </div>

      <Container>
        <div className="py-12">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 text-primaryColor animate-spin" />
            </div>
          ) : events.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-gray-400">
              <CalendarDays size={48} strokeWidth={1.5} />
              <p className="text-base font-medium">Nenhum evento disponível de momento.</p>
            </div>
          ) : (
            <div className={gridClass}>
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col w-full max-w-sm"
                >
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    {ev.imageUrl ? (
                      <Image
                        src={ev.imageUrl}
                        alt={getTitle(ev)}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <CalendarDays size={40} strokeWidth={1} />
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col grow gap-3">
                    <h3 className="text-lg font-bold line-clamp-2">{getTitle(ev)}</h3>
                    <div className="flex flex-col gap-1 text-sm text-gray-500 mt-auto pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primaryColor" />
                        {formatDate(ev.startDate)}
                      </span>
                      {ev.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-primaryColor" />
                          {ev.location}
                        </span>
                      )}
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
