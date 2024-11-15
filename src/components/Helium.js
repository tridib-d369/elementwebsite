import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Beaker, Atom, History, Shield, Lightbulb } from 'lucide-react';

const Helium = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("basics");
  const [showAtom, setShowAtom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setShowAtom(true);
    }, 1000);
  }, []);

  const AtomAnimation = () => (
    <div className="relative w-48 h-48">
      {/* Enlarged nucleus with "He" text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-purple-500 rounded-full animate-pulse flex items-center justify-center">
          <span className="text-2xl font-bold text-white">He</span>
        </div>
      </div>

      {/* Orbit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full border-2 border-purple-300 rounded-full opacity-50" />
        
        {/* Electron on the left side of the orbit */}
        <div
          className="absolute w-4 h-4 bg-purple-400 rounded-full"
          style={{
            left: '0%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Electron on the right side of the orbit */}
        <div
          className="absolute w-4 h-4 bg-purple-400 rounded-full"
          style={{
            left: '100%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );

  const ContentCard = ({ title, children }) => (
    <Card className="backdrop-blur-sm bg-purple-100 hover:bg-purple-200 transition-all duration-300 rounded-2xl p-6">
      <CardHeader>
        <CardTitle className="text-2xl text-purple-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="animate-pulse text-4xl font-bold text-purple-600">Loading Helium...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-10 transition-all duration-500 relative overflow-hidden">
      <div className="mb-12 text-center transform transition-all duration-500 ease-out relative z-10">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-fade-in">Helium</h1>
        <div className="flex justify-center items-center gap-12">
          <div className="group">
            <div className="transform transition-all duration-500 hover:scale-105">
              {showAtom && <AtomAnimation />}
            </div>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-xl">Atomic Number: 2</div>
              <div className="text-lg">Mass: 4.002602 u</div>
            </div>
          </div>
          <div className="text-left max-w-md transform transition-all duration-500 hover:translate-x-2">
            <h2 className="text-3xl font-semibold mb-3 text-pink-800">A Noble Gas</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The second lightest element, known for its low reactivity and use in balloons.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs List */}
      <div className="grid w-full grid-cols-5 rounded-3xl p-2 bg-purple-100 backdrop-blur-sm mb-6">
        {[{ value: "basics", icon: Atom, label: "Basics" }, { value: "properties", icon: Beaker, label: "Properties" }, { value: "history", icon: History, label: "History" }, { value: "risks", icon: Shield, label: "Risks" }, { value: "applications", icon: Lightbulb, label: "Applications" }]
          .map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`flex items-center justify-center gap-2 px-6 py-4 transition-all duration-300 text-sm font-medium
              ${activeTab === value ? 'bg-purple-200 shadow-lg text-purple-600 scale-105' : 'hover:bg-purple-50'}
              rounded-2xl mx-1`}
          >
            <Icon className={`h-5 w-5 ${activeTab === value ? 'text-purple-600' : ''}`} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "basics" && (
          <ContentCard title="Atomic Structure">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                {[{ label: "Protons", value: 2 }, { label: "Neutrons", value: 2 }, { label: "Electrons", value: 2 }].map(({ label, value }) => (
                  <div key={label} className="group flex justify-between items-center bg-purple-50 p-8 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:shadow-md cursor-pointer">
                    <span className="text-lg font-medium text-gray-700">{label}</span>
                    <span className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">{value}</span>
                  </div>
                ))}
              </div>
              <div className="transform transition-all duration-500 hover:translate-x-2">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Basic Characteristics</h3>
                <p className="text-gray-700 leading-relaxed">
                  Helium is the second element on the periodic table, with the atomic number 2 and the symbol He. It is colorless, odorless, tasteless, and a noble gas with low reactivity and a complete valence electron shell.
                </p>
              </div>
            </div>
          </ContentCard>
        )}

        {activeTab === "properties" && (
          <div className="space-y-6">
            <ContentCard title="Physical Properties">
              <ul className="space-y-3 text-gray-700">
                <li>• Colorless, odorless, tasteless gas</li>
                <li>• Boiling point: -268.93°C</li>
                <li>• Low solubility and viscosity</li>
              </ul>
            </ContentCard>
            <ContentCard title="Chemical Properties">
              <p className="text-gray-700 leading-relaxed">
                Helium is a noble gas with a complete valence shell, giving it very low reactivity. It has high ionization energy (2370 kJ mol⁻¹), zero electronegativity, and a stable, non-flammable nature.
              </p>
            </ContentCard>
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-6">
            <ContentCard title="Discovery">
              <p className="text-gray-700 leading-relaxed">
                Helium was discovered in 1868 by French astronomer Pierre Janssen during a solar eclipse, when he observed a new spectral line in sunlight. English scientist Norman Lockyer later confirmed this, naming it "helium" after the Greek word for sun, "Helios."
              </p>
            </ContentCard>
            <ContentCard title="Availability">
              <p className="text-gray-700 leading-relaxed">
                Helium is found in trace amounts in Earth’s atmosphere and concentrated in natural gas deposits, especially in the U.S., Qatar, and Algeria, which are major helium exporters.
              </p>
            </ContentCard>
          </div>
        )}

        {activeTab === "risks" && (
          <div className="space-y-6">
            <ContentCard title="Environmental Concerns">
              <p className="text-gray-700 leading-relaxed">
                Helium itself poses no direct environmental hazards, but extracting it from natural gas can contribute to greenhouse gas emissions and other environmental issues associated with fossil fuel extraction.
              </p>
            </ContentCard>
            <ContentCard title="Health and Safety Risks">
              <ul className="space-y-3 text-gray-700">
                <li>• Inhaling helium can cause dizziness, headaches, and even suffocation in high concentrations.</li>
                <li>• Contact with liquid helium can result in frostbite.</li>
              </ul>
            </ContentCard>
          </div>
        )}

        {activeTab === "applications" && (
          <div className="space-y-6">
            <ContentCard title="Balloon Applications">
              <p className="text-gray-700 leading-relaxed">
                Helium is widely used in balloons as it is lighter than air, allowing buoyancy and safe floatation without flammability concerns.
              </p>
            </ContentCard>
            <div className="grid grid-cols-2 gap-6">
              <ContentCard title="Advantages">
                <ul className="space-y-2 text-gray-700">
                  <li>• Safe, non-flammable</li>
                  <li>• Allows balloons to float longer</li>
                  <li>• Abundant and naturally occurring</li>
                </ul>
              </ContentCard>
              <ContentCard title="Disadvantages">
                <ul className="space-y-2 text-gray-700">
                  <li>• Expensive due to extraction costs</li>
                  <li>• Non-renewable and finite</li>
                  <li>• Environmentally damaging to harvest</li>
                </ul>
              </ContentCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Helium;
