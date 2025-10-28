import { CardEventoProps } from '@/components/atoms/cardJogo/index';

const esportes = [
  'Corrida de Rua', 'Futebol Amador', 'Vôlei de Praia', 'Basquete 3x3', 'Ciclismo de Estrada',
  'Skate Street', 'Trail Run', 'Jiu-Jitsu', 'Natação em Águas Abertas', 'Treino Funcional',
  'Beach Tennis', 'Capoeira'
];

const tiposDeEvento = [
  'Circuito', 'Copa', 'Torneio', 'Desafio', 'Aulão Aberto', 'Campeonato',
  'Etapa Classificatória', 'Revezamento', 'Encontro'
];

const locais = [
  { local: 'Parque Barigui', cidade: 'Curitiba' },
  { local: 'Parque São Lourenço', cidade: 'Curitiba' },
  { local: 'Aterro do Flamengo', cidade: 'Rio de Janeiro' },
  { local: 'Orla de Copacabana', cidade: 'Rio de Janeiro' },
  { local: 'Parque Ibirapuera', cidade: 'São Paulo' },
  { local: 'Ginásio do Tarumã', cidade: 'Curitiba' },
  { local: 'Praia de Ipanema', cidade: 'Rio de Janeiro' },
  { local: 'Pista de Skate do Gaúcho', cidade: 'Curitiba' },
  { local: 'Serra da Graciosa', cidade: 'Morretes' },
  { local: 'Praça Afonso Botelho', cidade: 'Curitiba' },
];

const descricoesBase = [
  'Evento aberto para atletas de todas as idades e níveis. Venha participar e superar seus limites!',
  'Traga sua equipe e compita pelo troféu. Inscrições limitadas, garanta sua vaga.',
  'Uma ótima oportunidade para praticar seu esporte favorito e conhecer novas pessoas. Teremos música e food trucks.',
  'Competição de alto nível com os melhores atletas da região. A entrada para espectadores é gratuita.',
  'Percurso desafiador com belas paisagens. Kit atleta incluso com camiseta e medalha de participação.',
];

export const mockEventos: CardEventoProps[] = [];

for (let i = 1; i <= 30; i++) {
  // Seleciona itens aleatórios dos arrays de base
  const esporte = esportes[i % esportes.length];
  const tipo = tiposDeEvento[i % tiposDeEvento.length];
  const loc = locais[i % locais.length];
  const descricao = descricoesBase[i % descricoes.length];

  mockEventos.push({
    id: i,
    titulo: `${tipo} de ${esporte}`,
    descricao: descricao,
    endereco: `${loc.local}, ${loc.cidade}`,
    valor: i % 5 === 0 ? 0 : parseFloat((Math.random() * 150 + 20).toFixed(2)),
  });
}

mockEventos[0].titulo = 'Circuito das Estações - Etapa Primavera';
mockEventos[0].descricao = 'A corrida mais esperada do ano está de volta! Percursos de 5km, 10km e 21km.';
mockEventos[0].valor = 99.90;

mockEventos[5].titulo = 'Rei da Praia de Vôlei';
mockEventos[5].endereco = 'Praia de Caiobá, Matinhos';
mockEventos[5].descricao = 'Atletas profissionais disputam o título em um fim de semana de muito sol e esporte.';

mockEventos[12].titulo = 'Aulão de Funcional no Parque';
mockEventos[12].valor = 0;
mockEventos[12].descricao = 'Comece o seu sábado com energia! Aulão gratuito aberto ao público. Traga sua garrafa de água.';

export const LOCAIS_DISPONIVEIS: Option[] = [
    { id: 'curitiba', name: 'Curitiba' }, { id: 'sao_paulo', name: 'São Paulo' },
    { id: 'rio_de_janeiro', name: 'Rio de Janeiro' }, { id: 'belo_horizonte', name: 'Belo Horizonte' },
];

export const ESPORTES_DISPONIVEIS: Option[] = [
    { id: 'futebol', name: 'Futebol' }, { id: 'volei', name: 'Vôlei' },
    { id: 'corrida', name: 'Corrida' }, { id: 'ciclismo', name: 'Ciclismo' },
];