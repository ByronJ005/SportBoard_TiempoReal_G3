import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../../../services/service_list_matchs.dart';

class MatchesPage extends StatefulWidget {
  @override
  _MatchesPageState createState() => _MatchesPageState();
}

class _MatchesPageState extends State<MatchesPage> {
  final _formKey = GlobalKey<FormState>();
  String fecha = '';
  int? seasonId;
  String? status;
  int page = 1;
  int perPage = 20;
  List<dynamic> matches = [];
  bool isLoading = false;

  // Función para obtener partidos desde la API
  Future<void> _loadMatches() async {
    setState(() {
      isLoading = true;
    });

    try {
      var response = await ApiService().getMatches(
        fecha: fecha.isNotEmpty ? fecha : null,
        seasonId: seasonId,
        status: status,
        page: page,
        perPage: perPage,
      );

      // Asignar la lista de partidos a matches
      setState(() {
        matches = response;
      });
    } catch (e) {
      // Mostrar un error si no se puede cargar
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error al cargar los partidos')),
      );
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  void initState() {
    super.initState();
    _loadMatches();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Partidos'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            // Filtros
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
                    decoration:
                    InputDecoration(labelText: 'Fecha (YYYY-MM-DD)'),
                    keyboardType: TextInputType.datetime,
                    onChanged: (value) {
                      fecha = value;
                    },
                  ),
                  TextFormField(
                    decoration: InputDecoration(labelText: 'ID de Temporada'),
                    keyboardType: TextInputType.number,
                    onChanged: (value) {
                      seasonId = int.tryParse(value);
                    },
                  ),
                  TextFormField(
                    decoration:
                    InputDecoration(labelText: 'Estado del Partido'),
                    onChanged: (value) {
                      status = value.isNotEmpty ? value : null;
                    },
                  ),
                  SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: _loadMatches,
                    child: Text('Filtrar'),
                  ),
                ],
              ),
            ),
            SizedBox(height: 16),
            // Lista de partidos
            isLoading
                ? Center(child: CircularProgressIndicator())
                : Expanded(
              child: ListView.builder(
                itemCount: matches.length,
                itemBuilder: (context, index) {
                  var match = matches[index];
                  String dateFormatted = '';
                  try {
                    // Asegurarse de que la fecha esté en formato correcto
                    dateFormatted = DateFormat('yyyy-MM-dd')
                        .format(DateTime.parse(match['date']));
                  } catch (e) {
                    dateFormatted = 'Fecha inválida';
                  }

                  return ListTile(
                    title: Text('Partido: ${match['id']}'),
                    subtitle: Text(
                        'Fecha: $dateFormatted\n'
                            'Estado: ${match['status']}'),
                    onTap: () {
                      // Acción al seleccionar un partido
                    },
                  );
                },
              ),
            ),
            // Paginación
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  icon: Icon(Icons.arrow_back),
                  onPressed: page > 1
                      ? () {
                    setState(() {
                      page--;
                    });
                    _loadMatches();
                  }
                      : null,
                ),
                Text('Página $page'),
                IconButton(
                  icon: Icon(Icons.arrow_forward),
                  onPressed: () {
                    setState(() {
                      page++;
                    });
                    _loadMatches();
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
