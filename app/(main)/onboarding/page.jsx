"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, Loader2, ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setUserRole } from "@/actions/onboarding";
import { doctorFormSchema } from "@/lib/schema";
import { SPECIALTIES } from "@/lib/specialities";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";

export default function OnboardingPage() {
  const [step, setStep] = useState("choose-role");
  const router = useRouter();

  // Custom hook for user role server action
  const { loading, data, fn: submitUserRole } = useFetch(setUserRole);

  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(doctorFormSchema),
    defaultValues: {
      specialty: "",
      experience: undefined,
      credentialUrl: "",
      description: "",
    },
  });

  // Watch specialty value for controlled select component
  const specialtyValue = watch("specialty");

  // Handle patient role selection
  const handlePatientSelection = async () => {
    if (loading) return;

    const formData = new FormData();
    formData.append("role", "PATIENT");

    await submitUserRole(formData);
  };

  useEffect(() => {
    if (data && data?.success) {
      router.push(data.redirect);
    }
  }, [data]);

  // Added missing onDoctorSubmit function
  const onDoctorSubmit = async (data) => {
    if (loading) return;

    const formData = new FormData();
    formData.append("role", "DOCTOR");
    formData.append("specialty", data.specialty);
    formData.append("experience", data.experience.toString());
    formData.append("credentialUrl", data.credentialUrl);
    formData.append("description", data.description);

    await submitUserRole(formData);
  };

  // Role selection screen
  if (step === "choose-role") {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Role
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select how you'd like to use MediMeet. You can always change this later.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            className="border-emerald-900/20 hover:border-emerald-700/40 cursor-pointer transition-all duration-300 card-hover glass-card group"
            onClick={() => !loading && handlePatientSelection()}
          >
            <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
              <div className="p-6 bg-emerald-900/20 rounded-2xl mb-6 group-hover:bg-emerald-800/30 transition-colors duration-300">
                <User className="h-12 w-12 text-emerald-400" />
              </div>
              <CardTitle className="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                Join as a Patient
              </CardTitle>
              <CardDescription className="mb-6 text-base leading-relaxed">
                Book appointments, consult with doctors, and manage your
                healthcare journey with ease
              </CardDescription>
              <Button
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 btn-hover-lift shadow-lg shadow-emerald-500/25"
                disabled={loading}
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Continue as Patient"
                )}
              </Button>
            </CardContent>
          </Card>

          <Card
            className="border-emerald-900/20 hover:border-emerald-700/40 cursor-pointer transition-all duration-300 card-hover glass-card group"
            onClick={() => !loading && setStep("doctor-form")}
          >
            <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
              <div className="p-6 bg-emerald-900/20 rounded-2xl mb-6 group-hover:bg-emerald-800/30 transition-colors duration-300">
                <Stethoscope className="h-12 w-12 text-emerald-400" />
              </div>
              <CardTitle className="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                Join as a Doctor
              </CardTitle>
              <CardDescription className="mb-6 text-base leading-relaxed">
                Create your professional profile, set your availability, and
                provide consultations to patients
              </CardDescription>
              <Button
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 btn-hover-lift shadow-lg shadow-emerald-500/25"
                disabled={loading}
                size="lg"
              >
                Continue as Doctor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Doctor registration form
  if (step === "doctor-form") {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Complete Your Doctor Profile
          </h1>
          <p className="text-muted-foreground text-lg">
            Please provide your professional details for verification
          </p>
        </div>
        
        <Card className="border-emerald-900/20 glass-card">
          <CardContent className="pt-8">

          <form onSubmit={handleSubmit(onDoctorSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="specialty">Medical Specialty</Label>
              <Select
                value={specialtyValue}
                onValueChange={(value) => setValue("specialty", value)}
              >
                <SelectTrigger id="specialty">
                  <SelectValue placeholder="Select your specialty" />
                </SelectTrigger>
                <SelectContent>
                  {SPECIALTIES.map((spec) => (
                    <SelectItem
                      key={spec.name}
                      value={spec.name}
                      className="flex items-center gap-2"
                    >
                      <span className="text-emerald-400">{spec.icon}</span>
                      {spec.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.specialty && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.specialty.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                placeholder="e.g. 5"
                {...register("experience", { valueAsNumber: true })}
              />
              {errors.experience && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="credentialUrl">Link to Credential Document</Label>
              <Input
                id="credentialUrl"
                type="url"
                placeholder="https://example.com/my-medical-degree.pdf"
                {...register("credentialUrl")}
              />
              {errors.credentialUrl && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.credentialUrl.message}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                Please provide a link to your medical degree or certification
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description of Your Services</Label>
              <Textarea
                id="description"
                placeholder="Describe your expertise, services, and approach to patient care..."
                rows="4"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="pt-6 flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep("choose-role")}
                className="border-emerald-900/30 glass-card hover:bg-muted/50"
                disabled={loading}
                size="lg"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 btn-hover-lift shadow-lg shadow-emerald-500/25"
                disabled={loading}
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit for Verification"
                )}
              </Button>
            </div>
          </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
