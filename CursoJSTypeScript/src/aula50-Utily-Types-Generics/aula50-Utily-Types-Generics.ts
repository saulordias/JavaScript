// TIPO RECORD
// É um objeto que define o tipo das chaves e o tipo dos valores

const objeto1: Record<string, string | number> = {
    nome: 'Saulo',
    sobrenome: 'Dias',
    idade: 30

}


type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

// Tipo Required -- Required torna todas as propriedades obrigatórias

type PessoaRequired = Required<PessoaProtocol>;

// Partial -- Partial torna todas as propriedades opcionais
type PessoaPartial = Partial<PessoaRequired>;

// Readonly -- Readonly torna todas as propriedades readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick -- Pick cria um novo tipo com as propriedades selecionadas
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Exclude -- Exclui os tipos que estão em CDE do tipo ABC
type TipoExclude = Exclude<ABC, CDE>;

// Extract -- Extrai os tipos que estão em CDE do tipo ABC
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
    sobrenom: string;
}

// Utilizando Pick e Exclude para criar um novo tipo sem o _id e com id no lugar
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
    _id: '123',
    nome: 'Saulo',
    idade: 30,
    sobrenom: 'Dias'
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id }
}

const accountApi = mapAccount(accountMongo);
console.log('API')
console.log(accountApi);




export default 1;