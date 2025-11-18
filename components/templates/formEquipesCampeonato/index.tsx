import React, { useState } from 'react';
import { Form, H2, Input, Label, Button, YStack, Spinner, Text } from 'tamagui';
import LayoutComponent from '@/components/atoms/layout';
//import { createEquipe } from '@/middleware/campeonato/service';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/UserStore';

interface InscreverEquipeProps{
  campId: string | string[]
}

export default function InscreverEquipeScreen({campId}: InscreverEquipeProps) {
  const router = useRouter();
  const user = useUserStore(state => state.user); 
  
  const [nomeEquipe, setNomeEquipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    
    if (!nomeEquipe || nomeEquipe.length < 3) {
      setError("O nome da equipe deve ter pelo menos 3 caracteres.");
      setIsLoading(false);
      return;
    }
    
    try {
      
      console.log('Submetendo Equipe:', { nome: nomeEquipe, campId });
      
      setTimeout(() => {
        setIsLoading(false);
        alert(`Equipe "${nomeEquipe}" inscrita com sucesso! (Simulado)`);
        
        router.back(); 
      }, 1000);

    } catch (err) {
      setError('Falha ao inscrever equipe. Talvez o nome já exista ou as inscrições fecharam.');
      setIsLoading(false);
    }
  };

  return (
    <LayoutComponent>
      <H2 color="$color10" width={'100%'} fontFamily="$body" fontWeight="700" textAlign="center" mb="$4">
        Inscrever Equipe
      </H2>
      
      <Form onSubmit={handleSubmit} gap="$4" paddingBottom="$4" width="100%">
        <YStack gap="$1">
          <Label htmlFor="nome" color="$color">Nome da Equipe</Label>
          <Input 
            id="nome" 
            placeholder="Ex: Athos FC"
            height={'$9'}
            borderColor={error ? '$borderColorError' : '$borderColorFocus'}
          />
          <Label htmlFor="capitao" color="$color">Capitã(o)</Label>
          <Input 
            id="capitao" 
            value={user?.nome}
            disabled
               height={'$9'}
            placeholder="Ex: Athos FC"
            borderColor={error ? '$borderColorError' : '$borderColorFocus'}
          />
        </YStack>
        
        {error && <Text color="$borderColorError">{error}</Text>}

        <Form.Trigger asChild>
          <Button
            height="$9"
            disabled={isLoading || !nomeEquipe}
            backgroundColor={isLoading ? '$backgroundPress' : '$color9'}
            color={isLoading ? '$color' : '$background'}
            icon={isLoading ? <Spinner /> : undefined}
            fontSize={'$4'}

             fontWeight={'bold'}
          >
            {isLoading ? 'INSCREVENDO...' : 'CONFIRMAR INSCRIÇÃO'}
          </Button>
        </Form.Trigger>
        
         <Button 
          chromeless 
          onPress={() => router.back()}
          disabled={isLoading}
             height={'$9'}
             backgroundColor={'$borderColorError'}
             fontSize={'$4'}
             fontWeight={'bold'}
        >
          CANCELAR
        </Button>
      </Form>
    </LayoutComponent>
  );
}