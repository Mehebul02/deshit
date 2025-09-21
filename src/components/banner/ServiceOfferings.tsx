import Container from "../shared/header/Container"

export function ServiceOfferings() {
  const services = [
    {
      title: "Dedicated Team",
      description:
        "Our dedicated team service offers you a full-time, specialized team member who becomes an integral part of your organization. With deep expertise, quicker turnaround times, and seamless integration with your existing workflows.",
    },
    {
      title: "Staff Augmentation",
      description:
        "With our staff augmentation services, you can temporarily extend your team with skilled professionals. This flexible approach allows you to scale resources flexibly, reduce hiring costs, and access specialized skills without long-term commitments.",
    },
    {
      title: "End-to-End Project",
      description:
        "We manage your entire project from concept to completion with our end-to-end solutions. Our comprehensive approach ensures consistency, reduced risk, and streamlined processes while you focus on your core business objectives.",
    },
  ]

  return (
    <Container className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 ">
        {services.map((service, index) => (
          <div key={index} className="group  border-l-2 border-orange-500  p-6 ">
            {/* Red accent line */}
            <div className="w-full h-0.5 bg-brand-red mb-6"></div>

            {/* Service content */}
            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-black  text-balance">{service.title}</h3>
              <p className="text-black text-[16px]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
