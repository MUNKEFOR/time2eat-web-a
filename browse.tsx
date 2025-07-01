import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Browse() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('/api/meals')
      .then(res => res.json())
      .then(data => setMeals(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <Head>
        <title>Browse Meals - Time2Eat</title>
      </Head>

      <h1 className="text-3xl font-bold text-green-700 mb-6">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{meal.name}</h2>
            <p className="text-sm text-gray-600">By {meal.chef}</p>
            <p className="mt-2 text-green-600 font-bold">{meal.price} FCFA</p>
            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}