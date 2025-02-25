import hashlib

hash_a_buscar = '2385c94fb00625ee28fab92b5e86d5c83bf454c459c56c7c02dd3b34c55012a2'

palabras = ["lista", "de", "palabras", "aqui", "recuperar", "bandera", "hash"]

for palabra in palabras:
    hash_calculado = hashlib.sha256(palabra.encode()).hexdigest()
    if hash_calculado == hash_a_buscar:
        print(f'¡Encontré la bandera!: RM{{{palabra}}}')
        break
else:
    print("No se encontró la bandera en la lista de palabras.")
