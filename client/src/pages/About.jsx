import React from "react";
import { FaHome, FaUser, FaShieldAlt } from "react-icons/fa";


export default function About() {
  return (
    <div>
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">
          About PropertyPulse
        </h1>
        <p className="mb-4 text-slate-700">
          PropertyPulse is a comprehensive online platform that specializes in
          helping clients buy, sell, and rent properties in the most desirable
          neighborhoods. Our team of experienced agents is dedicated to
          providing exceptional service and making the buying and selling
          process as smooth as possible.
        </p>
        <p className="mb-4 text-slate-700">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market. Whether you are looking to buy,
          sell, or rent a property, we are here to help you every step of the
          way. Whether you're a first-time buyer, seasoned investor, or looking
          to rent your next home, PropertyPulse provides detailed listings,
          expert advice, and valuable insights to guide you through every step
          of your real estate journey. With advanced search filters, interactive
          maps, and real-time updates, finding your dream property has never
          been easier. Trust PropertyPulse to connect you with your perfect real
          estate match today!
        </p>
        <p className="mb-4 text-slate-700">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>
      </div>

      <div>
        <div className="md:flex md:space-x-12">
          <div className="md:w-1/2">
            <img
              src="https://www.mckissock.com/wp-content/uploads/2016/11/GettyImages-1151832961.jpg"
              alt="Image"
              className="w-full md:h-auto object-cover ml-5 mb-5"
            />
          </div>
            <div className="m-5">
              <div className="grid md:grid-cols-1 gap-24">
                <div className="col-span-1 flex items-start">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <FaHome/>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">Quality properties</h3>
                  <p className="mt-2 text-slate-500">
                    At our agency, we pride ourselves on curating a selection of quality properties that exceed expectations.
                  </p>
                </div>
              </div>

              <div className="col-span-1 flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaUser/>
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg  font-medium text-slate-900">Top rated agents</h3>
                  <p className="mt-2 text-slate-500">
                    Our team comprises top-rated agents who are renowned for their exceptional service, and expertise.
                  </p>
                </div>
              </div>

              <div className="col-span-1 flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaShieldAlt/>
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Easy and safe</h3>
                  <p className="mt-2 text-slate-500">
                    We made it our mission to ensure that your experience is both easy and safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
