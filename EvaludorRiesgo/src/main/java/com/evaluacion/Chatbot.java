package com.evaluacion;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.io.OutputStream;
import java.util.Scanner;
import java.io.InputStreamReader;
import java.io.BufferedReader;

public class Chatbot {
    public static void iniciarChat() {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("¡Bienvenido! Te ayudaré a evaluar tu riesgo crediticio.");

            System.out.print("Ingresa tu historial de pago (Bueno/Regular/Malo): ");
            String historialPago = scanner.nextLine().trim();

            System.out.print("Ingresa tus ingresos mensuales: ");
            double ingresos = scanner.nextDouble();

            System.out.print("Ingresa tu deuda actual: ");
            double deuda = scanner.nextDouble();

            System.out.print("Número de créditos activos: ");
            int creditosActivos = scanner.nextInt();

            System.out.print("Ingresa tu edad: ");
            int edad = scanner.nextInt();

            System.out.print("Tiempo en el empleo actual (años): ");
            int tiempoEmpleo = scanner.nextInt();

            System.out.print("Monto solicitado del crédito: ");
            double montoSolicitado = scanner.nextDouble();
            scanner.nextLine(); // Limpia buffer

            String jsonInput = "{ \"historialPago\": \""+historialPago+"\", \"ingresos\": "+ingresos+", \"deuda\": "+deuda+","
                               + "\"creditosActivos\": "+creditosActivos+", \"edad\": "+edad+", \"tiempoEmpleo\": "+tiempoEmpleo+","
                               + "\"montoSolicitado\": "+montoSolicitado+" }";

            String respuesta = enviarDatosAI(jsonInput);

            System.out.println("Tu nivel de riesgo es: " + respuesta);
            System.out.println("Gracias por usar el chatbot.");
        }
    }

    public static String enviarDatosAI(String jsonInput) {
    try {
        URI miUri = URI.create("http://localhost:5000/evaluar_riesgo");
        URL miUrl = miUri.toURL();

        HttpURLConnection conn = (HttpURLConnection) miUrl.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);

        try (OutputStream os = conn.getOutputStream()) {
            os.write(jsonInput.getBytes());
            os.flush();
        }

        try (BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
    StringBuilder responseBuilder = new StringBuilder();
    String line;
    while ((line = br.readLine()) != null) {
        responseBuilder.append(line.trim());
    }
    String jsonRespuesta = responseBuilder.toString();
    
    // Ahora procesamos el JSON
    if (jsonRespuesta.contains("riesgo")) {
        int indice = jsonRespuesta.indexOf(":") + 1;
        String valor = jsonRespuesta.substring(indice).replaceAll("[^0-9]", "");
        return "Riesgo: " + valor;
    } else {
        return "Respuesta inválida: " + jsonRespuesta;
    }
}

    } catch (Exception e) {
        return "Error al conectar con la IA: " + e.getMessage();
    }
}

}