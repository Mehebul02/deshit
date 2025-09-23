import { Button } from "../ui/button";

export default function HowWork() {
  return (
    <main className="">
      {/* How we work section */}
  <section className="bg-gradient-to-r from-[#FA7470] to-[#FA9370] px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold text-white">How we work</h2>
          <p className="mb-8 text-lg leading-relaxed text-white">
            We believe in agile development. We manage our projects by following Scrum, the most popular widely
            practiced agile approach. Delivering working applications on budget, and on time is always our concern and
            Scrum enables us to manage our projects in such a way. Scope of flexibility and collaboration enable us to
            manage the resources effectively and deliver the quality product.
          </p>
          <Button
            variant="secondary"
            className="bg-white text-orange-500 hover:bg-gray-50 px-8 py-3 text-base font-medium"
          >
            Free Consultation
          </Button>
        </div>
      </section>
    </main>
  )
}
