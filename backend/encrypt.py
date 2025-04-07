# # from fastapi import FastAPI, HTTPException
# # from fastapi.middleware.cors import CORSMiddleware
# # from pydantic import BaseModel
# # from cryptography.fernet import Fernet
# # import base64
# # app = FastAPI()


# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["http://localhost:3000"],  # Change this to ["http://localhost:3000"] for better security
# #     allow_credentials=True,
# #     allow_methods=["*"],  # Allow all HTTP methods (GET, POST, OPTIONS, etc.)
# #     allow_headers=["*"],  # Allow all headers
# # )

# # #fixed key for encryption and decryption
# # KEY = Fernet.generate_key()
# # cipher = Fernet(KEY)

# # class TextData(BaseModel):
# #     text: str

# # @app.get("/")
# # def home():
# #     return {"message": "Backend is running!"}

# # print("🚀 FastAPI Server is running at http://127.0.0.1:8000 🚀")


# # @app.post("/encrypt")
# # def encrypt_text(data: TextData):
   
# #     try:
# #         #encrypted_text = cipher.encrypt(data.text.encode()).decode()

# #         encrypted_bytes = cipher.encrypt(data.text.encode())
# #         encrypted_text =encrypted_bytes.decode('utf-8')
# #         return {"Encrypted_text": encrypted_text}
# #     except Exception as e:
# #         raise HTTPException(status_code=500, detail=str(e))

# # if __name__ == "__main__":
# #     import uvicorn
# #     uvicorn.run(app, host="0.0.0.0", port=8000)



# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from cryptography.fernet import Fernet
# import base64

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["https://esigned-encryption-x2wt.onrender.com","http://localhost:3000"],  
#     allow_credentials=True,
#     allow_methods=["*"],  
#     allow_headers=["*"],  
# )

# # Request model (expects text and user-provided key)
# class EncryptionRequest(BaseModel):
#     text: str
#     key: str  # User-defined encryption key

# def get_cipher(user_key: str) -> Fernet:
#     try:
#         key_bytes = user_key.encode()  # Convert string key to bytes
#         #key_padded = key_bytes.ljust(32, b'*')[:32] # Pad key to 32 bytes even it was short but ont working right now
#         key_base64 = base64.urlsafe_b64encode(key_bytes[:32])  # Ensure exactly 32 bytes
#         return Fernet(key_base64)
#     except Exception as e:
#         raise HTTPException(status_code=400, detail="Invalid encryption key format")

# @app.post("/encrypt")
# def encrypt_text(data: EncryptionRequest):
#     try:
#         cipher = get_cipher(data.key)  # Generate cipher from user key
#         encrypted_bytes = cipher.encrypt(data.text.encode())  # Encrypt text
#         return {"Encrypted_text": encrypted_bytes.decode('utf-8')}  # Return encrypted string
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


# @app.post("/decrypt")
# def decrypt_text(data: EncryptionRequest):
#     try:
#         cipher = get_cipher(data.key)  # Generate cipher from user key
#         decrypted_bytes = cipher.decrypt(data.text.encode())  # Decrypt text
#         return {"Decrypted_text": decrypted_bytes.decode("utf-8")}  # Return decrypted string
#     except Exception:
#         raise HTTPException(status_code=400, detail="Decryption failed. Check your key or encrypted text.")


# @app.get("/")
# def home():
#     return {"message": "Backend is running!"}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)


from fastapi import FastAPI, HTTPException, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel
from cryptography.fernet import Fernet
from PIL import Image
import base64
import io

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://esigned-encryption-x2wt.onrender.com", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================== TEXT ENCRYPTION ====================
class EncryptionRequest(BaseModel):
    text: str
    key: str  # User-defined encryption key

def get_cipher(user_key: str) -> Fernet:
    try:
        key_bytes = user_key.encode()
        key_base64 = base64.urlsafe_b64encode(key_bytes[:32])  # Ensure 32 bytes
        return Fernet(key_base64)
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid encryption key format")

@app.post("/encrypt")
def encrypt_text(data: EncryptionRequest):
    try:
        cipher = get_cipher(data.key)
        encrypted_bytes = cipher.encrypt(data.text.encode())
        return {"Encrypted_text": encrypted_bytes.decode('utf-8')}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/decrypt")
def decrypt_text(data: EncryptionRequest):
    try:
        cipher = get_cipher(data.key)
        decrypted_bytes = cipher.decrypt(data.text.encode())
        return {"Decrypted_text": decrypted_bytes.decode("utf-8")}
    except Exception:
        raise HTTPException(status_code=400, detail="Decryption failed. Check your key or encrypted text.")

# ==================== IMAGE ENCODING ====================
def encode_image_stream(image_stream, text, output_path="encoded_output.png"):
    img = Image.open(image_stream)
    width, height = img.size
    encoded_img = img.copy()
    data = ''.join(format(ord(char), '08b') for char in text + '\0')  # Add null char to mark end

    index = 0
    for row in range(height):
        for col in range(width):
            if index < len(data):
                pixel = list(img.getpixel((col, row)))
                for color_channel in range(3):  # R, G, B
                    if index < len(data):
                        pixel[color_channel] = pixel[color_channel] & 254 | int(data[index])
                        index += 1
                encoded_img.putpixel((col, row), tuple(pixel))
            else:
                break

    encoded_img.save(output_path)
    return output_path

# ==================== IMAGE DECODING ====================
def decode_image_stream(image_stream):
    img = Image.open(image_stream)
    width, height = img.size
    data = []

    for row in range(height):
        for col in range(width):
            pixel = list(img.getpixel((col, row)))
            for color_channel in range(3):
                data.append(pixel[color_channel] & 1)

    decoded_text = []
    for i in range(0, len(data), 8):
        byte = data[i:i+8]
        char = chr(int(''.join(map(str, byte)), 2))
        if char == '\0':
            break
        decoded_text.append(char)

    return ''.join(decoded_text)

# ==================== IMAGE ROUTES ====================
@app.post("/encode-image")
async def encode_image_api(image: UploadFile = File(...), text: str = Form(...)):
    image_bytes = await image.read()
    image_stream = io.BytesIO(image_bytes)
    output_path = "encoded_output.png"
    result_path = encode_image_stream(image_stream, text, output_path)
    return FileResponse(result_path, media_type="image/png", filename="encoded_image.png")

@app.post("/decode-image")
async def decode_image_api(image: UploadFile = File(...)):
    image_bytes = await image.read()
    image_stream = io.BytesIO(image_bytes)
    decoded_message = decode_image_stream(image_stream)
    return JSONResponse(content={"message": decoded_message})

# ==================== ROOT ====================
@app.get("/")
def home():
    return {"message": "Backend is running!"}

# ==================== RUN (for development) ====================
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
