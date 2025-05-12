package com.evaluacion;

public class EvaluadorRiesgo {

    // Método principal para calcular el riesgo crediticio
    public static String calcularRiesgo(String historialPago, double ingresos, double deuda, int creditosActivos, int edad, int tiempoEmpleo, double montoSolicitado) {
        if (!validarDatos(ingresos, deuda, creditosActivos, edad, tiempoEmpleo, montoSolicitado)) {
            return "Error: Los valores ingresados deben ser positivos.";
        }

        int score = evaluarHistorialPago(historialPago) +
                    evaluarRelacionIngresoDeuda(ingresos, deuda) +
                    evaluarCreditosActivos(creditosActivos) +
                    evaluarEdad(edad) +
                    evaluarTiempoEmpleo(tiempoEmpleo) +
                    evaluarMontoSolicitado(ingresos, montoSolicitado);

        return determinarNivelRiesgo(score);
    }

    // Validación general para evitar valores negativos
    private static boolean validarDatos(double... valores) {
        for (double valor : valores) {
            if (valor < 0) return false;
        }
        return true;
    }

    // Evaluación modularizada por cada factor de riesgo
    private static int evaluarHistorialPago(String historial) {
        return historial.equalsIgnoreCase("Bueno") ? 2 :
               historial.equalsIgnoreCase("Regular") ? 1 : 0;
    }

    private static int evaluarRelacionIngresoDeuda(double ingresos, double deuda) {
        return ingresos > deuda * 2 ? 2 : ingresos > deuda ? 1 : 0;
    }

    private static int evaluarCreditosActivos(int creditos) {
        return creditos < 3 ? 2 : creditos <= 5 ? 1 : 0;
    }

    private static int evaluarEdad(int edad) {
        return edad > 25 ? 2 : edad > 18 ? 1 : 0;
    }

    private static int evaluarTiempoEmpleo(int tiempoEmpleo) {
        return tiempoEmpleo > 3 ? 2 : tiempoEmpleo > 1 ? 1 : 0;
    }

    private static int evaluarMontoSolicitado(double ingresos, double montoSolicitado) {
        return montoSolicitado < ingresos * 0.5 ? 2 : montoSolicitado < ingresos ? 1 : 0;
    }

    // Determina el nivel de riesgo con base en la puntuación obtenida
    private static String determinarNivelRiesgo(int score) {
        return score >= 9 ? "Riesgo Bajo" :
               score >= 5 ? "Riesgo Medio" : "Riesgo Alto";
    }
}
