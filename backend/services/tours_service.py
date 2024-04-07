from backend.schemas import Tour


class ToursService:
    def get_tours(self) -> list[Tour]:
        pass

    def get_tour(self, tour_id: int) -> Tour:
        return Tour(title="Две столицы: Москва — Санкт-Петербург «Семейные каникулы»")
