export function LinksGroi(){
    return (    
        <>
            <a className="popup-section-link" href="https://github.com/lukbast/groi-api">API</a>
            <a className="popup-section-link" href="https://github.com/lukbast/groi-client">Client</a>
        </>
    )
}

export function LinksCrwn(){
    return(
        <>
            <a className="popup-section-link" href="https://github.com/lukbast/groi-api">https://github.com/lukbast/crwn-clothing</a>
        </>
        )
}

export function LinksFd(){
    return(
        <>
            <a className="popup-section-link" href="https://github.com/lukbast/food-detector">Client</a>
            <a className="popup-section-link" href="https://github.com/lukbast/food_detector_api">API</a>
            <a className="popup-section-link" href="https://github.com/lukbast/fd_model_server">TensorFlow model server</a>
            <a className="popup-section-link" href="https://github.com/lukbast/tensorflow/blob/main/08_food_vision.ipynb">Training process of machine learning model </a>
        </>
    )
}

export let groi_content = [
    `GROI is my personal project built as a final project of one of the subjects during getting an degree. It’s far from being perfect, especially in terms of UI/UX design but it implements elements that are present in most applications today: authentication and authorization with 2FA is some places, back-end database, responsive UI for mobile users, simple search system, automated sending emails to users and many more. This application is currently deployed on Heroku, You can use this link to visit it and play around:`,
    ["Programing languages: Javascript",
    "Front-end: React, Redux, React-router",
    "Back-end: Node.JS, Express",
    "Databases: Mongo.DB, Redis",
    "External services: Gmail API, Coudinary CDN, Mapbox",
    "Deployed on: Heroku",
    "Links to source code:",
    ]   
]

export let crwnContent = [
    `I created this project while taking course "The Complete React Developer" by Andrei Neagoie and Yihua Zhang on Udemy. I want to emphasize that design of this project is owned by creators of the couse and give them deserved credit. What I did was to code it while taking part in the course. It's mostly front-end project written in JavaScript using React. Authentication system is implemented with Google Firebase and Stripe demo payments are processed by simple backend written using Express, Node.JS's framework. Feel free to check it out and play around using this link:`,
    ["Programing languages: Javascript",
    "Front-end: React, Redux, React-router",
    "Back-end: Node.JS, Express",
    "Databases: Google Firebase",
    "External services: Stripe API",
    "Deployed on: Heroku",
    "Links to source code:",
    ]  
]

export let fdContent = [
    `This is my personal portfolio project of native Android application. Food Detector allows you to recognise food based on it's foto by leveraging machine learning image classification model. This application consists of three main parts: client, API and TF model server. Client is written in Java and Android Studio an native mobile application. API created with Python and Flask handles requests from API, image preprocessing and processing of predictions made by TF model server. TF model server handles efficient predictions and interactions with machine learning model.`,
    ["Programing languages: Java, Python",
    "Front-end: Android Studio",
    "Back-end: Flask, Tensorflow Serving",
    "Machine learning and data science: Tensorflow, Keras, Pandas, Matplotlib, NumPy",
    "Deployed on: Google Cloud, Google Kubernetes Engine",
    "Links to source code:",
    ]  
]





