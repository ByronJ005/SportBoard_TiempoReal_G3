import 'dart:convert';
import 'package:http/http.dart' as http;
import '../core/utils/api_endpoints.dart';

class ApiService {
  Future<List<dynamic>> getMatches({
    String? fecha,
    int? seasonId,
    String? status,
    int page = 1,
    int perPage = 20,
  }) async {

    Uri url = Uri.parse(ApiEndpoints.matches).replace(queryParameters: {
      if (fecha != null) 'fecha': fecha,
      if (seasonId != null) 'season_id': seasonId.toString(),
      if (status != null) 'status': status,
      'page': page.toString(),
      'per_page': perPage.toString(),
    });

    print('URL de la petición: $url');


    final response = await http.get(url);

    if (response.statusCode == 200) {
      // Si la respuesta es exitosa, decodifica el cuerpo y lo devuelve
      final Map<String, dynamic> data = json.decode(response.body);
      // Aquí comprobamos si la clave 'matches' está presente
      if (data.containsKey('matches')) {
        return data['matches']; // Retorna la lista de partidos
      } else {
        throw Exception('No se encontró la clave "matches" en la respuesta');
      }
    } else {
      throw Exception('Error al cargar los partidos');
    }
  }
}
