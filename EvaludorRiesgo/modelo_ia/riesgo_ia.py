import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import joblib

# Cargar dataset simulado
data = pd.read_csv("datos_riesgo.csv")

# Convertir valores categóricos en números
label_encoder_historial = LabelEncoder()
label_encoder_riesgo = LabelEncoder()

data["historialPago"] = label_encoder_historial.fit_transform(data["historialPago"])
data["nivel_riesgo"] = label_encoder_riesgo.fit_transform(data["nivel_riesgo"])

# Separar datos de entrada y salida
X = data.drop(columns=["nivel_riesgo"])
y = data["nivel_riesgo"]

# Dividir datos en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Entrenar el modelo
modelo = RandomForestClassifier()
modelo.fit(X_train, y_train)

# Guardar el modelo y los label encoders
joblib.dump(modelo, "modelo_riesgo.pkl")
joblib.dump(label_encoder_historial, "label_encoder_historial.pkl")
joblib.dump(label_encoder_riesgo, "label_encoder_riesgo.pkl")

# Función para predecir riesgo
def evaluar_riesgo(datos_usuario):
    modelo = joblib.load("modelo_riesgo.pkl")
    label_encoder_historial = joblib.load("label_encoder_historial.pkl")

    # Convertir historialPago a número
    datos_usuario[0] = label_encoder_historial.transform([datos_usuario[0]])[0]

    # Convertir a array NumPy para asegurar compatibilidad
    datos_usuario = np.array(datos_usuario, dtype=float)

    resultado = modelo.predict([datos_usuario])[0] 
    return int(resultado)  # Convertir a entero estándar