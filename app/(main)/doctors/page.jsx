import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SPECIALTIES } from "@/lib/specialities";

export default function DoctorsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Your Doctor
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse by specialty or view all available healthcare providers. 
          Connect with verified doctors who specialize in your health needs.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SPECIALTIES.map((specialty, index) => (
          <Link 
            key={specialty.name} 
            href={`/doctors/${specialty.name}`}
            className="group"
          >
            <Card 
              className="hover:border-emerald-700/40 transition-all duration-300 cursor-pointer border-emerald-900/20 h-full card-hover glass-card group-hover:shadow-emerald-500/10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-emerald-900/20 flex items-center justify-center mb-4 group-hover:bg-emerald-800/30 transition-colors duration-300">
                  <div className="text-emerald-400 text-2xl">{specialty.icon}</div>
                </div>
                <h3 className="font-semibold text-white group-hover:text-emerald-100 transition-colors duration-300 text-sm md:text-base">
                  {specialty.name}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}