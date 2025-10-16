import { TrendingUp, Shield, Lightbulb, GraduationCap, Users, Heart, Award, CheckCircle, Building2, Leaf, Recycle, Sprout, Globe, Target, Phone, Mail, MapPin, Clock, Calendar, Package } from 'lucide-react'

// Company Information
export const companyInfo = {
  name: "Fedo Agencies Limited",
  tagline: "Your trusted partner in agricultural solutions",
  welcomeMessage: "Welcome to Fedo Agencies Limited, your one-stop shop for all your agrochemical needs. We specialize in importing, manufacturing, and distributing top-tier products to customers across Kenya. With years of experience in the agricultural input sector, we invite you to explore our wide range of offerings and find out why we are the best agricultural input supplier in the industry. Our legacy is built on trust, quality, and unwavering commitment to helping farmers achieve greater yields and sustainable agricultural practices.",
  description: "At Fedo Agencies Limited, we understand that agriculture is the backbone of Kenya&apos;s economy and the livelihood of millions of families. That&apos;s why we&apos;ve dedicated ourselves to providing farmers with the tools they need to succeed. From small-scale farmers to large commercial operations, we serve diverse agricultural needs with products that are proven, reliable, and results-driven.",
  mission: "To provide quality agricultural products and services to farmers in Kenya.",
  vision: "We aspire to be recognized as the leading agricultural input provider in Kenya, setting industry standards for quality, innovation, and customer service. Our vision extends beyond business success to encompass the prosperity of the farming communities we serve across the country.",
  closingMessage: "At Fedo Agencies Limited, we grow with you. Partner with us today and experience the difference that quality products and dedicated service can make to your agricultural success.",
  location: {
    address: "North Airport Road, Embakasi, Nairobi, Kenya",
    phone: "+254 (0)20 682 5461",
    fax: "+254 (0)20 230 5464",
    email: "info@fedoagencies.co.ke",
    workingHours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 8:00 AM - 1:00 PM"
    }
  }
}

// Core Values - GROWTH Acronym
export const coreValues = [
  {
    letter: "G",
    title: "Growth by ensuring customer success",
    description: "We grow when our customers succeed. We provide quality products and support to help farmers increase their yields.",
    icon: TrendingUp,
    color: "green"
  },
  {
    letter: "R", 
    title: "Reliability and Integrity",
    description: "We deliver what we promise and maintain honest business practices in all our dealings.",
    icon: Shield,
    color: "blue"
  },
  {
    letter: "O",
    title: "Opportunity and Innovation", 
    description: "We embrace new ideas and solutions to better serve our customers and address farming challenges.",
    icon: Lightbulb,
    color: "orange"
  },
  {
    letter: "W",
    title: "Wealth Creation and Knowledge",
    description: "We create value through training, education, and prosperity for everyone in the agricultural value chain.",
    icon: GraduationCap,
    color: "purple"
  },
  {
    letter: "T",
    title: "Teamwork",
    description: "We work together with our partners, distributors, and farmers to achieve better results.",
    icon: Users,
    color: "indigo"
  },
  {
    letter: "H",
    title: "Health and Safety",
    description: "We prioritize the safety of our customers, employees, and the environment in everything we do.",
    icon: Heart,
    color: "red"
  }
]

// Certifications
export const certifications = [
  {
    name: "KEPHIS",
    fullName: "Kenya Plant Health Inspectorate Service",
    description: "Ensuring all our products meet national plant health and safety standards",
    category: "regulatory" as const,
    icon: CheckCircle
  },
  {
    name: "PCPB",
    fullName: "Pest Control Products Board",
    description: "Authorized to distribute registered pest control products",
    category: "regulatory" as const,
    icon: Shield
  },
  {
    name: "ISO Quality Management",
    fullName: "ISO Quality Management Certifications",
    description: "Maintaining international standards for quality management systems",
    category: "quality" as const,
    icon: Award
  },
  {
    name: "Great Place to Work",
    fullName: "Great Place to Work Certification",
    description: "Recognized for creating an exceptional workplace culture",
    category: "workplace" as const,
    icon: Users
  },
  {
    name: "GAP Compliance",
    fullName: "Good Agricultural Practices Compliance",
    description: "Promoting sustainable and responsible farming methods",
    category: "environmental" as const,
    icon: Leaf
  },
  {
    name: "NEMA",
    fullName: "National Environment Management Authority",
    description: "Environmental compliance and commitment to sustainability",
    category: "environmental" as const,
    icon: Globe
  }
]

// Regulators
export const regulators = [
  {
    name: "PCPB",
    fullName: "Pest Control Products Board",
    description: "Regulates the registration, importation, and distribution of pest control products",
    icon: Shield
  },
  {
    name: "KEPHIS",
    fullName: "Kenya Plant Health Inspectorate Service",
    description: "Oversees phytosanitary standards and plant health",
    icon: Leaf
  },
  {
    name: "Pharmacy and Poisons Board",
    fullName: "Pharmacy and Poisons Board",
    description: "For veterinary and public health products",
    icon: Heart
  },
  {
    name: "NEMA",
    fullName: "National Environment Management Authority",
    description: "Environmental compliance and impact assessment",
    icon: Globe
  },
  {
    name: "KEBS",
    fullName: "Kenya Bureau of Standards",
    description: "Product quality and standardization",
    icon: Award
  },
  {
    name: "KRA",
    fullName: "Kenya Revenue Authority",
    description: "Tax compliance and customs clearance",
    icon: Building2
  }
]

// Partners & Associations
export const partnerships = {
  industry: [
    {
      name: "CropLife Kenya",
      fullName: "CropLife Kenya (formerly AAK - Agrochemicals Association of Kenya)",
      description: "Leading trade association for crop protection products",
      category: "industry" as const
    },
    {
      name: "KEBS",
      fullName: "Kenya Bureau of Standards",
      description: "Partnering for quality assurance",
      category: "industry" as const
    },
    {
      name: "KEPSA",
      fullName: "Kenya Private Sector Alliance",
      description: "Advocating for private sector growth",
      category: "industry" as const
    },
    {
      name: "FPEAK",
      fullName: "Fresh Produce Exporters Association of Kenya",
      description: "Supporting export quality standards",
      category: "industry" as const
    },
    {
      name: "KNCCI",
      fullName: "Kenya National Chamber of Commerce and Industry",
      description: "Fostering business growth",
      category: "industry" as const
    }
  ],
  strategic: [
    {
      name: "Global Manufacturers",
      description: "Leading global manufacturers of agrochemicals, fertilizers, and crop protection products",
      category: "strategic" as const
    },
    {
      name: "Research Institutions",
      description: "International research institutions and agricultural universities",
      category: "strategic" as const
    },
    {
      name: "Financial Partners",
      description: "Financial institutions supporting agricultural development",
      category: "strategic" as const
    },
    {
      name: "Technology Providers",
      description: "Technology providers for precision agriculture solutions",
      category: "strategic" as const
    },
    {
      name: "Logistics Partners",
      description: "Logistics and distribution partners ensuring timely delivery",
      category: "strategic" as const
    }
  ],
  community: [
    {
      name: "County Governments",
      description: "County governments and agricultural extension services",
      category: "community" as const
    },
    {
      name: "Farmer Cooperatives",
      description: "Farmer cooperatives and producer organizations",
      category: "community" as const
    },
    {
      name: "NGOs",
      description: "Non-governmental organizations focused on food security",
      category: "community" as const
    },
    {
      name: "Youth Programs",
      description: "Youth and women&apos;s agricultural empowerment programs",
      category: "community" as const
    }
  ]
}

// Why Choose Us - Enhanced Advantages
export const advantages = [
  {
    title: "Extensive Product Range",
    description: "From herbicides and insecticides to fungicides, fertilizers, and growth promoters, we offer comprehensive solutions for all your agricultural needs.",
    icon: Target,
    color: "green"
  },
  {
    title: "Expert Technical Support",
    description: "Our team of qualified agronomists provides field support, training, and guidance to ensure optimal product use and maximum returns.",
    icon: GraduationCap,
    color: "blue"
  },
  {
    title: "Quality Assurance",
    description: "Every product in our portfolio undergoes rigorous testing and quality control to meet international standards.",
    icon: Award,
    color: "orange"
  },
  {
    title: "Wide Distribution Network",
    description: "With strategically located distribution centers and partnerships with retailers across Kenya, we ensure products are available when and where you need them.",
    icon: MapPin,
    color: "purple"
  },
  {
    title: "Customer-Centric Approach",
    description: "We listen to our customers and continuously adapt our offerings to meet evolving agricultural challenges.",
    icon: Users,
    color: "indigo"
  },
  {
    title: "Competitive Pricing",
    description: "We believe quality shouldn&apos;t be prohibitively expensive. Our efficient operations allow us to offer competitive prices without compromising on quality.",
    icon: TrendingUp,
    color: "red"
  }
]

// Sustainability Commitments
export const sustainabilityCommitments = [
  {
    title: "Integrated Pest Management",
    description: "Promoting IPM practices that minimize chemical use",
    icon: Leaf
  },
  {
    title: "Eco-friendly Alternatives",
    description: "Offering eco-friendly and bio-based product alternatives",
    icon: Sprout
  },
  {
    title: "Safe Product Handling",
    description: "Providing training on safe product handling and disposal",
    icon: Shield
  },
  {
    title: "Soil Health Conservation",
    description: "Supporting soil health and conservation agriculture practices",
    icon: Globe
  },
  {
    title: "Sustainable Research",
    description: "Investing in research for sustainable crop protection solutions",
    icon: Lightbulb
  }
]

// Company Statistics
export const companyStats = [
  {
    label: "Years of Experience",
    value: "25+",
    icon: Calendar
  },
  {
    label: "Products Offered",
    value: "150+",
    icon: Package
  },
  {
    label: "Farmers Served",
    value: "50,000+",
    icon: Users
  },
  {
    label: "Counties Reached",
    value: "47",
    icon: MapPin
  }
]

// Contact Icons
export const contactIcons = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  hours: Clock
}