from fastapi import APIRouter, HTTPException, status

from stustapay.core.http.auth_user import CurrentAuthToken
from stustapay.core.http.context import ContextTillService
from stustapay.core.http.normalize_data import NormalizedList, normalize_list
from stustapay.core.schema.till import NewTillLayout, TillLayout

router = APIRouter(
    prefix="/till-layouts",
    tags=["till-layouts"],
    responses={404: {"description": "Not found"}},
)


@router.get("", response_model=NormalizedList[TillLayout, int])
async def list_till_layouts(token: CurrentAuthToken, till_service: ContextTillService, node_id: int):
    return normalize_list(await till_service.layout.list_layouts(token=token, node_id=node_id))


@router.post("", response_model=NewTillLayout)
async def create_till_layout(
    layout: NewTillLayout, token: CurrentAuthToken, till_service: ContextTillService, node_id: int
):
    return await till_service.layout.create_layout(token=token, layout=layout, node_id=node_id)


@router.get("/{layout_id}", response_model=TillLayout)
async def get_till_layout(layout_id: int, token: CurrentAuthToken, till_service: ContextTillService, node_id: int):
    till = await till_service.layout.get_layout(token=token, layout_id=layout_id, node_id=node_id)
    if till is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

    return till


@router.post("/{layout_id}", response_model=TillLayout)
async def update_till_layout(
    layout_id: int,
    layout: NewTillLayout,
    token: CurrentAuthToken,
    till_service: ContextTillService,
    node_id: int,
):
    till = await till_service.layout.update_layout(token=token, layout_id=layout_id, layout=layout, node_id=node_id)
    if till is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

    return till


@router.delete("/{layout_id}")
async def delete_till_layout(layout_id: int, token: CurrentAuthToken, till_service: ContextTillService, node_id: int):
    deleted = await till_service.layout.delete_layout(token=token, layout_id=layout_id, node_id=node_id)
    if not deleted:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
