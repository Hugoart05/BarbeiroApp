import { Usuario } from "@/viewModel/Usuario";

export const mokHome:Usuario = {
    "nome": "Hugo Silva",
    "urlAvatar": "https://picsum.photos/150?random=1",
    "categorias": [
        {"id": 1, "nome": "Barbeiro", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 2, "nome": "Cabelereiro", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 3, "nome": "Esteticista", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 3, "nome": "Esteticista", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 3, "nome": "Esteticista", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 3, "nome": "Esteticista", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 3, "nome": "Esteticista", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 3, "nome": "Esteticista", "avatar": "https://picsum.photos/50?random=1"},
        {"id": 3, "nome": "Esteticista", "avatar": "https://picsum.photos/50?random=1"}
    ],
    "proximoAgendamento": {
        "id": 1,
        "data": "20/10/2024",
        "hora": "18:00",
        "barbeiro": {
            "nome": "Felipe",
            "avatar": "https://picsum.photos/50?random=1"
        },
        "servico": "Corte de cabelo",
        "preco": 27.50,
        "status": "pendente"
    },
    "listaDeBarbearias": [
        {
            "id": 3,
            "nome": "Casca",
            "logo": "https://picsum.photos/150?random=1",
            "descricao": "loren15"
        },
        {
            "id": 4,
            "nome": "Barber Shop Elite",
            "logo": "https://picsum.photos/150?random=1",
            "descricao": "loren16"
        },
        {
            "id": 5,
            "nome": "Corte Moderno",
            "logo": "https://picsum.photos/150?random=1",
            "descricao": "loren17"
        }
    ]
}