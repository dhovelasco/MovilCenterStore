# conexion.py
import psycopg2

def conectar():
    try:
        conexion = psycopg2.connect(
            host="localhost",
            database="coffeelog_db",
            user="postgres",        # Cambia si usaste otro usuario
            password="tu_contraseña",  # ← aquí escribe tu contraseña real
            port="5432"
        )
        print("✅ Conexión exitosa a PostgreSQL")
        return conexion
    except Exception as e:
        print("❌ Error al conectar a PostgreSQL:", e)
        return None
