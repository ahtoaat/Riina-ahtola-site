export interface NavLink {
  label: string
  href:  string
}

export interface PortfolioImage {
  src: string
  alt: string
}

export interface Project {
  id:       number
  title:    string
  category: string
  location: string
  year:     string
  imageSrc: string
}

export interface Credential {
  label: string
  value: string
}

export interface ContactDetails {
  email:        string
  phone:        string
  instagram:    string
  instagramUrl: string
}
