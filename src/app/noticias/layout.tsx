import type { ReactNode } from "react";

export default function NoticeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Conteúdo da página de produto */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
