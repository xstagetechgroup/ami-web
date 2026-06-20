import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    testimony: string;
}

export function TestimonialCard({ name, testimony }: TestimonialCardProps) {
    return (
        <Card className="p-6 shadow-md flex flex-col justify-between">
            <CardContent className="p-0 flex flex-col justify-between h-full">
                {/* Testemunho */}
                <p className="text-gray-700 mb-6 text-start">{testimony}</p>

                {/* Rodapé com nome + ícone */}
                <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 text-start">{name}</span>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                        <User className="h-5 w-5 text-gray-500" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
