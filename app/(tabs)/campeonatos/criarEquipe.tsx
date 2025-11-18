import InscreverEquipeScreen from '@/components/templates/formEquipesCampeonato';
import { useLocalSearchParams } from 'expo-router'

export default function CriarEquipeScreen() {
  const { campId } = useLocalSearchParams(); 

  return <InscreverEquipeScreen campId={campId} />
}
