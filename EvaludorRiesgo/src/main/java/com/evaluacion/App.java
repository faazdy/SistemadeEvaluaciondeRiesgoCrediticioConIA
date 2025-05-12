package com.evaluacion;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            // Solicitar datos al usuario
            System.out.print("Ingrese historial de pago (Bueno/Regular/Malo): ");
            String historialPago = scanner.nextLine();

            System.out.print("Ingrese ingresos mensuales: ");
            double ingresos = scanner.nextDouble();

            System.out.print("Ingrese deuda actual: ");
            double deuda = scanner.nextDouble();

            System.out.print("Ingrese número de créditos activos: ");
            int creditosActivos = scanner.nextInt();

            System.out.print("Ingrese edad: ");
            int edad = scanner.nextInt();

            System.out.print("Ingrese tiempo en el empleo actual (años): ");
            int tiempoEmpleo = scanner.nextInt();

            System.out.print("Ingrese monto solicitado: ");
            double montoSolicitado = scanner.nextDouble();

            // Evaluación de riesgo
            String resultado = EvaluadorRiesgo.calcularRiesgo(historialPago, ingresos, deuda, creditosActivos, edad, tiempoEmpleo, montoSolicitado);
            System.out.println("Nivel de Riesgo: " + resultado);
        }
    }
}
//sirve
