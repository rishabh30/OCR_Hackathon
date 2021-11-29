# OCR Hackathon (June 2020)

## Google Vision Version

### Prerequisites 
* Node.js
* Node Package Manager

## Getting Started 
```
add API key in app.js
```

```
npm install
```

Then run the project
```
node app.js
```

## Amazone Textract Version

### Prerequisites 
* AWS CLI
* Flask
* Python3 (see requirements below)
boto3, os, werkzeug.utils, sys, re, json 
* pdf_to_jpg.ipynb (for PDFs to image conversion)
PyPDF2, PIL, poppler, pdf2image

(Further installation details are commented in python file)

### Installing

* Make sure your AWS credentials are in 
```
 “C:\Users\<user name>\.aws\credentials”
```
* In Project Directory run ( for Powershell), (for other shells, see)
```
 $env:FLASK_ENV = "development"
 $env:FLASK_APP = "Main.py"
 Flask run 
```

(app will run on port 5000)

### Usage
* Select image file by clicking the browse button (For PDF use pdf_to_jpg.ipynb to convert file into jpg)
* Then click Extract to generate key, pair value

# Author <a name = "authors"></a>
- [Akash Meshram](https://github.com/akashmeshram)
- [Rishabh Singhal](https://github.com/rishabh30) 
