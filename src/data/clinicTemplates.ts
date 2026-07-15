import { ClinicConfig } from '../types';

export const clinicConfig: ClinicConfig = {
  id: 'dental',
  clinicType: 'dental',
  displayName: 'Aura Dental Care',
  brandName: 'Aura Dental',
    logoText: 'AuraDental',
    tagline: 'Crafting Healthy, Confident Smiles',
    colors: {
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      primaryText: 'text-blue-600',
      primaryLight: 'bg-blue-50',
      accent: 'text-emerald-600',
      accentLight: 'bg-emerald-50',
    },
    hero: {
      headline: 'Exceptional Dental Care Tailored to Your Smile',
      subheadline: 'Led by Dr. Sarah Jenkins, Aura Dental provides state-of-the-art preventative, cosmetic, and restorative dentistry in a sterile, welcoming, and relaxed environment.',
      ctaPrimary: 'Schedule Appointment',
      ctaSecondary: 'WhatsApp Consultation',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    },
    doctor: {
      name: 'Dr. Sarah Jenkins, DDS',
      qualification: 'Doctor of Dental Surgery (Columbia University)',
      title: 'Principal Dentist & Cosmetic Specialist',
      experienceYears: 14,
      specialization: 'Cosmetic Dentistry & Full-Mouth Reconstruction',
      introduction: 'Dr. Sarah Jenkins is a highly respected dentist with over 14 years of clinical experience. She specializes in creating beautiful, healthy smiles through advanced cosmetic techniques and patient-centered, anxiety-free care. She believes that a great dental experience starts with listening to the patient and understanding their goals.',
      philosophy: 'We practice dentistry with a gentle touch. Our philosophy is built on patient education, preventative care, and using the least invasive techniques possible to achieve long-lasting, natural results.',
      achievements: [
        'Fellow of the American Academy of Cosmetic Dentistry (AACD)',
        'Recipient of the Columbia University Clinical Excellence Award',
        'Certified Provider for Invisalign® and Digital Smile Design'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    },
    services: [
      {
        id: 'd1',
        title: 'Preventative Care & Hygiene',
        description: 'Comprehensive oral examinations, digital diagnostic x-rays, and customized deep cleanings to protect against cavities and gum disease.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'd2',
        title: 'Cosmetic Dentistry',
        description: 'Transformative smile enhancements including premium porcelain veneers, professional in-office whitening, and composite bonding.',
        iconName: 'Sparkles'
      },
      {
        id: 'd3',
        title: 'Orthodontics & Invisalign®',
        description: 'Discreet orthodontic correction for teens and adults utilizing the world\'s most advanced clear aligner system.',
        iconName: 'Smile'
      },
      {
        id: 'd4',
        title: 'Restorative & Implantology',
        description: 'Permanent tooth replacement solutions with lifelike dental implants, single-visit crowns, and biological root canal therapy.',
        iconName: 'Activity'
      },
      {
        id: 'd5',
        title: 'Pediatric Dentistry',
        description: 'A gentle, playful introduction to dental health for children, focused on sealants, gentle cleanings, and positive habit-building.',
        iconName: 'Heart'
      },
      {
        id: 'd6',
        title: 'Emergency Dental Care',
        description: 'Same-day urgent assessments and pain-relief procedures for toothaches, chipped teeth, and dental traumas.',
        iconName: 'FlameKindling'
      }
    ],
    whyChooseUs: [
      {
        id: 'w1',
        title: 'Anxiety-Free Dentistry',
        description: 'We offer a calming environment with optional sedation dentistry options for an entirely stress-free visit.',
        iconName: 'Smile'
      },
      {
        id: 'w2',
        title: 'Advanced Digital Diagnostics',
        description: 'Equipped with 3D Cone Beam CT scans, intraoral cameras, and pain-free digital anesthesia delivery systems.',
        iconName: 'Cpu'
      },
      {
        id: 'w3',
        title: 'Patient-First Honesty',
        description: 'We present clear, transparent treatment plans with visual evidence. No high-pressure sales pitches.',
        iconName: 'Users'
      },
      {
        id: 'w4',
        title: 'Sterility & Safety Protocol',
        description: 'Exceeding OSHA and ADA guidelines with multi-stage medical grade autoclave sterilization for absolute safety.',
        iconName: 'FileCheck'
      }
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Michael Henderson',
        review: 'Dr. Jenkins completely changed how I feel about going to the dentist. The clinical team is highly skilled, gentle, and explained every step. My porcelain veneers look incredibly natural, and I receive compliments constantly!',
        rating: 5,
        date: 'June 18, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
        tag: 'Invisalign & Veneers'
      },
      {
        id: 't2',
        name: 'Clara Oswald',
        review: 'I had an emergency tooth fracture on a Saturday afternoon. Aura Dental squeezed me into their schedule within two hours and completed a beautiful composite crown restoration painlessly. Unbelievable service!',
        rating: 5,
        date: 'July 2, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop',
        tag: 'Emergency Restoration'
      },
      {
        id: 't3',
        name: 'David Vance',
        review: 'Cleanest medical facility I have ever stepped into. The receptionists are professional, and Dr. Jenkins is incredibly knowledgeable. She saved a tooth that another clinic recommended extracting.',
        rating: 5,
        date: 'May 14, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop',
        tag: 'Root Canal & Crown'
      }
    ],
    gallery: [
      {
        id: 'g1',
        title: 'Modern Reception Lobby',
        category: 'Clinic',
        imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'g2',
        title: 'Advanced Sterile Treatment Chair',
        category: 'Treatment Room',
        imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'g3',
        title: 'Precision Dental Imaging Center',
        category: 'Equipment',
        imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'g4',
        title: 'Collaborative Patient Consultation',
        category: 'Staff',
        imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop'
      }
    ],
    faq: [
      {
        id: 'f1',
        question: 'Do I need a referral to book an appointment?',
        answer: 'No referral is needed. You can book directly online, by phone, or via WhatsApp, and our coordinators will confirm the best available slot for you.'
      },
      {
        id: 'f2',
        question: 'What should I bring to my first visit?',
        answer: 'Please bring a valid photo ID, your insurance card if applicable, and a list of any current medications. Arriving 10 minutes early helps us complete intake smoothly.'
      },
      {
        id: 'f3',
        question: 'Do you accept dental insurance?',
        answer: 'We work with most major dental insurance providers. Our front desk team will verify your coverage and explain any out-of-pocket costs before treatment begins.'
      },
      {
        id: 'f4',
        question: 'Is emergency dental care available?',
        answer: 'Yes. We reserve same-day slots for urgent issues such as severe pain, swelling, or trauma. Call our clinic directly for the fastest response.'
      },
      {
        id: 'f5',
        question: 'How often should I schedule a routine checkup?',
        answer: 'We recommend a professional cleaning and examination every six months for most patients, though your dentist may suggest a different interval based on your oral health.'
      }
    ],
    contact: {
      phone: '+1 (555) 321-4490',
      email: 'hello@auradental.com',
      address: '742 Medical Plaza, Suite B, New York, NY 10019',
      workingHours: {
        weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
        saturday: 'Saturday: 9:00 AM - 2:00 PM',
        sunday: 'Sunday: Closed (On-call emergencies only)'
      },
      whatsappNumber: '+919328691416',
      mapEmbedUrlUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0298758804!2d-73.9822452!3d40.7613621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzQxLjAiTiA3M8KwNTgnNTYuMCJX!5e0!3m2!1sen!2sus!4v1234567890'
    }
  }


