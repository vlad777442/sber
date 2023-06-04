import os.path
import uuid
from pathlib import Path
import markdown
from ..config import settings


def openfile(filename):
    filepath = os.path.join("app/pages/", filename)
    with open(filepath, "r", encoding="utf-8") as input_file:
        text = input_file.read()

    html = markdown.markdown(text)
    data = {
        "text": html
    }
    return data



def create_workspace():
    """
    Return workspace path
    """
    work_dir = Path(settings.work_dir)
    request_id = Path(str(uuid.uuid4())[:8])
    workspace = work_dir / request_id
    if not os.path.exists(workspace):
        os.makedirs(workspace)

    return workspace

