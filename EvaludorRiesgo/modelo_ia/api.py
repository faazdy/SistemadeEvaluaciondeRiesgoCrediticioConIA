from flask import Flask, request, jsonify
import riesgo_ia

app = Flask(__name__)

@app.route('/evaluar_riesgo', methods=['POST'])
def evaluar():
    datos = request.json
    datos_usuario = [
        datos["historialPago"], datos["ingresos"], datos["deuda"],
        datos["creditosActivos"], datos["edad"], datos["tiempoEmpleo"],
        datos["montoSolicitado"]
    ]
    
    resultado = riesgo_ia.evaluar_riesgo(datos_usuario)
    return jsonify({"riesgo": resultado})

if __name__ == '__main__':
    app.run(debug=True)