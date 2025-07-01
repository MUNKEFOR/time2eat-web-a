import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <Head>
        <title>Time2Eat - African Meals Delivered</title>
      </Head>

      <header className="bg-white shadow-md p-4 rounded-2xl flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">Time2Eat</h1>
        <nav className="space-x-6">
          <Link href="/login"><a className="text-gray-700 hover:text-green-700 font-medium">Login</a></Link>
          <Link href="/register"><a className="text-gray-700 hover:text-green-700 font-medium">Register</a></Link>
        </nav>
      </header>

      <main className="mt-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Authentic African Food at Your Doorstep</h2>
        <p className="mt-4 text-lg text-gray-600">Freshly cooked meals from Bamenda’s best chefs and kitchens</p>
        <div className="mt-8">
          <Link href="/browse">
            <a>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-200">
                Order Now
              </button>
            </a>
          </Link>
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Time2Eat. All rights reserved.
      </footer>
    </div>
  );
}