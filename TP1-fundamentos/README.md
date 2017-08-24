Formato de Dockerfile

FROM python:3.4
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       git\
    && rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install -r requirements.txt
EXPOSE 5000
RUN git clone https://github.com/Anele13/TP1-fundamentos.git
CMD ["python", "TP1-fundamentos/TP1-fundamentos/app.py"]

requirements.txt

Django==1.9.4

Docker Build

docker build  -t tp1 . 

Docker Run

docker run -p 5000:5000 tp1

Prueba

http://0.0.0.0:5000/
