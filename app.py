from __future__ import division, print_function
# coding=utf-8
import sys
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import glob
import re
import numpy as np
import pandas as pd
import plotly.express as px
import cv2
import tensorflow
#import keras

# Keras
from tensorflow.keras.applications.imagenet_utils import preprocess_input, decode_predictions
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

# Model saved with Keras model.save()
MODEL_PATH = 'model/model_BTC.h5'

# Load your trained model
model = load_model(MODEL_PATH)

print('Model loaded. Check http://127.0.0.1:5000/')

def array_img(X):
  X=np.array(X)
  return X

def reshape_img(X):
  X = X.reshape(-1, 256, 256, 3)
  return X


def model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(256, 256))

    # Preprocessing the image
    x = array_img(img)
    x = reshape_img(x)

    preds = model.predict(x)
    return preds


@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)
        result = str(preds[0])
        
        return result
    return None


if __name__ == '__main__':
    app.run(debug=True)