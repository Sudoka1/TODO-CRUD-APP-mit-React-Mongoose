#  npm install express mongoose           (Befehl in Terminal)

#  npm install  (client)
#  npm start

#  npm install (server)
#  npm starr


# (in client- ".env" Datei):
### 1  CONNECTION_STRING=mongodb+srv://sabirsuleymanaz:12345@clustersabir.czcrncp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSabir
### 2  PORT=3000

<br>

# Schritt für Schritt

1. Initiale Projektstruktur
   1. Erstellen Sie das Projektverzeichnis:
         mkdir todo-crud-app
         cd todo-crud-app
   2. Initialisieren Sie ein Git-Repository:
         git init

2. Frontend mit React einrichten
   1. Erstellen Sie das React-Projekt:
         npx create-react-app client
         cd client
   2. Struktur im client-Verzeichnis:
client/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md

   3. Erstellen und implementieren Sie TodoForm.js:
   4. Implementieren Sie TodoItem.js:
   5. Implementieren Sie TodoList.js:
   6. Implementieren Sie App.js:
   7. Fügen Sie Glasmorphism-Effekte in App.css hinzu:

3. Backend mit Node.js und Mongoose einrichten
   1. Erstellen Sie das Backend-Verzeichnis:
        cd ..
        mkdir server
        cd server
        npm init -y
   2. Installieren Sie die erforderlichen Pakete:
        npm install express mongoose cors body-parser express-validator
   3. Struktur im server-Verzeichnis:
server/
├── models/
│   └── Todo.js
├── routes/
│   └── todos.js
├── controllers/
│   └── todoController.js
├── server.js
├── package.json
└── README.md
   4. Erstellen Sie das Mongoose-Modell Todo.js:
   5. Erstellen Sie die Todo-Controller todoController.js:
   6. Erstellen Sie die Routen todos.js:
   7. Erstellen Sie den Server server.js:

4. Verbinden Sie das Frontend und Backend
   1. Erstellen Sie eine Proxy-Konfiguration in client/package.json:
        // client/package.json
           {
            ...
            "proxy": "http://localhost:5000"
           }

5. Deployment
   1. Erstellen Sie ein GitHub-Repository und pushen Sie den Code:
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin <your-repo-url>
        git push -u origin main
   2. Setzen Sie das Projekt auf einer Plattform wie Heroku, Vercel oder Netlify ein.






