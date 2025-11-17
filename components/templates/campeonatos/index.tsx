import React, { useEffect, useMemo, useState } from 'react';
import { Button, H2, H3, Paragraph, Spinner, Text, YStack, XStack, Separator } from 'tamagui';
import LayoutDefault from '@/components/atoms/layoutDefault';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { mockCampeonatos, mockPartidas, mockEquipes, mockClassificacao } from '@/mock/campeonatos';
import { BasketballLoading } from '@/components/atoms/loading/basketball';
import { Campeonato, CampeonatoStatus, Classificacao, Equipe, Partida } from '@/utils/interfaces/campeonatos';
import { ListaPartida } from '@/components/organisms/listaPartidas';
import { ClassificacaoTabela } from '@/components/organisms/classificacaoTabela';

interface CampeonatoDetalheScreenProps{
    id:string | string[]
}



export default function CampeonatoDetalheScreen({id}:CampeonatoDetalheScreenProps) {
    console.log('oiii')
  const router = useRouter();
  
  const user = { id: 'user-capitao-1' };
  
  const [campeonato, setCampeonato] = useState<Campeonato | null>(null);
  const [partidas, setPartidas] = useState<Partida[]>([]);
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [classificacao, setClassificacao] = useState<Classificacao[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [localStatus, setLocalStatus] = useState<CampeonatoStatus | null>(null);

  const statusAtual = localStatus || campeonato?.status;
  const isOrganizador = user?.id === campeonato?.organizadorId;

  useEffect(() => {
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      try {
        const camp = mockCampeonatos.find(c => c.id === id);
        if (!camp) {
          setError('Campeonato não encontrado.');
          setIsLoading(false);
          return;
        }
        
        setCampeonato(camp);

        if (camp.status === CampeonatoStatus.EM_ANDAMENTO || camp.status === CampeonatoStatus.FINALIZADO) {
          setPartidas(mockPartidas.filter(p => p.campeonatoId === id));
          setClassificacao(mockClassificacao);
        }
        
        if (camp.status !== CampeonatoStatus.INSCRICOES_ABERTAS) {
           setEquipes(mockEquipes.filter(e => e.campeonatoId === id));
        }
        
      } catch (err) {
        setError('Falha ao carregar detalhes.');
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }, [id]);

  const handleUpdateStatus = async (novoStatus: CampeonatoStatus) => {
    setIsLoading(true);
    setTimeout(() => {
      setLocalStatus(novoStatus); 
      
      if (novoStatus === CampeonatoStatus.EM_ANDAMENTO) {
         setPartidas(mockPartidas.filter(p => p.campeonatoId === id));
         setClassificacao(mockClassificacao);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleGerarTabela = async () => {
    setIsLoading(true);
     setTimeout(() => {
      alert('Tabela de partidas gerada! (Simulado)');
      handleUpdateStatus(CampeonatoStatus.EM_ANDAMENTO);
    }, 1200);
  };


  const renderContentByStatus = () => {
    if (!campeonato) return null;

    switch (statusAtual) {
      case CampeonatoStatus.INSCRICOES_ABERTAS:
        return (
          <YStack gap="$3" width="100%">
            <Paragraph>{campeonato.descricao}</Paragraph>
            <Button
              backgroundColor="$color9"
              color="$background"
              onPress={() => router.push(`/(tabs)/campeonatos/inscrever?campId=${id}`)}
            >
              Inscrever Minha Equipe
            </Button>
            {isOrganizador && (
              <Button
                backgroundColor="$borderColorError"
                onPress={() => handleUpdateStatus(CampeonatoStatus.INSCRICOES_FECHADAS)}
              >
                Fechar Inscrições
              </Button>
            )}
          </YStack>
        );

      case CampeonatoStatus.INSCRICOES_FECHADAS:
        return (
          <YStack gap="$3" width="100%">
            <Paragraph>Inscrições encerradas. Aguardando geração da tabela e início.</Paragraph>
            <H3>Equipes Inscritas ({equipes.length})</H3>
            {equipes.map(e => <Text key={e.id}>- {e.nome}</Text>)}
            
            {isOrganizador && (
              <>
                <Button onPress={handleGerarTabela}>Gerar Tabela de Partidas</Button>
              </>
            )}
          </YStack>
        );

      case CampeonatoStatus.EM_ANDAMENTO:
        return (
          <YStack gap="$4" width="100%">
            {isOrganizador && <Button onPress={() => {}}>Painel do Organizador</Button>}
            <H3>Classificação</H3>
            <ClassificacaoTabela classificacao={classificacao} />
            <H3>Partidas</H3>
            <ListaPartida partidas={partidas} isOrganizador={isOrganizador} />
          </YStack>
        );

      case CampeonatoStatus.FINALIZADO:
        return (
           <YStack gap="$4" width="100%">
            <Paragraph>Este campeonato foi finalizado.</Paragraph>
            <H3>Classificação Final</H3>
            <ClassificacaoTabela classificacao={classificacao} />
            <H3>Resultados</H3>
            <ListaPartida partidas={partidas} isOrganizador={isOrganizador} />
          </YStack>
        );
        
      default:
        return <Paragraph>Status desconhecido.</Paragraph>;
    }
  };

  if (isLoading && !campeonato) return <BasketballLoading />;
  if (error) return <Text color="$borderColorError">{error}</Text>;
  if (!campeonato) return <Text>Campeonato não encontrado.</Text>;

  return (
    <LayoutDefault>
      {/* <YStack flex={1} gap="$4" alignItems="center" position="relative">
     
        {isLoading && (
          <YStack fullscreen ai="center" jc="center" backgroundColor="#00000090" zIndex={10}>
            <Spinner size="large" color="$color9" />
          </YStack>
        )}
        <XStack marginTop={'$10'}>
   <H2 color="$color10" fontFamily="$body" fontWeight="700">
          {campeonato.nome}
        </H2>
        <Text fontSize="$5">Esporte: {campeonato.esporte}</Text>
        </XStack>
        
     
        
        {renderContentByStatus()}
      </YStack> */}
      <p>oii</p>
    </LayoutDefault>
  );
}