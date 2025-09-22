export default function TechnologySection() {
  const technologies = [
    {
      title: "Machine Learning",
      description:
        "We integrate machine learning into client projects to automate processes, predict trends, and enhance user experiences. This technology boosts efficiency and innovation, providing scalable solutions that grow with your business.",
    },
    {
      title: "Blockchain",
      description:
        "Integrate blockchain to create secure, transparent, decentralized solutions for various industries. Our projects benefit from enhanced transaction security and operational efficiency by utilizing decentralized ledgers and smart contracts.",
    },
    {
      title: "Big Data",
      description:
        "Utilize Big Data to analyze large volumes of information from diverse sources, extracting valuable insights for predictive modeling, drive better decision-making and optimize operations, keeping your projects competitive and agile.",
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Leverage IoT to connect and manage devices, enabling real-time data collection and automation. This technology enhances operational efficiency and data-driven decision-making, ensuring your projects are smart and future-ready.",
    },
    {
      title: "Natural Language Processing",
      description:
        "Our experts use Natural Language Processing to create intuitive, human-driven applications. By automating tasks like customer support and data processing, we enhance user interactions and improve efficiency in team projects and client solutions.",
    },
    {
      title: "Facial Recognition",
      description:
        "We implement facial recognition technology to enhance security and personalize user experiences in client projects. This technology offers accurate identification and streamlined authentication, making your applications secure and user-friendly.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-foreground mb-6">Our Advanced Development Technology</h1>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our advanced development technologies, including AI, machine learning, blockchain, and microservices, enable
            us to deliver innovative, future-proof solutions with exceptional efficiency and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {technologies.map((tech, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">{tech.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
