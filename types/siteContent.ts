// 🌍 Navbar
interface Navbar {
  home: string;
  about: string;
  news: string;
  gallery: string;
  contact: string;
  language: string;
}

// 📸 Gallery Page
interface GalleryPage {
  title: string;
  breadcrumbHome: string;
  breadcrumbGallery: string;
  imageAlt: string;
}

// 📸 Gallery Item
interface GalleryItem {
  id: number;
  title: string;
}

// ✉️ Contact
interface Contact {
  bannerTitle: string;
  breadcrumbHome: string;
  breadcrumbContact: string;
  cards: {
    phone: string;
    whatsapp: string;
    email: string;
    location: string;
    address: string;
  };
  formTitle: string;
  formDescription: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    button: string;
  };
}

// 📰 News Item
export interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  tags: string[];

  images: string[];
  date: string;
}

// 📰 News
export interface News {
  breadcrumbHome: string;
  breadcrumbNews: string;
  author: string;
  authorLabel: string;
  overview: string;
  otherNews: string;
  readArticle: string;
  newsletterTitle: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  notFound: string;
  extraText: string;
  items: NewsItem[];

  
  all: string;
  categoriesTitle: string;
  categories: string[];
  pageTitle: string;
  noResults: string;
}

// 📅 Events Page
export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

export interface EventsPage {
  title: string;
  breadcrumbHome: string;
  breadcrumbEvents: string;
  learnMore: string;
  items: EventItem[];
}

// 🦸 Hero
interface Hero {
  title: string;
  title2: string;
  title3: string;
  subtitle: string;
}

// 🤝 Association
interface Association {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

// 📌 Projects
interface Projects {
  title: string;
  text: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  bullet4: string;
}

// 👩‍👩‍👧‍👧 Who We Are
interface WhoWeAre {
  title: string;
  text: string;
  button: string;
}

// 🗣 Testimonials
interface Testimonials {
  title: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  testimonyPlaceholder: string;
  add: string;
}

// 🌍 Community
interface Community {
  title: string;
  paragraph: string;
  stats: {
    people: string;
    country: string;
    years: string;
    team: string;
  };
}

// 🔻 Footer
interface Footer {
  about: string;
  company: string;
  companyLink1: string;
  companyLink2: string;
  companyLink3: string;
  companyLink4: string;
  categories: string;
  inferiror: string;
}

// 🌐 Root JSON
export interface SiteContent {
  navbar: Navbar;
  galleryPage: GalleryPage;
  gallery: GalleryItem[];
  contact: Contact;
  news: News;
  eventsPage: EventsPage;
  hero: Hero;
  association: Association;
  projects: Projects;
  whoWeAre: WhoWeAre;
  testimonials: Testimonials;
  community: Community;
  footer: Footer;
}
