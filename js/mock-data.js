/* Initial Mock Dataset for UniTutor Platform */

const INITIAL_MOCK_DATA = {
  tutors: [
    {
      id: "tut-1",
      name: "Dr. Aris Thorne",
      title: "Senior Lecturer in Computer Science & AI",
      subject: "Engineering",
      subSubject: "Computer Science",
      university: "Oxford / Imperial College",
      qualification: "PhD in Artificial Intelligence",
      level: "Undergraduate & Postgraduate",
      rating: 4.98,
      reviewsCount: 142,
      hourlyRate: 45,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      verified: true,
      bio: "Specializing in Data Structures, Algorithms, Machine Learning, and Distributed Systems. 8+ years of teaching engineering students.",
      tags: ["Algorithms", "Python", "Deep Learning", "C++"],
      availableSlots: [
        "Today, 15:00 - 16:00",
        "Today, 18:00 - 19:00",
        "Tomorrow, 10:00 - 11:00",
        "Tomorrow, 14:00 - 15:00"
      ]
    },
    {
      id: "tut-2",
      name: "Elena Rostova, CFA",
      title: "Corporate Finance & Accounting Specialist",
      subject: "Commerce",
      subSubject: "Finance & Accounting",
      university: "London School of Economics",
      qualification: "Master's in Financial Economics, CFA",
      level: "Undergraduate",
      rating: 4.95,
      reviewsCount: 98,
      hourlyRate: 40,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
      verified: true,
      bio: "Helping commerce students master Financial Accounting, Corporate Valuation, and Portfolio Theory. Passed CFA Level III with distinction.",
      tags: ["Corporate Finance", "Valuation", "Accounting", "Excel"],
      availableSlots: [
        "Today, 16:30 - 17:30",
        "Tomorrow, 11:00 - 12:00",
        "Friday, 13:00 - 14:00"
      ]
    },
    {
      id: "tut-3",
      name: "Marcus Vance, Barrister",
      title: "Constitutional & International Law Fellow",
      subject: "Law",
      subSubject: "Constitutional & Corporate Law",
      university: "Cambridge University",
      qualification: "LL.M in International Corporate Law",
      level: "Postgraduate & Law School",
      rating: 4.92,
      reviewsCount: 116,
      hourlyRate: 50,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      verified: true,
      bio: "Focused on helping law students structure case brief analyses, moot court preparations, and constitutional law essays.",
      tags: ["Constitutional Law", "Case Analysis", "Tort Law", "Jurisprudence"],
      availableSlots: [
        "Tomorrow, 15:00 - 16:00",
        "Thursday, 09:00 - 10:00",
        "Friday, 16:00 - 17:00"
      ]
    },
    {
      id: "tut-4",
      name: "Prof. Sophia Al-Mansoor",
      title: "Quantum Physics & Applied Mathematics Chair",
      subject: "Science",
      subSubject: "Physics & Calculus",
      university: "ETH Zurich / MIT Alum",
      qualification: "PhD in Theoretical Physics",
      level: "Undergraduate & PhD Prep",
      rating: 4.99,
      reviewsCount: 184,
      hourlyRate: 55,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
      verified: true,
      bio: "Clear, intuitive explanations of Multivariable Calculus, Quantum Mechanics, Thermodynamics, and Differential Equations.",
      tags: ["Quantum Mechanics", "Calculus III", "Linear Algebra", "Physics"],
      availableSlots: [
        "Today, 19:00 - 20:00",
        "Tomorrow, 14:30 - 15:30",
        "Saturday, 10:00 - 11:00"
      ]
    },
    {
      id: "tut-5",
      name: "David K. Chen",
      title: "Micro & Macro Economics Specialist",
      subject: "Commerce",
      subSubject: "Economics",
      university: "Harvard University",
      qualification: "Master's in Economics & Econometrics",
      level: "Undergraduate",
      rating: 4.89,
      reviewsCount: 76,
      hourlyRate: 38,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      verified: true,
      bio: "Simplifying Econometrics, Game Theory, Macroeconomic Models, and Stata/R data analysis for university exams.",
      tags: ["Econometrics", "Microeconomics", "Game Theory", "R Stats"],
      availableSlots: [
        "Tomorrow, 16:00 - 17:00",
        "Friday, 11:00 - 12:00"
      ]
    },
    {
      id: "tut-6",
      name: "Dr. Maya Patel",
      title: "Molecular Biology & Organic Chemistry Tutor",
      subject: "Science",
      subSubject: "Chemistry & Biology",
      university: "Johns Hopkins University",
      qualification: "PhD in Biochemistry",
      level: "Undergraduate & Pre-Med",
      rating: 4.94,
      reviewsCount: 129,
      hourlyRate: 42,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      verified: true,
      bio: "Interactive visual tutoring for Organic Reaction Mechanisms, Biochemistry Pathways, and MCAT/University Science prep.",
      tags: ["Organic Chemistry", "Biochemistry", "Genetics", "Lab Reports"],
      availableSlots: [
        "Today, 17:00 - 18:00",
        "Thursday, 14:00 - 15:00"
      ]
    }
  ],

  upcomingSessions: [
    {
      id: "sess-101",
      tutorName: "Dr. Aris Thorne",
      tutorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      subject: "Computer Science - Advanced Data Structures",
      date: "2026-08-27",
      time: "15:00 - 16:00",
      videoCallLink: "https://unitutor.live/room/cs-101- Thorne-882",
      status: "Confirmed",
      hourlyRate: 45
    },
    {
      id: "sess-102",
      tutorName: "Elena Rostova, CFA",
      tutorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
      subject: "Corporate Finance - DCF Valuation Models",
      date: "2026-08-29",
      time: "11:00 - 12:00",
      videoCallLink: "https://unitutor.live/room/fin-302-Rostova-419",
      status: "Confirmed",
      hourlyRate: 40
    }
  ],

  completedSessions: [
    {
      id: "sess-098",
      tutorName: "Prof. Sophia Al-Mansoor",
      tutorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
      subject: "Physics - Multivariable Calculus & Fields",
      completedDate: "2026-08-20",
      hourlyRate: 55,
      notes: [
        { title: "Calculus_Field_Derivations_Annotated.pdf", size: "4.2 MB", type: "PDF" },
        { title: "Maxwell_Equations_Exam_Summary.pdf", size: "2.8 MB", type: "PDF" },
        { title: "Practice_Problem_Set_3_Solutions.docx", size: "1.1 MB", type: "DOCX" }
      ]
    },
    {
      id: "sess-095",
      tutorName: "Marcus Vance, Barrister",
      tutorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      subject: "Law - Constitutional Rights & Precedents",
      completedDate: "2026-08-15",
      hourlyRate: 50,
      notes: [
        { title: "Supreme_Court_Landmark_Cases_Cheatsheet.pdf", size: "3.5 MB", type: "PDF" },
        { title: "Moot_Court_Oral_Argument_Guide.pdf", size: "1.9 MB", type: "PDF" }
      ]
    }
  ],

  paymentHistory: [
    {
      receiptId: "REC-2026-8891",
      date: "2026-08-20",
      tutorName: "Prof. Sophia Al-Mansoor",
      subject: "Physics - Multivariable Calculus & Fields",
      amount: 55.00,
      status: "Paid",
      paymentMethod: "Visa ending in 4092",
      hours: 1
    },
    {
      receiptId: "REC-2026-8742",
      date: "2026-08-15",
      tutorName: "Marcus Vance, Barrister",
      subject: "Law - Constitutional Rights & Precedents",
      amount: 50.00,
      status: "Paid",
      paymentMethod: "Mastercard ending in 7120",
      hours: 1
    },
    {
      receiptId: "REC-2026-8109",
      date: "2026-08-01",
      tutorName: "Dr. Aris Thorne",
      subject: "Computer Science - Binary Search Trees & Heaps",
      amount: 45.00,
      status: "Paid",
      paymentMethod: "Apple Pay",
      hours: 1
    }
  ],

  tutorApplications: [
    {
      id: "app-201",
      applicantName: "Dr. Michael Sterling",
      field: "Engineering - Chemical & Biomolecular",
      degree: "PhD, MIT",
      appliedDate: "2026-08-25",
      verificationStatus: "Pending",
      documents: ["PhD_Diploma.pdf", "Teaching_Certificate.pdf", "ID_Passport.pdf"]
    },
    {
      id: "app-202",
      applicantName: "Amina Al-Jamil",
      field: "Commerce - International Accounting",
      degree: "MSc, LSE",
      appliedDate: "2026-08-24",
      verificationStatus: "Pending",
      documents: ["MSc_Transcripts.pdf", "CPA_License.pdf"]
    }
  ]
};

// Initialize LocalStorage if empty
function initializeLocalStorage() {
  if (!localStorage.getItem('unitutor_data')) {
    localStorage.setItem('unitutor_data', JSON.stringify(INITIAL_MOCK_DATA));
  }
  const existingUser = localStorage.getItem('unitutor_user');
  if (existingUser) {
    try {
      const u = JSON.parse(existingUser);
      if (u && u.name === "Alex Rivera") {
        localStorage.removeItem('unitutor_user');
      }
    } catch(e) {}
  }
  if (!localStorage.getItem('unitutor_theme')) {
    localStorage.setItem('unitutor_theme', 'light');
  }
  if (!localStorage.getItem('unitutor_dir')) {
    localStorage.setItem('unitutor_dir', 'ltr');
  }
}

initializeLocalStorage();
