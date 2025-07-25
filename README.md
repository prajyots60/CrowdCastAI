# 🚀 CrowdCast AI – Predictive Analysis for Crowdfunding Campaigns

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Built with Python](https://img.shields.io/badge/Built%20with-Python-blue.svg)](https://www.python.org/)
[![ML Project](https://img.shields.io/badge/Machine%20Learning-Project-orange)](#machine-learning-models)
[![Web App](https://img.shields.io/badge/WebApp-Flask%2FStreamlit-success)](#deployment--interface)

---

CrowdCast AI is an intelligent web application that leverages machine learning to predict the **success probability** and **expected funding amount** of crowdfunding campaigns on platforms like **Indiegogo**.

📈 Designed as a BE mini project, it helps aspiring campaigners make **data-backed decisions** before launching.

---

## 📂 Project Files

👉 **[Google Drive Folder (Datasets, PPT, Report)](https://drive.google.com/drive/u/2/folders/1ywDV2XXGawEdQizpbKlUlxmQDdA20Uvj)**  
👉 **[GitHub Repository](https://github.com/prajyots60/CrowdCastAI)**

---

## 🎯 Key Features

- ✅ Predicts **success probability** using Gradient Boosting Classifier
- 💰 Estimates **expected funds** using Random Forest Regressor
- 📊 Provides insights, charts & blogs based on historical campaign data
- 🌐 Easy-to-use **web interface** (Flask / Streamlit)
- 📅 Data from over **4.4 million rows** (Indiegogo: June 2019 – March 2025)
- 🔍 Feature importance analysis to guide campaign optimization

---

## 🧠 Machine Learning Models

### 1. **Success Prediction (Classification)**
- 📘 Algorithm: Gradient Boosting
- 📊 Accuracy: 90.16%
- 🎯 AUC-ROC: 0.9376
- 🔍 Features: Category, Duration, Goal, Promotion, Launch Month

### 2. **Fund Estimation (Regression)**
- 📘 Algorithm: Random Forest Regressor
- 📊 R² Score: 0.6624
- 💡 Predicts how much a campaign can realistically raise

---

## 🖼 Interface Preview

> Sample outputs:
- 📈 Gauge chart showing success percentage
- 💵 Fund estimate card in USD
- 📊 Interactive visual insights (bar, pie, line graphs)
- 📚 Blogs with campaign planning tips

---

## 🛠 Tech Stack

| Layer         | Tools/Tech                      |
|---------------|----------------------------------|
| Language      | Python 3.8+                     |
| ML Libraries  | Scikit-learn, XGBoost, Pandas   |
| Visualization | Matplotlib, Seaborn, Plotly     |
| Web Framework | Flask / Streamlit               |
| Scraping      | BeautifulSoup, Selenium         |
| Frontend      | NextJs                          |
| Versioning    | Git + GitHub                    |

---

## 📊 Dataset Highlights

- 123,540 unique campaigns after preprocessing
- Features: `category`, `duration`, `goal`, `promotion status`, `launch_month`, etc.
- Labels:
  - **Binary success flag** (>=80% goal met)
  - **Fund amount in USD**

---

## 📈 Visual Insights Included

- 📅 Best months to launch (Oct–Dec)
- 🎯 Optimal campaign durations
- 🏷️ Top-performing categories (Tech, Games)
- 📣 Impact of promotions & InDemand status

---

## 🧪 Use Case Examples

### ✅ **Tech Campaign (Promoted)**  
**Input:**  
- Category: Tech  
- Stage: Prototype  
- Duration: 30 days  
- Launch: October 2024  
- Goal: $20,000  
- Promoted: Yes  
- InDemand: Yes  

**Output:**  
- Success Chance: **86.2%**  
- Estimated Fund: **~$23,400**

---

### ❌ **Health Campaign (Non-Promoted)**  
**Input:**  
- Category: Health  
- Stage: Concept  
- Duration: 45 days  
- Launch: March 2023  
- Goal: $10,000  
- Promoted: No  
- InDemand: No  

**Output:**  
- Success Chance: **42.5%**  
- Estimated Fund: **~$5,300**

---

## 📦 Installation & Usage

```bash
# 1. Clone the repo
git clone https://github.com/prajyots60/CrowdCastAI.git
cd CrowdCastAI

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the web app
python app.py
