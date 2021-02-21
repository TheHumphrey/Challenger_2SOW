export type User = {
  nome: string;
  cpf: string;
  email: string;
  endereco: {
    cep: number;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
  };
};
