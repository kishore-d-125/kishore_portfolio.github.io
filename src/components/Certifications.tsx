import { useState } from "react";
import { X, Award } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  credentialId: string;
  issuedDate: string;
  imageUrl: string;
}

const certificates: Certificate[] = [
  {
    title: "Data Analytics with Python",
    issuer: "N.S.D.C at Prag Robotics Private Limited",
    credentialId: "PRC17141",
    issuedDate: "August 2024",
    imageUrl: ""
  },
  {
    title: "AngularJS Real-Time App Development",
    issuer: "Kaashiv Infotech",
    credentialId: "KA-q9owa",
    issuedDate: "June 2022",
    imageUrl: ""
  },
  {
    title: "Deloitte Australia - Technology Job Simulation",
    issuer: "Forage",
    credentialId: "qPAQn5mFvWCDgzJTJ",
    issuedDate: "May 2025",
    imageUrl: ""
  },
  {
    title: "Software Testing Foundations: Test Techniques",
    issuer: "LinkedIn",
    credentialId: "N/A",
    issuedDate: "May 2025",
    imageUrl: ""
  }
];

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-8 border-blue-400 flex items-start gap-4 hover:scale-[1.03]"
            >
              <div className="flex-shrink-0 mt-1">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{cert.title}</h3>
                <div className="space-y-1 text-slate-600 text-base">
                  <p><span className="font-medium">Issued By:</span> {cert.issuer}</p>
                  <p><span className="font-medium">Credential ID:</span> {cert.credentialId}</p>
                  <p><span className="font-medium">Issued:</span> {cert.issuedDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{selectedCertificate.title}</h3>
              <img
                src={selectedCertificate.imageUrl}
                alt={selectedCertificate.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications; 