import HomeClient from './HomeClient';

export const metadata = {
  title: "Leading Cybersecurity Solutions to Protect Your Business | Cyberpedia",
  description: "Cyberpedia provides comprehensive cybersecurity solutions to protect your digital assets. Get a free security assessment and discover how we can secure your business.",
  alternates: {
    canonical: "https://cyberpedia.site/"
  }
};

export default function HomePage() {
  return <HomeClient />;
}
