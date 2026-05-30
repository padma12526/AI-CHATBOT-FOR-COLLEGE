const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

const data = {
  college_info: {
    answers: {
    en: "Srinath University is a private university located at Dindli, Adityapur, Jamshedpur, Jharkhand 831013. It was established in 2021 and is recognized by UGC. The university offers Diploma, UG, PG, and Ph.D. programs in fields like Engineering, BCA, Management, Commerce, Pharmacy, Science, Humanities, and Health Sciences.",
    hi: "Srinath University एक निजी विश्वविद्यालय है जो Dindli, Adityapur, Jamshedpur, Jharkhand 831013 में स्थित है। इसकी स्थापना 2021 में हुई थी और यह UGC द्वारा मान्यता प्राप्त है। विश्वविद्यालय Engineering, BCA, Management, Commerce, Pharmacy, Science, Humanities और Health Sciences जैसे क्षेत्रों में Diploma, UG, PG और Ph.D. कार्यक्रम प्रदान करता है।",
    bn: "Srinath University একটি বেসরকারি বিশ্ববিদ্যালয়, যা Dindli, Adityapur, Jamshedpur, Jharkhand 831013-এ অবস্থিত। এটি 2021 সালে প্রতিষ্ঠিত হয় এবং UGC দ্বারা স্বীকৃত। বিশ্ববিদ্যালয় Engineering, BCA, Management, Commerce, Pharmacy, Science, Humanities এবং Health Sciences ক্ষেত্রে Diploma, UG, PG এবং Ph.D. প্রোগ্রাম প্রদান করে।"
    }
  },

  courses: {
    answers: {
      en: "Srinath University offers UG, PG, Diploma, and Doctoral programs. Main courses include B.Tech, Polytechnic Diploma, BCA, MCA, BBA, MBA, B.Com Hons., B.Sc, B.Pharm, D.Pharm, B.Ed, and Ph.D. Departments include Engineering & Technology, Information Technology, Management, Commerce, Science, Pharmacy, Education, Polytechnic, and Research. Course duration ranges from 2 to 5 years depending on the program. Fees and seats vary by course and academic session, so students should verify the latest details from the official website or admission office.",
    hi: "Srinath University UG, PG, Diploma और Doctoral programs प्रदान करती है। मुख्य courses में B.Tech, Polytechnic Diploma, BCA, MCA, BBA, MBA, B.Com Hons., B.Sc, B.Pharm, D.Pharm, B.Ed और Ph.D शामिल हैं। Departments में Engineering & Technology, Information Technology, Management, Commerce, Science, Pharmacy, Education, Polytechnic और Research शामिल हैं। Course duration program के अनुसार 2 से 5 years तक हो सकती है। Fees और seats course तथा academic session के अनुसार बदल सकते हैं, इसलिए latest details official website या admission office से verify करें।",
    bn: "Srinath University UG, PG, Diploma এবং Doctoral programs প্রদান করে। প্রধান courses হলো B.Tech, Polytechnic Diploma, BCA, MCA, BBA, MBA, B.Com Hons., B.Sc, B.Pharm, D.Pharm, B.Ed এবং Ph.D। Departments-এর মধ্যে Engineering & Technology, Information Technology, Management, Commerce, Science, Pharmacy, Education, Polytechnic এবং Research রয়েছে। Course duration program অনুযায়ী 2 থেকে 5 years পর্যন্ত হতে পারে। Fees এবং seats course ও academic session অনুযায়ী পরিবর্তিত হতে পারে, তাই latest details official website বা admission office থেকে verify করা উচিত।"
    }
  },

  fees: {
    answers: {
     en: "Srinath University course-wise approximate fees are: BCA Rs. 1.4-2.9 Lakhs, B.Tech Rs. 3-4.35 Lakhs, MBA Rs. 2.8-3 Lakhs, BBA Rs. 2.1-3 Lakhs, B.Pharm Rs. 3.6-4.4 Lakhs, and Polytechnic Rs. 1.5-2 Lakhs. Admission or registration fee is charged at enrollment and is generally non-refundable after confirmation. Exam fees are charged separately. Hostel fee may range from Rs. 60,000 to Rs. 1,20,000 per year. Transport fee depends on route and distance. Payment can be made online, by debit/credit card swipe, or Demand Draft in favor of Srinath University. Scholarships and fee concessions may be available based on merit or merit-cum-means eligibility.",
    hi: "Srinath University की approximate course-wise fees हैं: BCA Rs. 1.4-2.9 Lakhs, B.Tech Rs. 3-4.35 Lakhs, MBA Rs. 2.8-3 Lakhs, BBA Rs. 2.1-3 Lakhs, B.Pharm Rs. 3.6-4.4 Lakhs और Polytechnic Rs. 1.5-2 Lakhs। Admission या registration fee enrollment के समय ली जाती है और confirmation के बाद generally non-refundable होती है। Exam fee अलग से ली जाती है। Hostel fee लगभग Rs. 60,000 से Rs. 1,20,000 per year हो सकती है। Transport fee route और distance पर depend करती है। Payment online, debit/credit card swipe या Srinath University के नाम Demand Draft से किया जा सकता है। Merit और merit-cum-means basis पर scholarship या fee concession मिल सकती है।",
    bn: "Srinath University-এর approximate course-wise fees হলো: BCA Rs. 1.4-2.9 Lakhs, B.Tech Rs. 3-4.35 Lakhs, MBA Rs. 2.8-3 Lakhs, BBA Rs. 2.1-3 Lakhs, B.Pharm Rs. 3.6-4.4 Lakhs এবং Polytechnic Rs. 1.5-2 Lakhs। Admission বা registration fee enrollment-এর সময় নেওয়া হয় এবং confirmation-এর পরে সাধারণত non-refundable। Exam fee আলাদাভাবে নেওয়া হয়। Hostel fee প্রায় Rs. 60,000 থেকে Rs. 1,20,000 per year হতে পারে। Transport fee route এবং distance-এর উপর depend করে। Payment online, debit/credit card swipe বা Srinath University-এর নামে Demand Draft দিয়ে করা যায়। Merit এবং merit-cum-means basis-এ scholarship বা fee concession পাওয়া যেতে পারে।"
    }
  },

  hostel: {
    answers: {
     en: "Srinath University provides hostel facilities for students enrolled in residential programs. Separate hostels are available for boys and girls with security and supervision. Approximate hostel fee is Rs. 78,000 to Rs. 83,000 per year, and additional caution money may apply. Double-sharing, triple-sharing, and four-sharing Non-AC rooms are available with beds, study tables, chairs, wardrobes, and storage. Mess facility provides breakfast, lunch, evening snacks/tea, and dinner. Students must follow hostel rules, maintain discipline, pay fees on time, and take permission before leaving the hostel. Students can apply for hostel during admission by submitting hostel forms and fees. Contact: +91 9234459983, 0657-2383113, Email: info@srinathuniversity.ac.in.",
    hi: "Srinath University residential programs में enrolled students के लिए hostel facilities प्रदान करती है। Boys और girls के लिए separate hostels security और supervision के साथ available हैं। Approximate hostel fee Rs. 78,000 से Rs. 83,000 per year है और additional caution money apply हो सकती है। Double-sharing, triple-sharing और four-sharing Non-AC rooms available हैं जिनमें beds, study tables, chairs, wardrobes और storage होता है। Mess facility breakfast, lunch, evening snacks/tea और dinner देती है। Students को hostel rules follow करने, discipline maintain करने, fees time पर pay करने और hostel छोड़ने से पहले permission लेने की आवश्यकता होती है। Hostel के लिए admission के समय hostel form और fees submit करके apply कर सकते हैं। Contact: +91 9234459983, 0657-2383113, Email: info@srinathuniversity.ac.in.",
    bn: "Srinath University residential programs-এ enrolled students-দের জন্য hostel facilities প্রদান করে। Boys এবং girls-এর জন্য separate hostels security এবং supervision সহ available। Approximate hostel fee Rs. 78,000 থেকে Rs. 83,000 per year এবং additional caution money apply হতে পারে। Double-sharing, triple-sharing এবং four-sharing Non-AC rooms available যেখানে beds, study tables, chairs, wardrobes এবং storage থাকে। Mess facility breakfast, lunch, evening snacks/tea এবং dinner দেয়। Students-দের hostel rules follow করতে, discipline maintain করতে, fees সময়মতো pay করতে এবং hostel ছাড়ার আগে permission নিতে হয়। Hostel-এর জন্য admission-এর সময় hostel form এবং fees submit করে apply করা যায়। Contact: +91 9234459983, 0657-2383113, Email: info@srinathuniversity.ac.in."
    }
  },

  facilities: {
    answers: {
    en: "Srinath University provides campus facilities such as central library, separate hostels for boys and girls, computer labs, science and pharmacy labs, sports facilities, canteen, transport, Wi-Fi, medical/first-aid support, auditorium, seminar halls, smart classrooms, CCTV security, anti-ragging support, and a dedicated Training & Placement Cell. The placement cell supports campus recruitment, internships, resume building, soft skills training, aptitude training, and industry interaction programs.",
    hi: "Srinath University में central library, boys और girls के लिए separate hostels, computer labs, science और pharmacy labs, sports facilities, canteen, transport, Wi-Fi, medical/first-aid support, auditorium, seminar halls, smart classrooms, CCTV security, anti-ragging support और dedicated Training & Placement Cell जैसी campus facilities उपलब्ध हैं। Placement cell campus recruitment, internships, resume building, soft skills training, aptitude training और industry interaction programs में students की मदद करता है।",
    bn: "Srinath University-তে central library, boys এবং girls-এর জন্য separate hostels, computer labs, science এবং pharmacy labs, sports facilities, canteen, transport, Wi-Fi, medical/first-aid support, auditorium, seminar halls, smart classrooms, CCTV security, anti-ragging support এবং dedicated Training & Placement Cell-এর মতো campus facilities available। Placement cell campus recruitment, internships, resume building, soft skills training, aptitude training এবং industry interaction programs-এ students-দের সাহায্য করে।"

    }
  },

  library: {
    answers: {
    en: "Srinath University provides campus facilities such as central library, separate hostels for boys and girls, computer labs, science and pharmacy labs, sports facilities, canteen, transport, Wi-Fi, medical/first-aid support, auditorium, seminar halls, smart classrooms, CCTV security, anti-ragging support, and a dedicated Training & Placement Cell. The placement cell supports campus recruitment, internships, resume building, soft skills training, aptitude training, and industry interaction programs.",
    hi: "Srinath University में central library, boys और girls के लिए separate hostels, computer labs, science और pharmacy labs, sports facilities, canteen, transport, Wi-Fi, medical/first-aid support, auditorium, seminar halls, smart classrooms, CCTV security, anti-ragging support और dedicated Training & Placement Cell जैसी campus facilities उपलब्ध हैं। Placement cell campus recruitment, internships, resume building, soft skills training, aptitude training और industry interaction programs में students की मदद करता है।",
    bn: "Srinath University-তে central library, boys এবং girls-এর জন্য separate hostels, computer labs, science এবং pharmacy labs, sports facilities, canteen, transport, Wi-Fi, medical/first-aid support, auditorium, seminar halls, smart classrooms, CCTV security, anti-ragging support এবং dedicated Training & Placement Cell-এর মতো campus facilities available। Placement cell campus recruitment, internships, resume building, soft skills training, aptitude training এবং industry interaction programs-এ students-দের সাহায্য করে।"
    }
  },

  scholarship: {
    answers: {
    en: "Srinath University students may apply for Merit Scholarship, Merit-cum-Means Scholarship, Special Circumstance Scholarship, and government scholarships such as NSP, Jharkhand e-Kalyan, SC/ST/OBC, Minority, and Post-Matric scholarships. Merit scholarship is based on marks or rank. Merit-cum-Means is for economically weaker students with good academic performance, where parent annual income is generally expected to be below Rs. 3 Lakhs. Required documents include Aadhaar card, income certificate, caste certificate if applicable, 10th/12th marksheets, previous semester marksheets, photos, fee receipt, bank passbook, admission proof, domicile certificate, and scholarship form. Students can apply online or offline, submit documents, complete institute verification, and receive scholarship after approval. Government portals: https://scholarships.gov.in and https://ekalyan.cgg.gov.in. Contact: info@srinathuniversity.ac.in, +91 9234459983, 0657-2383113, Toll Free: 1800-3455-5555.",
    hi: "Srinath University के students Merit Scholarship, Merit-cum-Means Scholarship, Special Circumstance Scholarship और government scholarships जैसे NSP, Jharkhand e-Kalyan, SC/ST/OBC, Minority और Post-Matric scholarships के लिए apply कर सकते हैं। Merit scholarship marks या rank पर based होती है। Merit-cum-Means economically weaker students के लिए होती है जिनकी academic performance अच्छी हो और parent annual income generally Rs. 3 Lakhs से below हो। Required documents में Aadhaar card, income certificate, caste certificate if applicable, 10th/12th marksheets, previous semester marksheets, photos, fee receipt, bank passbook, admission proof, domicile certificate और scholarship form शामिल हैं। Students online या offline apply कर सकते हैं, documents submit करते हैं, institute verification होता है और approval के बाद scholarship disburse होती है। Government portals: https://scholarships.gov.in और https://ekalyan.cgg.gov.in. Contact: info@srinathuniversity.ac.in, +91 9234459983, 0657-2383113, Toll Free: 1800-3455-5555.",
    bn: "Srinath University students Merit Scholarship, Merit-cum-Means Scholarship, Special Circumstance Scholarship এবং government scholarships যেমন NSP, Jharkhand e-Kalyan, SC/ST/OBC, Minority এবং Post-Matric scholarships-এর জন্য apply করতে পারে। Merit scholarship marks বা rank-এর উপর based। Merit-cum-Means economically weaker students-দের জন্য, যাদের academic performance ভালো এবং parent annual income সাধারণত Rs. 3 Lakhs-এর below। Required documents হলো Aadhaar card, income certificate, caste certificate if applicable, 10th/12th marksheets, previous semester marksheets, photos, fee receipt, bank passbook, admission proof, domicile certificate এবং scholarship form। Students online বা offline apply করে, documents submit করে, institute verification হয় এবং approval-এর পরে scholarship disburse হয়। Government portals: https://scholarships.gov.in এবং https://ekalyan.cgg.gov.in. Contact: info@srinathuniversity.ac.in, +91 9234459983, 0657-2383113, Toll Free: 1800-3455-5555."
  
    }
  },
    exam: {
    answers: {
      en: "Srinath University follows a semester system with Odd and Even Semester exams for most UG, PG, and Diploma programs. Exam schedules or date sheets are released by the Examination Department on the official website before exams. Internal assessments include class tests, assignments, practicals, projects, attendance, and sessional exams. External exams are final term-end exams conducted after syllabus completion, with theory and practical exams held separately. Students must fill the exam form and clear dues before admit card issue. Results are published online after evaluation. Backlog students can fill separate backlog forms with prescribed fees. Exam Department Contact: Controller of Examinations Mr. O. P. Sharma, Email: coe@srinathuniversity.ac.in, Phone: 0657-2383113 / +91 9234459983.",
    hi: "Srinath University most UG, PG और Diploma programs के लिए Odd और Even Semester exam system follow करती है। Exam schedules या date sheets Examination Department द्वारा official website पर exams से पहले release की जाती हैं। Internal assessments में class tests, assignments, practicals, projects, attendance और sessional exams शामिल होते हैं। External exams syllabus completion के बाद final term-end exams होते हैं, जिनमें theory और practical exams अलग-अलग हो सकते हैं। Admit card issue होने से पहले students को exam form fill करना और dues clear करना होता है। Results evaluation के बाद online publish होते हैं। Backlog students prescribed fees के साथ separate backlog forms fill कर सकते हैं। Exam Department Contact: Controller of Examinations Mr. O. P. Sharma, Email: coe@srinathuniversity.ac.in, Phone: 0657-2383113 / +91 9234459983.",
    bn: "Srinath University বেশিরভাগ UG, PG এবং Diploma programs-এর জন্য Odd এবং Even Semester exam system follow করে। Exam schedules বা date sheets Examination Department official website-এ exams-এর আগে release করে। Internal assessments-এর মধ্যে class tests, assignments, practicals, projects, attendance এবং sessional exams থাকে। External exams syllabus completion-এর পরে final term-end exams হিসেবে নেওয়া হয়, যেখানে theory এবং practical exams আলাদাভাবে হতে পারে। Admit card issue হওয়ার আগে students-দের exam form fill করতে এবং dues clear করতে হয়। Results evaluation-এর পরে online publish হয়। Backlog students prescribed fees দিয়ে separate backlog forms fill করতে পারে। Exam Department Contact: Controller of Examinations Mr. O. P. Sharma, Email: coe@srinathuniversity.ac.in, Phone: 0657-2383113 / +91 9234459983."
    }
  },

  placements: {
    answers: {
       en: "Srinath University has a dedicated Training & Placement Cell that connects students with recruiters and organizes placement drives, career guidance, skill development, aptitude training, communication skills, soft skills, group discussions, mock interviews, personality development, public speaking, and technical workshops. Students may receive support for internships, industrial training, live projects, and industry visits. Recruiters may include IDFC Bank, ITC, Bajaj Finserv, Reliance Retail, Toyota, TVS Group, Shriram Finance, Cognizant, Wipro, Deloitte, Genpact, Tata Motors, Hitachi, HDFC Bank, TCS, Apollo Tyres, Berger, Axis Bank, and others. Recent reports mention average packages around Rs. 4.62-5.25 LPA and highest packages around Rs. 7-9 LPA. Placement contact: +91 9234459983, 0657-2383113, Email: info@srinathuniversity.ac.in.",
    hi: "Srinath University में dedicated Training & Placement Cell है जो students को recruiters से connect करता है और placement drives, career guidance, skill development, aptitude training, communication skills, soft skills, group discussions, mock interviews, personality development, public speaking और technical workshops organize करता है। Students को internships, industrial training, live projects और industry visits में support मिल सकता है। Recruiters में IDFC Bank, ITC, Bajaj Finserv, Reliance Retail, Toyota, TVS Group, Shriram Finance, Cognizant, Wipro, Deloitte, Genpact, Tata Motors, Hitachi, HDFC Bank, TCS, Apollo Tyres, Berger, Axis Bank आदि शामिल हो सकते हैं। Recent reports के अनुसार average package around Rs. 4.62-5.25 LPA और highest package around Rs. 7-9 LPA हो सकता है। Placement contact: +91 9234459983, 0657-2383113, Email: info@srinathuniversity.ac.in.",
    bn: "Srinath University-তে dedicated Training & Placement Cell আছে যা students-দের recruiters-এর সঙ্গে connect করে এবং placement drives, career guidance, skill development, aptitude training, communication skills, soft skills, group discussions, mock interviews, personality development, public speaking এবং technical workshops organize করে। Students internships, industrial training, live projects এবং industry visits-এর support পেতে পারে। Recruiters-এর মধ্যে IDFC Bank, ITC, Bajaj Finserv, Reliance Retail, Toyota, TVS Group, Shriram Finance, Cognizant, Wipro, Deloitte, Genpact, Tata Motors, Hitachi, HDFC Bank, TCS, Apollo Tyres, Berger, Axis Bank ইত্যাদি থাকতে পারে। Recent reports অনুযায়ী average package around Rs. 4.62-5.25 LPA এবং highest package around Rs. 7-9 LPA হতে পারে। Placement contact: +91 9234459983, 0657-2383113, Email: info@srinathuniversity.ac.in."

    }
  },
  admission: {
    answers: {
      en: "Srinath University admission process includes filling the application form online or offline, submitting documents, verification, merit or entrance/interview based selection, fee payment, and admission confirmation. Eligibility depends on the course. Common documents include 10th and 12th marksheets, graduation marksheet for PG, TC, migration certificate, Aadhaar card, photos, caste certificate if applicable, and entrance scorecard if required. Apply online at https://srinathuniversity.ac.in/how-to-apply/. Admission office contact: +91 9234459983, 0657-2383113, Toll Free: 1800-3455-5555, Email: info@srinathuniversity.ac.in.",
    hi: "Srinath University की admission process में online या offline application form भरना, documents submit करना, verification, merit या entrance/interview based selection, fee payment और admission confirmation शामिल है। Eligibility course के अनुसार होती है। सामान्य documents में 10th और 12th marksheet, PG के लिए graduation marksheet, TC, migration certificate, Aadhaar card, photos, caste certificate if applicable और entrance scorecard if required शामिल हैं। Apply link: https://srinathuniversity.ac.in/how-to-apply/. Admission office contact: +91 9234459983, 0657-2383113, Toll Free: 1800-3455-5555, Email: info@srinathuniversity.ac.in.",
    bn: "Srinath University admission process-এ online বা offline application form পূরণ, documents submit, verification, merit বা entrance/interview based selection, fee payment এবং admission confirmation অন্তর্ভুক্ত। Eligibility course অনুযায়ী হয়। সাধারণ documents হলো 10th ও 12th marksheet, PG-এর জন্য graduation marksheet, TC, migration certificate, Aadhaar card, photos, caste certificate if applicable এবং entrance scorecard if required। Apply link: https://srinathuniversity.ac.in/how-to-apply/. Admission office contact: +91 9234459983, 0657-2383113, Toll Free: 1800-3455-5555, Email: info@srinathuniversity.ac.in."
    }
  },
  contact: {
    answers: {
    en: "Srinath University contact details: Main Office 0657-2383113 / +91 9234459983, Email info@srinathuniversity.ac.in. Admission Office +91 9234459983 / +91 7033951333. Accounts Office +91 8210231327, Email accounts@srinathuniversity.ac.in. Exam Department 0657-2383113 / +91 9234459983, Email coe@srinathuniversity.ac.in. Placement Cell +91 9852469290, Email placements@srinathuniversity.ac.in. Registrar Office +91 9031037930, Email registrar@srinathuniversity.ac.in. Vice Chancellor Office +91 9031608513, Email vicechancellor@srinathuniversity.ac.in. HR Department +91 7033907333, Email hr@srinathuniversity.ac.in. Address: Dindli, Adityapur, Jamshedpur, Jharkhand - 831013, India. Working hours: Monday to Friday 7:30 AM-6:00 PM, Saturday 9:00 AM-6:00 PM, Sunday closed.",
    hi: "Srinath University contact details: Main Office 0657-2383113 / +91 9234459983, Email info@srinathuniversity.ac.in. Admission Office +91 9234459983 / +91 7033951333. Accounts Office +91 8210231327, Email accounts@srinathuniversity.ac.in. Exam Department 0657-2383113 / +91 9234459983, Email coe@srinathuniversity.ac.in. Placement Cell +91 9852469290, Email placements@srinathuniversity.ac.in. Registrar Office +91 9031037930, Email registrar@srinathuniversity.ac.in. Vice Chancellor Office +91 9031608513, Email vicechancellor@srinathuniversity.ac.in. HR Department +91 7033907333, Email hr@srinathuniversity.ac.in. Address: Dindli, Adityapur, Jamshedpur, Jharkhand - 831013, India. Working hours: Monday to Friday 7:30 AM-6:00 PM, Saturday 9:00 AM-6:00 PM, Sunday closed.",
    bn: "Srinath University contact details: Main Office 0657-2383113 / +91 9234459983, Email info@srinathuniversity.ac.in. Admission Office +91 9234459983 / +91 7033951333. Accounts Office +91 8210231327, Email accounts@srinathuniversity.ac.in. Exam Department 0657-2383113 / +91 9234459983, Email coe@srinathuniversity.ac.in. Placement Cell +91 9852469290, Email placements@srinathuniversity.ac.in. Registrar Office +91 9031037930, Email registrar@srinathuniversity.ac.in. Vice Chancellor Office +91 9031608513, Email vicechancellor@srinathuniversity.ac.in. HR Department +91 7033907333, Email hr@srinathuniversity.ac.in. Address: Dindli, Adityapur, Jamshedpur, Jharkhand - 831013, India. Working hours: Monday to Friday 7:30 AM-6:00 PM, Saturday 9:00 AM-6:00 PM, Sunday closed."
  }
},
  transport: {
    answers: {
    en: "Srinath University provides transport or bus facilities for students and staff from different areas of Jamshedpur and nearby regions. Routes generally cover Adityapur, Mango, Sakchi, Bistupur, Kadma, Sonari, Jugsalai, Gamharia, Chandil, Baridih, and nearby localities depending on student demand and academic session. Transport fee varies according to distance and selected route, and students usually need to pay for the complete academic year. Morning pickup buses operate before class timings and return buses operate after classes. Exact route-wise timings are provided by the transport department during admission. Contact: +91 9234459983, +91 7033951333, 0657-2383113, Email: info@srinathuniversity.ac.in.",
    hi: "Srinath University students और staff के लिए Jamshedpur और nearby regions के different areas से transport या bus facilities provide करती है। Routes generally Adityapur, Mango, Sakchi, Bistupur, Kadma, Sonari, Jugsalai, Gamharia, Chandil, Baridih और nearby localities cover करते हैं, जो student demand और academic session पर depend करते हैं। Transport fee distance और selected route के अनुसार vary करती है, और students को usually complete academic year के लिए fee pay करनी होती है। Morning pickup buses class timings से पहले और return buses classes के बाद operate करती हैं। Exact route-wise timings admission के समय transport department द्वारा दिए जाते हैं। Contact: +91 9234459983, +91 7033951333, 0657-2383113, Email: info@srinathuniversity.ac.in.",
    bn: "Srinath University students এবং staff-এর জন্য Jamshedpur এবং nearby regions-এর different areas থেকে transport বা bus facilities provide করে। Routes generally Adityapur, Mango, Sakchi, Bistupur, Kadma, Sonari, Jugsalai, Gamharia, Chandil, Baridih এবং nearby localities cover করে, যা student demand এবং academic session-এর উপর depend করে। Transport fee distance এবং selected route অনুযায়ী vary করে, এবং students-দের usually complete academic year-এর জন্য fee pay করতে হয়। Morning pickup buses class timings-এর আগে এবং return buses classes-এর পরে operate করে। Exact route-wise timings admission-এর সময় transport department দেয়। Contact: +91 9234459983, +91 7033951333, 0657-2383113, Email: info@srinathuniversity.ac.in."
    }
  },
  hey: {
    answers: {
    en: "How may I help you?",
    hi: "मैं आपकी कैसे मदद कर सकता हूँ? ",
    bn: "আমি আপনাকে কীভাবে সাহায্য করতে পারি?"
    }
  },
  OK: {
    answers: {
    en: "THANK YOU,PADMA!",
    hi: "धन्यवाद, पद्मा",
    bn: "ধন্যবাদ পদ্মা"
    }
  }

};

// ---------------- SEND MESSAGE ----------------
function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addUser(text);
  input.value = "";

  setTimeout(() => {
    addBot(getResponse(text));
  }, 300);
}

function addUser(text){
  const div = document.createElement("div");
  div.className = "user-message";
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addBot(text){
  const div = document.createElement("div");
  div.className = "bot-message";
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(text){
  const msg = text.toLowerCase();
  const lang = document.getElementById("languageSelect").value;

  if(msg.includes("university") || msg.includes("about") || msg.includes("srinath"))
    return data.college_info.answers[lang];

  if(msg.includes("course") || msg.includes("bca") || msg.includes("mba") || msg.includes("btech"))
    return data.courses.answers[lang];

  if(msg.includes("fee") || msg.includes("scholarship"))
    return data.fees.answers[lang];

  if(msg.includes("hostel"))
    return data.hostel.answers[lang];

  if(msg.includes("library"))
    return data.library.answers[lang];

  if(msg.includes("placement") || msg.includes("job"))
    return data.placements.answers[lang];

  if(msg.includes("facility"))
    return data.facilities.answers[lang];

  if(msg.includes("admission"))
    return data.admission.answers[lang];

  if(msg.includes("exam"))
    return data.exam.answers[lang];

  if(msg.includes("contact"))
    return data.contact.answers[lang];

  if(msg.includes("transport"))
    return data.transport.answers[lang];
  
  if(msg.includes("hey"))
    return data.hey.answers[lang];

  if(msg.includes("OK"))
    return data.OK.answers[lang];

  return "Sorry, I didn't understand. Ask about courses, fees, hostel, library, scholarship, placement.";
}

input.addEventListener("keypress",(e)=>{
  if(e.key==="Enter") sendMessage();
});
function startVoiceInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Your browser does not support voice recognition. Use Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();

  // Language for voice input
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onstart = function () {
    console.log("Voice recognition started...");
  };

  recognition.onresult = function (event) {
    const voiceText = event.results[0][0].transcript;

    // Put voice text into input box
    input.value = voiceText;

    // Auto send message
    sendMessage();
  };

  recognition.onerror = function (event) {
    console.log("Voice error:", event.error);
    alert("Voice recognition error. Try again.");
  };
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}