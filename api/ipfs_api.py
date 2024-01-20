from aiohttp import web
import requests

routes = web.RouteTableDef()


@routes.post('/')
async def add(request):
    data = await request.post()
    response = requests.post(
        'http://localhost:5001/api/v0/add', files={'file': ('filename', data['file'])})
    return web.Response(text=f"File pinned successfully {response.text}")

app = web.Application()
app.add_routes(routes)

web.run_app(app, port=9000)
