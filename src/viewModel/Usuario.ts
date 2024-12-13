import { Barbearia } from "./Barbearia";
import { Categoria } from "./Categoria";
import { ProximoAgendamento } from "./ProximoAgendamento";

export interface Usuario {
    nome: string;
    urlAvatar: string;
    categorias: Categoria[];
    proximoAgendamento: ProximoAgendamento;
    listaDeBarbearias: Barbearia[];
  }