import React, { useState, useEffect } from 'react'
import { YStack, XStack, Text, H3, Button, Separator, ScrollView, Input, Avatar } from 'tamagui'
import LayoutDefault from '@/components/atoms/layoutDefault'
import { mockEquipes } from '@/mock/campeonatos' //
import { useUserStore } from '@/store/UserStore' //
import { Trash, UserPlus, Shield } from '@tamagui/lucide-icons'
import { Equipe, MembroEquipe } from '@/utils/interfaces/campeonatos'

export default function MinhasEquipesScreen() {
  const myId = 'user-capitao-1'

  const [equipes, setEquipes] = useState<Equipe[]>([])
  const [novoMembro, setNovoMembro] = useState('')

  useEffect(() => {
    // Filtra apenas as equipes que eu sou dono (capitão)
    const minhas = mockEquipes.filter(e => e.capitaoId === myId)
    setEquipes(minhas)
  }, [])

  const handleRemoverMembro = (equipeId: string, membroId: string) => {
    setEquipes(prev =>
      prev.map(eq => {
        if (eq.id === equipeId) {
          return {
            ...eq,
            membros: eq.membros.filter(m => m.usuarioId !== membroId),
          }
        }
        return eq
      }),
    )
    alert('Membro removido com sucesso!')
  }

  const handleAdicionarMembro = (equipeId: string) => {
    if (!novoMembro) return

    setEquipes(prev =>
      prev.map(eq => {
        if (eq.id === equipeId) {
          const novoUser: MembroEquipe = {
            usuarioId: Math.random().toString(),
            nomeUsuario: novoMembro,
            dataEntrada: new Date().toISOString(),
          }
          return {
            ...eq,
            membros: [...eq.membros, novoUser],
          }
        }
        return eq
      }),
    )
    setNovoMembro('')
  }

  return (
    <LayoutDefault>
      <YStack marginTop={50} gap="$4" paddingBottom="$10">
        <H3 textAlign="center" color="$color10" fontWeight={'700'}>
          Gerenciar Equipes
        </H3>

        {equipes.length === 0 ? (
          <Text textAlign="center" color="$color">
            Você ainda não criou nenhuma equipe em campeonatos.
          </Text>
        ) : (
          equipes.map(equipe => (
            <YStack
              key={equipe.id}
              borderWidth={1}
              borderColor="$borderColor"
              borderRadius="$4"
              padding="$4"
              backgroundColor="$backgroundPress"
              gap="$3"
            >
              <XStack justifyContent="space-between" alignItems="center">
                <H3 fontSize="$6" color="$color9">
                  {equipe.nome}
                </H3>
                <Shield size={20} color="$colorFocus" />
              </XStack>

              <Text fontSize="$3" color="$color5">
                Membros ({equipe.membros.length})
              </Text>
              <Separator />

              <YStack gap="$2">
                {equipe.membros.map(membro => (
                  <XStack
                    key={membro.usuarioId}
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor="$background"
                    padding="$2"
                    borderRadius="$3"
                  >
                    <Text color="$color">{membro.nomeUsuario}</Text>
                    {membro.usuarioId !== myId && (
                      <Button
                        size="$2"
                        chromeless
                        icon={Trash}
                        color="$red10"
                        onPress={() => handleRemoverMembro(equipe.id, membro.usuarioId)}
                      />
                    )}
                    {membro.usuarioId === myId && (
                      <Text fontSize="$2" color="$colorFocus">
                        (Capitão)
                      </Text>
                    )}
                  </XStack>
                ))}
              </YStack>

              <Separator />

              <YStack gap="$2">
                <Text fontSize="$3">Adicionar integrante (por e-mail)</Text>
                <XStack gap="$2">
                  <Input
                    flex={1}
                    height="$9"
                    placeholder="Digite o nome/email..."
                    value={novoMembro}
                    onChangeText={setNovoMembro}
                    borderColor="$borderColorFocus"
                  />
                  <Button
                    height="$9"
                    backgroundColor="$color9"
                    icon={UserPlus}
                    color="$background"
                    onPress={() => handleAdicionarMembro(equipe.id)}
                  />
                </XStack>
              </YStack>
            </YStack>
          ))
        )}
      </YStack>
    </LayoutDefault>
  )
}
