export interface DoctorInfo {
  name: string;
  qualification: string;
  title: string;
  experienceYears: number;
  specialization: string;
  introduction: string;
  philosophy: string;
  achievements: string[];
  photoUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
  photoUrl: string;
  tag: string; // e.g., "Dental Patient", "Knee Rehab"
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  whatsappNumber: string;
  mapEmbedUrlUrl: string; // for the simulated embedded google map
}

export interface ClinicConfig {
  id: string;
  clinicType: 'dental' | 'physio' | 'skin' | 'eye';
  displayName: string;
  brandName: string;
  logoText: string;
  tagline: string;
  colors: {
    primary: string;       // e.g., "bg-blue-600" or hex-related CSS
    primaryHover: string;  // hover state color class
    primaryText: string;   // text color class e.g. text-blue-600
    primaryLight: string;  // e.g. bg-blue-50
    accent: string;        // text or bg accent
    accentLight: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  doctor: DoctorInfo;
  services: ServiceItem[];
  whyChooseUs: ValueProp[];
  testimonials: TestimonialItem[];
  gallery: GalleryItem[];
  contact: ContactInfo;
}
