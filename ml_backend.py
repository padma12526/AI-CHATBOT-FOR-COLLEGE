from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# ---------------- FAQ DATASET (ML TRAINING DATA) ----------------
faq_data = [
    # College Info
    ("what is srinath university", "Srinath University is a private university in Jamshedpur, Jharkhand established in 2021."),
    ("about university", "Srinath University is located in Jamshedpur and offers UG and PG programs."),

    # Courses
    ("what courses are offered", "Courses include B.Tech, BCA, MCA, MBA, BBA, B.Pharm, D.Pharm, B.Ed, Polytechnic and PhD."),
    ("engineering courses", "Engineering courses include B.Tech and Diploma programs."),

    # Fees
    ("fee structure", "Fees vary by course. Scholarships and installment options available."),
    ("hostel fee", "Hostel fee ranges between 78,000 to 83,000 per year."),

    # Hostel
    ("is hostel available", "Yes, hostel facilities are available for boys and girls with mess and security."),
    ("hostel rooms", "Hostel offers double, triple and four sharing rooms."),

    # Facilities
    ("what facilities are available", "Facilities include library, labs, WiFi, sports, canteen, transport, medical and placement cell."),
    ("wifi available", "Yes, campus WiFi is available."),

    # Library
    ("library timing", "Library is open from 8 AM to 5 PM with books and digital resources."),
    ("books availability", "Library has textbooks, journals and e-resources."),

    # Scholarship
    ("scholarship available", "Yes, Merit, NSP and e-Kalyan scholarships are available."),
    ("eligibility for scholarship", "Based on marks and family income criteria."),

    # Placement
    ("placement cell", "Placement Cell provides training, internships and campus recruitment."),
    ("companies visit campus", "Companies like TCS, Wipro, Cognizant visit campus."),
    ("average package", "Average package is around 4.62–5.25 LPA."),
    ("highest package", "Highest package goes up to 7–9 LPA."),

    # Exam
    ("exam system", "University follows semester system with internal and external exams."),
    ("exam form", "Students must fill exam form before exams.")
]

questions = [q[0] for q in faq_data]
answers = [q[1] for q in faq_data]

# ---------------- TF-IDF MODEL ----------------
vectorizer = TfidfVectorizer(stop_words="english")
X = vectorizer.fit_transform(questions)

# ---------------- ML RESPONSE FUNCTION ----------------
def get_response(user_input):

    user_input = user_input.lower().strip()

    user_vec = vectorizer.transform([user_input])

    similarity = cosine_similarity(user_vec, X)

    index = similarity.argmax()
    score = similarity[0][index]

    # ML confidence threshold
    if score < 0.25:
        return "Sorry, I am a basic ML chatbot and couldn't understand your question. Please rephrase."

    return answers[index]

# ---------------- API ----------------
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_msg = data.get("message", "")

    reply = get_response(user_msg)

    return jsonify({"reply": reply})

# ---------------- RUN SERVER ----------------
if __name__ == "__main__":
    app.run(debug=True)