# server.py
import pickle
import numpy as np
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

# Load trained model
model_dict = pickle.load(open('./model.p', 'rb'))
model = model_dict['model']

# Labels (update when you train with more letters)
labels_dict = {0: 'A', 1: 'B', 2: 'L'}

# FastAPI app
app = FastAPI()

class LandmarkData(BaseModel):
    points: list[float]   # [x1, y1, x2, y2, ...]

@app.post("/predict")
async def predict(data: LandmarkData):
    points = np.asarray(data.points)

    # The model expects normalized landmark data (like in inference_classifier.py)
    prediction = model.predict([points])
    predicted_character = labels_dict[int(prediction[0])]

    return {"prediction": predicted_character}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3000)
