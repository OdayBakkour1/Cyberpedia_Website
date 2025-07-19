import ServicesClient from './ServicesClient';

export const metadata = {
  title: "Comprehensive Cybersecurity Services | Cyberpedia",
  description: "Explore a full suite of cybersecurity services at Cyberpedia, including Managed SOC, Penetration Testing, and Cloud Security, all tailored to protect your organization.",
  alternates: {
    canonical: "https://cyberpedia.site/services"
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
} 