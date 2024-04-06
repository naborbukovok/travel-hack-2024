from fastapi import APIRouter


router = APIRouter(prefix="/system", tags=["systeam"])


@router.get("/health")
def health_router():
    return 200
