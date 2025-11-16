
# RSP Dashboard – Retail Selling Price Visualization (Petrol & Diesel)

This project is a data-visualization dashboard built using **React + Vite + TypeScript**,  
with UI powered by **Mantine UI** and charts rendered via **Apache ECharts**.

It allows users to:

- Select a **metro city**
- Select a **fuel type** (Petrol / Diesel)
- Select a **calendar year**
- View a **bar chart displaying monthly average Retail Selling Prices (RSP)**  
  for the selected city, fuel type, and year

The dataset used is the "Retail Selling Price (RSP) of Petrol and Diesel in Metro Cities"  
provided by **National Data and Analytics Platform (NITI Aayog)**.

---

## 🚀 Live Features

- Dynamic dropdown filters  
- Automatic grouping by **month**
- Calculation of **monthly average RSP**
- Responsive bar chart 
- Clean, modern UI using Mantine
- Fully client-side (no backend required)

---

## 📁 Project Structure



src/
├─ components/
│ ├─ Filters.tsx
│ └─ RspChart.tsx
├─ data/
│ └─ rsp-data.json
├─ utils/
│ ├─ normalize.ts
│ └─ aggregation.ts
├─ types.ts
├─ App.tsx
└─ main.tsx


---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone <your-private-repo-url>
cd <your-folder-name>

2. Install Dependencies
npm install

3. Start Development Server
npm run dev


The app will start at:

http://localhost:5173

🏗️ Build for Production
npm run build


Preview the production build:

npm run preview

📊 Dataset

The dataset is located at:

src/data/rsp-data.json


This file contains the cleaned JSON version of the RSP dataset with
columns:

Calendar Day

Metro Cities

Products

Retail Selling Price

🛠️ Tech Stack

React + Vite

TypeScript

Mantine UI

Apache ECharts

ESLint + Prettier

Client-side data parsing

🔒 Repository Access

This repository must remain private until results are declared.

Please grant Read access to the following GitHub profiles:

https://github.com/maneetgoyal

https://github.com/prashanshajain

https://github.com/hrmanuafac

To add them:

Go to Settings → Collaborators & Teams

Click Add collaborator

Search each username

Assign Read permission

📄 Notes for Reviewers

The dashboard processes the dataset entirely on the client side.

Missing values (if any) are treated as 0, as instructed.

The chart updates instantly based on dropdown selections.

Code follows clean modular structure for readability and maintainability.
