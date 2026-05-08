from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
import fitz  # PyMuPDF

router = APIRouter()

# --- Model for Job Description input ---
class AnalyzeRequest(BaseModel):
    job_description: str

# --- PDF Text Extractor ---
def extract_text_from_pdf(file_bytes: bytes) -> str:
    doc = fitz.open(stream=file_bytes, filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text.strip()

# --- Route: Upload Resume PDF ---
@router.post("/parse-resume")
async def parse_resume(file: UploadFile = File(...)):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are accepted")
    
    contents = await file.read()
    text = extract_text_from_pdf(contents)
    
    if not text:
        raise HTTPException(status_code=400, detail="Could not extract text from PDF")
    
    return {
        "filename": file.filename,
        "characters": len(text),
        "preview": text[:500],  # first 500 chars as preview
        "full_text": text
    }