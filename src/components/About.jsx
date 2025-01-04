import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">About Nepal</h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover the beauty, culture, and history of Nepal.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            General Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nepal, a landlocked country in South Asia, is known for its
            breathtaking natural beauty, diverse culture, and rich history.
            Situated in the lap of the majestic Himalayas, Nepal is home to
            eight of the world's ten highest peaks, including Mount Everest, the
            highest point on Earth. Its history dates back thousands of years,
            marked by the rise and fall of ancient kingdoms, the influence of
            Hinduism and Buddhism, and its vibrant traditions that continue to
            thrive today. The capital city, Kathmandu, is a melting pot of
            ancient architecture, modern life, and spirituality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Landmarks, Culture, and Nature
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/172699850/photo/climbing-everest.jpg?s=612x612&w=0&k=20&c=UWFnJJmzcl7pPp74khu687vpzDwuJ-J1cTDbTlnlO4s="
                alt="Mount Everest"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">
                  Mount Everest
                </h3>
                <p className="text-gray-600 mt-2">
                  The highest mountain in the world, located in the Himalayan
                  range.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/637268486/photo/patan.jpg?s=612x612&w=0&k=20&c=IHL_X9XMlTKCFjXMAdJTr3dLoJTN-Vvn5QsYfNtnkgc="
                alt="Patan Durbar Square"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">
                  Patan Durbar Square
                </h3>
                <p className="text-gray-600 mt-2">
                  A UNESCO World Heritage Site showcasing Nepal's exquisite
                  architecture.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/458975359/photo/elephant-carrying-tourists-walking-into-river-in-misty-morning-nepal.jpg?s=612x612&w=0&k=20&c=UveeHKBRn49e9kCnQI5F8hEzvktaX1Oyr0vpGRlP8Xg="
                alt="Chitwan National Park"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">
                  Chitwan National Park
                </h3>
                <p className="text-gray-600 mt-2">
                  A haven for wildlife enthusiasts, featuring diverse flora and
                  fauna.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Popular Travel Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-lg text-gray-800">Trekking</h3>
              <p className="text-gray-600 mt-2">
                Nepal offers some of the best trekking routes in the world,
                including the Annapurna Circuit and Everest Base Camp trek.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-lg text-gray-800">
                Cultural Exploration
              </h3>
              <p className="text-gray-600 mt-2">
                Explore ancient temples, vibrant festivals, and local traditions
                in cities like Kathmandu, Bhaktapur, and Pokhara.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-lg text-gray-800">
                Mountaineering
              </h3>
              <p className="text-gray-600 mt-2">
                Challenge yourself with mountaineering expeditions to peaks like
                Island Peak, Mera Peak, and Everest.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
