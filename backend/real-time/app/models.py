from . import db


class Equipo(db.Model):
    __tablename__ = 'Equipo'  # Nombre exacto de la tabla
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False, unique=True)
    ciudad = db.Column(db.String(100), nullable=False)
    estadio_id = db.Column(db.Integer, db.ForeignKey('Estadio.id'), nullable=False)
    jugadores = db.relationship('Jugador', back_populates='equipo')
    partidos_local = db.relationship('Partido', foreign_keys='Partido.equipo_local_id', back_populates='equipo_local')
    partidos_visitante = db.relationship('Partido', foreign_keys='Partido.equipo_visitante_id',
                                         back_populates='equipo_visitante')


class Jugador(db.Model):
    __tablename__ = 'Jugador'  # Nombre exacto de la tabla
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    posicion = db.Column(db.String(50), nullable=False)
    numero = db.Column(db.Integer, nullable=False)
    equipo_id = db.Column(db.Integer, db.ForeignKey('Equipo.id'), nullable=False)
    equipo = db.relationship('Equipo', back_populates='jugadores')


class Estadio(db.Model):
    __tablename__ = 'Estadio'  # Nombre exacto de la tabla
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False, unique=True)
    ubicacion = db.Column(db.String(150), nullable=False)
    capacidad = db.Column(db.Integer, nullable=False)
    equipos = db.relationship('Equipo', backref='estadio')


class Fecha(db.Model):
    __tablename__ = 'Fecha'  # Nombre exacto de la tabla
    id = db.Column(db.Integer, primary_key=True)
    numero = db.Column(db.Integer, nullable=False)
    inicio = db.Column(db.DateTime, nullable=False)
    fin = db.Column(db.DateTime, nullable=False)
    partidos = db.relationship('Partido', back_populates='fecha')


class Partido(db.Model):
    __tablename__ = 'Partido'  # Nombre exacto de la tabla
    id = db.Column(db.Integer, primary_key=True)
    equipo_local_id = db.Column(db.Integer, db.ForeignKey('Equipo.id'), nullable=False)
    equipo_visitante_id = db.Column(db.Integer, db.ForeignKey('Equipo.id'), nullable=False)
    fecha_id = db.Column(db.Integer, db.ForeignKey('Fecha.id'), nullable=False)
    estadio_id = db.Column(db.Integer, db.ForeignKey('Estadio.id'), nullable=False)
    goles_local = db.Column(db.Integer, nullable=False, default=0)
    goles_visitante = db.Column(db.Integer, nullable=False, default=0)
    eventos = db.relationship('Evento', back_populates='partido')
    equipo_local = db.relationship('Equipo', foreign_keys=[equipo_local_id], back_populates='partidos_local')
    equipo_visitante = db.relationship('Equipo', foreign_keys=[equipo_visitante_id],
                                       back_populates='partidos_visitante')
    fecha = db.relationship('Fecha', back_populates='partidos')
    estadio = db.relationship('Estadio', backref='partidos')


class Evento(db.Model):
    __tablename__ = 'Evento'  # Nombre exacto de la tabla
    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(50), nullable=False)
    minuto = db.Column(db.Integer, nullable=False)
    jugador_id = db.Column(db.Integer, db.ForeignKey('Jugador.id'),
                           nullable=True)  # Jugador relacionado con el evento (puede ser nulo)
    partido_id = db.Column(db.Integer, db.ForeignKey('Partido.id'), nullable=False)
    jugador = db.relationship('Jugador', backref='eventos')
    partido = db.relationship('Partido', back_populates='eventos')
