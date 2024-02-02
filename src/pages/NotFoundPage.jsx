import NotFoundSvg from '../assets/NotFoundSvg.svg';

export default function Example() {
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-gray-100 px-6 py-24 dark:bg-gray-800 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-4xl lg:text-5xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-xl lg:text-2xl leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 sm:px-3 py-2.5 sm:py-2 text-sm sm:text-base lg:px-6 lg:py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="/Contact" className="text-lg lg:text-xl font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
         
        </div>

       <img className="mt-6" src={NotFoundSvg} />
      </main>
    </>
  )
}
