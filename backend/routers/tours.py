from fastapi import APIRouter
from backend.services.tours_service import ToursService
from backend.schemas import Tour

router = APIRouter(prefix="/tours")
tours_service = ToursService()


@router.get("/{tour_id}", response_model=Tour)
def get_tour_by_id(tour_id: int):
    return tours_service.get_tour(tour_id=tour_id)
