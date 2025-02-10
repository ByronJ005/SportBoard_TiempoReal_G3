import 'dart:convert';
import 'package:http/http.dart' as http;
import '../core/utils/api_endpoints.dart';

class ApiService {
  // Método para crear un evento
  Future<Map<String, dynamic>> createEvent(Map<String, dynamic> eventData) async {
    final response = await http.post(
      Uri.parse(ApiEndpoints.createEvent),
      headers: {
        'Content-Type': 'application/json',
      },
      body: json.encode(eventData),
    );

    if (response.statusCode == 201) {
      // Si la respuesta es exitosa (201), devuelve el JSON con el evento creado
      return json.decode(response.body);
    } else {
      // Si hay un error, lanza una excepción
      throw Exception('Error al crear el evento');
    }
  }
}
