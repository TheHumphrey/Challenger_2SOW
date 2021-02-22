export type User = {
  nome: string;
  cpf: string;
  email: string;
  endereco: {
    cep: string;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
  };
  id?: number;
};
