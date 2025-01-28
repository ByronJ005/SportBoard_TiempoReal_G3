# Imagen base de Python
FROM python:3.9-slim

# Instalar dependencias del sistema necesarias para cx_Oracle
RUN apt-get update && apt-get install -y libaio1 && rm -rf /var/lib/apt/lists/*

# Crear el directorio de trabajo
WORKDIR /source

# Copiar desde el contexto al contenedor
COPY ./requirements.txt /source/requirements.txt
#COPY ../../../docker/backend/ms3-real-time/requirements.txt /source/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código de la aplicación
#COPY ../../../backend/real-time /app/
COPY ./ /source/

# Exponer el puerto en el que Flask corre
EXPOSE 5000

# Comando para iniciar Flask
#CMD ["flask", "run", "--host=0.0.0.0"]
#CMD ["python", "run.py"]
CMD ["bash", "-c", "flask db upgrade && python run.py"]
