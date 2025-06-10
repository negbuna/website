import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24 sm:px-8 md:px-12">
      <div className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Nathan Egbuna</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Rising senior interested in all things tech, finance and entrepreneurship.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Currently, I'm working as an applied machine learning researcher.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* You can add your projects here */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h3 className="font-medium">Project 1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Description of your first project
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h3 className="font-medium">Project 2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Description of your second project
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/negbuna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nathanegbuna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:negbuna26@andover.edu"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
