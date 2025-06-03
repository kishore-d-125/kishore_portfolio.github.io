import { useState } from "react";
import { X } from "lucide-react";

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
    imageUrl: "/certificates/data_analytics_certificate.jpg"
  },
  {
    title: "AngularJS Real-Time App Development",
    issuer: "Kaashiv Infotech",
    credentialId: "ANG2022KAASH",
    issuedDate: "June 2022",
    imageUrl: "/certificates/angular_internship_certificate.jpg"
  },
  {
    title: "Speech Recognition AI/ML Internship",
    issuer: "Sanjeevi Technology Solutions",
    credentialId: "SRML2024SJT",
    issuedDate: "July 2024",
    imageUrl: "/certificates/speech_recognition_certificate.jpg"
  },
  {
    title: "Software Engineering Fundamentals",
    issuer: "Infosys Springboard",
    credentialId: "INFYSEF2024",
    issuedDate: "April 2024",
    imageUrl: "/certificates/software_engineering_certificate.jpg"
  }
];

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{cert.title}</h3>
              <div className="space-y-2 text-slate-600">
                <p><span className="font-medium">Issued By:</span> {cert.issuer}</p>
                <p><span className="font-medium">Credential ID:</span> {cert.credentialId}</p>
                <p><span className="font-medium">Issued:</span> {cert.issuedDate}</p>
              </div>
              <button
                onClick={() => setSelectedCertificate(cert)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                View Certificate
              </button>
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