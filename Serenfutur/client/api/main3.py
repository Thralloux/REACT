# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware


# Initializing the fast API server
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8082",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Loading up the trained model
modelD = pickle.load(open('../model/recrutD.pkl', 'rb'))


# Defining the model input types
class Candidate(BaseModel):
    gender: int
    bsc: float
    workex: int
    etest_p: float
    msc: float

# Setting up the home route
@app.get("/")
def read_root():
    return {"data"}

# Setting up the prediction route
@app.post("/DecisionTreeClassifier/")
async def get_predict(data: Candidate):
    sample = [[
        data.gender,
        data.bsc,
        data.workex,
        data.etest_p,
        data.msc
    ]]

    result = modelD.predict(sample).tolist()[0]


    return {
        "data": {
            'prediction': 'Embaucher' if result == 1 else 'Refuser',
            #'interpretation': 'Oui.' if result == 1 else 'Non.'
        }
    }

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8082, host='0.0.0.0')
