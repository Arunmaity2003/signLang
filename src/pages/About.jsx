import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About SignLang
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6 text-center">
          <span className="font-semibold">SignLang</span> is a web application
          designed to bridge the communication gap between the deaf/mute
          community and others. Using advanced{" "}
          <span className="font-medium">hand gesture recognition</span> and
          machine learning, our platform detects sign language gestures via a
          webcam and translates them into text in real time.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To empower communication accessibility by providing an easy-to-use
              platform for sign language detection and translation.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-green-600 mb-2">
              ⚡ Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed">
              <li>Real-time gesture detection (A–Z alphabets)</li>
              <li>Webcam-based hand tracking</li>
              <li>AI/ML-powered classification</li>
              <li>Future support for words & sentences</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            🌍 Why It Matters
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Communication is a basic human right. SignLang contributes to an
            inclusive society by making interactions smoother, faster, and more
            accessible for the deaf and mute community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
