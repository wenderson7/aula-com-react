import type{ Categoria } from "../types/Categorias"
import { api } from "./api"

const categoriaService = {
    async listar(){
        const resposta = await api.get<Categoria[]>('categorias');
        return resposta.data;
    }
}

export default categoriaService;