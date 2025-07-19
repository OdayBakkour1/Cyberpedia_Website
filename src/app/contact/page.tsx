import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Us | Cyberpedia",
  description: "Get in touch with Cyberpedia for expert cybersecurity support and services. We're here to help you secure your business.",
  alternates: {
    canonical: "https://cyberpedia.site/contact"
  }
};

export default function ContactPage() {
  return <ContactClient />;
} 