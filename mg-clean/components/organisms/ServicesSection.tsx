import Card from "../atoms/Card"

export default function ServicesSection() {
  const services = [
    {
      title: "Property Maintenance",
      description: "We not only take care of the maintence and care of your property, but also the technical upkeep.",
      image: "/assets/images/property-maintenance.jpg",
      link: "/property-maintenance",
    },
    {
      title: "Office Cleaning",
      description:
        "As a professional office cleaning company, we provide competent support in all aspects of cleanliness and hygiene.",
      image: "/assets/images/office-cleaning.jpg",
      link: "/office-cleaning",
    },
    {
      title: "Window Cleaning",
      description:
        "Do you need a streak-free view again? Our experts are happy to take care of your window and glass cleaning.",
      image: "/assets/images/window-cleaning.png",
      link: "/window-cleaning",
    },
    {
      title: "Construction Cleaning",
      description:
        "We keep your construction site clean and take care of dust, packaging materials and residual materials during and after the construction phase.",
      image: "/assets/images/construction-cleaning.jpg",
      link: "/construction-cleaning",
    },
    {
      title: "Solar System Cleaning",
      description:
        "A clean photovoltaic system produces more energy and thus helps reduce your electricity costs. We clean them sustainably and gently.",
      image: "/assets/images/solar-system-cleaning.webp",
      link: "/solar-system-cleaning",
    },
    {
      title: "Garden Care",
      description:
        "The garden is part of your property's calling card. Therefore, we always take great pleasure in nurturing and caring for vibrant green spaces, shrubs, and trees.",
      image: "/assets/images/garden-care.jpg",
      link: "/garden-care",
    },
    {
      title: "Evictions",
      description:
        "We are your cost-effective and reliable partner for household liquidations and clearances of apartments, houses, shops, offices, etc.",
      image: "/assets/images/evictions.png",
      link: "/evictions",
    },
    {
      title: "Maintenance Cleaning",
      description:
        "We're happy to take on recurring cleaning tasks for you at set intervals—daily, weekly, or monthly—whichever you prefer.",
      image: "/assets/images/maintenance-cleaning.jpg",
      link: "/maintenance-cleaning",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of cleaning and maintenance services to meet your needs
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
