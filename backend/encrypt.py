# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from cryptography.fernet import Fernet
# import base64
# app = FastAPI()


# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # Change this to ["http://localhost:3000"] for better security
#     allow_credentials=True,
#     allow_methods=["*"],  # Allow all HTTP methods (GET, POST, OPTIONS, etc.)
#     allow_headers=["*"],  # Allow all headers
# )

# #fixed key for encryption and decryption
# KEY = Fernet.generate_key()
# cipher = Fernet(KEY)

# class TextData(BaseModel):
#     text: str

# @app.get("/")
# def home():
#     return {"message": "Backend is running!"}

# print("🚀 FastAPI Server is running at http://127.0.0.1:8000 🚀")


# @app.post("/encrypt")
# def encrypt_text(data: TextData):
   
#     try:
#         #encrypted_text = cipher.encrypt(data.text.encode()).decode()

#         encrypted_bytes = cipher.encrypt(data.text.encode())
#         encrypted_text =encrypted_bytes.decode('utf-8')
#         return {"Encrypted_text": encrypted_text}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)



from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from cryptography.fernet import Fernet
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://esigned-encryption.onrender.com","http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# Request model (expects text and user-provided key)
class EncryptionRequest(BaseModel):
    text: str
    key: str  # User-defined encryption key

def get_cipher(user_key: str) -> Fernet:
    try:
        key_bytes = user_key.encode()  # Convert string key to bytes
        #key_padded = key_bytes.ljust(32, b'*')[:32] # Pad key to 32 bytes even it was short but ont working right now
        key_base64 = base64.urlsafe_b64encode(key_bytes[:32])  # Ensure exactly 32 bytes
        return Fernet(key_base64)
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid encryption key format")

@app.post("/encrypt")
def encrypt_text(data: EncryptionRequest):
    try:
        cipher = get_cipher(data.key)  # Generate cipher from user key
        encrypted_bytes = cipher.encrypt(data.text.encode())  # Encrypt text
        return {"Encrypted_text": encrypted_bytes.decode('utf-8')}  # Return encrypted string
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/decrypt")
def decrypt_text(data: EncryptionRequest):
    try:
        cipher = get_cipher(data.key)  # Generate cipher from user key
        decrypted_bytes = cipher.decrypt(data.text.encode())  # Decrypt text
        return {"Decrypted_text": decrypted_bytes.decode("utf-8")}  # Return decrypted string
    except Exception:
        raise HTTPException(status_code=400, detail="Decryption failed. Check your key or encrypted text.")


@app.get("/")
def home():
    return {"message": "Backend is running!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
