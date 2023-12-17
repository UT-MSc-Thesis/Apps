from aiohttp import web
import torch
import numpy as np
import ezkl
import aiohttp_cors

routes = web.RouteTableDef()


@routes.get('/')
async def generate_poseidon_hash(request):
    data = request.rel_url.query['data']
    data = [float(x) for x in data.split(',')]

    y = torch.tensor(np.array(data), dtype=torch.float).reshape(1, 13)
    y = y.unsqueeze(0)
    y = y.reshape(1, 13)
    data_array_y = ((y).detach().numpy()).reshape([-1]).tolist()

    input_scale = 8
    vecu64s = []
    for i in data_array_y:
        vecu64s.append(ezkl.float_to_vecu64(i, input_scale))

    hash = ezkl.poseidon_hash(vecu64s)
    return web.Response(text=ezkl.vecu64_to_felt(hash[0]))

app = web.Application()
app.add_routes(routes)

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        expose_headers="*",
        allow_headers="*",
    )
})
resource = cors.add(app.router.add_resource("/"))

web.run_app(app)
