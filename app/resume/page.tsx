"use client"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white print:bg-white">
      <div className="max-w-[8.5in] mx-auto p-8 print:p-0">
        {/* Header */}
        <header className="text-center mb-6 border-b-2 border-gray-800 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ANA ANGELI S. EDEJER</h1>
          <div className="flex justify-center gap-4 text-sm text-gray-700">
            <span>(+63) 922 533 5975</span>
            <span>•</span>
            <span>angeliedejer@gmail.com</span>
            <span>•</span>
            <span>Bulacao Talisay City Cebu</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <p className="text-sm text-gray-800 leading-relaxed">
            Detail-oriented Bachelor of Science in Computer Engineering student with a strong foundation in both
            software and hardware development. Proficient in programming languages such as C, C#, Dart, TypeScript, and
            HTML, with hands-on experience in UI/UX design using Figma as well as creating graphic designs using Canva.
            Skilled in hardware assembly and programming, including Arduino-based projects and digital logic gate
            implementation. Eager to apply technical expertise and collaborative abilities in a dynamic internship
            environment focused on innovation and real-world problem solving.
          </p>
        </section>

        <div className="grid grid-cols-[2fr_1fr] gap-6">
          {/* Left Column */}
          <div>
            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-800 mb-3">EDUCATION</h2>
              <div className="mb-4">
                <h3 className="font-bold text-gray-900">Bachelor of Science in Computer Engineering</h3>
                <p className="text-sm text-gray-700">Cebu Institute of Technology-University</p>
                <p className="text-sm text-gray-600">2022 - present</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Junior and Senior High School</h3>
                <p className="text-sm text-gray-700">Saint Theresa's College of Cebu</p>
                <p className="text-sm text-gray-600">2016 - 2022</p>
              </div>
            </section>

            {/* Internship */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-800 mb-3">INTERNSHIP</h2>
              <div>
                <h3 className="font-bold text-gray-900">IT Support at NG KHAI Development</h3>
                <p className="text-sm text-gray-600 mb-2">June 2025 – July 2025</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  During my OJT in the IT department, I assisted with hardware and software maintenance, including
                  inspecting, repairing, and configuring desktops, laptops, and network devices. I also supported
                  network and CCTV setups by assembling cabinets, creating LAN cables, managing cabling, and
                  troubleshooting system issues.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-800 mb-3">PROJECTS</h2>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">BaonBuddy</h3>
                <p className="text-sm text-gray-600 mb-1">October 2023 – December 2023</p>
                <ul className="text-sm text-gray-800 list-disc ml-5 space-y-1">
                  <li>Implemented a simplified expense monitoring system using C# Console Application.</li>
                  <li>Integrated OOP principles for organizing and managing expenses.</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">SmashZone: Badminton x Tennis Booking Hub</h3>
                <p className="text-sm text-gray-600 mb-1">March 2024 - April 2024</p>
                <ul className="text-sm text-gray-800 list-disc ml-5 space-y-1">
                  <li>Implemented a badminton and tennis appointment booking system using C# Windows Form.</li>
                  <li>
                    Integrated OOP principles for efficiently manage court reservations, track availability, and
                    optimize scheduling.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">MentorMatch</h3>
                <p className="text-sm text-gray-600 mb-1">June 2024 - July 2024</p>
                <ul className="text-sm text-gray-800 list-disc ml-5 space-y-1">
                  <li>Implemented a "Tinder" like tutor and mentee appointment booking system using .NET MAUI.</li>
                  <li>I took part on the Front-end side on the project.</li>
                </ul>
              </div>
            </section>

            {/* Figma Prototypes */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-800 mb-3">FIGMA PROTOTYPES</h2>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">SmashZone: Badminton x Tennis Booking Hub</h3>
                <p className="text-sm text-gray-600 mb-1">October 2024 - November 2024</p>
                <p className="text-sm text-gray-800">
                  Developed a mobile UI/UX prototype for a badminton and tennis appointment booking system using Figma.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">OptiCare</h3>
                <p className="text-sm text-gray-600 mb-1">October 2024 - December 2024</p>
                <p className="text-sm text-gray-800">
                  Designed a web-based UI/UX prototype for patient record management, diagnosis, and appointment
                  scheduling using Figma.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">MentorMatch</h3>
                <p className="text-sm text-gray-600 mb-1">June 2024 - July 2024</p>
                <p className="text-sm text-gray-800">
                  Developed a mobile UI/UX prototype for a "Tinder" like tutor and mentee appointment booking system
                  using Figma.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">Whaloo</h3>
                <p className="text-sm text-gray-600 mb-1">February 2025 - April 2025</p>
                <p className="text-sm text-gray-800">
                  Developed a mobile UI/UX prototype for managing study materials, creating to-do lists, tracking
                  deadlines, and organizing class schedules using Figma.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900">HanapBuhay</h3>
                <p className="text-sm text-gray-600 mb-1">August 2025 - October 2025</p>
                <p className="text-sm text-gray-800">
                  Developed a web-based UI/UX design for local freelance marketplace that connects clients with skilled
                  informal workers within their community for services.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-800 mb-3">SKILLS</h2>

              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2">Technical Skills</h3>
                <ul className="text-sm text-gray-800 space-y-1">
                  <li>• Microsoft Office (Word, PPT, and Excel)</li>
                  <li>• Computer Programming (C, C#, Dart, JavaScript, and HTML)</li>
                  <li>• Graphical (UI/UX Designing, and Graphic Designing)</li>
                  <li>• Arduino Coding and Assembling</li>
                  <li>• Full-stack developing</li>
                  <li>• Web and Mobile Designing</li>
                  <li>• Graphic Designing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">Soft Skills</h3>
                <ul className="text-sm text-gray-800 space-y-1">
                  <li>• Creativity</li>
                  <li>• Decision Making</li>
                  <li>• Communication</li>
                  <li>• Problem Solving</li>
                  <li>• Flexibility</li>
                  <li>• Time Management</li>
                </ul>
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-800 mb-3">ACHIEVEMENTS</h2>
              <p className="text-sm text-gray-800">Honor's List in High School (2018 - 2022)</p>
            </section>
          </div>
        </div>

        {/* Print Button - Hidden when printing */}
        <div className="mt-8 text-center print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  )
}
