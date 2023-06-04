from fastapi import Request, Form, APIRouter, File, UploadFile
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from ..library.helpers import *

router = APIRouter()
templates = Jinja2Templates(directory="templates/")

@router.get("/upload", response_class=HTMLResponse)
def form_get(request: Request):
    result = "upload.py"
    return templates.TemplateResponse('upload.html', context={'request': request, 'result': result})

@router.post("/upload/new/")
async def post_upload(imgdata: tuple, file: UploadFile = File(...)):
    print("Uploaded file: " + str(file))

    workspace = create_workspace()

    file_path = Path(file.filename)

    img_full_path = workspace / file_path
    with open(str(img_full_path), 'wb') as myfile:
        contents = await file.read()
        myfile.write(contents)

    print(file_path)
    data = {
        "path": file_path
    }
    return data