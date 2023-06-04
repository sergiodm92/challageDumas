from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controllers.cats import router as cats_router
from controllers.images import router as images_router

app = FastAPI(
    title= "challageDumas_Cats",
    description= "Prueba técnica para Dumas",
    version="1.0",
    contact={
        "name": "Sergio David",
        "url": "http://sergiodm.online/",
        "email": "crgiodm@gmail.com",
    },
)

# Configurar CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(cats_router, prefix="/cats", tags=["Gatos"])
app.include_router(images_router, prefix="/images", tags=["Imagenes"])


