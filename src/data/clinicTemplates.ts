import { ClinicConfig } from '../types';

export const clinicConfigs: Record<string, ClinicConfig> = {
  dental: {
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
      mapEmbedUrlUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.029875880407!2d-73.9822452!3d40.7613621!'
    }
  },
  physio: {
    id: 'physio',
    clinicType: 'physio',
    displayName: 'Kinetic Rehab & Physiotherapy',
    brandName: 'Kinetic Physio',
    logoText: 'KineticPhysio',
    tagline: 'Restoring Movement, Empowering Life',
    colors: {
      primary: 'bg-teal-600',
      primaryHover: 'hover:bg-teal-700',
      primaryText: 'text-teal-600',
      primaryLight: 'bg-teal-50',
      accent: 'text-orange-600',
      accentLight: 'bg-orange-50',
    },
    hero: {
      headline: 'Scientific Physical Therapy to Get You Moving Pain-Free',
      subheadline: 'Led by Dr. Marcus Vance, PT, DPT, Kinetic Rehab provides evidence-based physiotherapy, athletic conditioning, and post-operative recovery solutions tailored to your unique anatomy.',
      ctaPrimary: 'Book Physical Assessment',
      ctaSecondary: 'WhatsApp Consultation',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    },
    doctor: {
      name: 'Dr. Marcus Vance, PT, DPT',
      qualification: 'Doctor of Physical Therapy (University of Southern California)',
      title: 'Clinical Director & Orthopedic Specialist',
      experienceYears: 11,
      specialization: 'Sports Injury Rehabilitation & Spinal Disorders',
      introduction: 'Dr. Marcus Vance is a passionate physical therapist who has dedicated over 11 years to orthopaedic rehabilitative medicine. Having worked with collegiate athletes and spinal trauma survivors, Marcus specializes in hands-on manual therapy and biomechanical movement analysis to solve chronic pain at its source.',
      philosophy: 'Rehabilitation is not about passive treatment. It is a collaborative process where we analyze biomechanics, restore joint mobility, and build the muscular intelligence required to prevent future injuries.',
      achievements: [
        'Board Certified Clinical Specialist in Orthopaedic Physical Therapy (OCS)',
        'Former Assistant Physical Therapist for the USC Athletics Program',
        'Published Researcher in the Journal of Orthopaedic & Sports Physical Therapy'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=800&auto=format&fit=crop',
    },
    services: [
      {
        id: 'p1',
        title: 'Sports Injury Rehabilitation',
        description: 'Advanced protocols for ligament tears (ACL, MCL), muscle strains, tendonitis, and stress fractures, engineered for a safe, quick return to play.',
        iconName: 'Activity'
      },
      {
        id: 'p2',
        title: 'Post-Surgical Recovery',
        description: 'Structured, progressive mobilization programs following total joint replacements (knee, hip), arthroscopies, and spinal fusions.',
        iconName: 'HeartPulse'
      },
      {
        id: 'p3',
        title: 'Manual Therapy & Mobilization',
        description: 'Hands-on clinical techniques including joint manipulations, myofascial release, and passive stretching to instantly improve range of motion.',
        iconName: 'Sparkles'
      },
      {
        id: 'p4',
        title: 'Spinal Care & Ergonomics',
        description: 'Targeted decompression exercises, core stability training, and posture modification for chronic lower back and cervical pain.',
        iconName: 'Zap'
      },
      {
        id: 'p5',
        title: 'Neurological Rehabilitation',
        description: 'Specialized motor re-learning therapy for individuals recovering from strokes, vestibular balance issues, and peripheral neuropathy.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'p6',
        title: 'Custom Orthotics & Gait Analysis',
        description: 'Digital computerized foot pressure mapping and movement biomechanics capturing to fabricate corrective clinical orthotic supports.',
        iconName: 'Compass'
      }
    ],
    whyChooseUs: [
      {
        id: 'pw1',
        title: '1-on-1 Dedicated Attention',
        description: 'Every session is exclusively spent 1-on-1 with a Doctor of Physical Therapy. No handing off to junior aides.',
        iconName: 'Users'
      },
      {
        id: 'pw2',
        title: 'Modern Rehabilitation Gym',
        description: 'Features specialized equipment including AlterG anti-gravity treadmills, biofeedback sensors, and medical reformers.',
        iconName: 'Cpu'
      },
      {
        id: 'pw3',
        title: 'Evidence-Based Medicine',
        description: 'We prescribe only clinically validated treatment plans. No pseudoscience or infinite treatment subscriptions.',
        iconName: 'FileCheck'
      },
      {
        id: 'pw4',
        title: 'Rapid Recovery Focus',
        description: 'Our objective is to make you self-sufficient. We build home programs that reduce your need for in-office therapy over time.',
        iconName: 'Activity'
      }
    ],
    testimonials: [
      {
        id: 'pt1',
        name: 'Sarah Peterson',
        review: 'I suffered from chronic lower back pain for five years and was told surgery was my only option. Dr. Vance analyzed my pelvic tilt and created a targeted core reactivation program. I am now back to running 10k races pain-free!',
        rating: 5,
        date: 'April 11, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop',
        tag: 'Chronic Lower Back Pain'
      },
      {
        id: 'pt2',
        name: 'James Reynolds',
        review: 'Following my rotator cuff repair, I did my rehabilitation with Dr. Marcus. His knowledge of sports medicine is phenomenal. He timed the progressive strengthening stages perfectly to restore full mobility.',
        rating: 5,
        date: 'May 30, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=120&auto=format&fit=crop',
        tag: 'Shoulder Surgery Recovery'
      },
      {
        id: 'pt3',
        name: 'Emily Chen',
        review: 'The biomechanical running assessment was incredibly eye-opening. They caught a foot pronation that was causing my knee injuries. The custom clinical orthotics they fitted have completely resolved the issue.',
        rating: 5,
        date: 'July 11, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
        tag: 'Gait Assessment & Orthotics'
      }
    ],
    gallery: [
      {
        id: 'pg1',
        title: 'Active Mobility Treatment Suite',
        category: 'Treatment Room',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'pg2',
        title: 'Main Orthopedic Rehab Wing',
        category: 'Clinic',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'pg3',
        title: 'Advanced Gait Analysis System',
        category: 'Equipment',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'pg4',
        title: 'Manual Mobilization Session',
        category: 'Staff',
        imageUrl: 'https://images.unsplash.com/photo-1576765608866-5b5104814239?q=80&w=600&auto=format&fit=crop'
      }
    ],
    contact: {
      phone: '+1 (555) 789-2345',
      email: 'rehab@kineticphysio.com',
      address: '220 Physical Sciences Way, Suite 400, Los Angeles, CA 90024',
      workingHours: {
        weekdays: 'Monday - Friday: 7:00 AM - 7:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed'
      },
      whatsappNumber: '15557892345',
      mapEmbedUrlUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.734898124!2d-118.4452!3d34.0689!'
    }
  },
  skin: {
    id: 'skin',
    clinicType: 'skin',
    displayName: 'Aethel Dermatology & Skin Clinic',
    brandName: 'Aethel Skin',
    logoText: 'AethelSkin',
    tagline: 'Science-Backed Skin Health & Aesthetic Mastery',
    colors: {
      primary: 'bg-rose-600',
      primaryHover: 'hover:bg-rose-700',
      primaryText: 'text-rose-600',
      primaryLight: 'bg-rose-50',
      accent: 'text-violet-600',
      accentLight: 'bg-violet-50',
    },
    hero: {
      headline: 'Advanced Dermatology & Advanced Aesthetics',
      subheadline: 'Led by Dr. Elena Rostova, MD, Aethel Clinic provides evidence-based medical dermatology, clinical skincare, and sophisticated non-surgical aesthetic treatments.',
      ctaPrimary: 'Book Consultation',
      ctaSecondary: 'WhatsApp Consultation',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    },
    doctor: {
      name: 'Dr. Elena Rostova, MD',
      qualification: 'Doctor of Medicine (Stanford School of Medicine)',
      title: 'Consultant Dermatologist & Skincare Scientist',
      experienceYears: 16,
      specialization: 'Medical Dermatology & Laser Therapeutics',
      introduction: 'Dr. Elena Rostova is a double board-certified dermatologist and academic researcher with 16 years of expertise. Dedicated to the science of dermal health, Dr. Rostova focuses on curative medical treatments for chronic skin disorders and meticulously designed natural-looking aesthetic solutions using FDA-approved advanced lasers and injectables.',
      philosophy: 'Skincare is not trend-based; it is biological. We analyze the barrier function, treat underlying cellular dysfunction, and formulate medical-grade plans to help your skin thrive long-term.',
      achievements: [
        'Diplomate of the American Board of Dermatology (ABD)',
        'Author of over 20 peer-reviewed papers on Melasma & Laser interaction',
        'Keynote Speaker at the International Congress of Aesthetic Medicine'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
    },
    services: [
      {
        id: 's1',
        title: 'Clinical Medical Dermatology',
        description: 'Accurate diagnoses and treatment plans for severe acne, eczema, psoriasis, rosacea, and dermatitis with prescription-grade therapies.',
        iconName: 'ShieldCheck'
      },
      {
        id: 's2',
        title: 'Skin Cancer Screening & Mole Mapping',
        description: 'Comprehensive microscopic dermoscopy assessments and mole monitoring to guarantee early detection of skin abnormalities.',
        iconName: 'Eye'
      },
      {
        id: 's3',
        title: 'Laser Skin Resurfacing',
        description: 'State-of-the-art fractional CO2 and Nd:YAG laser treatments targeting deep acne scarring, solar damage, and fine lines.',
        iconName: 'Zap'
      },
      {
        id: 's4',
        title: 'Medical Aesthetic Injectables',
        description: 'Meticulously placed neurotoxins and hyaluronic acid dermal fillers designed to restore natural volume and soft structural balance.',
        iconName: 'Sparkles'
      },
      {
        id: 's5',
        title: 'Acne Scar Correction',
        description: 'Custom combination therapies including subcision, microneedling RF, and clinical peeling to restore skin texture smoothness.',
        iconName: 'Activity'
      },
      {
        id: 's6',
        title: 'Barrier Restoration & Hydration',
        description: 'Non-invasive deep transdermal delivery of hyaluronic acid, growth factors, and antioxidants to repair compromised skin barriers.',
        iconName: 'Droplet'
      }
    ],
    whyChooseUs: [
      {
        id: 'sw1',
        title: 'Double Board-Certified Clinical Expertise',
        description: 'All medical consultations, assessments, and injectable treatments are performed exclusively by board-certified dermatologists.',
        iconName: 'FileCheck'
      },
      {
        id: 'sw2',
        title: 'FDA-Approved Medical Laser Platforms',
        description: 'We do not use generic beauty salon equipment. We utilize gold-standard Candela, Fotona, and Lumenis platforms.',
        iconName: 'Cpu'
      },
      {
        id: 'sw3',
        title: 'Completely Personalized Skincare Chemistry',
        description: 'We design bespoke topical skincare regimens based on laboratory-verified scientific sebum and hydration profiling.',
        iconName: 'Smile'
      },
      {
        id: 'sw4',
        title: 'Refined Natural Aesthetic Philosophy',
        description: 'We strictly reject the over-filled, frozen look. Our core priority is restoration of youth, symmetry, and healthy radiance.',
        iconName: 'Sparkles'
      }
    ],
    testimonials: [
      {
        id: 'st1',
        name: 'Katherine Martinez',
        review: 'Dr. Rostova cured my severe cystic acne after years of trying high-street products. She repaired my skin barrier first, then used fractional laser treatments to wipe out my scarring. My confidence has completely returned.',
        rating: 5,
        date: 'May 12, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop',
        tag: 'Acne & Scar Treatment'
      },
      {
        id: 'st2',
        name: 'Alexander Cross',
        review: 'I visited Aethel Skin for a comprehensive mole check. Dr. Rostova was incredibly thorough, found a suspicious lesion, biopsied it immediately, and helped coordinate the swift removal of a precancerous melanoma. Truly life-saving care.',
        rating: 5,
        date: 'June 29, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&auto=format&fit=crop',
        tag: 'Dermoscopy Mole Scan'
      },
      {
        id: 'st3',
        name: 'Veronica Sterling',
        review: 'I was hesitant about receiving wrinkle-relaxing treatments, fearing a frozen expression. Dr. Rostova performed an elegant, subtle injection technique. I look refreshed, well-rested, and fully natural. She is a true facial artist.',
        rating: 5,
        date: 'July 5, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop',
        tag: 'Aesthetic Laser & Injectables'
      }
    ],
    gallery: [
      {
        id: 'sg1',
        title: 'Clinical Skincare Treatment Cabin',
        category: 'Treatment Room',
        imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'sg2',
        title: 'Aesthetic Lobby Reception',
        category: 'Clinic',
        imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'sg3',
        title: 'Phototherapeutic Laser System',
        category: 'Equipment',
        imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'sg4',
        title: 'Microscopic Dermal Scan',
        category: 'Staff',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'
      }
    ],
    contact: {
      phone: '+1 (555) 456-7890',
      email: 'consult@aethelskin.com',
      address: '980 El Camino Real, Suite 150, Palo Alto, CA 94301',
      workingHours: {
        weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
        saturday: 'Saturday: 9:00 AM - 3:00 PM',
        sunday: 'Sunday: Closed'
      },
      whatsappNumber: '15554567890',
      mapEmbedUrlUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.407!2d-122.1565!3d37.4419!'
    }
  },
  eye: {
    id: 'eye',
    clinicType: 'eye',
    displayName: 'Vanguard Ophthalmology & Laser Vision',
    brandName: 'Vanguard Eye',
    logoText: 'VanguardEye',
    tagline: 'Preserving Sight, Perfecting Vision',
    colors: {
      primary: 'bg-indigo-600',
      primaryHover: 'hover:bg-indigo-700',
      primaryText: 'text-indigo-600',
      primaryLight: 'bg-indigo-50',
      accent: 'text-cyan-600',
      accentLight: 'bg-cyan-50',
    },
    hero: {
      headline: 'World-Class Vision Correction & Ophthalmic Medicine',
      subheadline: 'Led by Dr. Arthur Chen, MD, Vanguard Eye Clinic utilizes advanced digital diagnostic mapping and precision micro-surgery to preserve, restore, and optimize your sight.',
      ctaPrimary: 'Schedule Vision Consultation',
      ctaSecondary: 'WhatsApp Consultation',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    },
    doctor: {
      name: 'Dr. Arthur Chen, MD, FACS',
      qualification: 'Doctor of Medicine (Johns Hopkins University School of Medicine)',
      title: 'Chief Ophthalmic Surgeon & Vision Scientist',
      experienceYears: 18,
      specialization: 'Corneal Refractive Surgery (LASIK/SMILE) & Cataract Microsurgery',
      introduction: 'Dr. Arthur Chen is an acclaimed board-certified ophthalmic surgeon with over 18 years of specialized microsurgical practice. Dr. Chen has successfully performed more than 8,000 laser vision correction procedures. He is highly specialized in advanced SMILE and LASIK corrections, as well as premium multifocal lens implant surgeries for cataracts.',
      philosophy: 'Vision is our primary connection to the world. We combine meticulous safety checks with custom wavefront diagnostics to deliver surgery of unparalleled precision, ensuring the highest visual outcomes.',
      achievements: [
        'Fellow of the American College of Surgeons (FACS)',
        'Voted amongst "Best Ophthalmologists in North America" 2024',
        'Board Member of the International Society of Refractive Surgery'
      ],
      photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
    },
    services: [
      {
        id: 'e1',
        title: 'Advanced Refractive LASIK & SMILE',
        description: 'Pain-free, blade-free laser vision correction to permanently eliminate dependence on eyeglasses and contact lenses.',
        iconName: 'Eye'
      },
      {
        id: 'e2',
        title: 'Micro-Incision Cataract Surgery',
        description: 'Replacement of cloudy lenses with state-of-the-art multifocal premium intraocular lenses (IOLs) to restore multi-distance vision.',
        iconName: 'Sparkles'
      },
      {
        id: 'e3',
        title: 'Comprehensive Glaucoma Management',
        description: 'Advanced early optic-nerve imaging, pressure tracking, and micro-pulse laser procedures to prevent optical nerve damage.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'e4',
        title: 'Medical Retina Treatments',
        description: 'Detailed diagnostic angiography and targeted therapies for macular degeneration, diabetic retinopathy, and retinal tears.',
        iconName: 'Activity'
      },
      {
        id: 'e5',
        title: 'Dry Eye Therapy & Tear Optimization',
        description: 'Therapeutic thermal pulsed expression and custom medical drops to resolve severe chronic dry eye symptoms permanently.',
        iconName: 'Droplet'
      },
      {
        id: 'e6',
        title: 'Pediatric Vision & Myopia Control',
        description: 'Specialized eye tracking exams and custom medical eye drops to slow down myopia progression in school-age children.',
        iconName: 'Smile'
      }
    ],
    whyChooseUs: [
      {
        id: 'ew1',
        title: 'Ultra-Precise Wavefront Diagnostics',
        description: 'We construct a customized 3D anatomical map of your cornea to program lasers with absolute structural matching.',
        iconName: 'Cpu'
      },
      {
        id: 'ew2',
        title: 'Blade-Free Micro-Surgical Suites',
        description: 'Equipped with ZEISS VisuMax and Alcon lasers, operating in a strictly controlled micro-filtered climate suite.',
        iconName: 'FileCheck'
      },
      {
        id: 'ew3',
        title: 'Elite Surgical Success Rates',
        description: 'Over 99.4% of our laser corrective patients achieve 20/20 vision or better, supported by comprehensive post-op follow-ups.',
        iconName: 'Activity'
      },
      {
        id: 'ew4',
        title: 'Lifelong Care Commitments',
        description: 'Our vision enhancement packages include continuous post-operative care reviews for 12 months for absolute patient peace of mind.',
        iconName: 'Heart'
      }
    ],
    testimonials: [
      {
        id: 'et1',
        name: 'Robert Vance',
        review: 'I had the SMILE procedure done by Dr. Chen last month. The surgery itself took less than ten minutes and was completely painless. The next morning, I woke up with 20/15 vision. No dry eyes, no halos. Absolute magic!',
        rating: 5,
        date: 'May 14, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop',
        tag: 'SMILE Laser Vision Correction'
      },
      {
        id: 'et2',
        name: 'Eleanor Higgins',
        review: 'Dr. Chen replaced my cataract-damaged lenses with premium multifocal implants. The transformation is extraordinary. I can read fine print and drive at night without spectacles for the first time in twenty years.',
        rating: 5,
        date: 'June 10, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop',
        tag: 'Multifocal Cataract Surgery'
      },
      {
        id: 'et3',
        name: 'Daniel Kim',
        review: 'Incredibly professional medical setup. They have diagnostic machinery I have never seen elsewhere. Dr. Chen is deeply methodical and spent forty minutes explaining the safety metrics of refractive corrections with me.',
        rating: 5,
        date: 'July 1, 2026',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
        tag: 'Comprehensive Vision Scan'
      }
    ],
    gallery: [
      {
        id: 'eg1',
        title: 'Precision Slit-Lamp Diagnostics',
        category: 'Equipment',
        imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'eg2',
        title: 'Refractive Corneal Mapping Center',
        category: 'Treatment Room',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'eg3',
        title: 'Vanguard Patient Waiting Wing',
        category: 'Clinic',
        imageUrl: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 'eg4',
        title: 'Corneal Thickness Assessment',
        category: 'Staff',
        imageUrl: 'https://images.unsplash.com/photo-1579684448899-73e04a91a97d?q=80&w=600&auto=format&fit=crop'
      }
    ],
    contact: {
      phone: '+1 (555) 890-1234',
      email: 'vision@vanguardeye.com',
      address: '600 Medical Center Drive, Suite 100, Baltimore, MD 21201',
      workingHours: {
        weekdays: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 9:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed'
      },
      whatsappNumber: '15558901234',
      mapEmbedUrlUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.973!2d-76.6212!3d39.2904!'
    }
  }
};
