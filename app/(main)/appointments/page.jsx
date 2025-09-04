import { getPatientAppointments } from "@/actions/patient";
import { AppointmentCard } from "@/components/appointment-card";
import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/actions/onboarding";

export default async function PatientAppointmentsPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== "PATIENT") {
    redirect("/onboarding");
  }

  const { appointments, error } = await getPatientAppointments();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<Calendar />}
        title="My Appointments"
        backLink="/doctors"
        backLabel="Find Doctors"
      />

      <Card className="border-emerald-900/20 glass-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-emerald-400" />
            Your Scheduled Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-red-400" />
              </div>
              <p className="text-red-400 text-lg font-medium">Error: {error}</p>
            </div>
          ) : appointments?.length > 0 ? (
            <div className="space-y-6">
              {appointments.map((appointment, index) => (
                <div 
                  key={appointment.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AppointmentCard
                    appointment={appointment}
                    userRole="PATIENT"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto bg-emerald-900/20 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                No appointments scheduled
              </h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                You don&apos;t have any appointments scheduled yet. Browse our
                doctors and book your first consultation.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
