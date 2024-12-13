import { Barbeiro } from "./Barbeiro";

export interface ProximoAgendamento {
    id: number;
    data: string;
    hora: string;
    barbeiro: Barbeiro;
    servico: string;
    preco: number;
    status: string;
  }