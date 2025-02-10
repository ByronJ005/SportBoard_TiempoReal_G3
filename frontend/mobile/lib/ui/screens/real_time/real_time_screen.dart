import 'package:flutter/material.dart';
import 'dart:async';

class TiempoRealScreen extends StatefulWidget {
  const TiempoRealScreen({super.key});

  @override
  _TiempoRealScreenState createState() => _TiempoRealScreenState();
}

class _TiempoRealScreenState extends State<TiempoRealScreen> {
  int _minutoActual = 0;
  int _segundoActual = 0;
  bool _enDescanso = false;
  bool _partidoTerminado = false;
  int _tiempoExtra = 0;
  Timer? _timer;
  final TextEditingController _tiempoExtraController = TextEditingController();

  List<Map<String, dynamic>> _eventos = [];
  String _selectedEvento = 'Gol';
  String _selectedEquipo = 'Real Madrid';
  int _marcadorEquipo1 = 0;
  int _marcadorEquipo2 = 0;

  @override
  void initState() {
    super.initState();
    _iniciarPartido();
  }

  void _iniciarPartido() {
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (mounted) {
        setState(() {
          if (_segundoActual == 59) {
            _segundoActual = 0;
            _minutoActual++;
          } else {
            _segundoActual++;
          }

          if (_minutoActual == 45 && _segundoActual == 0 && !_enDescanso) {
            _enDescanso = true;
            _timer?.cancel();
            Future.delayed(const Duration(minutes: 15), () {
              if (mounted) {
                setState(() {
                  _enDescanso = false;
                  _iniciarPartido();
                });
              }
            });
          } else if (_minutoActual >= (90 + _tiempoExtra) && _segundoActual == 0) {
            _partidoTerminado = true;
            _timer?.cancel();
          }
        });
      }
    });
  }

  void _agregarEvento() {
    if (!_enDescanso && !_partidoTerminado) {
      setState(() {
        _eventos.add({
          'tipo': _selectedEvento,
          'equipo': _selectedEquipo,
          'tiempo': '${_minutoActual.toString().padLeft(2, '0')}:${_segundoActual.toString().padLeft(2, '0')}'
        });

        if (_selectedEvento == 'Gol') {
          if (_selectedEquipo == 'Real Madrid') {
            _marcadorEquipo1++;
          } else {
            _marcadorEquipo2++;
          }
        }
      });
    }
  }

  void _agregarTiempoExtra() {
    if (_tiempoExtraController.text.isNotEmpty) {
      setState(() {
        _tiempoExtra += int.parse(_tiempoExtraController.text);
        _tiempoExtraController.clear();
      });
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    _tiempoExtraController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Tiempo Real del Partido'),
        backgroundColor: Colors.green,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Fila para mostrar tiempo y marcador
            Row(
              children: [
                // Marcador
                Expanded(
                  child: Container(
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: Colors.green,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text(
                      'Real Madrid: $_marcadorEquipo1  -  $_marcadorEquipo2 Fc Barcelona',
                      style: const TextStyle(fontSize: 25, fontWeight: FontWeight.bold, color: Colors.white),
                    ),
                  ),
                ),
                const SizedBox(width: 10), // Espacio entre marcador y tiempo
                // Tiempo
                Expanded(
                  child: Container(
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: _partidoTerminado
                          ? Colors.red
                          : _enDescanso
                          ? Colors.orange
                          : Colors.green,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text(
                      _partidoTerminado
                          ? 'Partido Terminado'
                          : _enDescanso
                          ? 'Descanso (15 min)'
                          : 'Tiempo: ${_minutoActual.toString().padLeft(2, '0')}:${_segundoActual.toString().padLeft(2, '0')}',
                      style: const TextStyle(fontSize: 30, fontWeight: FontWeight.bold, color: Colors.white),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),

            // Fila para seleccionar el evento y equipo
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: _selectedEvento,
                    onChanged: (String? newValue) {
                      setState(() {
                        _selectedEvento = newValue!;
                      });
                    },
                    items: <String>['Gol', 'Tarjeta Amarilla', 'Tarjeta Roja', 'Cambio']
                        .map<DropdownMenuItem<String>>((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value),
                      );
                    }).toList(),
                    decoration: InputDecoration(
                      labelText: 'Evento',
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: _selectedEquipo,
                    onChanged: (String? newValue) {
                      setState(() {
                        _selectedEquipo = newValue!;
                      });
                    },
                    items: <String>['Real Madrid', 'Barcelona']
                        .map<DropdownMenuItem<String>>((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value),
                      );
                    }).toList(),
                    decoration: InputDecoration(
                      labelText: 'Equipo',
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                SizedBox(
                  width: 200,
                  child: ElevatedButton(
                    onPressed: _agregarEvento,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.green,
                      padding: const EdgeInsets.symmetric(vertical: 15),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                    child: const Text('Agregar Evento', style: TextStyle(color: Colors.white, fontSize: 16)),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),

            // Fila para agregar tiempo extra
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: TextField(
                    controller: _tiempoExtraController,
                    keyboardType: TextInputType.number,
                    decoration: InputDecoration(
                      labelText: 'Tiempo extra (minutos)',
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                SizedBox(
                  width: 200,
                  child: ElevatedButton(
                    onPressed: _agregarTiempoExtra,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.green,
                      padding: const EdgeInsets.symmetric(vertical: 15),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                    child: const Text('Agregar Tiempo Extra', style: TextStyle(color: Colors.white, fontSize: 16)),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),

            // Lista de eventos
            Expanded(
              child: ListView.builder(
                itemCount: _eventos.length,
                itemBuilder: (context, index) {
                  final evento = _eventos[index];
                  IconData icon;
                  Color color;
                  switch (evento['tipo']) {
                    case 'Gol':
                      icon = Icons.sports_soccer;
                      color = Colors.green;
                      break;
                    case 'Tarjeta Amarilla':
                      icon = Icons.warning_amber;
                      color = Colors.yellow;
                      break;
                    case 'Tarjeta Roja':
                      icon = Icons.warning;
                      color = Colors.red;
                      break;
                    case 'Cambio':
                      icon = Icons.swap_horiz;
                      color = Colors.green;
                      break;
                    default:
                      icon = Icons.event;
                      color = Colors.grey;
                  }
                  return Card(
                    margin: const EdgeInsets.symmetric(vertical: 5),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    elevation: 2,
                    child: ListTile(
                      leading: Icon(icon, color: color),
                      title: Text(
                        '${evento['tipo']} - ${evento['equipo']} - ${evento['tiempo']}',
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
