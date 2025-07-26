from fastapi import APIRouter, UploadFile, File
from app.services.file_service import save_file

router = APIRouter(prefix="/upload", tags=["Upload"])

@router.post("/")
async def upload_file(file: UploadFile = File(...)):
    file_url = await save_file(file)
    return {"filename": file.filename, "url": file_url}
