import React, { useEffect, useMemo, useState } from 'react'
import { Button, H2, H3, Paragraph, Spinner, Text, YStack, XStack, Separator } from 'tamagui'
import LayoutDefault from '@/components/atoms/layoutDefault'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { mockCampeonatos, mockPartidas, mockEquipes, mockClassificacao } from '@/mock/campeonatos'
import { BasketballLoading } from '@/components/atoms/loading/basketball'
import {
  Campeonato,
  CampeonatoStatus,
  Classificacao,
  Equipe,
  Partida,
} from '@/utils/interfaces/campeonatos'
import { ListaPartida } from '@/components/organisms/listaPartidas'
import { ClassificacaoTabela } from '@/components/organisms/classificacaoTabela'
import { ConfirmButton } from '@/components/atoms/confirmButton'
import { BadgePlus, BadgeX, BowArrow, TableOfContents } from '@tamagui/lucide-icons'
import { ModalGerenciarPartida } from '@/components/organisms/modalGerenciarPartida'

interface CampeonatoDetalheScreenProps {
  id: string | string[]
}

export default function CampeonatoDetalheScreen({ id }: CampeonatoDetalheScreenProps) {
  const router = useRouter()

  const user = { id: 'user-capitao-1' }

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedPartida, setSelectedPartida] = useState<Partida | null>(null)

  const [campeonato, setCampeonato] = useState<Campeonato | null>(null)
  const [partidas, setPartidas] = useState<Partida[]>([])
  const [equipes, setEquipes] = useState<Equipe[]>([])
  const [classificacao, setClassificacao] = useState<Classificacao[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const [localStatus, setLocalStatus] = useState<CampeonatoStatus | null>(null)

  const statusAtual = localStatus || campeonato?.status
  const isOrganizador = user?.id === campeonato?.organizadorId

  useEffect(() => {
    setIsLoading(true)
    setError('')

    setTimeout(() => {
      try {
        const camp = mockCampeonatos.find(c => c.id === id)
        if (!camp) {
          setError('Campeonato não encontrado.')
          setIsLoading(false)
          return
        }

        setCampeonato(camp)

        if (
          camp.status === CampeonatoStatus.EM_ANDAMENTO ||
          camp.status === CampeonatoStatus.FINALIZADO
        ) {
          setPartidas(mockPartidas.filter(p => p.campeonatoId === id))
          setClassificacao(mockClassificacao)
        }

        if (camp.status !== CampeonatoStatus.INSCRICOES_ABERTAS) {
           setEquipes(mockEquipes.filter(e => e.campeonatoId === id));
        }
        
      } catch (err) {
        setError('Falha ao carregar detalhes.')
      } finally {
        setIsLoading(false)
      }
    }, 500)
  }, [id])

  const handleUpdateStatus = async (novoStatus: CampeonatoStatus) => {
    setIsLoading(true)
    setTimeout(() => {
      setLocalStatus(novoStatus)

      if (novoStatus === CampeonatoStatus.EM_ANDAMENTO) {
        setPartidas(mockPartidas.filter(p => p.campeonatoId === id))
        setClassificacao(mockClassificacao)
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleGerarTabela = async () => {
    setIsLoading(true)
    setTimeout(() => {
      alert('Tabela de partidas gerada! (Simulado)')
      handleUpdateStatus(CampeonatoStatus.EM_ANDAMENTO)
    }, 1200)
  }

  const handleEditMatch = (partida: Partida) => {
    setSelectedPartida(partida)
    setModalVisible(true)
  }

  const handleSavePartida = (partidaId: string, placar1: number, placar2: number, finalizado: boolean) => {
    setPartidas(prev => prev.map(p => {
      if (p.id === partidaId) {
        return {
          ...p,
          placarEquipe1: placar1,
          placarEquipe2: placar2,
          status: finalizado ? CampeonatoStatus.FINALIZADO : CampeonatoStatus.EM_ANDAMENTO
        }
      }
      return p
    }))
    
    alert("Partida atualizada com sucesso!")
  }

  const renderContentByStatus = () => {
    if (!campeonato) return null

    switch (statusAtual) {
      case CampeonatoStatus.INSCRICOES_ABERTAS:
        return (
          <YStack gap="$3" width="100%">
            <Paragraph textAlign="justify" fontWeight={'500'} marginBottom={'$3'}>
              {campeonato.descricao}
            </Paragraph>
            <ConfirmButton
              functionButton={() => router.push(`/(tabs)/campeonatos/criarEquipe?campId=${id}`)}
              titleButton={'INSCREVER MINHA EQUIPE'}
              icon={<BadgePlus />}
            />

            {isOrganizador && (
              <Button
                backgroundColor="$borderColorError"
                color={'white'}
                borderRadius={'$3'}
                height={'$10'}
                minHeight={'$minWidth'}
                minWidth={'$minWidth'}
                fontSize={'$5'}
                fontWeight={'500'}
                onPress={() => handleUpdateStatus(CampeonatoStatus.INSCRICOES_FECHADAS)}
              >
                FECHAR INSCRIÇÕES
                <BadgeX />
              </Button>
            )}
          </YStack>
        )

      case CampeonatoStatus.INSCRICOES_FECHADAS:
        return (
          <YStack gap="$3" width="100%">
            <Paragraph textAlign="justify" fontWeight={'500'} marginBottom={'$3'}>
              Inscrições encerradas. Aguardando geração da tabela e início.
            </Paragraph>
            <H3
              textAlign="center"
              fontWeight={'500'}
              color={'$borderColorFocus'}
              marginBottom={'$3'}
            >
              Equipes Inscritas ({equipes.length})
            </H3>
            <YStack marginBottom={'$3'}>
              {equipes.map(eqp => {
                return (
                  <XStack marginBottom={'$2'} gap={'$2'}>
                    <BowArrow color={'$color4'} />
                    <Text fontWeight={'500'} key={eqp.id}>
                      {eqp.nome}
                    </Text>
                  </XStack>
                )
              })}
            </YStack>

            {isOrganizador && (
              <YStack>
                <Button
                  backgroundColor="$color4"
                  color={'white'}
                  borderRadius={'$3'}
                  height={'$10'}
                  minHeight={'$minWidth'}
                  minWidth={'$minWidth'}
                  fontSize={'$5'}
                  fontWeight={'500'}
                  onPress={handleGerarTabela}
                >
                  GERAR TABELA DE PARTIDAS
                  <TableOfContents />
                </Button>
              </YStack>
            )}
          </YStack>
        )

      case CampeonatoStatus.EM_ANDAMENTO:
      case CampeonatoStatus.FINALIZADO:
        return (
          <YStack gap="$4" width="100%">
            {statusAtual === CampeonatoStatus.FINALIZADO && (
   <XStack
              justifyContent="center"
              borderColor={'$borderColorError'}
              alignItems="center"
              marginBottom={'$3'}
              height={'$9'}
              borderWidth={1}
              borderRadius={'$3'}
              backgroundColor={'$backgroundError'}
            >
              <Paragraph textAlign="center" color={'$color1'} fontWeight={'700'}>
                Este campeonato foi finalizado.
              </Paragraph>
            </XStack>
            )}
         

            <H3 textAlign="center" fontWeight={'500'} color={'$borderColorFocus'}>
              Classificação
            </H3>
            <ClassificacaoTabela classificacao={classificacao} />
            <H3 textAlign="center" fontWeight={'500'} color={'$borderColorFocus'}>
              Partidas
            </H3>
            <ListaPartida 
                        partidas={partidas} 
                        isOrganizador={isOrganizador} 
                        onEditPress={handleEditMatch} 
                    />
          </YStack>
        )

      default:
        return (
          <YStack gap="$3" width="100%">
            <Paragraph textAlign="center" fontWeight={'500'}>
              Status desconhecido.
            </Paragraph>
          </YStack>
        )
    }
  }

  if (isLoading && !campeonato) return <BasketballLoading />
  if (error) return <Text color="$borderColorError">{error}</Text>
  if (!campeonato) return <Text>Campeonato não encontrado.</Text>

  return (
    <LayoutDefault>
      <YStack
        flex={1}
        gap="$4"
        alignItems="center"
        position="relative"
        paddingBottom={'$6'}
        paddingHorizontal="$2"
      >
        {isLoading && (
          <YStack fullscreen ai="center" jc="center" backgroundColor="#00000090" zIndex={10}>
            <Spinner size="large" color="$color9" />
          </YStack>
        )}
        <YStack
          justifyContent="center"
          alignItems="center"
          gap={'$3'}
          marginTop={50}
          marginBottom={20}
        >
          <H2 color="$color10" fontFamily="$body" fontWeight="700" textAlign="center">
            {campeonato.nome}
          </H2>
          <Text fontSize="$5">Esporte: {campeonato.esporte}</Text>
        </YStack>

        {renderContentByStatus()}

        <ModalGerenciarPartida
            visible={modalVisible}
            partida={selectedPartida}
            onClose={() => setModalVisible(false)}
            onSave={handleSavePartida}
        />
      </YStack>
    </LayoutDefault>
  )
}
