from flask import Blueprint, jsonify, request
from flask_socketio import emit
from . import db, socketio
from .models import Partido, Evento, Equipo, Jugador, Estadio, Fecha

api = Blueprint('api', __name__)

# Panel de control para seguimiento en tiempo real de los partidos
@api.route('/api/partidos', methods=['GET'])
def get_partidos():
    partidos = Partido.query.all()
    result = [
        {
            "id": partido.id,
            "equipo_local": partido.equipo_local.nombre,
            "equipo_visitante": partido.equipo_visitante.nombre,
            "fecha": partido.fecha.isoformat(),
            "goles_local": partido.goles_local,
            "goles_visitante": partido.goles_visitante,
            "eventos": [
                {
                    "id": evento.id,
                    "tipo": evento.tipo,
                    "minuto": evento.minuto
                }
                for evento in partido.eventos
            ]
        }
        for partido in partidos
    ]
    return jsonify({"message": "Lista de partidos", "data": result}), 200


# Marcador en vivo: Obtener datos específicos de un partido
@api.route('/api/partidos/<int:partido_id>', methods=['GET'])
def get_partido(partido_id):
    partido = Partido.query.get(partido_id)
    if not partido:
        return jsonify({"error": "Partido no encontrado"}), 404

    result = {
        "id": partido.id,
        "equipo_local": partido.equipo_local.nombre,
        "equipo_visitante": partido.equipo_visitante.nombre,
        "fecha": partido.fecha.isoformat(),
        "goles_local": partido.goles_local,
        "goles_visitante": partido.goles_visitante,
        "eventos": [
            {
                "id": evento.id,
                "tipo": evento.tipo,
                "minuto": evento.minuto
            }
            for evento in partido.eventos
        ]
    }
    return jsonify({"message": "Detalles del partido", "data": result}), 200


# Crear un nuevo partido
@api.route('/api/partidos', methods=['POST'])
def create_partido():
    data = request.json

    # Validar datos obligatorios
    if not data or "equipo_local_id" not in data or "equipo_visitante_id" not in data or "fecha_id" not in data or "estadio_id" not in data:
        return jsonify({"error": "Faltan datos obligatorios"}), 400

    # Validar equipos, fecha y estadio
    equipo_local = Equipo.query.get(data["equipo_local_id"])
    equipo_visitante = Equipo.query.get(data["equipo_visitante_id"])
    fecha = Fecha.query.get(data["fecha_id"])
    estadio = Estadio.query.get(data["estadio_id"])

    if not equipo_local or not equipo_visitante or not fecha or not estadio:
        return jsonify({"error": "Equipos, fecha o estadio no válidos"}), 404

    # Crear nuevo partido
    nuevo_partido = Partido(
        equipo_local_id=equipo_local.id,
        equipo_visitante_id=equipo_visitante.id,
        fecha_id=fecha.id,
        estadio_id=estadio.id,
        goles_local=0,
        goles_visitante=0
    )
    db.session.add(nuevo_partido)
    db.session.commit()

    return jsonify({
        "message": "Partido creado con éxito",
        "data": {
            "id": nuevo_partido.id,
            "equipo_local": equipo_local.nombre,
            "equipo_visitante": equipo_visitante.nombre,
            "fecha": fecha.inicio.isoformat(),
            "estadio": estadio.nombre
        }
    }), 201


# Actualización en tiempo real de estadísticas (goles, faltas, sustituciones, etc.)
@api.route('/api/eventos', methods=['POST'])
def create_evento():
    data = request.json

    # Validar datos
    if not data or "tipo" not in data or "minuto" not in data or "partido_id" not in data:
        return jsonify({"error": "Faltan datos obligatorios"}), 400

    # Validar partido asociado
    partido = Partido.query.get(data["partido_id"])
    if not partido:
        return jsonify({"error": "El partido asociado no existe"}), 404

    # Crear nuevo evento
    nuevo_evento = Evento(
        tipo=data["tipo"],
        minuto=data["minuto"],
        partido_id=data["partido_id"]
    )
    db.session.add(nuevo_evento)
    db.session.commit()

    # Emitir evento en tiempo real
    socketio.emit('nuevo_evento', {
        "id": nuevo_evento.id,
        "tipo": nuevo_evento.tipo,
        "minuto": nuevo_evento.minuto,
        "partido_id": nuevo_evento.partido_id
    })

    return jsonify({
        "message": "Evento creado con éxito",
        "data": {
            "id": nuevo_evento.id,
            "tipo": nuevo_evento.tipo,
            "minuto": nuevo_evento.minuto,
            "partido_id": nuevo_evento.partido_id
        }
    }), 201


# Actualizar marcador en tiempo real
@api.route('/api/partidos/<int:partido_id>/marcador', methods=['PUT'])
def update_marcador(partido_id):
    data = request.json

    if not data or "goles_local" not in data or "goles_visitante" not in data:
        return jsonify({"error": "Faltan datos obligatorios"}), 400

    partido = Partido.query.get(partido_id)
    if not partido:
        return jsonify({"error": "Partido no encontrado"}), 404

    # Actualizar marcador
    partido.goles_local = data["goles_local"]
    partido.goles_visitante = data["goles_visitante"]
    db.session.commit()

    # Emitir actualización en tiempo real
    socketio.emit('actualizacion_partido', {
        "id": partido.id,
        "goles_local": partido.goles_local,
        "goles_visitante": partido.goles_visitante
    })

    return jsonify({
        "message": "Marcador actualizado con éxito",
        "data": {
            "id": partido.id,
            "goles_local": partido.goles_local,
            "goles_visitante": partido.goles_visitante
        }
    }), 200
