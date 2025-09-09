export default function ThreeTextSections() {
  return (
    <section className="bg-neutral-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Section 1 */}
        <div className="p-4 bg-neutral-700 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Section One</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis, nulla non faucibus luctus, justo nunc fermentum justo,
            eget commodo nisl lorem eget purus.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-4 bg-neutral-700 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Section Two</h3>
          <p className="text-gray-300">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Integer euismod, tortor ac facilisis
            malesuada, sapien magna volutpat risus.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-4 bg-neutral-700 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Section Three</h3>
          <p className="text-gray-300">
            Curabitur nec nisl vel lorem malesuada tincidunt. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.
          </p>
        </div>
      </div>
    </section>
  );
}