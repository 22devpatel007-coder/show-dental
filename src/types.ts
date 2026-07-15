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
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
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
  mapEmbedUrlUrl: string;
}

export interface ClinicConfig {
  id: string;
  clinicType: 'dental' | 'physio' | 'skin' | 'eye';
  displayName: string;
  brandName: string;
  logoText: string;
  tagline: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryText: string;
    primaryLight: string;
    accent: string;
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
  faq: FaqItem[];
  contact: ContactInfo;
}