import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Atom, Beaker, History, Lightbulb, Shield } from 'lucide-react';

const ElementWebsite = () => {
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
    <div className="relative w-40 h-40">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse">
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">H</span>
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="w-full h-full border-2 border-blue-300 rounded-full opacity-50" style={{ transform: 'rotateX(60deg)', transformStyle: 'preserve-3d' }} />
      </div>
      <div className="absolute w-4 h-4" style={{ left: '50%', top: '25%', transform: 'translate(-50%, -50%)' }}>
        <div className="w-full h-full bg-blue-400 rounded-full" style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }} />
      </div>
    </div>
  );

  const ContentCard = ({ title, children }) => (
    <Card className="backdrop-blur-sm bg-blue-100 hover:bg-blue-200 transition-all duration-300 rounded-2xl p-6">
      <CardHeader>
        <CardTitle className="text-2xl text-indigo-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100">
        <div className="animate-pulse text-4xl font-bold text-blue-600">Loading Hydrogen...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-10 transition-all duration-500 relative overflow-hidden rounded-2xl shadow-lg max-w-4xl w-full">
        <div className="mb-12 text-center transform transition-all duration-500 ease-out relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">Hydrogen</h1>
          <div className="flex justify-center items-center gap-12">
            <div className="group">
              <div className="transform transition-all duration-500 hover:scale-105">
                {showAtom && <AtomAnimation />}
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xl">Atomic Number: 1</div>
                <div className="text-lg">Mass: 1.00784 u</div>
              </div>
            </div>
            <div className="text-left max-w-md transform transition-all duration-500 hover:translate-x-2">
              <h2 className="text-3xl font-semibold mb-3 text-indigo-800">The Lightest Element</h2>
              <p className="text-lg text-gray-700 leading-relaxed">The most abundant element in the universe, making up about 75% of all matter by mass.</p>
            </div>
          </div>
        </div>

        {/* Tabs List */}
        <div className="grid w-full grid-cols-5 rounded-3xl p-2 bg-blue-100 backdrop-blur-sm mb-6">
          {[
            { value: "basics", icon: Atom, label: "Basics" },
            { value: "properties", icon: Beaker, label: "Properties" },
            { value: "history", icon: History, label: "History" },
            { value: "risks", icon: Shield, label: "Risks" },
            { value: "applications", icon: Lightbulb, label: "Applications" }
          ].map(({ value, icon: Icon, label }) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`flex items-center justify-center gap-2 px-6 py-4 transition-all duration-300 text-sm font-medium
                ${activeTab === value ? 'bg-blue-200 shadow-lg text-blue-600 scale-105' : 'hover:bg-blue-50'}
                rounded-2xl mx-1`}
            >
              <Icon className={`h-5 w-5 ${activeTab === value ? 'text-blue-600' : ''}`} />
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
                  {[{ label: "Protons", value: 1 }, { label: "Neutrons", value: 0 }, { label: "Electrons", value: 1 }].map(({ label, value }) => (
                    <div key={label} className="group flex justify-between items-center bg-blue-50 p-8 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-md cursor-pointer">
                      <span className="text-lg font-medium text-gray-700">{label}</span>
                      <span className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="transform transition-all duration-500 hover:translate-x-2">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-800">Basic Characteristics</h3>
                  <p className="text-gray-700 leading-relaxed">Hydrogen is the simplest and most abundant element. At standard conditions, it exists as a gas of diatomic molecules (H₂). It is colorless, odorless, non-toxic, and highly combustible.</p>
                </div>
              </div>
            </ContentCard>
          )}

          {activeTab === "properties" && (
            <div className="space-y-6">
              <ContentCard title="Physical Properties">
                <ul className="space-y-3 text-gray-700">
                  <li>• Colorless, odorless, and tasteless gas</li>
                  <li>• Lighter than air and insoluble in water</li>
                  <li>• Atomic mass: 1.008 amu</li>
                  <li>• Ionization enthalpy: 1312 kJ mol⁻¹</li>
                  <li>• Boiling point: -252.9°C</li>
                </ul>
              </ContentCard>
              <ContentCard title="Chemical Properties">
                <ul className="space-y-3 text-gray-700">
                  <li>• Highly reactive element</li>
                  <li>• Forms compounds with most elements except noble gases</li>
                  <li>• Burns in oxygen to produce water (2H₂ + O₂ → 2H₂O)</li>
                  <li>• Can form covalent bonds by sharing electrons</li>
                </ul>
              </ContentCard>
            </div>
          )}

          {activeTab === "history" && (
            <div className="space-y-6">
              <ContentCard title="Discovery">
                <p className="text-gray-700">First identified by Henry Cavendish, who separated it by reacting zinc with hydrochloric acid. Cavendish applied a spark to hydrogen, creating water.</p>
              </ContentCard>
              <ContentCard title="Availability">
                <p className="text-gray-700">Primarily found in water (H₂O) and organic compounds. Produced through electrolysis and steam methane reforming.</p>
              </ContentCard>
            </div>
          )}

          {activeTab === "risks" && (
            <div className="space-y-6">
              <ContentCard title="Environmental Concerns">
                <p className="text-gray-700">Hydrogen combustion can create nitrogen oxides, contributing to smog and acid rain. Electrolysis requires significant water resources.</p>
              </ContentCard>
              <ContentCard title="Health and Safety Risks">
                <ul className="space-y-3 text-gray-700">
                  <li>• High concentrations can displace oxygen, posing an asphyxiation risk.</li>
                  <li>• Highly flammable, forming explosive mixtures with air.</li>
                  <li>• Production may release hazardous chemicals.</li>
                </ul>
              </ContentCard>
            </div>
          )}

          {activeTab === "applications" && (
            <div className="space-y-6">
              <ContentCard title="Balloon Applications">
                <p className="text-gray-700">Historically used in airships due to excellent lift properties. The Hindenburg disaster ended its use in passenger airships.</p>
              </ContentCard>
              <div className="grid grid-cols-2 gap-6">
                <ContentCard title="Advantages">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Most abundant element</li>
                    <li>• Excellent lift properties</li>
                    <li>• Can be produced on demand via electrolysis</li>
                  </ul>
                </ContentCard>
                <ContentCard title="Disadvantages">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Highly flammable</li>
                    <li>• High leakage risk</li>
                    <li>• Additional safety costs required</li>
                  </ul>
                </ContentCard>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ElementWebsite;
